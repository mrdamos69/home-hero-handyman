import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { business } from "@/config/business";
import { localBusinessSchema } from "@/lib/schema";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Lets the sticky mobile bar extend into the iPhone home-indicator area
  // while its content is padded with env(safe-area-inset-bottom).
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: "Home Hero Service | Handyman & Property Services in Los Angeles",
    template: "%s | Home Hero Service",
  },
  description:
    "Professional home repair, handyman and property maintenance services in Los Angeles. Send your project details and request a free estimate.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: business.name,
    url: business.siteUrl,
    title: "Home Hero Service | Handyman & Property Services in Los Angeles",
    description:
      "Professional home repair, handyman and property maintenance services in Los Angeles.",
    locale: "en_US",
    images: [
      {
        url: "/images/mascot-hero.jpg",
        width: 1200,
        height: 800,
        alt: "Home Hero Service — reliable home and property services in Los Angeles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Hero Service | Handyman & Property Services in Los Angeles",
    description:
      "Professional home repair, handyman and property maintenance services in Los Angeles.",
    images: ["/images/mascot-hero.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-btn focus:bg-charcoal focus:px-4 focus:py-2 focus:text-cream"
        >
          Skip to main content
        </a>
        <Header />
        <main
          id="main-content"
          className="pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0"
        >
          {children}
        </main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
