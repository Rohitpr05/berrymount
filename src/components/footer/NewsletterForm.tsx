"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="flex items-center gap-2 text-sm text-gold-300">
        <Check className="size-4" aria-hidden="true" />
        You&apos;re subscribed. Thank you.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex items-center gap-2 rounded-full border border-cream-50/20 bg-cream-50/5 pl-4 focus-within:border-gold-500">
        <input
          id="newsletter-email"
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-transparent py-3 text-sm text-cream-50 placeholder:text-cream-50/40 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          aria-label="Subscribe"
          className="flex shrink-0 items-center justify-center rounded-full bg-gold-500 p-2.5 text-plum-950 transition-colors hover:bg-gold-400 disabled:opacity-60"
        >
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
      </div>
      {status === "error" && (
        <p className="text-xs text-berry-strawberry/90">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
