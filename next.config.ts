import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // ✅ Make sure dynamic API routes (like send-email, razorpay) work on Vercel
  output: "standalone", // <-- replaces 'export', ensures Serverless Functions build correctly

  images: {
    unoptimized: true, // keep this if you don’t use Vercel image optimization
  },

  trailingSlash: true,

  experimental: {
    serverActions: {
      bodySizeLimit: "2mb", // optional but safe for Razorpay payloads
    },
  },
};

export default nextConfig;
