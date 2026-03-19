"use client";

import Button from "../ui/button";
import { Check } from "lucide-react";

const plan = {
  name: "Business",
  price: "Let's Chat",
  button: "Let's Get Started",
  link: "https://novaprowl.web.app/",
  features: [
    
    "Custom integrations & onboarding",
    "Dedicated account manager",
    "Priority 24/7 Support",
  ],
};

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative mx-auto max-w-screen px-6 py-24 text-center overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #ffffff 0%, #00a5b44c 60%, #ffffff 100%)",
      }}
    >
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

      {/* ✅ Centered Single Card */}
      <div className="flex justify-center items-center">
        <div className="w-full max-w-md rounded-3xl bg-white border border-[#00A4B4] shadow-[0_0_25px_rgba(255,255,255,0.6),0_0_35px_rgba(0,164,180,0.4)] p-8 text-left">
          
          <h3 className="text-lg font-semibold text-gray-900">
            {plan.name}
          </h3>

          <div className="mt-3 mb-4 flex items-end gap-1">
            <span className="text-4xl font-bold text-gray-900">
              {plan.price}
            </span>
          </div>

          <p className="text-gray-500 mb-6">
            Tailored solutions for enterprise teams.
          </p>

          <a href={plan.link} target="_blank" rel="noopener noreferrer">
            <Button className="w-full py-3 rounded-xl text-white font-semibold mb-6">
              {plan.button}
            </Button>
          </a>

          <div className="w-full h-[1px] bg-gray-200 mb-6" />

          <ul className="space-y-3 text-gray-700 text-[15px] leading-relaxed">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#00A4B4] mt-[2px]" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
