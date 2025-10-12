import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="relative border-t border-gray-200/70 backdrop-blur-md"
      style={{
        background:
          "linear-gradient(to bottom, #ffffff 0%, #f3f9ff 60%, #ffffff 100%)",
      }}
    >
      <div className="mx-auto max-w-screen-lg py-12 flex flex-col md:flex-row items-center justify-between gap-8 text-sm">
        {/* Left: Logo + copy */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <h3 className="text-gray-900 font-semibold text-lg tracking-tight">
            NovaProwl
          </h3>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} NovaProwl — All rights reserved.
          </p>
        </div>

        {/* Center: Links */}
        <div className="flex flex-wrap justify-center gap-6 text-gray-700">
          {[
            { href: "#features", label: "Services" },
            { href: "#pricing", label: "How It Works" },
            { href: "#how-it-works", label: "Pricing" },
            { href: "#contact", label: "Contact" },
            { href: "#blog", label: "Blog" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative group transition-colors duration-300"
            >
              <span className="group-hover:text-gray-700 transition-colors duration-300 text-sm md:text-base">
                {link.label}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00A4B4] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Right: Socials */}
        <div className="flex gap-4 text-gray-600">
          <a
            href="https://x.com"
            aria-label="Twitter"
            className="relative group transition-colors duration-300 hover:text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.24 4.24 0 0 0 1.88-2.34 8.48 8.48 0 0 1-2.68 1.03A4.22 4.22 0 0 0 16.11 4a4.23 4.23 0 0 0-4.22 4.22c0 .33.04.66.11.98A12 12 0 0 1 3.15 5.1a4.21 4.21 0 0 0-.57 2.12 4.23 4.23 0 0 0 1.88 3.52 4.24 4.24 0 0 1-1.91-.53v.05a4.23 4.23 0 0 0 3.39 4.14 4.26 4.26 0 0 1-1.9.07 4.23 4.23 0 0 0 3.94 2.93A8.47 8.47 0 0 1 2 19.55a11.95 11.95 0 0 0 6.46 1.9c7.75 0 11.99-6.42 11.99-11.99v-.55A8.4 8.4 0 0 0 24 5.64a8.23 8.23 0 0 1-2.36.65c.85-.5 1.51-1.3 1.82-2.25z" />
            </svg>
            {/* <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00A4B4] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"></span> */}
          </a>

          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            className="relative group transition-colors duration-300 hover:text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4.98 3a2.5 2.5 0 1 0 0 5.001 2.5 2.5 0 0 0 0-5.001zM3 9h4v12H3zM9 9h3.6v1.6h.05c.5-.95 1.7-1.95 3.45-1.95 3.7 0 4.4 2.4 4.4 5.55V21h-4v-5.3c0-1.25-.025-2.85-1.75-2.85-1.75 0-2.02 1.35-2.02 2.75V21H9z" />
            </svg>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00A4B4] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"></span>
          </a>
        </div>
      </div>

      {/* subtle top glow line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#00A4B4] via-white to-[#00A4B4] opacity-30" />
    </footer>

    
  );

  
}
