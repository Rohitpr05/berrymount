import nodemailer from "nodemailer";
import { site } from "@/data/site";

function getTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return null;
  }
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

export async function sendMail(opts: { subject: string; html: string; replyTo?: string }) {
  const transport = getTransport();
  if (!transport) {
    throw new Error(
      "Email is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER and SMTP_PASS in the environment.",
    );
  }

  const to = process.env.CONTACT_TO_EMAIL || site.email;

  await transport.sendMail({
    from: `"Berrymount Website" <${process.env.SMTP_USER}>`,
    to,
    replyTo: opts.replyTo,
    subject: opts.subject,
    html: opts.html,
  });
}
