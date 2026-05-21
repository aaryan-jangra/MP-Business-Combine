import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Buildings, Users, Briefcase, Calendar } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import CertificationsMarquee from "../components/CertificationsMarquee";
import { company } from "../data/products";

const FACILITY_IMG = "https://static.prod-images.emergentagent.com/jobs/b13f754c-4274-44ab-b398-abb303cbfade/images/69aed93594f67c23648002f8666c87943c3295f0062861d56576492f71d92175.png";
const HERO_IMG = "https://static.prod-images.emergentagent.com/jobs/b13f754c-4274-44ab-b398-abb303cbfade/images/e8ce0d62cd97b5ce42ee064e9e33eb9af46a9a6d14509f48155002ed1131473c.png";

const STATS = [
  { icon: Calendar, label: "Established", value: company.established },
  { icon: Briefcase, label: "Annual Turnover", value: company.turnover },
  { icon: Users, label: "Team Strength", value: company.employees },
  { icon: Buildings, label: "Legal Status", value: company.legalStatus },
];

export default function About() {
  return (
    <main data-testid="about-page" className="pt-32">
      {/* HERO */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-ink-secondary mb-6">
              About · Since {company.established}
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              Twenty-six years of <em className="text-brand">quiet</em> craftsmanship.
            </h1>
            <p className="mt-8 text-lg text-ink-secondary leading-relaxed max-w-xl">
              {company.about}
            </p>
          </motion.div>
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img src={HERO_IMG} alt="Premium product collection" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      <CertificationsMarquee />

      {/* STATS */}
      <section className="py-24 sm:py-32" data-testid="about-stats">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line">
            {STATS.map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-bg-primary p-8 sm:p-10">
                <Icon size={28} weight="light" className="text-brand" />
                <p className="mt-6 font-mono text-[10px] tracking-[0.3em] uppercase text-ink-secondary">
                  {label}
                </p>
                <p className="mt-2 font-serif text-3xl sm:text-4xl">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITY STORY */}
      <section className="py-24 sm:py-32 bg-bg-secondary" data-testid="about-facility">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="aspect-[5/6] overflow-hidden">
              <img src={FACILITY_IMG} alt="Facility" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-6">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-ink-secondary mb-6">
              The facility
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05] tracking-tight">
              State-of-the-art infrastructure, in <em className="text-brand">Tigaon, Faridabad.</em>
            </h2>
            <p className="mt-6 text-ink-secondary leading-relaxed">
              Our manufacturing units are equipped with advanced machinery for precision blending, filling and packaging &mdash; engineered to scale from 500-unit pilots to bulk export orders without compromise.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "GMP-certified clean rooms & QC labs",
                "In-house formulation, R&D and stability testing",
                "Sulphate, Paraben & chemical-free product range",
                "Pan-India distribution & export-ready compliance",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-ink-primary">
                  <CheckCircle size={20} weight="light" className="text-brand mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* COMPANY DETAILS TABLE */}
      <section className="py-24 sm:py-32" data-testid="about-details">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-ink-secondary mb-6">
            Company info
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05] tracking-tight mb-12">
            Verified business <em className="text-brand">credentials.</em>
          </h2>
          <dl className="divide-y divide-line border-y border-line">
            {[
              ["Nature of Business", company.natureOfBusiness],
              ["Legal Status of Firm", company.legalStatus],
              ["Year of Establishment", company.established],
              ["Annual Turnover", company.turnover],
              ["Total Employees", company.employees],
              ["GST Registration Date", company.gstRegistration],
              ["GST Number", company.gstNumber],
              ["Registered Address", company.address],
              ["IndiaMART Member Since", company.experience],
            ].map(([k, v]) => (
              <div key={k} className="py-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <dt className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink-secondary">{k}</dt>
                <dd className="sm:col-span-2 text-ink-primary">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-ink-primary text-bg-primary text-center" data-testid="about-cta">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05] tracking-tight">
            Want to build with us?
          </h2>
          <p className="mt-6 text-bg-tertiary leading-relaxed">
            Tell us about your brand. We&rsquo;ll suggest the right formulations, MOQs, and timelines.
          </p>
          <Link
            to="/contact"
            data-testid="about-cta-contact"
            className="inline-flex items-center gap-3 mt-10 px-8 py-4 bg-bg-primary text-ink-primary text-sm tracking-wide hover:bg-brand-accent transition-colors duration-500"
          >
            Get in touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}