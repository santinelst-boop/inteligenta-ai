import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "inteligenta.ai \u2014 Descopers cele mai bune instrumente AI",
  description:
    "Recenzii, comparatii si ghiduri complete despre cele mai bune instrumente de inteligenta artificiala. Primul portal AI din Romania.",
  keywords:
    "inteligenta artificiala, instrumente AI, recenzii AI, comparatii AI, ChatGPT, Claude, Midjourney, Romania",
  openGraph: {
    title: "inteligenta.ai \u2014 Descopers cele mai bune instrumente AI",
    description:
      "Primul portal de inteligenta artificiala din Romania. Recenzii, comparatii si ghiduri.",
    url: "https://inteligenta.ai",
    siteName: "inteligenta.ai",
    locale: "ro_RO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
