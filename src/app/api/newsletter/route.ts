import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/schemas";
import { sendMail } from "@/lib/email";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = newsletterSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 422 });
  }

  try {
    await sendMail({
      subject: "New newsletter signup",
      html: `<p>New newsletter signup: <strong>${parsed.data.email}</strong></p>`,
    });
  } catch (err) {
    console.error("Failed to send newsletter signup email:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 503 });
  }

  return NextResponse.json({ ok: true });
}
