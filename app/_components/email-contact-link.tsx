"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const CONTACT_EMAIL = "info@oneplanetpartners.com";

type EmailContactLinkProps = {
  className?: string;
  children: ReactNode;
};

/**
 * Opens the system mail client when one is configured, and always copies
 * the address to the clipboard so web-only mail users still have a path.
 */
export function EmailContactLink({ className, children }: EmailContactLinkProps) {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard may be blocked; mailto still runs when a handler exists.
    }
  }

  return (
    <span className="relative inline-flex flex-col items-center">
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        onClick={handleClick}
        className={className}
        aria-describedby={copied ? "email-copied-status" : undefined}
      >
        {children}
      </a>
      <span
        id="email-copied-status"
        role="status"
        aria-live="polite"
        className={cn(
          "pointer-events-none absolute top-full mt-3 font-sans-brand text-sm text-white/70 transition-opacity duration-200",
          copied ? "opacity-100" : "sr-only",
        )}
      >
        Email copied to clipboard
      </span>
    </span>
  );
}
