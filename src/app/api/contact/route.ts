import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas";
import { sendMail } from "@/lib/email";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form for errors.", fieldErrors: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  const { name, company, email, phone, inquiryType, message } = parsed.data;

  try {
    await sendMail({
      subject: `New ${inquiryType} enquiry from ${name}`,
      replyTo: email,
      html: `
        <h2>New enquiry from the Berrymount website</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || "—")}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Inquiry type:</strong> ${escapeHtml(inquiryType)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return NextResponse.json(
      { error: "We couldn't send your message right now. Please try again or contact us directly by phone or email." },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
