"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // GA4 event tracking
    window.gtag?.("event", "newsletter_signup", {
      event_category: "engagement",
      event_label: "footer_form",
    });

    // TODO: integrate with MailerLite API
    // For now, just clear the form
    setEmail("");
    alert("Mulțumim pentru abonare! Te vom contacta în curând.");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="adresa@email.com"
        required
        className="flex-1 px-4 py-3 rounded-full text-text bg-white focus:outline-none focus:ring-2 focus:ring-white/50"
      />
      <button
        type="submit"
        className="px-6 py-3 rounded-full bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
      >
        Abonează-te
      </button>
    </form>
  );
}
