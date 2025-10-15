"use client";

import { Mail, User, MessageSquare } from "lucide-react";
import Button from "../ui/button";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const loadingToast = toast.loading("Sending message...");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      toast.dismiss(loadingToast);

      if (res.ok) {
        toast.success("Message sent successfully!");
        // ✅ NEW TOAST HERE
        setTimeout(() => {
          toast("Our team will reach out to you as soon as possible. 😊", {
            
            duration: 4000,
          });
        }, 800);

        form.reset();
      } else {
        const result = await res.json();
        toast.error(result.message || "Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      toast.dismiss(loadingToast);
      toast.error("Something went wrong. Try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-screen px-6 py-24 text-center overflow-hidden"
    >
      <Toaster position="top-center" />

      {/* soft glow background */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(0,164,180,0.08) 0%, transparent 70%), radial-gradient(circle at bottom left, rgba(0,164,180,0.08) 0%, transparent 70%)",
        }}
      />

      {/* heading */}
      <h2
        className="text-3xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto text-transparent bg-clip-text"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #606469ff 0%, #374151 50%, #111827 100%)",
        }}
      >
        Contact the Team
      </h2>
      <p className="mt-3 text-gray-600 mb-14 max-w-2xl mx-auto text-sm md:text-lg">
        Have a question, feedback, or collaboration idea? We&apos;d love to hear from you.
      </p>

      {/* contact form */}
      <div className="mx-auto max-w-lg bg-white/80 backdrop-blur-md border border-gray-200 rounded-3xl shadow-sm p-10 text-left hover:shadow-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] max-w-screen-md m-auto">
        <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2 flex items-center gap-2">
              <User className="w-4 h-4 text-[#00A4B4]" /> Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full text-sm px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00A4B4] focus:border-[#00A4B4] outline-none text-gray-900 placeholder:text-gray-400 transition-all duration-300"
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
              name="email"
              placeholder="you@company.com"
              className="w-full px-4 text-sm py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00A4B4] focus:border-[#00A4B4] outline-none text-gray-900 placeholder:text-gray-400 transition-all duration-300"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#00A4B4]" /> Message
            </label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              rows={4}
              className="w-full text-sm px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00A4B4] focus:border-[#00A4B4] outline-none text-gray-900 placeholder:text-gray-400 transition-all duration-300 resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full py-3 mt-2 rounded-xl font-semibold"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>

      {/* footer note */}
      <p className="mt-10 text-sm text-gray-500">
        Or email us directly at{" "}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=ceo@novaprowl.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00A4B4] hover:underline"
        >
          ceo@novaprowl.in
        </a>
      </p>
    </section>
  );
}
