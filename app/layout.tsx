import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

// ✅ Import font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// ✅ Global site metadata
export const metadata: Metadata = {
  title: "NovaProwl – Predictive Analytics for Smarter Decisions",
  description:
    "NovaProwl turns your data into actionable insights using AI-powered analytics and predictive modeling.",
  keywords: [
    "NovaProwl",
    "AI analytics",
    "predictive modeling",
    "data visualization",
    "business insights",
  ],
  openGraph: {
    title: "NovaProwl – Predictive Analytics for Smarter Decisions",
    description:
      "Transform data into insights. NovaProwl helps you predict, analyze, and act faster with AI.",
    url: "https://www.novaprowl.in",
    siteName: "NovaProwl",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NovaProwl preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// ✅ Layout wrapper
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body
        className="bg-gradient-to-br from-black via-[#0B0B0E] to-[#0E1015] text-white antialiased"
      >
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#fff",
              color: "#111",
              border: "1px solid #00A4B4",
              borderRadius: "12px",
            },
          }}
        />
      </body>
    </html>
  );
}
