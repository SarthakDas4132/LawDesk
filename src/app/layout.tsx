import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LegalRobe - The Complete Legal Workspace",
  description: "Simple, modern, and sleek. LegalRobe is perfect for legal teams.",
  icons: [
    {
      rel: 'icon',
      url: '/favicon-light.png?v=5',
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      url: '/favicon-dark.png?v=5',
      media: '(prefers-color-scheme: dark)',
    },
    {
      rel: 'apple-touch-icon',
      url: '/favicon-dark.png?v=5',
    }
  ],
};

import { LenisProvider } from "@/components/lenis-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { FloatingContact } from "@/components/ui/floating-contact";

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
            <FloatingContact />
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
