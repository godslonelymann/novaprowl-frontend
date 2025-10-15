"use client";

import { useEffect, useState } from "react";
import Button from "../ui/button";
import { Check } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

// ✅ Define type for Razorpay handler response
interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

// ✅ Define minimal Razorpay class type
interface RazorpayConstructor {
  new (options: Record<string, unknown>): { open: () => void };
}

declare global {
  interface Window {
    Razorpay: unknown;
  }
}

const plans = [
  {
    name: "Free Trial",
    price: "$0",
    button: "Get Started",
    link: "https://novaprowl.web.app/",
    features: [
      "Experience all core features for free",
      "2 AI data prompts",
      "1 dashboard data upload",
      "No credit card required",
    ],
  },
  {
    name: "Pro",
    price: "$25.00",
    button: "Upgrade Now",
    highlighted: true,
    features: [
      "Unlimited Data Uploads & Prompts",
      "Custom Visualizations & Feature Set",
      "Downloadable Reports",
      "Everything in Starter Plan",
      "Dedicated Enterprise Support",
    ],
  },
  {
    name: "Business",
    price: "Let's Chat",
    button: "Let's Chat",
  
    features: [
      "Everything in Pro plan",
      "Custom integrations & onboarding",
      "Dedicated account manager",
      "Priority 24/7 Support",
    ],
  },
];

export default function Pricing() {
  const [showModal, setShowModal] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => setShowModal(true);

  const startRazorpayPayment = async () => {
    try {
      setIsProcessing(true);
      const res = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 25 }), // in USD (backend maps to INR)
      });
      const data = await res.json();
      if (!data.success) {
        toast.error("Failed to create Razorpay order.");
        setIsProcessing(false);
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.order.amount,
        currency: data.order.currency,
        name: "NovaProwl",
        description: "Pro Plan Subscription",
        order_id: data.order.id,
        theme: { color: "#00A4B4" },
        prefill: {
          name: "NovaProwl User",
          email: userEmail || "user@example.com",
        },
        // ✅ Typed Razorpay handler
        handler: async function (response: RazorpayResponse) {
          try {
            const verifyRes = await fetch("/api/razorpay/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                ...response,
                email: userEmail || "user@example.com",
              }),
            });

            const verifyData = await verifyRes.json();
            if (verifyData.success) {
              toast.success("✅ Payment Verified Successfully!", {
                iconTheme: { primary: "#00A4B4", secondary: "#fff" },
                style: {
                  borderRadius: "12px",
                  background: "#ffffff",
                  color: "#111827",
                  fontWeight: 500,
                },
              });

              setTimeout(() => {
                toast("📩 Confirmation email has been sent!", {
                  icon: "📧",
                  style: {
                    borderRadius: "12px",
                    background: "#fff",
                    color: "#111827",
                  },
                });
              }, 1000);
            } else {
              toast.error(
                "❌ Payment verification failed. Please contact support."
              );
            }
          } catch (err: unknown) {
            if (err instanceof Error) {
              console.error("Verification error:", err.message);
            } else {
              console.error("Unknown verification error:", err);
            }
            toast.error("Verification failed. Try again later.");
          }
        },
      };

      // ✅ Safely construct Razorpay instance
      const RazorpayClass = window.Razorpay as RazorpayConstructor;
      const rzp = new RazorpayClass(options);
      rzp.open();

      setShowModal(false);
      setIsProcessing(false);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Payment initiation error:", err.message);
      } else {
        console.error("Unknown payment initiation error:", err);
      }
      toast.error("Payment failed. Try again.");
      setIsProcessing(false);
    }
  };

  return (
    <section
      id="pricing"
      className="relative mx-auto max-w-screen px-6 py-24 text-center overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #ffffff 0%, #00a5b44c 60%, #ffffff 100%)",
      }}
    >
      <Toaster position="top-center" reverseOrder={false} />

      <h2
        className="text-3xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto text-transparent bg-clip-text"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #606469ff 0%, #374151 50%, #111827 100%)",
        }}
      >
        Pricing Plans
      </h2>

      <p className="mt-3 text-gray-600 font-medium mb-16 text-sm md:text-lg">
        Choose the plan that fits your workflow and scale.
      </p>

      {/* ======= Cards Grid ======= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-screen-lg m-auto">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`relative flex flex-col justify-between rounded-3xl bg-white border shadow-sm transition-all duration-500 ${
              plan.highlighted
                ? "scale-105 md:scale-110 border-[#00A4B4] shadow-[0_0_25px_rgba(255,255,255,0.6),0_0_35px_rgba(0,164,180,0.4)] z-10"
                : "border-gray-200 hover:shadow-md"
            }`}
            style={{
              transformOrigin:
                index === 1 ? "center" : index === 0 ? "right" : "left",
            }}
          >
            <div className="p-8 text-left flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-900">
                {plan.name}
              </h3>

              <div className="mt-3 mb-4 flex items-end gap-1">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
              </div>

              {plan.name === "Free Trial" && (
                <p className="text-gray-500 mb-6">
                  Try NovaProwl completely free. No payment required.
                </p>
              )}
              {plan.name === "Pro" && (
                <p className="text-gray-500 mb-6">
                  Unlock the full power of NovaProwl with unlimited access.
                </p>
              )}
              {plan.name === "Business" && (
                <p className="text-gray-500 mb-6">
                  Tailored solutions for enterprise teams.
                </p>
              )}

              <div className="mb-6">
                {plan.name === "Free Trial" ? (
                  <a href={plan.link} className="block">
                    <Button className="w-full py-3 rounded-xl text-white font-semibold">
                      {plan.button}
                    </Button>
                  </a>
                ) : plan.name === "Pro" ? (
                  <Button
                    className="w-full py-3 rounded-xl text-white font-semibold"
                    onClick={handlePayment}
                  >
                    {plan.button}
                  </Button>
                ) : (
                  <Button className="w-full py-3 rounded-xl text-white font-semibold">
                    {plan.button}
                  </Button>
                )}
              </div>

              <div className="w-full h-[1px] bg-gray-200 mb-6" />

              <ul className="space-y-3 text-gray-700 text-[15px] leading-relaxed">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 leading-snug tracking-[0.01em]"
                  >
                    <Check className="w-4 h-4 text-[#00A4B4] mt-[2px]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* 💬 Custom Modern Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 w-[90%] max-w-md text-center">
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">
              Enter your Email
            </h3>
            <p className="text-gray-500 mb-6">
              Please enter your email address to receive your payment receipt.
            </p>

            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00A4B4] focus:border-[#00A4B4] outline-none mb-6 text-gray-800 placeholder:text-gray-400 transition-all duration-300"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />

            <div className="flex justify-center gap-4">
              <Button
                className="px-6 py-3 rounded-xl font-semibold"
                onClick={startRazorpayPayment}
                disabled={isProcessing}
              >
                {isProcessing ? "Processing..." : "Continue to Pay"}
              </Button>
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-3 rounded-xl border border-gray-300 text-gray-600 font-medium hover:bg-gray-50 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}