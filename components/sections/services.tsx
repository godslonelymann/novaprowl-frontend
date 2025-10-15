import { Lightbulb, BarChart3, LayoutDashboard, Link2 } from "lucide-react";

const services = [
  {
    icon: <Lightbulb className="w-6 h-6 text-[#00A4B4]" />,
    title: "Predictive Models",
    desc: "Forecast trends with reliable machine learning techniques.",
  },
   {
    icon: <Link2 className="w-6 h-6 text-[#00A4B4]" />,
    title: "Seamless Integration",
    desc: "Connect our solutions with your existing data platforms effortlessly.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-[#00A4B4]" />,
    title: "Efficient Data Analysis",
    desc: "Simplify your workload with automated insights.",
  },
  {
    icon: <LayoutDashboard className="w-6 h-6 text-[#00A4B4]" />,
    title: "Custom Dashboards",
    desc: "Tailored tools to visualize what matters most to you.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative mx-auto max-w-screen px-6 py-24 text-center overflow-hidden"
    >
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(0,164,180,0.08) 0%, transparent 70%), radial-gradient(circle at bottom left, rgba(0,164,180,0.08) 0%, transparent 70%)",
        }}
      />

      {/* ===== Heading ===== */}
      <h2
        className="text-3xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto text-transparent bg-clip-text"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #606469ff 0%, #374151 50%, #111827 100%)",
        }}
      >
        Our Services
      </h2>
      <p className="mt-3 text-gray-600 font-medium text-[14px] md:text-lg">
        Smart Analytics Solutions for Every Business
      </p>

      {/* ===== Uniform Bento Grid ===== */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-lg mx-auto">
        {services.map((s, i) => (
          <div
            key={i}
            className={`
              flex flex-col justify-center
              rounded-2xl border border-gray-200
              bg-gradient-to-br from-white to-[#E9F9FF]
              p-8 text-left h-[240px]
              shadow-[0_2px_10px_rgba(0,0,0,0.04)]
              transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
              hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,164,180,0.15)]
              hover:border-[#00A4B4]/50
              backdrop-blur-sm
            `}
          >
            {/* top row: icon + title */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-white shadow-sm border border-gray-100">
                {s.icon}
              </div>
              <h3 className="text-[15px] md:text-2xl font-semibold text-gray-900 leading-tight">
                {s.title}
              </h3>
            </div>

            {/* description */}
            <p className=" text-sm md:text-lg text-gray-600 leading-relaxed tracking-[0.01em] text-left sm:text-left">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
