// Home Page — Miami Elite Coaching
// SEO: Longevity Practice & Biological Age Optimization Miami
// Keywords: Healthspan vs Lifespan, Metabolic Health Miami, Biohacking South Florida,
//           CSCS Longevity Coach, Precision Medicine Miami, Human Performance Lab
// Design: Dark luxury, full-screen hero

import { useEffect } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ARTICLES } from "@/lib/data";
import { Clock, ArrowRight } from "lucide-react";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663459681691/83tywCBKrbukToGzWmD9PC/hero-brickell-PeJffJYKH7YsRmJxS5GutR.webp";

const PILLARS = [
  {
    num: "I",
    title: "Metabolic Intelligence",
    body: "We optimize mitochondrial health and insulin sensitivity. Using data-backed nutritional protocols and GLP-1 companion strategies, we ensure your body functions as a high-performance engine — not just a passenger.",
    accent: "#1D9E75",
  },
  {
    num: "II",
    title: "The Performance Foundation",
    body: "Movement is our baseline. Your physical architecture dictates your performance ceiling. Leveraging advanced strength protocols and biomechanical assessments, we bridge the gap between 'fitness' and engineering a body that performs. Whether you are navigating high-stakes environments or peak athletic pursuits, we ensure your frame is the ultimate support system for your ambitions.",
    accent: "oklch(0.72 0.12 75)",
  },
  {
    num: "III",
    title: "Cellular & Neuro-Optimization",
    body: "From NAD+ protocols to cognitive resilience training, we address the invisible markers of aging. We focus on neuro-inflammation and cellular repair to keep your mind as sharp as your physique.",
    accent: "#534AB7",
  },
];

const PROTOCOL_STEPS = [
  {
    num: "01",
    title: "The Quantified Baseline",
    desc: "We begin with comprehensive bloodwork, biological age testing, and functional movement screens.",
  },
  {
    num: "02",
    title: "The Precision Blueprint",
    desc: "A custom-engineered roadmap covering training, supplementation, and recovery — built for your specific biology.",
  },
  {
    num: "03",
    title: "Continuous Calibration",
    desc: "We don't set and forget. We utilize wearable data and quarterly testing to pivot your protocol as your biomarkers improve.",
  },
];

const TEAM_ROLES = [
  { role: "Medical Doctors (MDs)", desc: "Clinical oversight and biomarker interpretation" },
  { role: "Neurospecialists", desc: "Cognitive resilience and neuro-inflammation protocols" },
  { role: "Doctors of Physical Therapy (DPTs)", desc: "Biomechanical assessment and movement architecture" },
  { role: "Certified Strength & Conditioning Specialists (CSCS)", desc: "Elite performance programming and athletic development" },
];

