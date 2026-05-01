// server/email.ts
// Lightweight nodemailer wrapper. Reads SMTP config from env vars at call time
// (so PM2 env changes are picked up without rebuild). Falls back to a no-op
// in dev / when env vars are missing — never throws on send failure so that
// lead capture is never blocked by an email outage.
//
// Required env vars (set on the VPS via PM2):
//   SMTP_HOST       e.g. smtp.gmail.com
//   SMTP_PORT       e.g. 465
//   SMTP_SECURE     "true" for 465, "false" for 587
//   SMTP_USER       full email address (e.g. joesigonafitness@gmail.com)
//   SMTP_PASS       app password (NOT the gmail account password)
//   MAIL_FROM       optional, defaults to SMTP_USER
//   MAIL_TO         optional, defaults to joesigonafitness@gmail.com

import nodemailer, { type Transporter } from "nodemailer";

const DEFAULT_OWNER_EMAIL = "joesigonafitness@gmail.com";

let cachedTransporter: Transporter | null = null;
let cachedKey = "";

function getTransporter(): Transporter | null {
  const host = process.env.SMTP_HOST;
  const portRaw = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !portRaw || !user || !pass) return null;

  const port = Number.parseInt(portRaw, 10);
  if (Number.isNaN(port)) return null;

  const secure = process.env.SMTP_SECURE
    ? process.env.SMTP_SECURE.toLowerCase() === "true"
    : port === 465;

  const key = `${host}|${port}|${secure}|${user}`;
  if (cachedTransporter && cachedKey === key) return cachedTransporter;

  cachedTransporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
  cachedKey = key;
  return cachedTransporter;
}

export type SendMailInput = {
  to?: string;
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
};

/**
 * Send an email via SMTP. Returns true on success, false on failure or if
 * SMTP is not configured. Never throws — callers should not block lead
 * capture on email delivery.
 */
export async function sendMail(input: SendMailInput): Promise<boolean> {
  const transporter = getTransporter();
  if (!transporter) {
    console.warn(
      "[Email] SMTP not configured (set SMTP_HOST/PORT/USER/PASS env vars). Skipping send.",
    );
    return false;
  }

  const from = process.env.MAIL_FROM || process.env.SMTP_USER!;
  const to = input.to || process.env.MAIL_TO || DEFAULT_OWNER_EMAIL;

  try {
    await transporter.sendMail({
      from,
      to,
      subject: input.subject,
      text: input.text,
      html: input.html,
      replyTo: input.replyTo,
    });
    return true;
  } catch (error) {
    console.error("[Email] Send failed:", error);
    return false;
  }
}

export const OWNER_EMAIL = DEFAULT_OWNER_EMAIL;
