// Programs Overview Page — Miami Elite Coaching
// Route: /programs
// SEO: miami elite coaching programs, longevity fitness miami, executive health brickell
// Design: Dark luxury gold — same system as rest of site
// NOTE: Individual program pages (/longevity-blueprint, /ceo-performance-protocol, etc.)
// are NOT linked from the main nav — they serve as standalone lead landing pages.
// Backlink those URLs directly to your lead sources.

import { useEffect } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

// Program cards displayed on /programs.
// `price` / `tagline` / `audience` / `badge` are optional — if omitted the UI hides them.
const PROGRAMS = [
  {
    id: "longevity-blueprint",
    href: "/longevity-blueprint",
    label: "Longevity Blueprint",
    accent: "#1D9E75",
    accentLight: "#4ECBA0",
    accentBg: "rgba(29,158,117,0.08)",
    accentBorder: "rgba(29,158,117,0.25)",
    desc: "Find out your real biological age. A DEXA body composition scan, VO2 Max cardiovascular test, and a 1-on-1 longevity consultation at RETO Brickell. Walk in, get tested, walk out with a complete picture of where you are — and exactly what to do about it.",
    duration: "60 minutes",
    features: [
      "DEXA Body Composition Scan",
      "VO2 Max Cardiovascular Test",
      "45-min 1-on-1 Longevity Consultation",
      "Personalized Biological Age Report",
      "Complimentary Iyashi Dome Recovery Session ($100 value)",
    ],
    cta: "Inquire about the Longevity Blueprint",
  },
  {
    id: "longevity-duo",
    href: "/longevity-duo",
    label: "Longevity Duo",
    tagline: "Biological Age Assessment for Two",
    price: "Inquire for pricing",
    accent: "#1D9E75",
    accentLight: "#3DC49A",
    accentBg: "rgba(29,158,117,0.07)",
    accentBorder: "rgba(29,158,117,0.22)",
    desc: "A complete biological age assessment for two — DEXA scan, VO2 Max test, and a 60-minute joint longevity consultation at RETO Brickell. For couples, close friends, business partners, or anyone ready to make this commitment together. Also the most meaningful gift you can give.",
    audience: "Couples, friends & partners 40+",
    duration: "90 minutes · One shared session",
    features: [
      "2 × DEXA Body Composition Scans",
      "2 × VO2 Max Cardiovascular Tests",
      "1 × Joint Longevity Consultation (60 min)",
      "2 × Personalized Biological Age Reports",
      "1 × Iyashi Dome session for the pair ($100 value)",
      "$75 training credit each ($150 combined)",
    ],
    cta: "Inquire",
  },
  {
    id: "drop-in",
    href: "/data-first-dropin",
    label: "Drop-In",
    tagline: "Single-Session Health Assessment",
    price: "$350",
    priceNote: "Save $150 — no membership, no commitment",
    accent: "#534AB7",
    accentLight: "#7B73D1",
    accentBg: "rgba(83,74,183,0.08)",
    accentBorder: "rgba(83,74,183,0.25)",
    desc: "Not ready to commit? Start with the data. A single, complete 90-minute health assessment at RETO Brickell — DEXA scan, VO2 Max test, personalized consultation, and a printed Biomarker Report you take home. No program attached. No pressure. Everything you need to make an informed decision.",
    audience: "Anyone 30+ ready to know their numbers",
    duration: "90 minutes · One session",
    features: [
      "DEXA Body Composition Scan",
      "VO2 Max Cardiovascular Fitness Test",
      "45-min Results Consultation + Personal Roadmap",
      "Printed Biomarker Report — same day",
      "$100 credit toward any program within 7 days",
      "10% repeat-booking discount from session 2",
    ],
    cta: "Book your assessment today",
  },
];

