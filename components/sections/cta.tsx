import Button from "../ui/button";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative mx-auto max-w-screen px-6 py-24 text-center overflow-hidden"
      // style={{
      //   background:
      //     "linear-gradient(to bottom, #ffffff 0%, #f3f9ff 60%, #ffffff 100%)",
      // }}
    >
      {/* soft background glow */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(6,182,212,0.08) 0%, transparent 70%), radial-gradient(circle at bottom left, rgba(168,85,247,0.08) 0%, transparent 70%)",
        }}
      />

      {/* headline */}
      <h2 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto text-transparent bg-clip-text"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #b0b6be 0%, #374151 50%, #111827 100%)",
        }}>
        <span>
          Ready to transform your data?
        </span>
      </h2>

      {/* subtext */}
      <p className="mt-4 text-gray-600 max-w-lg mx-auto text-base md:text-lg leading-relaxed">
        Join hundreds of teams using NovaProwl to unlock predictive insights and
        smarter decision-making.
      </p>

      {/* CTA buttons */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Button
          className=""
          size="lg"
        >
          Get Started
        </Button>
        

        {/* <button
          className="px-6 py-3 rounded-xl font-semibold text-gray-800 border border-gray-300 bg-gradient-to-b from-white to-gray-50 hover:bg-gray-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        >
          Talk to Sales
        </button> */}
      </div>
    </section>
  );
}
