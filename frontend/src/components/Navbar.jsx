import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { List, X, WhatsappLogo } from "@phosphor-icons/react";
import { company } from "../data/products";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg-primary/85 backdrop-blur-xl border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        <Link
          to="/"
          data-testid="navbar-logo"
          className="flex items-baseline gap-2 group"
        >
          <span className="font-serif text-3xl tracking-tight text-ink-primary">
            {company.brand}
          </span>
          <span className="hidden sm:inline-block font-mono text-[10px] uppercase tracking-[0.25em] text-ink-secondary">
            est. {company.established}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              data-testid={`navbar-link-${l.label.toLowerCase()}`}
              className={`text-sm tracking-wide transition-colors ${
                location.pathname === l.to
                  ? "text-ink-primary"
                  : "text-ink-secondary hover:text-ink-primary"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`https://api.whatsapp.com/send?phone=${company.whatsapp}&text=${encodeURIComponent("Hi MP Business Combine, I'd like a quote.")}`}
            target="_blank"
            rel="noreferrer"
            data-testid="navbar-cta-quote"
            className="px-5 py-2.5 bg-ink-primary text-bg-primary text-sm tracking-wide hover:bg-brand transition-colors duration-500"
          >
            Get a Quote
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          data-testid="navbar-mobile-toggle"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2 text-ink-primary"
        >
          {open ? <X size={24} weight="light" /> : <List size={24} weight="light" />}
        </button>
      </div>

      {open && (
        <div
          data-testid="mobile-menu"
          className="md:hidden fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-xl p-6 overflow-y-auto"
        >
          <div className="flex items-center justify-between mb-10">
            <span className="font-serif text-3xl text-ink-primary">{company.brand}</span>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="p-2 text-ink-primary"
            >
              <X size={24} weight="light" />
            </button>
          </div>
          <div className="flex flex-col gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                data-testid={`mobile-link-${l.label.toLowerCase()}`}
                className={`font-serif text-2xl ${
                  location.pathname === l.to
                    ? "text-ink-primary"
                    : "text-ink-secondary"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`https://api.whatsapp.com/send?phone=${company.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              data-testid="mobile-cta-whatsapp"
              className="inline-flex items-center gap-2 px-5 py-3 bg-brand text-bg-primary text-sm rounded-sm"
            >
              <WhatsappLogo size={18} weight="regular" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}