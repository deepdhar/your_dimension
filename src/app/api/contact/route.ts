import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations";

// In-memory rate limiter (resets on server restart)
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function getRateLimitKey(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  return forwarded ? forwarded.split(",")[0].trim() : "unknown";
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(key);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) return true;
  entry.count += 1;
  return false;
}

function sanitize(str: string): string {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const clientKey = getRateLimitKey(req);
    if (isRateLimited(clientKey)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Parse body
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    // Validate
    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      return NextResponse.json(
        { error: "Validation failed.", fields: fieldErrors },
        { status: 422 }
      );
    }

    const data = result.data;

    // Honeypot check
    if (data.honeypot && data.honeypot.length > 0) {
      // Silently reject bots
      return NextResponse.json({ success: true });
    }

    // Check env vars
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !toEmail || !fromEmail) {
      console.error("[contact] Missing environment variables: RESEND_API_KEY, CONTACT_TO_EMAIL, or CONTACT_FROM_EMAIL");
      return NextResponse.json(
        { error: "Email service is not configured. Please contact us directly." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "long",
      timeStyle: "short",
    });

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; color: #1C1C1A; background: #FAFAF8; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 32px 24px; }
    .header { border-bottom: 2px solid #A0522D; padding-bottom: 16px; margin-bottom: 24px; }
    .header h1 { font-size: 20px; color: #1C1C1A; margin: 0; }
    .header p { font-size: 13px; color: #6B6560; margin: 4px 0 0; }
    .field { margin-bottom: 16px; }
    .field label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #6B6560; display: block; margin-bottom: 4px; }
    .field p { font-size: 14px; color: #1C1C1A; margin: 0; padding: 10px 12px; background: #F5F2EC; border-radius: 6px; }
    .message-block { font-size: 14px; color: #1C1C1A; margin: 0; padding: 14px; background: #F5F2EC; border-radius: 6px; white-space: pre-wrap; line-height: 1.6; }
    .footer { border-top: 1px solid #E8E4DC; margin-top: 24px; padding-top: 16px; font-size: 12px; color: #9A948C; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Website Enquiry</h1>
      <p>Received via yourdimension.in · ${timestamp}</p>
    </div>

    <div class="grid">
      <div class="field">
        <label>Full Name</label>
        <p>${sanitize(data.fullName)}</p>
      </div>
      <div class="field">
        <label>Company</label>
        <p>${sanitize(data.companyName || "—")}</p>
      </div>
      <div class="field">
        <label>Email</label>
        <p>${sanitize(data.email)}</p>
      </div>
      <div class="field">
        <label>Phone</label>
        <p>${sanitize(data.phone || "—")}</p>
      </div>
      <div class="field">
        <label>Service Requested</label>
        <p>${sanitize(data.service)}</p>
      </div>
      <div class="field">
        <label>Budget</label>
        <p>${sanitize(data.budget || "Not specified")}</p>
      </div>
    </div>

    <div class="field">
      <label>Timeline</label>
      <p>${sanitize(data.timeline || "Not specified")}</p>
    </div>

    <div class="field">
      <label>Message / Project Details</label>
      <div class="message-block">${sanitize(data.message)}</div>
    </div>

    <div class="footer">
      <p>Reply directly to this email to respond to ${sanitize(data.fullName)} at ${sanitize(data.email)}.</p>
    </div>
  </div>
</body>
</html>`;

    const emailText = `
New Website Enquiry — ${data.service}
Received: ${timestamp}

Name: ${data.fullName}
Company: ${data.companyName || "—"}
Email: ${data.email}
Phone: ${data.phone || "—"}
Service: ${data.service}
Budget: ${data.budget || "Not specified"}
Timeline: ${data.timeline || "Not specified"}

Message:
${data.message}
`;

    const { error: sendError } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: data.email,
      subject: `New Website Enquiry — ${data.service}`,
      html: emailHtml,
      text: emailText,
    });

    if (sendError) {
      console.error("[contact] Resend error:", sendError.message);
      return NextResponse.json(
        { error: "Failed to send your enquiry. Please try again shortly." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[contact] Unexpected error:", err instanceof Error ? err.message : "unknown");
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
