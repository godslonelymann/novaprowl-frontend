import { Mail, User, MessageSquare } from "lucide-react";
import Button from "../ui/button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-screen px-6 py-24 text-center overflow-hidden"
    >
      {/* soft glow background accents */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(0,164,180,0.08) 0%, transparent 70%), radial-gradient(circle at bottom left, rgba(0,164,180,0.08) 0%, transparent 70%)",
        }}
      />

      {/* heading */}
      <h2
        className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto text-transparent bg-clip-text"
        style={{
          backgroundImage:
            "linear-gradient(to top, #5c5f64ff 0%, #374151 50%, #111827b8 100%)",
        }}
      >
        Contact the Team
      </h2>
      <p className="mt-3 text-gray-600 font-medium mb-14 max-w-2xl mx-auto">
        Have a question, feedback, or collaboration idea? We'd love to hear from you.
      </p>

      {/* contact form container */}
      <div className="mx-auto max-w-lg bg-white/80 backdrop-blur-md border border-gray-200 rounded-3xl shadow-sm p-10 text-left hover:shadow-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] max-w-screen-md m-auto">
        <form className="flex flex-col space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2 flex items-center gap-2">
              <User className="w-4 h-4 text-[#00A4B4]" /> Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00A4B4] focus:border-[#00A4B4] outline-none text-gray-900 placeholder:text-gray-400 transition-all duration-300"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2 flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#00A4B4]" /> Email Address
            </label>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00A4B4] focus:border-[#00A4B4] outline-none text-gray-900 placeholder:text-gray-400 transition-all duration-300"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#00A4B4]" /> Message
            </label>
            <textarea
              placeholder="Write your message here..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00A4B4] focus:border-[#00A4B4] outline-none text-gray-900 placeholder:text-gray-400 transition-all duration-300 resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-1/3 m-auto py-3 mt-2 rounded-xl font-semibold"
          >
            Send Message
          </Button>
        </form>
      </div>

      {/* optional footer note */}
      <p className="mt-10 text-sm text-gray-500">
        Or email us directly at{" "}
        <a
          href="mailto:team@novaprowl.ai"
          className="text-[#00A4B4] hover:underline"
        >
          team@novaprowl.ai
        </a>
      </p>
    </section>
  );
}
