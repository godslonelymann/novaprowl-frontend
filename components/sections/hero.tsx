
import Button from "../ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative mx-auto max-w-screen px-6 pt-32 pb-20 text-center overflow-hidden"
     style={{
        background:
          "linear-gradient(to bottom, #ffffff 0%, #E6FAFC 40%, #00a5b44c 75%, #ffffff 100%)",
      }}
    >

      {/* ===== Headline ===== */}
    <h1
      className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto text-transparent bg-clip-text"
      style={{
        backgroundImage:
          "linear-gradient(to top, #5c5f64ff 0%, #374151 50%, #111827b8 100%)",
      }}
    >
      Empower Your
        <br />
      Data Intelligence
    </h1>


      {/* ===== Subtext ===== */}
      <p className="mt-6 text-lg md:text-2xl font-medium text-gray-600 leading-relaxed md:leading-[1.8] max-w-3xl mx-auto">
        NovaProwl transforms your business data into predictive insights.
        <br />
        Make confident, data-driven decisions faster.
      </p>

      {/* ===== CTA Buttons ===== */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button size="lg">Get Started</Button>
      </div>

      {/* ===== Hero Image ===== */}
      <div className="mt-14 relative mx-auto max-w-4xl">
        <div className="rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden">
          <Image
            src="/assets/hero-dashboard.png"
            alt="NovaProwl dashboard preview"
            width={1600}
            height={900}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
