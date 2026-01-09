import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Transform Your Links - Fast & Free URL Shortener.",
  description:
    "Shorten long URLs into concise, shareable links instantly. Free, secure, and easy to use URL shortening service.",
  icons: {
    icon: `/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-emerald-100">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
