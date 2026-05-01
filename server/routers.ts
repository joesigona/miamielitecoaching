import { getSessionCookieOptions } from "./_core/cookies";
import { COOKIE_NAME } from "@shared/const";
import { systemRouter } from "./_core/systemRouter";
import { adminProcedure, publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { notifyOwner } from "./_core/notification";
import { OWNER_EMAIL, sendMail } from "./email";
import { getDb } from "./db";
import { assessmentLeads } from "../drizzle/schema";
import { desc, eq } from "drizzle-orm";
import { TRPCError } from "@trpc/server";

const LEAD_STATUSES = ["new", "contacted", "booked", "closed"] as const;

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const appRouter = router({
  // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query((opts) => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    sendInquiry: publicProcedure
      .input(
        z.object({
          program: z.string().min(1, "Program is required"),
          email: z.string().email("Invalid email"),
          phone: z.string().min(10, "Invalid phone number"),
          name: z.string().min(2, "Name is required"),
          message: z.string().optional(),
        }),
      )
      .mutation(async ({ input }) => {
        // Send notification to owner
        const inquiryDetails = `
**New Program Inquiry**

**Program:** ${input.program}
**Name:** ${input.name}
**Email:** ${input.email}
**Phone:** ${input.phone}
**Message:** ${input.message || "(No message provided)"}
        `;

        await notifyOwner({
          title: "New Program Inquiry",
          content: inquiryDetails,
        });

        return { success: true };
      }),
  }),

  /**
   * Assessment lead capture + admin pipeline.
   * - assessment.create        (public)  — store lead, notify owner, email owner
   * - assessment.list          (admin)   — list leads, optionally filtered by status
   * - assessment.stats         (admin)   — counts by status for the dashboard header
   * - assessment.updateStatus  (admin)   — pipeline status change
   * - assessment.updateNotes   (admin)   — internal notes
   * - assessment.delete        (admin)   — remove a lead
   */
  assessment: router({
    create: publicProcedure
      .input(
        z.object({
          name: z.string().min(2, "Name is required").max(200),
          email: z.string().email("Invalid email").max(320),
          phone: z.string().min(7, "Phone is required").max(40),
          ageRange: z.string().max(20).optional(),
          primaryGoal: z.string().max(80).optional(),
          activityLevel: z.string().max(80).optional(),
          referralSource: z.string().max(120).optional(),
          message: z.string().max(2000).optional(),
          source: z.string().max(80).optional(),
        }),
      )
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Database is not available. Please try again shortly.",
          });
        }

        const inserted = await db.insert(assessmentLeads).values({
          name: input.name.trim(),
          email: input.email.trim().toLowerCase(),
          phone: input.phone.trim(),
          ageRange: input.ageRange?.trim() || null,
          primaryGoal: input.primaryGoal?.trim() || null,
          activityLevel: input.activityLevel?.trim() || null,
          referralSource: input.referralSource?.trim() || null,
          message: input.message?.trim() || null,
          source: input.source?.trim() || "assessment-page",
        });

        // Build a friendly notification + email payload. Never block on
        // notification or email failure — the lead is already stored.
        const summary: Array<[string, string]> = [
          ["Name", input.name],
          ["Email", input.email],
          ["Phone", input.phone],
          ["Age Range", input.ageRange || "—"],
          ["Primary Goal", input.primaryGoal || "—"],
          ["Activity Level", input.activityLevel || "—"],
          ["Referral / Source", input.referralSource || input.source || "Direct"],
          ["Message", input.message || "(none)"],
        ];

        const text =
          `New MEC Assessment lead\n\n` +
          summary.map(([k, v]) => `${k}: ${v}`).join("\n") +
          `\n\nView all leads: https://miamielitecoaching.com/admin/leads`;

        const html =
          `<h2 style="font-family:Arial,sans-serif;color:#0A1F3D;margin:0 0 12px;">New MEC Assessment Lead</h2>` +
          `<table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse;">` +
          summary
            .map(
              ([k, v]) =>
                `<tr><td style="padding:6px 12px 6px 0;color:#5C5C5C;vertical-align:top;"><strong>${escapeHtml(
                  k,
                )}</strong></td>` +
                `<td style="padding:6px 0;color:#1A1A1A;">${escapeHtml(String(v))}</td></tr>`,
            )
            .join("") +
          `</table>` +
          `<p style="margin-top:18px;font-family:Arial,sans-serif;font-size:13px;">` +
          `<a href="https://miamielitecoaching.com/admin/leads" style="color:#C9A352;">Open lead dashboard →</a></p>`;

        // Fire-and-forget — don't await failures blocking the response.
        Promise.allSettled([
          notifyOwner({
            title: `New MEC Assessment Lead — ${input.name}`,
            content: text,
          }),
          sendMail({
            to: OWNER_EMAIL,
            subject: `New MEC Assessment Lead — ${input.name}`,
            text,
            html,
            replyTo: input.email,
          }),
        ]).catch(() => undefined);

        return {
          success: true,
          id: Number((inserted as unknown as { insertId?: number }).insertId ?? 0),
        };
      }),

    list: adminProcedure
      .input(
        z
          .object({
            status: z.enum(LEAD_STATUSES).optional(),
            limit: z.number().int().min(1).max(500).default(200),
          })
          .optional(),
      )
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Database is not available.",
          });
        }
        const limit = input?.limit ?? 200;
        const rows = input?.status
          ? await db
              .select()
              .from(assessmentLeads)
              .where(eq(assessmentLeads.status, input.status))
              .orderBy(desc(assessmentLeads.createdAt))
              .limit(limit)
          : await db
              .select()
              .from(assessmentLeads)
              .orderBy(desc(assessmentLeads.createdAt))
              .limit(limit);

        return rows;
      }),

    stats: adminProcedure.query(async () => {
      const db = await getDb();
      if (!db) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Database is not available.",
        });
      }
      const rows = await db.select().from(assessmentLeads);
      const counts: Record<"total" | (typeof LEAD_STATUSES)[number], number> = {
        total: rows.length,
        new: 0,
        contacted: 0,
        booked: 0,
        closed: 0,
      };
      for (const row of rows) {
        if (row.status in counts) {
          counts[row.status as (typeof LEAD_STATUSES)[number]] += 1;
        }
      }
      return counts;
    }),

    updateStatus: adminProcedure
      .input(
        z.object({
          id: z.number().int().positive(),
          status: z.enum(LEAD_STATUSES),
        }),
      )
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Database is not available.",
          });
        }
        await db
          .update(assessmentLeads)
          .set({ status: input.status })
          .where(eq(assessmentLeads.id, input.id));
        return { success: true } as const;
      }),

    updateNotes: adminProcedure
      .input(
        z.object({
          id: z.number().int().positive(),
          notes: z.string().max(5000),
        }),
      )
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Database is not available.",
          });
        }
        await db
          .update(assessmentLeads)
          .set({ notes: input.notes })
          .where(eq(assessmentLeads.id, input.id));
        return { success: true } as const;
      }),

    delete: adminProcedure
      .input(z.object({ id: z.number().int().positive() }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Database is not available.",
          });
        }
        await db.delete(assessmentLeads).where(eq(assessmentLeads.id, input.id));
        return { success: true } as const;
      }),
  }),
});

export type AppRouter = typeof appRouter;