export default function ProgramsPage() {
  useEffect(() => {
    document.title =
      "Programs — Miami Elite Coaching | Longevity, Executive Health & Personal Training in Miami";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Explore Miami Elite Coaching programs — the Longevity Blueprint, Longevity Duo, and Drop-In assessment. Precision health and performance at RETO Brickell."
      );
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[oklch(0.08_0.005_285)]">
      <Navigation />

      {/* ── PAGE HEADER ── */}
      <section className="pt-32 pb-16 border-b border-white/8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[oklch(0.50_0.01_75)] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-xs mb-4">
            Miami Elite Coaching
          </p>
          <h1 className="font-['Barlow_Condensed'] font-800 text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.95] mb-6">
            Every Program.{" "}
            <span className="italic text-[oklch(0.72_0.12_75)]">One Place.</span>
          </h1>
          <p className="text-[oklch(0.62_0.01_75)] text-lg leading-relaxed max-w-2xl">
            All Miami Elite Coaching programs are built around one principle: precision over guesswork. 
            Clinical-grade testing, expert coaching, and recovery technology — for adults 40+ who are 
            serious about performing at the highest level, for the longest possible time.
          </p>
        </div>
      </section>

      {/* ── PROGRAM CARDS ── */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          {PROGRAMS.map((program, i) => (
            <div
              key={program.id}
              className="border border-white/8 bg-[oklch(0.10_0.005_285)] overflow-hidden"
            >
              {/* Top bar accent line */}
              <div
                className="h-0.5 w-full"
                style={{ backgroundColor: program.accent }}
              />

              <div className="p-8 sm:p-10">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    {/* Badge (optional) */}
                    {program.badge && (
                      <div
                        className="inline-flex items-center gap-2 font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest px-3 py-1.5 mb-4"
                        style={{
                          backgroundColor: program.accentBg,
                          border: `1px solid ${program.accentBorder}`,
                          color: program.accentLight,
                        }}
                      >
                        {program.badgePulse && (
                          <span
                            className="w-1.5 h-1.5 rounded-full animate-pulse inline-block"
                            style={{ backgroundColor: program.accent }}
                          />
                        )}
                        {program.badge}
                      </div>
                    )}

                    <h2 className="font-['Barlow_Condensed'] font-800 text-3xl sm:text-4xl text-white mb-1">
                      {program.label}
                    </h2>
                    {program.tagline && (
                      <p
                        className="font-['Barlow_Condensed'] font-600 text-sm uppercase tracking-widest"
                        style={{ color: program.accentLight }}
                      >
                        {program.tagline}
                      </p>
                    )}
                  </div>

                  {/* Price (optional) */}
                  {program.price && (
                    <div className="text-right flex-shrink-0">
                      <div
                        className="font-['Barlow_Condensed'] font-800 text-4xl"
                        style={{ color: program.accentLight }}
                      >
                        {program.price}
                      </div>
                      {program.priceNote && (
                        <p className="text-[oklch(0.45_0.01_75)] text-xs mt-1 max-w-[200px] text-right leading-snug">
                          {program.priceNote}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-[oklch(0.62_0.01_75)] text-base leading-relaxed mb-8 max-w-3xl">
                  {program.desc}
                </p>

                {/* Two-column: features + meta */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* Features — takes 2 cols */}
                  <div className="md:col-span-2">
                    <p className="font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest text-[oklch(0.40_0.01_75)] mb-3">
                      What's included
                    </p>
                    <ul className="space-y-2">
                      {program.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-3">
                          <div
                            className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ backgroundColor: program.accentBg, border: `1px solid ${program.accentBorder}` }}
                          >
                            <svg viewBox="0 0 8 8" fill="none" className="w-2.5 h-2.5">
                              <path
                                d="M1.5 4l1.5 1.5L6.5 2"
                                stroke={program.accentLight}
                                strokeWidth="1.4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <span className="text-[oklch(0.68_0.01_75)] text-sm leading-snug">
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-col gap-4">
                    {program.audience && (
                      <div
                        className="p-4"
                        style={{ backgroundColor: program.accentBg, border: `1px solid ${program.accentBorder}` }}
                      >
                        <p className="font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest text-[oklch(0.40_0.01_75)] mb-1">
                          Best for
                        </p>
                        <p className="text-white text-sm leading-snug">{program.audience}</p>
                      </div>
                    )}
                    {program.duration && (
                      <div
                        className="p-4"
                        style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                      >
                        <p className="font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest text-[oklch(0.40_0.01_75)] mb-1">
                          Time commitment
                        </p>
                        <p className="text-white text-sm">{program.duration}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <Link href={program.href}>
                  <span
                    className="inline-flex items-center gap-2 font-['Barlow_Condensed'] font-700 text-xs uppercase tracking-widest px-8 py-4 transition-colors cursor-pointer"
                    style={{
                      backgroundColor: program.accent,
                      color: "#fff",
                    }}
                  >
                    {program.cta}
                    <ArrowRight size={13} />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── LOCATION ── */}
      <section className="py-12 border-t border-white/8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div>
            <p className="text-[oklch(0.50_0.01_75)] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-xs mb-1">
              All programs take place at
            </p>
            <p className="font-['Barlow_Condensed'] font-700 text-lg text-white">
              RETO Brickell — Miami's Premier Longevity Facility
            </p>
            <p className="text-[oklch(0.48_0.01_75)] text-sm mt-0.5">
              Brickell, Miami · 15 minutes from Coconut Grove · Parking available
            </p>
          </div>
          <Link href="/brickell#apply">
            <span className="btn-gold text-xs py-2.5 px-5 whitespace-nowrap">
              Apply Now
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
