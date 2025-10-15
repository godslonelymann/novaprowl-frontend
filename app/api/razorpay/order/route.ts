import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req: Request) {
  try {
    // 🧩 Step 1: Check if environment variables are loading properly
    console.log("🧩 Environment Check:");
    console.log("RAZORPAY_KEY_ID:", process.env.RAZORPAY_KEY_ID);
    console.log(
      "RAZORPAY_KEY_SECRET:",
      process.env.RAZORPAY_KEY_SECRET ? "✅ Present" : "❌ Missing"
    );

    // 🧠 Step 2: Make sure both keys are present
    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      console.error("❌ Razorpay keys missing in environment variables!");
      return NextResponse.json(
        {
          success: false,
          message: "Razorpay configuration missing on server.",
        },
        { status: 500 }
      );
    }

    // ✅ Step 3: Initialize Razorpay securely
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    // 🧾 Step 4: Get amount from frontend
    const body = await req.json();
    const INRAmount = Math.round(body.amount * 83 * 100);
    // const INRAmount = 1 * 100;

    // ✅ Step 5: Create Razorpay order
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