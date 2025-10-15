// ===============================
// ✅ Razorpay Payment Verification API
// ===============================

export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import crypto from "crypto";
import { Resend } from "resend";

export async function GET() {
  return new Response(
    JSON.stringify({ success: false, message: "Method Not Allowed" }),
    { status: 405, headers: { "Content-Type": "application/json" } }
  );
}

export async function POST(req: Request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, email } =
      await req.json();

    if (!process.env.RAZORPAY_KEY_SECRET)
      throw new Error("Razorpay secret missing in environment variables!");

    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign)
      .digest("hex");

    if (expectedSign !== razorpay_signature) {
      console.error("❌ Invalid payment signature");
      return NextResponse.json(
        { success: false, message: "Invalid signature" },
        { status: 400 }
      );
    }

    // ✅ Send emails via Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    const toTeam = process.env.TO_EMAIL!;
    const from = "NovaProwl <onboarding@resend.dev>";

    await resend.emails.send({
      from,
      to: toTeam,
      subject: "New Payment Received - Pro Plan",
      html: `
        <h2>New Payment Received 🎉</h2>
        <p><strong>Order ID:</strong> ${razorpay_order_id}</p>
        <p><strong>Payment ID:</strong> ${razorpay_payment_id}</p>
        <p><strong>Customer Email:</strong> ${email}</p>
      `,
    });

    await resend.emails.send({
      from,
      to: email,
      subject: "Payment Confirmation - NovaProwl Pro Plan",
      html: `
        <h2>Thank you for your payment! 💙</h2>
        <p>Your payment has been successfully received.</p>
        <p><strong>Payment ID:</strong> ${razorpay_payment_id}</p>
        <p>If you have any questions, reach out to us at ${toTeam}.</p>
        <br />
        <p>– The NovaProwl Team</p>
      `,
    });

    console.log("✅ Emails sent successfully!");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Payment verification failed:", error);
    return NextResponse.json(
      { success: false, message: "Verification failed", error: String(error) },
      { status: 500 }
    );
  }
}
