"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  return (
    <section
      id="newsletter"
      className="scroll-mt-28 flex min-h-[280px] flex-col justify-center rounded-[40px] bg-plasma-violet px-6 py-10 text-chalk sm:px-8 sm:py-12 md:px-10"
    >
      <h2 className="text-[20px] font-bold uppercase leading-snug sm:text-[22px] md:text-[24px]">
        Sign Up To Be The First To Hear About Our Network & Product Updates
      </h2>

      <form
        className="relative mt-8 w-full"
        onSubmit={(e) => {
          e.preventDefault();
          if (!email.trim()) return;
          setJoined(true);
        }}
      >
        <label className="sr-only" htmlFor="footer-newsletter-email">
          Email
        </label>
        <input
          id="footer-newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          spellCheck={false}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com…"
          disabled={joined}
          className="h-14 w-full rounded-[800px] border border-dashed border-chalk/50 bg-transparent px-6 pr-16 text-[15px] font-medium text-chalk placeholder:text-chalk/45 focus-visible:border-chalk focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-chalk focus-visible:ring-offset-2 focus-visible:ring-offset-plasma-violet disabled:opacity-70"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-chalk text-plasma-violet transition-colors hover:bg-chalk/90"
          aria-label={joined ? "Subscribed" : "Subscribe"}
        >
          <ArrowRight size={18} />
        </button>
      </form>

      {joined && (
        <p className="mt-4 text-[14px] font-medium text-chalk/75" aria-live="polite">
          You’re on the list. We’ll send launch notes and product updates.
        </p>
      )}
    </section>
  );
}
