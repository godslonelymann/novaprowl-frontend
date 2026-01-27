"use client";
import { useState, useEffect } from "react";
import Button from "../ui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/1.png",
  "/2.png",
  "/3.png",
  "/4.png",
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
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

      <div className="mt-14 relative mx-auto max-w-6xl">
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
          className="relative overflow-hidden border-[2px] border-white shadow-[0_8px_30px_rgba(0,164,180,0.2),0_4px_20px_rgba(255,255,255,0.6)] bg-white aspect-[1916/972] rounded-xl"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentSlide]}
                alt={`NovaProwl dashboard preview ${currentSlide + 1}`}
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Optional: Slide indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-[#00A4B4] w-6" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>






    </section>
  );
}
