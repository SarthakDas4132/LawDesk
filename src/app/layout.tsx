import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LawDesk - The Complete Legal Workspace",
  description: "Simple, modern, and sleek. LawDesk is perfect for legal teams.",
};

import { LenisProvider } from "@/components/lenis-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans text-[#111827] bg-[#f9f8f6] overflow-x-hidden">
        <LenisProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1 flex flex-col">
              {children}
            </div>
            <Footer />
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
