// CEO Performance Protocol Landing Page
// Route: /ceo-performance-protocol
// SEO: ceo fitness miami, executive health brickell, performance protocol miami, men over 40 fitness miami
// Design: Dark luxury with steel-blue accent (#185FA5) — same dark system as rest of site

import { useEffect, useState } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp } from "lucide-react";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663459681691/83tywCBKrbukToGzWmD9PC/hero-brickell-PeJffJYKH7YsRmJxS5GutR.webp";

// Typeform URL — will be updated after form creation
const TYPEFORM_URL = "https://q5lhjxf6lyg.typeform.com/to/CqpamnE1";

const INCLUDES = [
  {
    title: "DEXA + VO2 Max Baseline Assessment",
    value: "$400 value",
    desc: "Week 1 starts with a full biological snapshot — body composition, lean muscle, fat distribution, bone density, and your cardiovascular fitness age. This is your baseline. Everything we build is built against it.",
  },
  {
    title: "12 × Sports Scientist Training Sessions",
    value: "$2,400 value",
    desc: "Weekly 1-on-1 sessions with a certified sports science practitioner — not a personal trainer, a performance specialist. Programming is periodized, progressive, and adapted weekly based on your response data.",
  },
  {
    title: "2 × Iyashi Dome Infrared Recovery Sessions",
    value: "$200 value",
    desc: "Used by elite athletes and longevity clinics worldwide. Accelerates cellular recovery, reduces inflammation, and improves sleep quality — the recovery tool that makes your training compound faster.",
  },
  {
    title: "Monthly Biometric Re-Testing",
    value: "Included",
    desc: "At weeks 4 and 8, you re-test key biomarkers so your program can be recalibrated in real time. Nothing is static. Everything adapts to your data.",
  },
  {
    title: "Private WhatsApp Access Between Sessions",
    value: "Included",
    desc: "Direct line to your specialist for travel programming, nutrition questions, recovery adjustments, and accountability. Built for executives whose schedules don't stay fixed.",
  },
];

const PHASES = [
  {
    num: "Weeks 1–2",
    title: "Baseline & Calibration",
    desc: "Full DEXA and VO2 Max assessment. Specialist review session. Program architecture built around your specific biology, schedule, and performance goals. No generic templates.",
  },
  {
    num: "Weeks 3–6",
    title: "Foundation Build",
    desc: "Progressive resistance and cardiovascular programming. Weekly 1-on-1 sessions. Iyashi Dome recovery session at week 4. First biometric re-test and program recalibration.",
  },
  {
    num: "Weeks 7–10",
    title: "Performance Ramp",
    desc: "Intensity increases based on your adaptation data. Second biometric re-test at week 8. Second Iyashi Dome session. Nutrition and recovery optimization layer added to the protocol.",
  },
  {
    num: "Weeks 11–12",
    title: "Final Assessment & Forward Planning",
    desc: "End-of-protocol DEXA and VO2 Max retest. Side-by-side comparison with your week-1 baseline. Full results review. Q3 continuation plan built and priced if you choose to continue.",
  },
];

const COMPARE_TYPICAL = [
  "Generic gym membership or app",
  "No baseline data — just feelings",
  "No accountability structure",
  "Programming built for no one specific",
  "Progress measured by the mirror",
  "Abandoned by week six",
];

const COMPARE_PROTOCOL = [
  "RETO — Miami's top longevity facility",
  "DEXA + VO2 Max baseline on day one",
  "Weekly 1-on-1 with a sports scientist",
  "Periodized programming built for you",
  "Biometric re-testing every 4 weeks",
  "12-week structured protocol with a finish line",
];

const TESTIMONIALS = [
  {
    quote:
      "I've worked with trainers before but never like this. Seeing my VO2 Max age at 51 — cardiovascular fitness of a 38-year-old — after 12 weeks wasn't just motivating. It was proof that the system works. I've renewed every quarter since.",
    name: "R.M.",
    title: "CEO, Brickell, 51",
  },
  {
    quote:
      "The data-driven approach is what sold me. I don't respond to motivation — I respond to numbers. Getting a DEXA before and after, tracking my biometric age dropping — that's the kind of ROI I understand.",
    name: "J.T.",
    title: "Managing Partner, Brickell, 47",
  },
];

