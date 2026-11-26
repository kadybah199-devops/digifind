import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DigiFind | Transformation numérique",
    template: "%s | DigiFind",
  },
  description:
    "DigiFind accompagne les entreprises et organisations dans leur transformation numérique grâce à des solutions adaptées à leurs besoins et à leurs objectifs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-[#123C3A]">{children}</body>
    </html>
  );
}
