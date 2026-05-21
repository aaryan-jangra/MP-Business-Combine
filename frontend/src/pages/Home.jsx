import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkle, Leaf, Atom, ShieldCheck, Star } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import CertificationsMarquee from "../components/CertificationsMarquee";
import { products, company, categories } from "../data/products";

const HERO_IMG = "https://static.prod-images.emergentagent.com/jobs/b13f754c-4274-44ab-b398-abb303cbfade/images/e8ce0d62cd97b5ce42ee064e9e33eb9af46a9a6d14509f48155002ed1131473c.png";
const FACILITY_IMG = "https://static.prod-images.emergentagent.com/jobs/b13f754c-4274-44ab-b398-abb303cbfade/images/69aed93594f67c23648002f8666c87943c3295f0062861d56576492f71d92175.png";

export default function Home() {
  const featuredCategories = categories.filter((c) => c.id !== "all").slice(0, 6);
  const featuredProducts = products.slice(0, 8);

  return (
    <main data-testid="home-page" className="pt-20">
      {/* HERO */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-ink-secondary mb-8">
              Cosmetics Manufacturing · Est. {company.established}
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-ink-primary">
              Quietly crafting <em className="text-brand">India&rsquo;s</em> most loved beauty products.
            </h1>
            <p className="mt-8 text-lg text-ink-secondary max-w-xl leading-relaxed">
              From Faridabad to over 250 SKUs &mdash; {company.name} formulates Sulphate, Paraben &amp; chemical-free cosmetics under the {company.brand} label, for ambitious brands and discerning skin.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/products"
                data-testid="hero-cta-products"
                className="group inline-flex items-center gap-3 px-7 py-3.5 bg-brand text-bg-primary text-sm tracking-wide hover:bg-brand-hover transition-colors duration-500 rounded-sm"
              >
                Browse Catalog
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                data-testid="hero-cta-quote"
                className="inline-flex items-center gap-3 px-7 py-3.5 border border-brand text-brand text-sm tracking-wide hover:bg-brand hover:text-bg-primary transition-colors duration-500 rounded-sm"
              >
                Request a Quote
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-8 max-w-md">
              <div>
                <p className="font-serif text-4xl text-ink-primary">{company.productCount}</p>
                <p className="text-xs text-ink-secondary mt-1 tracking-wide">Products</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-ink-primary">26+</p>
                <p className="text-xs text-ink-secondary mt-1 tracking-wide">Years crafting</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-ink-primary">{company.rating}<span className="text-xl text-brand">★</span></p>
                <p className="text-xs text-ink-secondary mt-1 tracking-wide">{company.reviewCount} reviews</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={HERO_IMG}
                alt="Premium organic skincare"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 sm:bottom-8 sm:left-8 bg-bg-primary/95 backdrop-blur p-6 max-w-[260px] border border-line">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-secondary">Trusted on IndiaMART</p>
              <div className="mt-3 flex items-center gap-1 text-brand">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} weight="fill" />)}
              </div>
              <p className="mt-2 text-sm text-ink-primary">{company.rating} / 5 · {company.responseRate} response rate</p>
            </div>
          </motion.div>
        </div>
      </section>

      <CertificationsMarquee />

      {/* CATEGORIES */}
      <section className="py-24 sm:py-32" data-testid="home-categories-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-end">
            <div className="lg:col-span-7">
              <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-ink-secondary mb-6">Catalog · {company.brand}</p>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                Curated for every <em className="text-brand">shelf</em> and skin type.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <p className="text-ink-secondary leading-relaxed">
                From botanical face serums to bioactive shampoos &mdash; explore our complete portfolio of personal care formulations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-line">
            {featuredCategories.map((cat) => {
              const sample = products.find((p) => p.category === cat.id);
              const count = products.filter((p) => p.category === cat.id).length;
              return (
                <Link
                  key={cat.id}
                  to={`/products?cat=${cat.id}`}
                  data-testid={`home-category-${cat.id}`}
                  className="group relative aspect-square bg-bg-primary overflow-hidden"
                >
                  {sample && (
                    <img
                      src={sample.image}
                      alt={cat.name}
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-primary/70 via-ink-primary/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5 text-bg-primary">
                    <p className="font-serif text-2xl">{cat.name}</p>
                    <p className="font-mono text-[10px] tracking-[0.25em] uppercase opacity-80 mt-1">{count} products</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 sm:py-32 bg-bg-secondary" data-testid="home-why-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-ink-secondary mb-6">Why us</p>
            <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05] tracking-tight">
              Manufacturing partners, <em className="text-brand">not just suppliers.</em>
            </h2>
            <p className="mt-6 text-ink-secondary leading-relaxed">
              26+ years of experience, in-house formulation lab, and a chemical-free philosophy &mdash; we treat every brand we make like our own.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-line">
            {[
              { icon: ShieldCheck, title: "Certified Quality", body: "ISO 9001:2015, GMP, FDA, CDSCO compliant." },
              { icon: Atom, title: "In-House R&D", body: "Dedicated formulation scientists & 250+ proven recipes." },
              { icon: Leaf, title: "Clean Formulations", body: "Sulphate, paraben & chemical-free across the range." },
              { icon: Sparkle, title: "Made in India", body: "Crafted in Tigaon, Faridabad &mdash; shipped pan-India." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="p-8 bg-bg-secondary">
                <Icon size={32} weight="light" className="text-brand" />
                <p className="mt-5 font-serif text-2xl">{title}</p>
                <p className="mt-2 text-sm text-ink-secondary leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-24 sm:py-32" data-testid="home-featured-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div>
              <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-ink-secondary mb-6">Bestsellers</p>
              <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05] tracking-tight">
                Loved by <em className="text-brand">brands</em>, made in our facility.
              </h2>
            </div>
            <Link
              to="/products"
              data-testid="featured-view-all"
              className="inline-flex items-center gap-2 text-sm tracking-wide text-ink-primary border-b border-ink-primary pb-1 hover:text-brand hover:border-brand transition-colors"
            >
              View all products <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
            {featuredProducts.map((p) => (
              <Link
                key={p.id}
                to="/products"
                data-testid={`featured-product-${p.id}`}
                className="group block"
              >
                <div className="aspect-square overflow-hidden bg-bg-secondary">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <p className="mt-4 font-mono text-[10px] tracking-[0.25em] uppercase text-ink-secondary">
                  {categories.find((c) => c.id === p.category)?.name}
                </p>
                <p className="mt-1.5 font-serif text-xl text-ink-primary leading-snug">{p.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="py-24 sm:py-32 bg-bg-tertiary" data-testid="home-about-teaser">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="aspect-[5/6] overflow-hidden">
              <img src={FACILITY_IMG} alt="Manufacturing facility" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-ink-secondary mb-6">About {company.name}</p>
            <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05] tracking-tight">
              A quiet workshop in <em className="text-brand">Faridabad</em>, building beauty for the world.
            </h2>
            <p className="mt-6 text-ink-secondary leading-relaxed">
              Established in {company.established}, {company.name} has spent 26+ years perfecting Sulphate, Paraben &amp; chemical-free formulations. Today, our 250+ product portfolio powers private labels and homegrown brands across India.
            </p>
            <Link
              to="/about"
              data-testid="about-teaser-cta"
              className="inline-flex items-center gap-2 mt-8 text-sm tracking-wide text-ink-primary border-b border-ink-primary pb-1 hover:text-brand hover:border-brand transition-colors"
            >
              Read our story <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-ink-primary text-bg-primary" data-testid="home-cta-section">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-bg-tertiary mb-6">Ready to launch?</p>
          <h2 className="font-serif text-5xl sm:text-6xl leading-[1.05] tracking-tight">
            Let&rsquo;s build a brand <em className="text-brand-accent">worth remembering.</em>
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              data-testid="cta-section-contact"
              className="px-8 py-4 bg-bg-primary text-ink-primary text-sm tracking-wide hover:bg-brand-accent transition-colors duration-500"
            >
              Get a Quote
            </Link>
            <a
              href={`https://api.whatsapp.com/send?phone=${company.whatsapp}&text=${encodeURIComponent("Hi MP Business Combine, I'd like to discuss a product.")}`}
              target="_blank"
              rel="noreferrer"
              data-testid="cta-section-whatsapp"
              className="px-8 py-4 border border-bg-primary/30 text-bg-primary text-sm tracking-wide hover:bg-bg-primary hover:text-ink-primary transition-colors duration-500"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}