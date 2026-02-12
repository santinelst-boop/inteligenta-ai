import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import FacebookPixel from "@/components/FacebookPixel";
export const metadata: Metadata = {
  metadataBase: new URL("https://inteligenta.ai"),
  title: {
    default: "inteligenta.ai — Instrumente AI, Recenzii și Ghiduri | Inteligență Artificială România",
    template: "%s | inteligenta.ai",
  },
  description:
    "Recenzii, comparații și ghiduri despre cele mai bune instrumente de inteligență artificială. Descoperă AI gratuit și plătit — chatbot AI, generatoare imagini, productivitate. Primul portal AI din România.",
  keywords:
    "inteligență artificială, instrumente AI, AI gratuit, chatbot AI, generator imagini AI, ChatGPT română, aplicații inteligență artificială, recenzii AI, software AI, AI România",
  openGraph: {
    title: "inteligenta.ai — Instrumente AI, Recenzii și Ghiduri | Inteligență Artificială România",
    description: "Primul portal de inteligenta artificiala din Romania. Recenzii, comparatii si ghiduri.",
    url: "https://inteligenta.ai",
    siteName: "inteligenta.ai",
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "inteligenta.ai — Instrumente AI, Recenzii și Ghiduri | Inteligență Artificială România",
    description: "Primul portal de inteligenta artificiala din Romania.",
  },
  alternates: {
    canonical: "https://inteligenta.ai",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "inteligenta.ai",
    url: "https://inteligenta.ai",
    logo: "https://inteligenta.ai/icon-512.png",
    description: "Primul portal de inteligenta artificiala din Romania. Recenzii, comparatii si ghiduri complete.",
    sameAs: [
      "https://www.facebook.com/inteligentaai",
      "https://www.twitter.com/inteligentaai",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      // TODO: \u00eenlocuie\u0219te cu contact@inteligenta.ai dup\u0103 configurare email hosting
      email: "contact@inteligenta.ai",
    },
  };
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "inteligenta.ai",
    url: "https://inteligenta.ai",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://inteligenta.ai/cauta?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <html lang="ro">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0066FF" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }} />
      </head>
      <body className="antialiased">
        <GoogleAnalytics />
        <FacebookPixel />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
