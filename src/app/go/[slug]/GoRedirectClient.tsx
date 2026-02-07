"use client";

import { useEffect } from "react";

interface GoRedirectClientProps {
  slug: string;
  targetUrl: string;
  toolName?: string;
}

export default function GoRedirectClient({ slug, targetUrl, toolName }: GoRedirectClientProps) {
  useEffect(() => {
    // Fire GA4 outbound click event
    window.gtag?.("event", "outbound_click", {
      event_category: "affiliate",
      event_label: slug,
      tool_name: toolName || slug,
      transport_type: "beacon",
    });

    // Small delay to ensure tracking fires before redirect
    const timer = setTimeout(() => {
      window.location.href = targetUrl;
    }, 150);

    return () => clearTimeout(timer);
  }, [slug, targetUrl, toolName]);

  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-text-light">
          Redirecționare către {toolName || "partener"}...
        </p>
      </div>
    </section>
  );
}
