import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { Resend } from "npm:resend@4.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY") ?? "";
const RECIPIENT_EMAIL = "hello@thompsondesignwork.com";
const FROM_EMAIL = "Thompson's Design Work <hello@thompsondesignwork.com>";

interface Inquiry {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  project_type?: string;
  budget?: string;
  message: string;
  /** Honeypot field — must be empty for a legit submission. */
  website?: string;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function sanitizeText(s: string): string {
  return s.slice(0, 4000).trim();
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const raw = (await req.json()) as Inquiry;

    // Honeypot: if the hidden "website" field is filled, it's a bot. Pretend success.
    if (raw.website && raw.website.trim() !== "") {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Sanitize all fields
    const name = sanitizeText(raw.name ?? "");
    const email = sanitizeText(raw.email ?? "");
    const phone = raw.phone ? sanitizeText(raw.phone) : "";
    const company = raw.company ? sanitizeText(raw.company) : "";
    const project_type = raw.project_type ? sanitizeText(raw.project_type) : "";
    const budget = raw.budget ? sanitizeText(raw.budget) : "";
    const message = sanitizeText(raw.message ?? "");

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: name, email, message" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // Validate email shape
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // Basic spam protection: reject messages stuffed with too many URLs
    const urlCount = (message.match(/https?:\/\//gi) ?? []).length;
    if (urlCount > 3) {
      return new Response(
        JSON.stringify({ error: "Message flagged as spam. Please reduce links." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured.");
      return new Response(
        JSON.stringify({ error: "Email service not configured on the server." }),
        { status: 503, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const subject = `New inquiry from ${name}${project_type ? ` — ${project_type}` : ""}`;

    const rows = [
      { k: "Name", v: escapeHtml(name) },
      { k: "Email", v: `<a href="mailto:${escapeHtml(email)}" style="color:#CCB039;">${escapeHtml(email)}</a>` },
      phone ? { k: "Phone", v: escapeHtml(phone) } : null,
      company ? { k: "Company", v: escapeHtml(company) } : null,
      project_type ? { k: "Service", v: escapeHtml(project_type) } : null,
      budget ? { k: "Budget", v: escapeHtml(budget) } : null,
    ].filter(Boolean) as { k: string; v: string }[];

    const html = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#F5EBD0;border-radius:24px;">
        <div style="background:#1B3615;padding:24px;border-radius:16px;color:#F5EBD0;">
          <h1 style="margin:0 0 8px;font-size:22px;font-weight:600;">New inquiry from ${escapeHtml(name)}</h1>
          <p style="margin:0;font-size:14px;opacity:0.7;">Thompson's Design Work — contact form</p>
        </div>
        <div style="background:#ffffff;padding:24px;border-radius:16px;margin-top:16px;">
          <table style="width:100%;font-size:15px;color:#1A1A1A;">
            ${rows.map((r) => `<tr><td style="padding:8px 0;font-weight:600;width:120px;color:#1B3615;">${r.k}</td><td style="padding:8px 0;">${r.v}</td></tr>`).join("")}
          </table>
          <div style="margin-top:16px;padding-top:16px;border-top:1px solid #eee;">
            <p style="margin:0 0 8px;font-weight:600;color:#1B3615;">Message</p>
            <p style="margin:0;line-height:1.6;white-space:pre-wrap;">${escapeHtml(message)}</p>
          </div>
        </div>
        <p style="text-align:center;margin-top:16px;font-size:12px;color:#1B3615;opacity:0.5;">Sent from thompsonsdesignwork.com</p>
      </div>
    `;

    const resend = new Resend(RESEND_API_KEY);

    const { error: sendError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [RECIPIENT_EMAIL],
      reply_to: email,
      subject,
      html,
    });

    if (sendError) {
      throw new Error(`Resend error: ${sendError.message}`);
    }

    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("Function error:", err);
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
