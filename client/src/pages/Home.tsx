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
import longevityHomeImg from "@/assets/longevity-home.jpg";
import biometricImg from "@/assets/longevity-biometric.jpg";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663459681691/83tywCBKrbukToGzWmD9PC/hero-brickell-PeJffJYKH7YsRmJxS5GutR.webp";

const PILLARS = [
  {
    num: "I",
    title: "Metabolic Intelligence",
    body: "Your metabolism is either working for you or against you — there is no middle ground. We use advanced biomarker panels, continuous glucose monitoring, and GLP-1 companion strategies to restore insulin sensitivity, ignite mitochondrial function, and turn your body into the high-efficiency engine it was designed to be.",
    accent: "#1D9E75",
  },
  {
    num: "II",
    title: "The Performance Foundation",
    body: "Longevity without strength is just survival. Your physical architecture sets the ceiling for everything you do — in the boardroom, on the field, and in life. Through biomechanical assessment and elite strength programming, we build a body that doesn't just look the part — it performs under pressure, decade after decade.",
    accent: "oklch(0.72 0.12 75)",
  },
  {
    num: "III",
    title: "Cellular & Neuro-Optimization",
    body: "The most dangerous aging happens where you can't see it. We target the invisible markers — NAD+ depletion, neuro-inflammation, cellular senescence — with precision protocols that sharpen cognition, accelerate recovery, and keep your biological clock running years behind your chronological age.",
    accent: "#534AB7",
  },
];

const PROTOCOL_STEPS = [
  {
    num: "01",
    title: "The Quantified Baseline",
    desc: "We start with the full picture: comprehensive bloodwork, biological age testing, DEXA body composition scan, and functional movement screening. No guessing. No generic starting points.",
  },
  {
    num: "02",
    title: "Your Precision Blueprint",
    desc: "Every protocol is engineered for your specific biology — not a template. Training, nutrition, supplementation, and recovery are calibrated to your biomarkers, your schedule, and your goals.",
  },
  {
    num: "03",
    title: "Continuous Calibration",
    desc: "Your biology evolves. So does your program. Wearable data, quarterly biomarker retesting, and regular check-ins ensure your protocol stays ahead of your body — not behind it.",
  },
];

