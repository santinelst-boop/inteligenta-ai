"use client";
import Script from "next/script";
import { useEffect } from "react";
const GA_MEASUREMENT_ID = "G-BVWYSW82FM";
export default function GoogleAnalytics() {
  useEffect(() => {
    const handleConsentUpdate = () => {
      const consent = localStorage.getItem("cookieConsent");
      if (consent === "all" && typeof window.gtag === "function") {
        window.gtag("consent", "update", {
          analytics_storage: "granted",
        });
      }
    };
    window.addEventListener("cookieConsentUpdate", handleConsentUpdate);
    handleConsentUpdate();
    return () => {
      window.removeEventListener("cookieConsentUpdate", handleConsentUpdate);
    };
  }, []);
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            'analytics_storage': 'denied'
          });
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
