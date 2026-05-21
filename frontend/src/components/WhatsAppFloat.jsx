import React from "react";
import { WhatsappLogo } from "@phosphor-icons/react";
import { company } from "../data/products";

export default function WhatsAppFloat() {
  const message = "Hi MP Business Combine, I'd like to discuss a product.";

  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${company.whatsapp}&text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noreferrer"
      data-testid="floating-whatsapp"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-xl bg-brand text-bg-primary flex items-center justify-center border border-white/15 shadow-soft hover:bg-brand-hover transition-colors duration-500"
    >
      <WhatsappLogo size={28} weight="fill" />
    </a>
  );
}