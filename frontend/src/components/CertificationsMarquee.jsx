import React from "react";
import { company } from "../data/products";

const CERTS = company.certifications;

export default function CertificationsMarquee() {
  const items = [...CERTS, ...CERTS];
  return (
    <section
      data-testid="certifications-marquee"
      className="relative overflow-hidden border-y border-line bg-bg-secondary/70 py-6"
    >
      <div className="animate-marquee whitespace-nowrap flex items-center gap-12 min-w-max px-6 opacity-70">
        {items.map((c, i) => (
          <span
            key={i}
            className="font-mono text-[11px] tracking-[0.3em] uppercase text-ink-secondary"
          >
            ✦ {c}
          </span>
        ))}
      </div>
    </section>
  );
}