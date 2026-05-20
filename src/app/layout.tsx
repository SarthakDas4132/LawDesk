import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LegalRobe - The Complete Legal Workspace",
  description: "All-in-One Legal Case Workspace Management. AI-powered matter management for smarter law firms.",
  metadataBase: new URL("https://legalrobe.com"),
  keywords: [
    "legal software",
    "law firm management",
    "case management",
    "legal tech",
    "AI legal assistant",
    "hearing tracker",
    "client directory",
    "matter management"
  ],
  authors: [{ name: "LegalRobe Team" }],
  openGraph: {
    title: "LegalRobe - The Complete Legal Workspace",
    description: "All-in-One Legal Case Workspace Management. AI-powered matter management for smarter law firms.",
    url: "https://legalrobe.com",
    siteName: "LegalRobe",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LegalRobe - The Complete AI Legal Workspace",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LegalRobe - The Complete Legal Workspace",
    description: "All-in-One Legal Case Workspace Management. AI-powered matter management for smarter law firms.",
    images: ["/og-image.jpg"],
  },
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
import { ThemeProvider } from "@/components/theme-provider";

import { FloatingContact } from "@/components/ui/floating-contact";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "LegalRobe",
    "operatingSystem": "All",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "category": "Free Trial"
    },
    "description": "All-in-One AI-powered Matter and Legal Workspace Management software for modern law firms.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "128"
    },
    "featureList": [
      "AI Legal Assistant",
      "AI Case File Summarization",
      "AI Case Memory & Assistant",
      "Case Management Dashboard",
      "Hearing Tracker & Smart Calendar",
      "Client Directory",
      "Google Drive Backup & Cloud Storage",
      "Secure Encrypted Case Database"
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans text-[#111827] dark:text-[#fafafa] bg-[#f9f8f6] dark:bg-[#0a0a0a] overflow-x-hidden transition-colors duration-300">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
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
        </ThemeProvider>
      </body>
    </html>
  );
}
