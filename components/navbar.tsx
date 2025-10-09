"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "./ui/button";

const links = [
  { href: "#features", label: "Service" },
  { href: "#howitworks", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },

  { href: "#blog", label: "Blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-[1000] transition-all ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"
        }`}
      >
        <nav className="mx-auto flex max-w-screen-lg items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/globe.svg" alt="NovaProwl logo" width={28} height={28} />
            <span className="text-lg font-semibold text-gray-900">NovaProwl</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 text-lg text-gray-700">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative group transition-colors duration-300"
              >
                <span className="group-hover:text-gray-900 transition-colors duration-300">
                  {link.label}
                </span>
                {/* subtle underline animation */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00A4B4] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"></span>

              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button size="md">Get Started</Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center text-gray-900"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center space-y-8 text-gray-800 bg-white"
          >
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="absolute top-6 right-6 text-gray-900 hover:text-cyan-500 transition"
            >
              <X size={30} />
            </button>

            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-medium relative group transition-all"
              >
                <span className="group-hover:text-cyan-500 transition-colors duration-300">
                  {link.label}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-sky-500 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"></span>
              </a>
            ))}

            <Button size="lg" onClick={() => setMenuOpen(false)}>
              Get Started
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
