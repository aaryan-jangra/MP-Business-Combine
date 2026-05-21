import React, { useState } from "react";
import { MapPin, Phone, EnvelopeSimple, WhatsappLogo, CheckCircle } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { company } from "../data/products";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi ${company.name},\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`;
    const url = `https://api.whatsapp.com/send?phone=${company.whatsapp}&text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <main data-testid="contact-page" className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-ink-secondary mb-6">
            Contact
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl leading-[1.05] tracking-tight">
            Let&rsquo;s talk about your <em className="text-brand">next launch.</em>
          </h1>
          <p className="mt-6 text-lg text-ink-secondary leading-relaxed">
            Share your brief and we&rsquo;ll respond within one business day &mdash; usually faster.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* FORM */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div
                data-testid="contact-success"
                className="border border-line p-10"
              >
                <CheckCircle size={36} weight="light" className="text-brand" />
                <h3 className="mt-5 font-serif text-3xl">Message ready to send.</h3>
                <p className="mt-3 text-ink-secondary leading-relaxed">
                  We&rsquo;ve opened WhatsApp with your details pre-filled. Tap send and our team will reach out shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", phone: "", message: "" });
                  }}
                  data-testid="contact-reset"
                  className="mt-6 px-6 py-3 border border-ink-primary text-sm hover:bg-ink-primary hover:text-bg-primary transition-colors"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                data-testid="contact-form"
                className="space-y-7"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink-secondary block mb-2">
                      Name
                    </label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      data-testid="contact-input-name"
                      className="w-full bg-transparent border-b border-line py-2.5 focus:outline-none focus:border-ink-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink-secondary block mb-2">
                      Phone
                    </label>
                    <input
                      required
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      data-testid="contact-input-phone"
                      className="w-full bg-transparent border-b border-line py-2.5 focus:outline-none focus:border-ink-primary transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink-secondary block mb-2">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    data-testid="contact-input-email"
                    className="w-full bg-transparent border-b border-line py-2.5 focus:outline-none focus:border-ink-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink-secondary block mb-2">
                    Tell us about your brand or order
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    data-testid="contact-input-message"
                    className="w-full bg-transparent border-b border-line py-4 focus:outline-none focus:border-ink-primary transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  data-testid="contact-submit"
                  className="px-8 py-4 bg-brand text-bg-primary text-sm tracking-wide hover:bg-brand-hover transition-colors duration-500 rounded-sm"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>

          {/* INFO */}
          <aside className="lg:col-span-5">
            <div className="border-t border-line pt-8 space-y-8">
              <div>
                <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink-secondary mb-3">
                  Visit
                </p>
                <div className="flex flex-col gap-3 text-ink-primary leading-relaxed">
                  <span className="flex gap-3">
                    <MapPin size={20} weight="light" className="text-brand flex-shrink-0 mt-0.5" />
                    {company.address}
                  </span>
                  <a
                    href={company.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    data-testid="contact-google-maps"
                    className="text-sm font-medium text-brand hover:text-brand-hover"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink-secondary mb-3">
                  Call
                </p>
                <a
                  href={`tel:${company.phone}`}
                  data-testid="contact-phone"
                  className="flex gap-3 text-ink-primary hover:text-brand transition-colors"
                >
                  <Phone size={20} weight="light" className="text-brand flex-shrink-0" />
                  {company.phone}
                </a>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink-secondary mb-3">
                  Email
                </p>
                <a
                  href={`mailto:${company.email}`}
                  data-testid="contact-email"
                  className="flex gap-3 text-ink-primary hover:text-brand transition-colors"
                >
                  <EnvelopeSimple size={20} weight="light" className="text-brand flex-shrink-0" />
                  {company.email}
                </a>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink-secondary mb-3">
                  WhatsApp
                </p>
                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="contact-whatsapp"
                  className="inline-flex items-center gap-3 px-5 py-3 bg-[#25D366] text-white text-sm hover:opacity-90 transition-opacity"
                >
                  <WhatsappLogo size={18} weight="fill" />
                  Chat instantly
                </a>
              </div>
              <div className="pt-6 border-t border-line">
                <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink-secondary mb-3">
                  GST
                </p>
                <p className="font-mono text-sm text-ink-primary">{company.gstNumber}</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}