const FAQS = [
  {
    q: "How much time does this require each week?",
    a: "One 60-minute session per week, scheduled at your preferred time — with 6am and 7am slots reserved exclusively for Protocol clients. Travel programming and remote guidance available for weeks you're out of Miami.",
  },
  {
    q: "What if I travel frequently?",
    a: "Designed for it. Your specialist builds travel-compatible programming for every trip. Direct WhatsApp access means your protocol adapts to your schedule — not the other way around.",
  },
  {
    q: "I'm not in bad shape. Is this still relevant?",
    a: "Especially relevant. Most high-performing men in their 40s aren't unfit — they're undertested. The protocol finds the gaps that effort alone misses: cardiovascular age, muscle-to-fat ratio, bone density. The data almost always reveals something actionable.",
  },
  {
    q: "What's the difference between this and a regular personal trainer?",
    a: "A personal trainer builds sessions. A sports scientist builds systems. The Protocol is built on clinical-grade biomarker data, periodized programming, and monthly recalibration — not intuition and encouragement. It's the difference between managing by gut feel and managing by data.",
  },
  {
    q: "Are payment plans available?",
    a: "Yes. The full protocol can be split into two payments of $1,200, charged at weeks 1 and 6. Contact us after submitting your application and we'll set it up.",
  },
];

function BuyNowButton({
  size = "default",
}: {
  size?: "default" | "large";
}) {
  const [loading, setLoading] = useState(false);
  const cls =
    size === "large"
      ? "inline-flex items-center gap-2 bg-[#185FA5] text-white font-['Barlow_Condensed'] font-700 text-sm uppercase tracking-widest px-10 py-5 hover:bg-[#0C447C] transition-colors cursor-pointer border border-[#185FA5] hover:border-[#3B82C4] hover:text-white"
      : "inline-flex items-center gap-2 bg-[#185FA5] text-white font-['Barlow_Condensed'] font-700 text-xs uppercase tracking-widest px-6 py-3 hover:bg-[#0C447C] transition-colors cursor-pointer";

  async function handleBuy() {
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: "ceo-performance-protocol" }),
      });
      const data = await res.json();
      if (data.url) {
        window.open(data.url, "_blank");
      }
    } catch (err) {
      console.error("Checkout error:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button onClick={handleBuy} disabled={loading} className={cls}>
      {loading ? "Processing..." : "BUY NOW — $2,400 →"}
    </button>
  );
}

function CtaButton({
  size = "default",
}: {
  size?: "default" | "large";
}) {
  const cls =
    size === "large"
      ? "inline-flex items-center gap-2 border border-white/20 text-white font-['Barlow_Condensed'] font-700 text-sm uppercase tracking-widest px-10 py-5 hover:bg-white/5 transition-colors cursor-pointer"
      : "inline-flex items-center gap-2 border border-white/20 text-white font-['Barlow_Condensed'] font-700 text-xs uppercase tracking-widest px-6 py-3 hover:bg-white/5 transition-colors cursor-pointer";
  return (
    <a
      href={TYPEFORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cls}
    >
      Have Questions? Apply First →
    </a>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/8 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
      >
        <span className="font-['Barlow_Condensed'] font-600 text-base text-white pr-4">
          {q}
        </span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-[#5BA3D9] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#5BA3D9] flex-shrink-0" />
        )}
      </button>
      {open && (
        <p className="text-[oklch(0.60_0.01_75)] text-sm leading-relaxed pb-5 pr-8">
          {a}
        </p>
      )}
    </div>
  );
}

