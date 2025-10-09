import Button from "../ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free Trial",
    price: "$0",
    period: "",
    description: "All essential features.",
    features: [
      "Experience all core features for free",
      "2 AI data prompts",
      "1 dashboard data upload",
      "No credit card required",
    ],
    button: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$25.00",
    period: "/Seat/Month",
    description: "Unlimited access.",
    features: [
      "Unlimited Data Uploads & Prompts",
      "Custom Visualizations & Feature Set",
      "Downloadable Reports",
      "Everything in Starter Plan",
      "Dedicated Enterprise Support",
    ],
    button: "Upgrade Now",
    highlighted: true,
  },
  {
    name: "Business",
    price: "Let's Chat",
    period: "",
    description: "Custom solutions for teams.",
    features: [
      "Everything in Pro plan",
      "Custom integrations & onboarding",
      "Dedicated account manager",
      "Priority 24/7 Support",
    ],
    button: "Let's Chat",
    highlighted: false,
  },
];

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
      {/* Heading */}
      <h2
        className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto text-transparent bg-clip-text"
        style={{
          backgroundImage:
            "linear-gradient(to top, #5c5f64ff 0%, #374151 50%, #111827b8 100%)",
        }}
      >
        Pricing Plans
      </h2>
      <p className="mt-3 text-gray-600 font-medium mb-16">
        Choose the plan that fits your workflow and scale.
      </p>

      {/* Cards Grid */}
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
              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mt-3 mb-4 flex items-end gap-1">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm text-gray-500">{plan.period}</span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-500 mb-6">{plan.description}</p>

              {/* Button */}
              <div className="mb-6">
                <Button
                  className={`w-full py-3 rounded-xl text-white font-semibold transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]`}
                >
                  {plan.button}
                </Button>
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-gray-200 mb-6" />

              {/* Features */}
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
    </section>
  );
}
