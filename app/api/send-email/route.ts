import { Resend } from "resend";
import React from "react";
import { ContactEmail } from "@/components/emails/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    // Basic sanitization
    const sanitize = (input: string) =>
      String(input).replace(/[<>]/g, "").replace(/script/gi, "").trim();

    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safeMessage = sanitize(message);

    if (safeMessage.length > 2000) {
      return Response.json(
        { success: false, message: "Message too long (max 2000 chars)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(safeEmail)) {
      return Response.json(
        { success: false, message: "Invalid email format." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY || !process.env.TO_EMAIL) {
      console.error("Missing RESEND_API_KEY or TO_EMAIL in .env.local");
      return Response.json(
        { success: false, message: "Server email config missing." },
        { status: 500 }
      );
    }

    // ✅ Dynamically import ReactDOMServer
    const ReactDOMServer = await import("react-dom/server");

    // ✅ Render the email to static markup string
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
      html: emailHtml, // now truly a string ✅
    });

    if (data.error) {
      console.error("Resend API Error:", data.error);
      return Response.json(
        { success: false, message: "Failed to send email." },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "✅ Email sent successfully!",
    });
  } catch (err) {
    console.error("Email route error:", err);
    return Response.json(
      { success: false, message: "❌ Internal server error. Try again later." },
      { status: 500 }
    );
  }
}
