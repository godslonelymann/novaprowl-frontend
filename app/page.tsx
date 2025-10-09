import Navbar from "../components/navbar";
import Hero from "../components/sections/hero";
import Technologies from "../components/sections/technologies";
import About from "../components/sections/about";
import Services from "../components/sections/services";
import HowItWorks from "../components/sections/how-it-works";
import Pricing from "../components/sections/pricing";
import Blog from "../components/sections/blog";
import CTA from "../components/sections/cta";
import Footer from "../components/footer";
import FAQ from "@/components/sections/contact";
import Contact from "@/components/sections/contact";


export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-fuchsia-500/40">
      {/* 🌙 Navbar */}
      <Navbar />

      {/* 🌌 Page sections */}
      <main className="">
        <Hero />
        {/* <Technologies /> */}
        {/* <About /> */}
        <Services />
        <HowItWorks />
        <Pricing />
        <Contact />
        <CTA /> 
      </main>

      {/* 🪶 Footer */}
      <Footer />

    </div>
  );
}
