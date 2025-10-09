import { UploadCloud, Brain, LineChart, Sparkles } from "lucide-react";

const steps = [
  {
    icon: <UploadCloud className="w-6 h-6 text-[#00A4B4]" />,
    title: "Data Input",
    desc: "Upload spreadsheets, connect APIs, or import directly from your database.",
  },
  {
    icon: <Brain className="w-6 h-6 text-[#00A4B4]" />,
    title: "Model Processing",
    desc: "Our AI engine cleans, structures, and analyzes your data instantly.",
  },
  {
    icon: <LineChart className="w-6 h-6 text-[#00A4B4]" />,
    title: "Insight Generation",
    desc: "Get visual dashboards and smart summaries in seconds.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-[#00A4B4]" />,
    title: "Decision Made Easy",
    desc: "Turn predictions into strategy — export, share, or automate directly.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative mx-auto max-w-screen px-6 py-24 text-center overflow-hidden"
    >
      {/* soft background glow */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(0,164,180,0.08) 0%, transparent 70%), radial-gradient(circle at bottom left, rgba(0,164,180,0.08) 0%, transparent 70%)",
        }}
      />

      {/* ===== Heading ===== */}
      <h2
        className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto text-transparent bg-clip-text"
        style={{
          backgroundImage:
            "linear-gradient(to top, #5c5f64ff 0%, #374151 50%, #111827b8 100%)",
        }}
      >
        How It Works
      </h2>
      <p className="mt-3 text-gray-600 font-medium mb-16">
        From raw data to powerful insights — all in four simple steps.
      </p>

      {/* ===== Vertical timeline ===== */}
      <div className="relative mx-auto max-w-lg">
        {/* central line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00A4B4] via-[#00B8C7] to-[#33C1CC] opacity-30 transform -translate-x-1/2" />

        {/* steps */}
        <div className="flex flex-col gap-20 relative z-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center"
            >
              {/* connector line between cards */}
              {index > 0 && (
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-[2px] h-7 bg-gradient-to-b from-[#00A4B4] via-[#00B8C7] to-[#33C1CC] opacity-25" />
              )}

              {/* step card */}
              <div className="w-full bg-gradient-to-b from-white to-[#E9F9FF]/70 backdrop-blur-md border border-gray-200 rounded-2xl p-8 shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_20px_rgba(0,164,180,0.15)] hover:-translate-y-1 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
                <div className="flex flex-col items-center gap-3 mb-2">
                  <div className="p-3 rounded-xl bg-white shadow-sm border border-gray-100">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-[15px] leading-relaxed tracking-[0.01em]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
