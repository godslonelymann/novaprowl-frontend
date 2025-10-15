// ===============================
// ✅ Contact Form Email API (Resend)
// ===============================

export const dynamic = "force-dynamic"; // prevents static export issues

import { Resend } from "resend";
import React from "react";
import { ContactEmail } from "@/components/emails/ContactEmail";

// 🧩 Utility for CORS headers
function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*", // or your domain e.g. "https://www.novaprowl.in"
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

// ✅ GET fallback for safety
export async function GET() {
  return new Response(
    JSON.stringify({ success: false, message: "Method Not Allowed" }),
    { status: 405, headers: { "Content-Type": "application/json" } }
  );
}

// ✅ Preflight handler
export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders() });
}

// ✅ Main POST route
export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, message: "All fields required." }),
        { status: 400, headers: corsHeaders() }
      );
    }

    const sanitize = (input: string) =>
      String(input).replace(/[<>]/g, "").replace(/script/gi, "").trim();

    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safeMessage = sanitize(message);

    if (!process.env.RESEND_API_KEY || !process.env.TO_EMAIL) {
      console.error("Missing Resend config in env.");
      return new Response(
        JSON.stringify({ success: false, message: "Server config missing." }),
        { status: 500, headers: corsHeaders() }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const ReactDOMServer = await import("react-dom/server");
    const emailHtml = ReactDOMServer.renderToStaticMarkup(
      React.createElement(ContactEmail, {
        name: safeName,
        email: safeEmail,
        message: safeMessage,
      })
    );

    const result = await resend.emails.send({
      from: "NovaProwl <onboarding@resend.dev>",
      to: process.env.TO_EMAIL!,
      replyTo: safeEmail,
      subject: `New Message from ${safeName}`,
      html: emailHtml,
    });

    if (result.error) throw new Error(result.error.message);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully!" }),
      { status: 200, headers: corsHeaders() }
    );
  } catch (err) {
    console.error("Email route error:", err);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Internal server error. Try again later.",
      }),
      { status: 500, headers: corsHeaders() }
    );
  }
}
