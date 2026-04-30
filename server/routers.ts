import { getSessionCookieOptions } from "./_core/cookies";
import { COOKIE_NAME } from "@shared/const";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { notifyOwner } from "./_core/notification";

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
        })
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
});

export type AppRouter = typeof appRouter;
