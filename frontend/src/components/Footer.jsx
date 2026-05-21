import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, EnvelopeSimple, InstagramLogo, FacebookLogo, LinkedinLogo } from "@phosphor-icons/react";
import { company } from "../data/products";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="bg-bg-secondary border-t border-line"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-4xl text-ink-primary">
              {company.brand}
            </span>
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink-secondary">
              by {company.name}
            </span>
          </div>
          <p className="mt-6 text-ink-secondary leading-relaxed max-w-md">
            Sulphate, Paraben & chemical-free cosmetic manufacturing since {company.established}.
            From formulation to finish &mdash; crafted in Faridabad, trusted across India.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#"
              data-testid="footer-social-instagram"
              className="w-10 h-10 border border-line flex items-center justify-center hover:bg-ink-primary hover:text-bg-primary transition-colors"
              aria-label="Instagram"
            >
              <InstagramLogo size={18} weight="light" />
            </a>
            <a
              href="#"
              data-testid="footer-social-facebook"
              className="w-10 h-10 border border-line flex items-center justify-center hover:bg-ink-primary hover:text-bg-primary transition-colors"
              aria-label="Facebook"
            >
              <FacebookLogo size={18} weight="light" />
            </a>
            <a
              href="#"
              data-testid="footer-social-linkedin"
              className="w-10 h-10 border border-line flex items-center justify-center hover:bg-ink-primary hover:text-bg-primary transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinLogo size={18} weight="light" />
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-secondary mb-5">
            Navigate
          </p>
          <ul className="space-y-3">
            <li><Link to="/" className="hover:text-brand transition-colors" data-testid="footer-link-home">Home</Link></li>
            <li><Link to="/products" className="hover:text-brand transition-colors" data-testid="footer-link-products">Products</Link></li>
            <li><Link to="/about" className="hover:text-brand transition-colors" data-testid="footer-link-about">About</Link></li>
            <li><Link to="/contact" className="hover:text-brand transition-colors" data-testid="footer-link-contact">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-secondary mb-5">
            Reach Us
          </p>
          <ul className="space-y-4 text-ink-secondary">
            <li className="flex gap-3">
              <MapPin size={18} weight="light" className="mt-1 flex-shrink-0 text-brand" />
              <span>{company.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} weight="light" className="mt-1 flex-shrink-0 text-brand" />
              <a href={`tel:${company.phone}`} data-testid="footer-phone" className="hover:text-ink-primary">{company.phone}</a>
            </li>
            <li className="flex gap-3">
              <EnvelopeSimple size={18} weight="light" className="mt-1 flex-shrink-0 text-brand" />
              <a href={`mailto:${company.email}`} data-testid="footer-email" className="hover:text-ink-primary">{company.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-ink-secondary">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p className="font-mono">GST: {company.gstNumber}</p>
        </div>
      </div>
    </footer>
  );
}