export default function Home() {
  useEffect(() => {
    document.title =
      "Longevity Practice & Biological Age Optimization Miami | Miami Elite Coaching";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Miami's premier data-driven longevity practice. We merge elite human performance coaching with cutting-edge biological protocols to extend your healthspan and optimize your prime years. Serving Brickell, Coconut Grove, and Coral Gables."
      );
  }, []);

  const recentArticles = ARTICLES.slice(0, 3);

  return (
    <div className="min-h-screen bg-[oklch(0.08_0.005_285)]">
      <Navigation />

      {/* ── HERO ── */}
      {/* Alt text: Miami Elite Coaching Longevity Assessment */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          aria-label="Miami Elite Coaching Longevity Assessment"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.08_0.005_285/0.95)] via-[oklch(0.08_0.005_285/0.80)] to-[oklch(0.08_0.005_285/0.30)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="badge-gold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.12_75)] inline-block" />
              Miami's Premier Longevity Practice
            </div>

            {/* H1 — SEO optimized */}
            <h1 className="font-['Barlow_Condensed'] font-800 text-5xl sm:text-6xl lg:text-8xl text-white leading-[0.92] mb-6">
              Stop Guessing.{" "}
              <br className="hidden sm:block" />
              Start Quantifying.{" "}
              <br className="hidden sm:block" />
              <span className="text-gold italic">
                Your Biological Age
              </span>{" "}
              <br className="hidden sm:block" />
              is the Only Metric That Matters.
            </h1>

            <p className="text-[oklch(0.72_0.01_75)] text-lg leading-relaxed mb-10 max-w-2xl">
              Miami's premier data-driven longevity practice. We merge elite human
              performance coaching with cutting-edge biological protocols to extend
              your healthspan and optimize your prime years.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/longevity-blueprint">
                <span className="btn-gold text-sm px-8 py-4">
                  Book Your Biological Assessment
                </span>
              </Link>
              <Link href="/programs">
                <span className="btn-ghost text-sm px-8 py-4">
                  Explore All Programs
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-[oklch(0.72_0.12_75/0.5)]" />
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="py-24 border-t border-white/8 bg-[oklch(0.10_0.005_285)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[oklch(0.72_0.12_75)] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-xs mb-4">
                Our Philosophy
              </p>
              <h2 className="font-['Barlow_Condensed'] font-800 text-4xl sm:text-5xl text-white leading-tight mb-6">
                Longevity is Not an Accident.{" "}
                <span className="text-gold italic">It's an Engineered Outcome.</span>
              </h2>
              <p className="text-[oklch(0.62_0.01_75)] text-base leading-relaxed mb-5">
                Most fitness programs chase aesthetics; we chase time. Miami Elite
                Coaching operates at the intersection of biology and performance. Our
                practice utilizes a proprietary "Longevity Foundation" framework that
                moves beyond the treadmill and the weight rack.
              </p>
              <p className="text-[oklch(0.62_0.01_75)] text-base leading-relaxed">
                By integrating biomarker data, metabolic efficiency, and
                neuro-resilience into a single, cohesive protocol, we optimize the
                biological systems that drive your life.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "Healthspan", sub: "not just lifespan", label: "Our primary metric — the years you perform at your peak, not merely the years you live." },
                { stat: "Biomarker", sub: "driven precision", label: "Every protocol is calibrated to your specific biology. No generic programming." },
                { stat: "Quarterly", sub: "recalibration", label: "Wearable data and testing ensure your protocol evolves as your biomarkers improve." },
                { stat: "3 Pillars", sub: "longevity framework", label: "Metabolic, performance, and cellular optimization — unified into one protocol." },
              ].map((item, i) => (
                <div key={i} className="bg-[oklch(0.12_0.005_285)] border border-white/8 p-5">
                  <div className="font-['Barlow_Condensed'] font-800 text-2xl text-gold leading-tight mb-0.5">
                    {item.stat}
                  </div>
                  <div className="font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-wider text-[oklch(0.72_0.12_75)] mb-2">
                    {item.sub}
                  </div>
                  <p className="text-[oklch(0.50_0.01_75)] text-xs leading-relaxed">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE PILLARS ── */}
      <section className="py-24 border-t border-white/8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[oklch(0.72_0.12_75)] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-xs mb-4">
            The Longevity Foundation
          </p>
          <h2 className="font-['Barlow_Condensed'] font-800 text-4xl sm:text-5xl text-white leading-tight mb-14">
            Our Three Pillars of Longevity
          </h2>

          <div className="flex flex-col gap-0 divide-y divide-white/8">
            {PILLARS.map((pillar) => (
              <div key={pillar.num} className="py-10 grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 items-start">
                {/* Number */}
                <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-0">
                  <span
                    className="font-['Barlow_Condensed'] font-800 text-5xl leading-none"
                    style={{ color: pillar.accent }}
                  >
                    {pillar.num}
                  </span>
                </div>
                <div>
                  <h3 className="font-['Barlow_Condensed'] font-700 text-2xl text-white mb-3">
                    Pillar {pillar.num}: {pillar.title}
                  </h3>
                  <p className="text-[oklch(0.62_0.01_75)] text-base leading-relaxed max-w-2xl">
                    {pillar.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROTOCOL ── */}
      {/* Alt text: Biological Age Testing Miami */}
      <section className="py-24 border-t border-white/8 bg-[oklch(0.10_0.005_285)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[oklch(0.72_0.12_75)] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-xs mb-4">
            How It Works
          </p>
          <h2 className="font-['Barlow_Condensed'] font-800 text-4xl sm:text-5xl text-white leading-tight mb-14">
            The Miami Elite Protocol
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROTOCOL_STEPS.map((step) => (
              <div
                key={step.num}
                className="bg-[oklch(0.12_0.005_285)] border border-white/8 p-8 relative overflow-hidden"
              >
                {/* Large background number */}
                <span className="absolute top-4 right-5 font-['Barlow_Condensed'] font-800 text-7xl text-white/4 leading-none select-none">
                  {step.num}
                </span>
                <div className="relative z-10">
                  <div className="w-8 h-0.5 bg-[oklch(0.72_0.12_75)] mb-6" />
                  <h3 className="font-['Barlow_Condensed'] font-700 text-xl text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[oklch(0.58_0.01_75)] text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/longevity-blueprint">
              <span className="btn-gold text-sm px-8 py-4">
                Book Your Biological Assessment
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── THE ELITE COLLECTIVE ── */}
      {/* Alt text: High-Performance Neuro-Optimization */}
      <section className="py-24 border-t border-white/8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[oklch(0.72_0.12_75)] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-xs mb-4">
            The Team
          </p>
          <h2 className="font-['Barlow_Condensed'] font-800 text-4xl sm:text-5xl text-white leading-tight mb-6">
            A Dedicated Performance Department for Your Life.
          </h2>
          <p className="text-[oklch(0.62_0.01_75)] text-base leading-relaxed max-w-3xl mb-5">
            Miami Elite Coaching brings a multidisciplinary board of experts to your
            corner. We curate a high-performance ecosystem featuring Medical Doctors,
            Neurospecialists, Doctors of Physical Therapy, and Certified Strength and
            Conditioning Specialists.
          </p>
          <p className="text-[oklch(0.62_0.01_75)] text-base leading-relaxed max-w-3xl mb-12">
            By bridging the gap between medical science, neurology, and elite
            athletics, our team specializes in the intersection of biological longevity
            and peak cognitive output. We don't just provide a trainer — we provide an
            integrated medical and performance team to ensure Miami's most successful
            individuals stay at the top of their game, indefinitely.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TEAM_ROLES.map((member, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-[oklch(0.12_0.005_285)] border border-white/8 p-6"
              >
                <div className="w-8 h-8 bg-[oklch(0.72_0.12_75)] flex items-center justify-center flex-shrink-0">
                  <span className="font-['Barlow_Condensed'] font-800 text-[oklch(0.08_0.005_285)] text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <p className="font-['Barlow_Condensed'] font-700 text-white text-base mb-1">
                    {member.role}
                  </p>
                  <p className="text-[oklch(0.50_0.01_75)] text-xs leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="py-16 border-y border-white/8 bg-[oklch(0.10_0.005_285)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: "90", suffix: " days", label: "To Guaranteed Results" },
              { stat: "100", suffix: "%", label: "Results Guarantee" },
              { stat: "3", suffix: " hrs/wk", label: "Time Required" },
              { stat: "5", suffix: " spots", label: "Available Per Quarter" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="font-['Barlow_Condensed'] font-800 text-5xl text-gold">
                  {item.stat}
                  <span className="text-2xl">{item.suffix}</span>
                </div>
                <div className="text-[oklch(0.50_0.01_75)] text-xs uppercase tracking-widest font-['Barlow_Condensed'] mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECENT ARTICLES ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[oklch(0.72_0.12_75)] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-sm mb-2">
                Knowledge
              </p>
              <h2 className="font-['Barlow_Condensed'] font-700 text-4xl text-white">
                Latest Articles
              </h2>
            </div>
            <Link href="/blog">
              <span className="flex items-center gap-2 text-[oklch(0.72_0.12_75)] text-sm font-['Barlow_Condensed'] font-600 uppercase tracking-wider hover:text-[oklch(0.82_0.10_75)] transition-colors cursor-pointer">
                All Articles <ArrowRight size={14} />
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentArticles.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`}>
                <div className="group bg-[oklch(0.12_0.005_285)] border border-white/8 overflow-hidden card-hover cursor-pointer">
                  <div
                    className="h-44 bg-cover bg-center"
                    style={{ backgroundImage: `url(${article.image})` }}
                  />
                  <div className="p-5">
                    <div className="flex items-center gap-1 text-[oklch(0.40_0.01_75)] text-xs mb-2">
                      <Clock size={10} />
                      <span>{article.readTime} min read</span>
                    </div>
                    <h3 className="font-['Barlow_Condensed'] font-700 text-lg text-white group-hover:text-gold transition-colors leading-tight mb-2">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-1 text-[oklch(0.72_0.12_75)] text-xs font-['Barlow_Condensed'] font-600 uppercase tracking-wider mt-3">
                      Read More <ArrowRight size={10} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA — LOCAL / SOCIAL PROOF ── */}
      <section className="py-24 bg-[oklch(0.10_0.005_285)] border-t border-white/8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="badge-gold mb-6 mx-auto w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.12_75)] inline-block" />
            Now Accepting Clients
          </div>
          <h2 className="font-['Barlow_Condensed'] font-700 text-5xl sm:text-6xl text-white mb-4 leading-tight">
            Join the Longevity Revolution in South Florida.
          </h2>
          <p className="text-[oklch(0.60_0.01_75)] text-lg mb-3">
            Currently accepting clients in Brickell, Coconut Grove, and Coral Gables.
          </p>
          <p className="text-[oklch(0.45_0.01_75)] text-sm mb-10">
            Metabolic Health Miami · Biohacking South Florida · Precision Medicine Miami
          </p>
          <Link href="/brickell#apply">
            <span className="btn-gold text-base px-8 py-4">
              Apply for the Elite Coaching Program
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