const TEAM_ROLES = [
  { role: "Medical Doctors (MDs)", desc: "Clinical oversight, biomarker interpretation, and longevity medicine protocols" },
  { role: "Neurospecialists", desc: "Cognitive resilience, neuro-inflammation reduction, and brain performance optimization" },
  { role: "Doctors of Physical Therapy (DPTs)", desc: "Biomechanical assessment, injury prevention, and movement architecture" },
  { role: "Certified Strength & Conditioning Specialists (CSCS)", desc: "Elite performance programming, athletic development, and long-term physical capacity" },
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

            <h1 className="font-['Barlow_Condensed'] font-800 text-5xl sm:text-6xl lg:text-8xl text-white leading-[0.92] mb-6">
              Your Chronological Age{" "}
              <br className="hidden sm:block" />
              is Just a Number.{" "}
              <br className="hidden sm:block" />
              <span className="text-gold italic">
                Your Biological Age
              </span>{" "}
              <br className="hidden sm:block" />
              is the One We Change.
            </h1>

            <p className="text-[oklch(0.72_0.01_75)] text-lg leading-relaxed mb-10 max-w-2xl">
              Miami's only data-driven longevity practice built for high performers.
              We combine elite coaching, precision medicine, and cutting-edge biological
              protocols to extend your healthspan — and make every year count.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/longevity-blueprint">
                <span className="btn-gold text-sm px-8 py-4">
                  Get Your Biological Assessment
                </span>
              </Link>
              <Link href="/miami-personal-trainer">
                <span className="btn-ghost text-sm px-8 py-4">
                  Explore All Programs
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Hero image — visible on all devices with responsive positioning */}
        <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
          <img
            src={longevityHomeImg}
            alt="Miami Elite Coaching longevity assessment"
            className="w-full h-full object-cover object-center"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, transparent 20%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.8) 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, transparent 20%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.8) 100%)",
              opacity: 0.65,
            }}
          />
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
                Most fitness programs are built around how you look. Ours is built around
                how long you perform. Miami Elite Coaching operates at the intersection
                of biology, medicine, and elite athletics — where the goal isn't a
                six-week transformation, it's a decades-long competitive edge.
              </p>
              <p className="text-[oklch(0.62_0.01_75)] text-base leading-relaxed">
                Our proprietary Longevity Foundation framework integrates biomarker data,
                metabolic efficiency, and neuro-resilience into a single, unified protocol —
                one that evolves with your biology and compounds over time.
              </p>
            </div>

            {/* Longevity Framework SVG Visualization — v5 (2×2 grid, no circle) */}
            <div style={{ width: "100%", maxWidth: "680px", margin: "0 auto" }}>
              <img
                src="/mec_longevity_quadrant_v5.svg"
                alt="MEC Longevity Framework — Four Boxes: Healthspan, Biomarkers, 3 Pillars, Quarterly Recalibration"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE PILLARS ── */}
      <section className="py-24 border-t border-white/8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Text content */}
            <div className="flex-1">
              <p className="text-[oklch(0.72_0.12_75)] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-xs mb-4">
                The Longevity Foundation
              </p>
              <h2 className="font-['Barlow_Condensed'] font-800 text-4xl sm:text-5xl text-white leading-tight mb-4">
                Three Systems. One Protocol.
              </h2>
              <p className="text-[oklch(0.62_0.01_75)] text-base leading-relaxed max-w-2xl mb-14">
                Most programs address one dimension of health. We address all three — simultaneously,
                and in the exact order your biology demands.
              </p>

              <div className="flex flex-col gap-0 divide-y divide-white/8">
                {PILLARS.map((pillar) => (
                  <div key={pillar.num} className="py-10 grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 items-start">
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

            {/* Biometrics image */}
            <div className="flex-1 max-w-lg w-full">
              <img
                src={biometricImg}
                alt="Biometric data and performance testing at Miami Elite Coaching"
                className="w-full h-auto rounded object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PROTOCOL ── */}
      <section className="py-24 border-t border-white/8 bg-[oklch(0.10_0.005_285)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[oklch(0.72_0.12_75)] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-xs mb-4">
            How It Works
          </p>
          <h2 className="font-['Barlow_Condensed'] font-800 text-4xl sm:text-5xl text-white leading-tight mb-4">
            The Miami Elite Protocol
          </h2>
          <p className="text-[oklch(0.62_0.01_75)] text-base leading-relaxed max-w-2xl mb-14">
            Three phases. Zero guesswork. A system built on data from day one and
            refined continuously as your body responds.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROTOCOL_STEPS.map((step) => (
              <div
                key={step.num}
                className="bg-[oklch(0.12_0.005_285)] border border-white/8 p-8 relative overflow-hidden"
              >
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
                  Start With an Assessment
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── THE ELITE COLLECTIVE ── */}
      <section className="py-24 border-t border-white/8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[oklch(0.72_0.12_75)] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-xs mb-4">
            The Team
          </p>
          <h2 className="font-['Barlow_Condensed'] font-800 text-4xl sm:text-5xl text-white leading-tight mb-6">
            Not a Trainer. A Performance Department.
          </h2>
          <p className="text-[oklch(0.62_0.01_75)] text-base leading-relaxed max-w-3xl mb-5">
            When you work with Miami Elite Coaching, you don't get a single coach —
            you get an entire multidisciplinary team in your corner. Medical Doctors,
            Neurospecialists, Doctors of Physical Therapy, and Certified Strength and
            Conditioning Specialists, all working from the same data and toward the same goal: you.
          </p>
          <p className="text-[oklch(0.62_0.01_75)] text-base leading-relaxed max-w-3xl mb-12">
            This is the standard of care Miami's most successful executives, athletes,
            and high-performers deserve — and what we deliver, every single session.
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
              { stat: "90", suffix: " days", label: "To Measurable Results" },
              { stat: "100", suffix: "%", label: "Results Guarantee" },
              { stat: "3", suffix: " hrs/wk", label: "Average Time Commitment" },
              { stat: "5", suffix: " spots", label: "Available This Quarter" },
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
                From the Lab
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

      {/* ── FINAL CTA ── */}
      <section className="py-24 bg-[oklch(0.10_0.005_285)] border-t border-white/8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="badge-gold mb-6 mx-auto w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.12_75)] inline-block" />
            Now Accepting Clients — 5 Spots Remaining
          </div>
          <h2 className="font-['Barlow_Condensed'] font-700 text-5xl sm:text-6xl text-white mb-4 leading-tight">
            The Best Time to Optimize Your Biology Was 10 Years Ago. The Second Best Time is Now.
          </h2>
          <p className="text-[oklch(0.60_0.01_75)] text-lg mb-3">
            Serving high performers in Brickell, Coconut Grove, and Coral Gables.
          </p>
          <p className="text-[oklch(0.45_0.01_75)] text-sm mb-10">
            Metabolic Health Miami · Biohacking South Florida · Precision Medicine Miami
          </p>
          <Link href="/longevity-blueprint">
            <span className="btn-gold text-base px-8 py-4">
              Claim Your Longevity Assessment
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
