import React, { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowRight, MagnifyingGlass } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { products, categories, company } from "../data/products";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get("cat") || "all";
  const [activeCat, setActiveCat] = useState(initialCat);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const cat = searchParams.get("cat") || "all";
    setActiveCat(cat);
  }, [searchParams]);

  const filtered = useMemo(() => {
    let list = activeCat === "all" ? products : products.filter((p) => p.category === activeCat);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeCat, query]);

  const handleCat = (id) => {
    setActiveCat(id);
    if (id === "all") setSearchParams({});
    else setSearchParams({ cat: id });
  };

  return (
    <main data-testid="products-page" className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-ink-secondary mb-6">
              Catalog · {products.length} products
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl leading-[1.05] tracking-tight">
              The complete <em className="text-brand">{company.brand}</em> portfolio.
            </h1>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <MagnifyingGlass
                size={18}
                weight="light"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-secondary"
              />
              <input
                type="text"
                placeholder="Search formulations..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                data-testid="products-search-input"
                className="w-full pl-11 pr-4 py-3.5 bg-transparent border border-line text-ink-primary placeholder:text-ink-secondary focus:outline-none focus:border-ink-primary transition-colors"
              />
            </div>
          </div>
        </div>

        {/* FILTERS */}
        <div className="border-b border-line mb-12 -mx-6 px-6 lg:mx-0 lg:px-0">
          <div className="flex gap-1 overflow-x-auto no-scrollbar pb-px">
            {categories.map((c) => {
              const active = activeCat === c.id;
              const count = c.id === "all" ? products.length : products.filter((p) => p.category === c.id).length;
              return (
                <button
                  key={c.id}
                  onClick={() => handleCat(c.id)}
                  data-testid={`filter-${c.id}`}
                  className={`flex-shrink-0 rounded-full px-5 py-3 text-sm font-medium tracking-wide transition-all duration-300 relative ${
                    active ? "bg-brand/10 text-ink-primary" : "text-ink-secondary hover:text-ink-primary"
                  }`}
                >
                  {c.name}
                  <span className="ml-1.5 font-mono text-[10px] text-ink-secondary">({count})</span>
                  {active && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute left-0 right-0 -bottom-px h-0.5 bg-ink-primary"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* GRID */}
        {filtered.length === 0 ? (
          <div data-testid="products-empty" className="py-24 text-center">
            <p className="font-serif text-2xl text-ink-secondary">No products match your search.</p>
          </div>
        ) : (
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeCat + query}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-14"
              data-testid="products-grid"
            >
              {filtered.map((p, idx) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04, duration: 0.5 }}
                  className="group"
                  data-testid={`product-card-${p.id}`}
                >
                  <div className="relative aspect-square overflow-hidden bg-bg-secondary">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <p className="mt-4 font-mono text-[10px] tracking-[0.25em] uppercase text-ink-secondary">
                    {categories.find((c) => c.id === p.category)?.name}
                  </p>
                  <p className="mt-1.5 font-serif text-xl text-ink-primary leading-snug">
                    {p.name}
                  </p>
                  <p className="mt-2 text-sm text-ink-secondary leading-relaxed line-clamp-2">
                    {p.description}
                  </p>
                  <a
                    href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                      `Hi MP Business Combine, I'd like a quote for ${p.name}.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    data-testid={`product-quote-${p.id}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm text-ink-primary border-b border-ink-primary pb-0.5 hover:text-brand hover:border-brand transition-colors"
                  >
                    Get Best Quote <ArrowRight size={14} />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </main>
  );
}