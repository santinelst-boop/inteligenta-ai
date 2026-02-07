typescript
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "inteligenta.ai — Descoperă cele mai bune instrumente AI",
  description:
    "Recenzii, comparații și ghiduri complete despre cele mai bune instrumente de inteligență artificială. Primul portal AI din România.",
  keywords:
    "inteligență artificială, instrumente AI, recenzii AI, comparații AI, ChatGPT, Claude, Midjourney, România",
  openGraph: {
    title: "inteligenta.ai — Descoperă cele mai bune instrumente AI",
    description:
      "Primul portal de inteligență artificială din România. Recenzii, comparații și ghiduri.",
    url: "https://inteligenta-ai.vercel.app",
    siteName: "inteligenta.ai",
    locale: "ro_RO",
    type: "website",
  },
  alternates: {
    canonical: "https://inteligenta-ai.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "inteligenta.ai",
    url: "https://inteligenta-ai.vercel.app",
    logo: "https://inteligenta-ai.vercel.app/logo.png",
    description:
      "Primul portal de inteligență artificială din România. Recenzii, comparații și ghiduri complete.",
    sameAs: [
      "https://www.facebook.com/inteligentaai",
      "https://www.twitter.com/inteligentaai",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "contact@inteligenta.ai",
    },
  };

  return (
    <html lang="ro">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1f2937" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ro_RO" />

        {/* Impact.com Affiliate Verification */}
        <meta name="impact-site-verification" content="f913f1b6-985c-4075-b0c8-bee824e4def7" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}