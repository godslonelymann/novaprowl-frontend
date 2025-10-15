import { Resend } from "resend";
import React from "react";
import { ContactEmail } from "@/components/emails/ContactEmail";

export async function GET() {
  return new Response(
    JSON.stringify({ success: false, message: "Method Not Allowed" }),
    { status: 405, headers: { "Content-Type": "application/json" } }
  );
}


const resend = new Resend(process.env.RESEND_API_KEY);

// ✅ CORS headers configuration
function corsHeaders() {
  return {
    "Access-Control-Allow-Origin":"*", // ✅ your frontend domain
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

// ✅ Preflight handler for OPTIONS requests
export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders() });
}

// ✅ Main POST route
export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, message: "All fields are required." }),
        { status: 400, headers: corsHeaders() }
      );
    }

    // Basic sanitization
    const sanitize = (input: string) =>
      String(input).replace(/[<>]/g, "").replace(/script/gi, "").trim();

    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safeMessage = sanitize(message);

    if (safeMessage.length > 2000) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Message too long (max 2000 chars).",
        }),
        { status: 400, headers: corsHeaders() }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(safeEmail)) {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid email format." }),
        { status: 400, headers: corsHeaders() }
      );
    }

    if (!process.env.RESEND_API_KEY || !process.env.TO_EMAIL) {
      console.error("Missing RESEND_API_KEY or TO_EMAIL in environment.");
      return new Response(
        JSON.stringify({
          success: false,
          message: "Server email config missing.",
        }),
        { status: 500, headers: corsHeaders() }
      );
    }

    // ✅ Render email content
    const ReactDOMServer = await import("react-dom/server");
    const emailHtml = ReactDOMServer.renderToStaticMarkup(
      React.createElement(ContactEmail, {
        name: safeName,
        email: safeEmail,
        message: safeMessage,
      })
    );

    // ✅ Send email via Resend
    const data = await resend.emails.send({
      from: "NovaProwl <onboarding@resend.dev>",
      to: process.env.TO_EMAIL!,
      subject: `New Contact Message from ${safeName}`,
      replyTo: safeEmail,
      html: emailHtml,
    });

    if (data.error) {
      console.error("Resend API Error:", data.error);
      return new Response(
        JSON.stringify({ success: false, message: "Failed to send email." }),
        { status: 500, headers: corsHeaders() }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "✅ Email sent successfully!" }),
      { status: 200, headers: corsHeaders() }
    );
  } catch (err) {
    console.error("Email route error:", err);
    return new Response(
      JSON.stringify({
        success: false,
        message: "❌ Internal server error. Try again later.",
      }),
      { status: 500, headers: corsHeaders() }
    );
  }
}
