"use client";

import { useState } from "react";
import Link from "next/link";
import { CompanyPage } from "@/components/company-page";
import { Button, Input, Label, Textarea } from "@/components/ui";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <CompanyPage
      eyebrow="Company"
      meta="hello@outbase.in"
      title={<>Contact</>}
      intro="Sales, partnerships, press, and security all land with the same team. We typically reply within one business day."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-[32px] border border-ash/40 bg-limestone p-8">
          <span className="mono-label text-smoke">Direct</span>
          <ul className="mt-4 space-y-3 text-[16px] font-medium text-obsidian/80">
            <li><Link href="mailto:hello@outbase.in" className="hover:text-ember">hello@outbase.in</Link> — general</li>
            <li><Link href="mailto:sales@outbase.in" className="hover:text-ember">sales@outbase.in</Link> — enterprise & volume</li>
            <li><Link href="mailto:press@outbase.in" className="hover:text-ember">press@outbase.in</Link> — media</li>
            <li><Link href="mailto:security@outbase.in" className="hover:text-ember">security@outbase.in</Link> — vulnerabilities</li>
            <li>San Francisco, CA</li>
          </ul>
        </div>
        <form
          className="rounded-[32px] border border-ash/40 bg-limestone p-8"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" autoComplete="name" required placeholder="Your name…" className="mt-1" />
          </div>
          <div className="mt-4">
            <Label htmlFor="email">Work email</Label>
            <Input id="email" name="email" type="email" autoComplete="email" spellCheck={false} required placeholder="name@company.com…" className="mt-1" />
          </div>
          <div className="mt-4">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" required placeholder="Tell us how we can help…" className="mt-1" />
          </div>
          <Button type="submit" className="mt-6 w-full">
            {sent ? "Message received" : "Send message"}
          </Button>
          {sent && (
            <p className="mt-3 text-[14px] font-medium text-obsidian/70" aria-live="polite">Thanks — we’ll follow up at the email you entered.</p>
          )}
        </form>
      </div>
    </CompanyPage>
  );
}
