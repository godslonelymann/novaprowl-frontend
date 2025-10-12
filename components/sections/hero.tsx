"use client";
import Button from "../ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="/"
      className="relative mx-auto max-w-screen px-6 pt-32 pb-20 text-center overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #ffffff 0%, #E6FAFC 40%, #00a5b44c 75%, #ffffff 100%)",
      }}
    >

      {/* ===== Headline ===== */}
      <h1
        className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto text-transparent bg-clip-text"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #606469ff 0%, #374151 50%, #111827ce 100%)",
        }}
      >
        Empower Your
        <br />
        Data Intelligence
      </h1>


      {/* ===== Subtext ===== */}
      <p className="mt-6 text-[14px] md:text-2xl font-medium text-gray-600 leading-relaxed md:leading-[1.8] max-w-3xl mx-auto">
        NovaProwl transforms your business data into predictive insights.

        Make confident, data-driven decisions faster.
      </p>

      {/* ===== CTA Buttons ===== */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button 
        onClick={() => window.open("https://novaprowl.web.app/", "_self")}
        size="lg">Get Started</Button>
      </div>

      <div className="mt-14 relative mx-auto max-w-4xl">
        {/* Outer white glow */}
        <div
          className="absolute inset-0 rounded-2xl blur-[40px] opacity-60"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.5) 100%)",
          }}
        />

        {/* Main container with clean border & shadow */}
        <div
          className="relative  overflow-hidden border-[2px] border-white shadow-[0_8px_30px_rgba(0,164,180,0.2),0_4px_20px_rgba(255,255,255,0.6)] bg-white"
        >
          <Image
            src="/hero.png"
            alt="NovaProwl dashboard preview"
            width={1600}
            height={1000}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>






    </section>
  );
}