export default function CeoProtocol() {
  useEffect(() => {
    document.title =
      "CEO Performance Protocol — 12-Week Executive Health Transformation | Miami Elite Coaching";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "The CEO Performance Protocol is a 12-week, data-driven health transformation for high-performing men 40+ in Brickell. DEXA scan, VO2 Max testing, sports science training, and recovery technology at RETO Miami."
      );
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[oklch(0.10_0.005_285)]">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.06_0.005_285)] via-[oklch(0.06_0.005_285)]/90 to-[oklch(0.06_0.005_285)]/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#185FA5]/15 border border-[#185FA5]/30 text-[#5BA3D9] font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#185FA5] animate-pulse inline-block" />
              Brickell — Executive Performance — Q2 2026
            </div>

            <h1 className="font-['Barlow_Condensed'] font-700 text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-white mb-2">
              You optimize your business.
            </h1>
            <h1 className="font-['Barlow_Condensed'] font-700 text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-[#5BA3D9] mb-8">
              It's time to optimize{" "}
              <span className="italic">the asset running it.</span>
            </h1>

            <p className="text-[oklch(0.68_0.01_75)] text-lg leading-relaxed max-w-xl mb-8">
              The CEO Performance Protocol is a 12-week, fully data-driven
              health transformation built exclusively for high-performing men
              40+ in Brickell. Precision testing. Sports science training.
              Recovery technology. A complete operating system for your body.
            </p>

            {/* Price block */}
            <div className="flex items-baseline gap-4 flex-wrap mb-2">
              <span className="font-['Barlow_Condensed'] font-700 text-4xl text-[#5BA3D9]">
                $2,400
              </span>
              <span className="text-[oklch(0.45_0.01_75)] text-lg line-through">
                $3,200
              </span>
              <span className="inline-flex items-center bg-[#185FA5]/15 border border-[#185FA5]/30 text-[#5BA3D9] font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest px-3 py-1">
                Save $800 — Q2 Launch Rate
              </span>
            </div>
            <p className="text-[oklch(0.45_0.01_75)] text-sm mb-6">
              12-week program · 4 spots available this quarter · Payment plans
              available
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
              <BuyNowButton size="default" />
              <CtaButton size="default" />
            </div>
            <p className="text-[oklch(0.38_0.01_75)] text-xs">
              A brief application ensures this program is the right fit for you.
            </p>

            <div className="mt-6 bg-[#185FA5]/10 border border-[#185FA5]/25 px-5 py-3 max-w-lg">
              <p className="text-[#5BA3D9] font-['Barlow_Condensed'] font-600 text-sm">
                Q2 cohort is currently open. 4 spots remain. Program begins the
                week of April 21st.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Executive Health Problem */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#5BA3D9] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-sm mb-3">
            The Executive Health Problem
          </p>
          <h2 className="font-['Barlow_Condensed'] font-700 text-3xl sm:text-4xl text-white mb-6 max-w-2xl">
            High performers are the most under-optimized people on earth.
          </h2>
          <div className="space-y-4 text-[oklch(0.65_0.01_75)] text-base leading-relaxed max-w-2xl">
            <p>
              You've built something. You run a team, manage capital, make
              decisions that matter. You're disciplined, data-driven, and
              relentlessly focused on performance — in every area except one.
            </p>
            <p>
              After 40, the body doesn't forgive neglect the way it used to.
              Muscle mass drops. Cardiovascular capacity declines. Recovery
              slows. Biological age pulls ahead of chronological age — quietly,
              invisibly, and measurably.
            </p>
            <p>
              The executives who catch this early and address it with the same
              rigor they apply to their businesses don't just live longer. They
              perform better, think clearer, and lead from a position of energy
              and authority — not exhaustion.
            </p>
            <p className="text-white font-['Barlow_Condensed'] font-600 text-lg">
              The CEO Performance Protocol exists because guesswork is not a
              strategy.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
            <div className="bg-[oklch(0.12_0.005_285)] border border-white/8 p-6">
              <p className="font-['Barlow_Condensed'] font-700 text-3xl text-[#5BA3D9] mb-1">
                8%
              </p>
              <p className="text-[oklch(0.55_0.01_75)] text-sm leading-relaxed">
                Average muscle mass lost per decade after 40 without a targeted
                resistance protocol
              </p>
            </div>
            <div className="bg-[oklch(0.12_0.005_285)] border border-white/8 p-6">
              <p className="font-['Barlow_Condensed'] font-700 text-3xl text-[#5BA3D9] mb-1">
                VO2 Max
              </p>
              <p className="text-[oklch(0.55_0.01_75)] text-sm leading-relaxed">
                The #1 biomarker for longevity, cognitive performance, and
                long-term vitality — rarely measured, easily improved
              </p>
            </div>
            <div className="bg-[oklch(0.12_0.005_285)] border border-white/8 p-6">
              <p className="font-['Barlow_Condensed'] font-700 text-3xl text-[#5BA3D9] mb-1">
                12 wks
              </p>
              <p className="text-[oklch(0.55_0.01_75)] text-sm leading-relaxed">
                The minimum effective dose for measurable, lasting change in body
                composition and cardiovascular fitness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-[oklch(0.08_0.005_285)] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#5BA3D9] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-sm mb-3">
            What's Included — The Full Protocol
          </p>
          <h2 className="font-['Barlow_Condensed'] font-700 text-3xl sm:text-4xl text-white mb-10">
            Every component is chosen for one reason: it works.
          </h2>

          <div className="space-y-0">
            {INCLUDES.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 py-6 border-b border-white/8 last:border-b-0"
              >
                <div className="w-8 h-8 rounded-full bg-[#185FA5]/15 border border-[#185FA5]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    viewBox="0 0 10 10"
                    fill="none"
                    className="w-3 h-3"
                  >
                    <path
                      d="M2 5l2.5 2.5L8 3"
                      stroke="#5BA3D9"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="flex items-baseline gap-3 flex-wrap mb-1">
                    <span className="font-['Barlow_Condensed'] font-600 text-white text-base">
                      {item.title}
                    </span>
                    <span className="text-[#5BA3D9] font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest">
                      {item.value}
                    </span>
                  </div>
                  <p className="text-[oklch(0.55_0.01_75)] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bonuses */}
          <div className="mt-8 bg-[#185FA5]/8 border border-[#185FA5]/20 p-6">
            <p className="text-[#5BA3D9] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-xs mb-4">
              Executive Bonuses — Included
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-[#5BA3D9] font-700 flex-shrink-0">+</span>
                <p className="text-[oklch(0.70_0.01_75)] text-sm leading-relaxed">
                  <strong className="text-white">
                    Biological Age Report Card
                  </strong>{" "}
                  — a shareable, quarterly snapshot of your biomarkers, VO2 Max
                  percentile ranking, and biological age vs. chronological age.
                  Track the gap closing over time.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#5BA3D9] font-700 flex-shrink-0">+</span>
                <p className="text-[oklch(0.70_0.01_75)] text-sm leading-relaxed">
                  <strong className="text-white">
                    Priority 6am and 7am scheduling
                  </strong>{" "}
                  — early slots reserved exclusively for Protocol clients. In
                  before the market opens, done before 8am.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12-Week Timeline */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#5BA3D9] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-sm mb-3">
            How the 12 Weeks Unfold
          </p>
          <h2 className="font-['Barlow_Condensed'] font-700 text-3xl sm:text-4xl text-white mb-10">
            A phased protocol. Not a plan you forget by week three.
          </h2>

          <div className="space-y-4">
            {PHASES.map((phase, i) => (
              <div
                key={i}
                className="bg-[oklch(0.12_0.005_285)] border border-white/8 p-6 flex items-start gap-4"
              >
                <span className="inline-flex bg-[#185FA5]/15 border border-[#185FA5]/30 text-[#5BA3D9] font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest px-3 py-1 flex-shrink-0 whitespace-nowrap mt-0.5">
                  {phase.num}
                </span>
                <div>
                  <h3 className="font-['Barlow_Condensed'] font-600 text-white text-base mb-1">
                    {phase.title}
                  </h3>
                  <p className="text-[oklch(0.55_0.01_75)] text-sm leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-[oklch(0.08_0.005_285)] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#5BA3D9] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-sm mb-3">
            The Real Comparison
          </p>
          <h2 className="font-['Barlow_Condensed'] font-700 text-3xl sm:text-4xl text-white mb-10">
            What this replaces — and why it wins.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Typical */}
            <div className="border border-white/10 p-6">
              <p className="text-[oklch(0.45_0.01_75)] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-xs mb-4">
                The Typical Approach
              </p>
              <div className="space-y-0">
                {COMPARE_TYPICAL.map((item, i) => (
                  <div
                    key={i}
                    className="py-3 border-b border-white/5 last:border-b-0 text-[oklch(0.50_0.01_75)] text-sm flex items-start gap-3"
                  >
                    <span className="text-[oklch(0.35_0.01_75)] flex-shrink-0">
                      ✕
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Protocol */}
            <div className="border-2 border-[#185FA5] p-6">
              <p className="text-[#5BA3D9] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-xs mb-4">
                CEO Performance Protocol
              </p>
              <div className="space-y-0">
                {COMPARE_PROTOCOL.map((item, i) => (
                  <div
                    key={i}
                    className="py-3 border-b border-[#185FA5]/15 last:border-b-0 text-white text-sm flex items-start gap-3"
                  >
                    <svg
                      viewBox="0 0 10 10"
                      fill="none"
                      className="w-3 h-3 flex-shrink-0 mt-1"
                    >
                      <path
                        d="M2 5l2.5 2.5L8 3"
                        stroke="#5BA3D9"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#5BA3D9] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-sm mb-8">
            What Clients Say
          </p>
          <div className="space-y-4">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="bg-[oklch(0.12_0.005_285)] border border-white/8 p-6"
              >
                <p className="text-[oklch(0.75_0.01_75)] text-base italic leading-relaxed mb-4">
                  "{t.quote}"
                </p>
                <p className="text-[oklch(0.45_0.01_75)] text-sm">
                  <span className="text-white font-['Barlow_Condensed'] font-600">
                    {t.name}
                  </span>{" "}
                  — {t.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[oklch(0.08_0.005_285)] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#5BA3D9] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-sm mb-3">
            Questions
          </p>
          <h2 className="font-['Barlow_Condensed'] font-700 text-3xl text-white mb-8">
            Frequently Asked
          </h2>
          <div>
            {FAQS.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#5BA3D9] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-sm mb-4">
            Q2 Cohort — April 2026
          </p>
          <h2 className="font-['Barlow_Condensed'] font-700 text-4xl sm:text-5xl text-white mb-2 leading-tight">
            4 spots. One quarter.
          </h2>
          <h2 className="font-['Barlow_Condensed'] font-700 text-4xl sm:text-5xl text-[#5BA3D9] mb-6 leading-tight">
            A measurably different version of you by July.
          </h2>
          <p className="text-[oklch(0.60_0.01_75)] text-base leading-relaxed mb-8 max-w-xl mx-auto">
            The CEO Performance Protocol is not a gym membership. It's a
            12-week engagement with a defined outcome — a lower biological age,
            a stronger cardiovascular system, and a data-verified transformation
            you can track quarter over quarter.
          </p>

          {/* Spots visualization */}
          <div className="flex justify-center gap-2 mb-3">
            {[true, true, false, false, false, false].map((filled, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  filled
                    ? "bg-[#185FA5]"
                    : "bg-[#185FA5]/10 border border-[#185FA5]/30"
                }`}
              >
                {filled && (
                  <svg viewBox="0 0 10 10" fill="none" className="w-3 h-3">
                    <path
                      d="M2 5l2.5 2.5L8 3"
                      stroke="#E6F1FB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
          <p className="text-[oklch(0.45_0.01_75)] text-sm mb-8">
            2 of 6 spots filled for Q2. 4 remaining.
          </p>

          <BuyNowButton size="large" />
          <div className="mt-3" />
          <CtaButton size="large" />
          <p className="text-[oklch(0.38_0.01_75)] text-xs mt-4">
            A short application ensures the program is the right fit. You'll
            hear back within 24 hours.
          </p>

          {/* Upsell */}
          <div className="mt-10 bg-[oklch(0.12_0.005_285)] border border-white/8 p-6 text-left flex items-start gap-4">
            <div className="w-10 h-10 bg-[#185FA5]/15 border border-[#185FA5]/30 flex items-center justify-center flex-shrink-0">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M9 2v14M2 9h14"
                  stroke="#5BA3D9"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-['Barlow_Condensed'] font-600 text-white text-base mb-1">
                Continue quarterly — and track your biological age over time
              </h3>
              <p className="text-[oklch(0.55_0.01_75)] text-sm leading-relaxed">
                Protocol clients who renew for Q3 receive a $300 re-assessment
                discount and a year-over-year Biological Age Comparison Report.
                Most clients see their biological age drop 3–7 years within the
                first two quarters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
          <span className="text-[oklch(0.45_0.01_75)]">Also explore:</span>
          <Link href="/brickell">
            <span className="text-[#5BA3D9] hover:text-[#8BC4F0] transition-colors cursor-pointer font-['Barlow_Condensed'] font-600 uppercase tracking-wider">
              90-Day Transformation
            </span>
          </Link>
          <span className="hidden sm:inline text-[oklch(0.30_0.01_75)]">
            ·
          </span>
          <Link href="/longevity-blueprint">
            <span className="text-[#5BA3D9] hover:text-[#8BC4F0] transition-colors cursor-pointer font-['Barlow_Condensed'] font-600 uppercase tracking-wider">
              Longevity Blueprint
            </span>
          </Link>
          <span className="hidden sm:inline text-[oklch(0.30_0.01_75)]">
            ·
          </span>
          <Link href="/blog">
            <span className="text-[#5BA3D9] hover:text-[#8BC4F0] transition-colors cursor-pointer font-['Barlow_Condensed'] font-600 uppercase tracking-wider">
              Articles
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
