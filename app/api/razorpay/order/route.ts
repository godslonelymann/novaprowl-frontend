// ===============================
// ✅ Razorpay Order Creation API
// ===============================

export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function GET() {
  return new Response(
    JSON.stringify({ success: false, message: "Method Not Allowed" }),
    { status: 405, headers: { "Content-Type": "application/json" } }
  );
}

export async function POST(req: Request) {
  try {
    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      throw new Error("Razorpay keys missing in environment variables!");
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const body = await req.json();
    const USD = parseFloat(body.amount);
    const exchangeRate = 83.12; // ✅ Use live API if you want dynamic rates
    const INRAmount = Math.round(USD * exchangeRate * 100);

    const order = await razorpay.orders.create({
      amount: INRAmount,
      currency: "INR",
      receipt: `rcpt_${Math.floor(Math.random() * 1000000)}`,
    });

    console.log("✅ Razorpay Order Created:", order.id);
    return NextResponse.json({ success: true, order });
  } catch (err) {
    console.error("❌ Razorpay order creation failed:", err);
    return NextResponse.json(
      { success: false, message: "Failed to create order" },
      { status: 500 }
    );
  }
}
