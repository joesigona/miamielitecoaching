// Longevity Blueprint Landing Page — Miami Elite Coaching
// Route: /longevity-blueprint
// SEO: biological age test miami, longevity assessment miami, DEXA scan miami, VO2 max test miami
// Design: Dark luxury gold — same system as rest of site, with teal-green accent for this program

import { useEffect, useState } from "react";
import { Link } from "wouter";
import LandingPageLayout from "@/components/LandingPageLayout";
import { Shield, Clock, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import heroImage from "@/assets/longevity-blueprint-hero.jpg";
const HERO_IMAGE = heroImage;

const INCLUDES = [
  {
    title: "DEXA Body Composition Scan",
    desc: "The most accurate measurement available for body fat percentage, lean muscle mass, and bone density. Far beyond what any scale or BMI calculation can tell you — delivered in a detailed report you keep.",
  },
  {
    title: "VO2 Max Cardiovascular Test",
    desc: "VO2 Max is the single strongest predictor of longevity in modern medicine. You'll know your exact cardiovascular fitness age and how it benchmarks against peak performance for your age group.",
  },
  {
    title: "1-on-1 Longevity Consultation (45 min)",
    desc: "Sit down with a certified health specialist and walk through your results together. You leave with a prioritized action plan — not a vague pamphlet, but specific next steps tailored to your body and your goals.",
  },
  {
    title: "Personalized Biological Age Report",
    desc: "A printed and digital summary of your biomarkers, cardiovascular fitness score, body composition breakdown, and your biological age compared to your chronological age. A benchmark you can track and improve over time.",
  },
];

const STEPS = [
  {
    num: "1",
    title: "Claim your spot online",
    desc: "Fill out a short intake form and choose your preferred time slot. Availability is limited — sessions book out fast at the start of each month.",
  },
  {
    num: "2",
    title: "Arrive at RETO Brickell",
    desc: "Come in comfortable clothing. Parking is available. You'll be greeted privately — no waiting rooms, no gym atmosphere. This is a clinical-grade facility.",
  },
  {
    num: "3",
    title: "Complete your DEXA + VO2 Max assessment",
    desc: "Both tests are non-invasive and take approximately 45 minutes combined. No needles, no discomfort.",
  },
  {
    num: "4",
    title: "Review your results in your consultation",
    desc: "Your specialist walks you through everything — what your numbers mean, what's working, what needs attention, and the specific actions that will move the needle fastest for your biology.",
  },
  {
    num: "5",
    title: "Leave with your full report and your plan",
    desc: "Walk out with your Biological Age Report, your personalized action plan, and — if you choose — your Iyashi Dome recovery session before you go. You're done by mid-morning.",
  },
];

const TESTIMONIALS = [
  {
    text: "I've been meaning to get a proper health assessment for years. This made it easy to just do it — and the results genuinely surprised me. My cardiovascular fitness age was 8 years younger than I expected. That data changed how I approach everything.",
    author: "C.M. — Brickell, CEO, 52",
  },
  {
    text: "I went in expecting a sales pitch and walked out with real information about my body for the first time in my life. The DEXA scan alone was worth it. I now train with a completely different understanding of what I actually need.",
    author: "L.R. — Coconut Grove, 46",
  },
];

const FAQS = [
  {
    q: "Why is this free?",
    a: "The Longevity Blueprint is offered complimentarily each month to a small number of qualifying individuals in Brickell and Coconut Grove. It's how we introduce serious clients to what precision health actually looks like — with no strings attached. You're under no obligation to continue with any program after your session.",
  },
  {
    q: "Is there really no catch?",
    a: "No catch. You book, you come in, you get your full assessment and report. If you love the experience and want to continue training, we'd be glad to talk about it. If not, you leave with your data and your plan — free of charge.",
  },
  {
    q: "How long does the session take?",
    a: "Plan for 90 minutes total — approximately 45 minutes for both tests and 45 minutes for your consultation. Most clients are done and out before 10am.",
  },
  {
    q: "Do I need to be in shape to do this?",
    a: "Absolutely not. This assessment is designed to tell you exactly where you are right now — regardless of your current fitness level. In fact, the less data you have about your health, the more valuable this session will be.",
  },
  {
    q: "What happens after — will I be pushed into a program?",
    a: "No. You'll receive your report and your plan. If you want to explore training options with us, we're happy to walk you through what's available. There is no pressure, no follow-up sales calls, and no obligation of any kind.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b border-white/8 py-4 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-['Barlow_Condensed'] font-600 text-base text-white">
          {q}
        </span>
        {open ? (
          <ChevronUp size={16} className="text-[oklch(0.72_0.12_75)] flex-shrink-0" />
        ) : (
          <ChevronDown size={16} className="text-[oklch(0.50_0.01_75)] flex-shrink-0" />
        )}
      </div>
      {open && (
        <p className="mt-3 text-sm text-[oklch(0.60_0.01_75)] leading-relaxed">
          {a}
        </p>
      )}
    </div>
  );
}

const TYPEFORM_URL = "https://q5lhjxf6lyg.typeform.com/to/GjjmWBrN";

function ClaimButton({ size = "default" }: { size?: "default" | "large" }) {
  const cls =
    size === "large"
      ? "inline-flex items-center gap-2 bg-[#1D9E75] text-white font-['Barlow_Condensed'] font-700 text-sm uppercase tracking-widest px-10 py-5 hover:bg-[#17876300] transition-colors cursor-pointer border border-[#1D9E75] hover:border-[#1D9E75] hover:text-[#1D9E75]"
      : "inline-flex items-center gap-2 bg-[#1D9E75] text-white font-['Barlow_Condensed'] font-700 text-xs uppercase tracking-widest px-6 py-3 hover:bg-[#178763] transition-colors cursor-pointer";
  return (
    <a href={TYPEFORM_URL} target="_blank" rel="noopener noreferrer" className={cls}>
      BOOK NOW — FREE →
    </a>
  );
}

export default function LongevityBlueprint() {
  useEffect(() => {
    document.title =
      "The Longevity Blueprint — Free Biological Age Assessment at RETO Brickell | Miami Elite Coaching";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Find out your real biological age — completely free. DEXA scan, VO2 Max test, and a 1-on-1 longevity consultation at RETO Brickell. A $600 value. Complimentary for qualifying applicants in Brickell and Coconut Grove."
      );
    window.scrollTo(0, 0);
  }, []);

  return (
    <LandingPageLayout>

      {/* ── HERO ── */}
      <section className="relative pt-24 pb-0 overflow-hidden">
        {/* Background image — top portion only */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.08_0.005_285/0.85)] via-[oklch(0.08_0.005_285/0.92)] to-[oklch(0.08_0.005_285)]" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 bg-[#1D9E75]/15 border border-[#1D9E75]/30 text-[#4ECBA0] font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest px-3 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1D9E75] animate-pulse inline-block" />
            April offer — 4 spots remaining this month
          </div>

          <h1 className="font-['Barlow_Condensed'] font-800 text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.95] mb-6">
            Find out your real biological age —{" "}
            <span className="italic text-[#4ECBA0]">completely free.</span>
          </h1>

          <p className="text-[oklch(0.68_0.01_75)] text-lg leading-relaxed mb-8 max-w-2xl">
            Most people track their finances, their businesses, even their sleep.
            But they have no idea how fast they're actually aging. The Longevity
            Blueprint is a complimentary health assessment session at RETO
            Brickell — a <strong className="text-white">$600 value</strong> —
            designed for high-performing men and women 40+ who are ready to stop
            guessing and start knowing.
          </p>

          {/* Price box */}
          <div className="border-2 border-[#1D9E75]/50 bg-[#1D9E75]/8 p-5 mb-6 max-w-sm">
            <p className="font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest text-[#4ECBA0] mb-2">
              Your investment today
            </p>
            <div className="flex items-baseline gap-3 mb-1">
              <span className="font-['Barlow_Condensed'] font-800 text-5xl text-[#1D9E75]">
                $0
              </span>
              <span className="text-[oklch(0.45_0.01_75)] text-lg line-through">
                $600 value
              </span>
            </div>
            <p className="text-[oklch(0.55_0.01_75)] text-xs leading-relaxed">
              Complimentary for qualifying applicants in Brickell and Coconut
              Grove — this month only.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
            <ClaimButton size="default" />
          </div>
          <p className="text-[oklch(0.40_0.01_75)] text-xs mb-6">
            No credit card. No commitment. Just your data.
          </p>

          {/* Urgency strip */}
          <div className="flex items-center gap-3 bg-[oklch(0.72_0.12_75/0.08)] border border-[oklch(0.72_0.12_75/0.2)] px-4 py-3 max-w-xl">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="flex-shrink-0"
            >
              <circle
                cx="8"
                cy="8"
                r="6.5"
                stroke="oklch(0.72 0.12 75)"
                strokeWidth="1.2"
              />
              <path
                d="M8 5v3.5M8 10.5v.5"
                stroke="oklch(0.72 0.12 75)"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            <p className="text-[oklch(0.72_0.12_75)] text-xs font-['Barlow_Condensed'] font-600">
              Limited to 4–6 sessions per month. Once spots are filled, the next
              availability is the following month.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE HARD TRUTH ── */}
      <section className="py-16 border-t border-white/8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[oklch(0.50_0.01_75)] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-xs mb-3">
            The hard truth
          </p>
          <h2 className="font-['Barlow_Condensed'] font-700 text-3xl sm:text-4xl text-white leading-tight mb-5">
            Your calendar says 47. Your body might be 57. Or 37. The question
            is — which is it?
          </h2>
          <p className="text-[oklch(0.62_0.01_75)] text-base leading-relaxed mb-4">
            Biological age is the number that actually matters. It accounts for
            your cardiovascular fitness, your muscle-to-fat ratio, your metabolic
            health — and it predicts your health trajectory far more accurately
            than the year you were born.
          </p>
          <p className="text-[oklch(0.62_0.01_75)] text-base leading-relaxed mb-8">
            The problem is that most people only find out their biological age
            when something goes wrong. The Longevity Blueprint flips that. You
            walk in. You get tested. You walk out with a complete picture of where
            you are — and exactly what to do about it.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[oklch(0.12_0.005_285)] border border-white/8 p-6">
              <div className="font-['Barlow_Condensed'] font-800 text-4xl text-[#1D9E75] mb-2">
                10–15 yrs
              </div>
              <p className="text-[oklch(0.55_0.01_75)] text-sm leading-relaxed">
                Average gap between real and biological age in adults who are
                sedentary or under-muscled after 40
              </p>
            </div>
            <div className="bg-[oklch(0.12_0.005_285)] border border-white/8 p-6">
              <div className="font-['Barlow_Condensed'] font-800 text-4xl text-[#1D9E75] mb-2">
                1 session
              </div>
              <p className="text-[oklch(0.55_0.01_75)] text-sm leading-relaxed">
                Is all it takes to know your VO2 Max, body composition, and
                biological age benchmark — with a full action plan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU RECEIVE ── */}
      <section className="py-16 bg-[oklch(0.10_0.005_285)] border-t border-white/8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[oklch(0.50_0.01_75)] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-xs mb-3">
            What you receive — at no cost
          </p>
          <h2 className="font-['Barlow_Condensed'] font-700 text-3xl sm:text-4xl text-white leading-tight mb-8">
            A complete biological snapshot. Yours to keep.
          </h2>

          <div className="divide-y divide-white/8">
            {INCLUDES.map((item) => (
              <div key={item.title} className="flex gap-4 py-5">
                <div className="w-6 h-6 rounded-full bg-[#1D9E75]/15 border border-[#1D9E75]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 size={12} className="text-[#1D9E75]" />
                </div>
                <div>
                  <p className="font-['Barlow_Condensed'] font-700 text-base text-white mb-1">
                    {item.title}
                  </p>
                  <p className="text-[oklch(0.58_0.01_75)] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bonus card */}
          <div className="mt-6 bg-[oklch(0.72_0.12_75/0.07)] border border-[oklch(0.72_0.12_75/0.2)] p-5">
            <p className="font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest text-[oklch(0.72_0.12_75)] mb-3">
              Included free bonuses
            </p>
            <div className="space-y-3">
              <div className="flex gap-3 text-sm text-[oklch(0.65_0.01_75)] leading-relaxed pb-3 border-b border-white/8">
                <span className="text-[oklch(0.72_0.12_75)] font-700 flex-shrink-0">
                  +
                </span>
                One complimentary Iyashi Dome infrared recovery session ($100
                value) — the same technology used by Olympic athletes and
                longevity clinics worldwide, available at RETO after your
                assessment
              </div>
              <div className="flex gap-3 text-sm text-[oklch(0.65_0.01_75)] leading-relaxed">
                <span className="text-[oklch(0.72_0.12_75)] font-700 flex-shrink-0">
                  +
                </span>
                Priority booking access for follow-up coaching — Blueprint
                clients are first in line for early morning sessions and new
                program launches
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ── */}
      <section className="py-16 border-t border-white/8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[oklch(0.50_0.01_75)] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-xs mb-3">
            Who this is for
          </p>
          <h2 className="font-['Barlow_Condensed'] font-700 text-3xl sm:text-4xl text-white leading-tight mb-3">
            Built for two very specific kinds of people.
          </h2>
          <p className="text-[oklch(0.58_0.01_75)] text-base leading-relaxed mb-6">
            This offer is intentionally limited and targeted. It's not for
            everyone — and that's the point.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[oklch(0.12_0.005_285)] border border-white/8 p-6">
              <h3 className="font-['Barlow_Condensed'] font-700 text-base text-white mb-4">
                Brickell executives &amp; CEOs, 40+
              </h3>
              <ul className="space-y-2">
                {[
                  "You optimize everything — except your biology",
                  "Your performance depends on your energy and longevity",
                  "You want data, not guesswork",
                  "You're ready to treat your health like an asset",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-[oklch(0.58_0.01_75)] leading-relaxed"
                  >
                    <span className="text-[oklch(0.45_0.01_75)] flex-shrink-0">
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[oklch(0.12_0.005_285)] border border-white/8 p-6">
              <h3 className="font-['Barlow_Condensed'] font-700 text-base text-white mb-4">
                Coconut Grove women, 40+ peri/post-menopause
              </h3>
              <ul className="space-y-2">
                {[
                  "Your body has changed and the old approach isn't working",
                  "You're done with guessing — you want your numbers",
                  "You're committed to the next chapter, on your terms",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-[oklch(0.58_0.01_75)] leading-relaxed"
                  >
                    <span className="text-[oklch(0.45_0.01_75)] flex-shrink-0">
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 bg-[oklch(0.10_0.005_285)] border-t border-white/8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[oklch(0.50_0.01_75)] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-xs mb-3">
            How it works
          </p>
          <h2 className="font-['Barlow_Condensed'] font-700 text-3xl sm:text-4xl text-white leading-tight mb-8">
            Simple. Private. Done in one morning.
          </h2>

          <div className="divide-y divide-white/8">
            {STEPS.map((step) => (
              <div key={step.num} className="flex gap-5 py-5">
                <div className="w-8 h-8 rounded-full bg-[#1D9E75]/15 border border-[#1D9E75]/30 flex items-center justify-center flex-shrink-0">
                  <span className="font-['Barlow_Condensed'] font-700 text-sm text-[#4ECBA0]">
                    {step.num}
                  </span>
                </div>
                <div>
                  <p className="font-['Barlow_Condensed'] font-700 text-base text-white mb-1">
                    {step.title}
                  </p>
                  <p className="text-[oklch(0.58_0.01_75)] text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RETO BRICKELL ── */}
      <section className="py-16 border-t border-white/8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[oklch(0.50_0.01_75)] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-xs mb-3">
            From the facility
          </p>
          <h2 className="font-['Barlow_Condensed'] font-700 text-3xl sm:text-4xl text-white leading-tight mb-4">
            RETO Brickell — where the assessment takes place.
          </h2>
          <p className="text-[oklch(0.62_0.01_75)] text-base leading-relaxed mb-5">
            RETO is Miami's premier longevity and biohacking center, offering
            medical-grade diagnostics, infrared therapy, and science-backed health
            optimization in a completely private setting. It's where serious
            people go when they're done with generic wellness and ready for
            precision health.
          </p>
          <div className="inline-flex items-center gap-2 bg-[oklch(0.14_0.005_285)] border border-white/8 px-4 py-2.5 text-sm text-[oklch(0.55_0.01_75)]">
            <span className="w-2 h-2 rounded-full bg-[#1D9E75] flex-shrink-0" />
            Located in Brickell — 15 minutes from Coconut Grove. Valet available.
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 bg-[oklch(0.10_0.005_285)] border-t border-white/8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[oklch(0.50_0.01_75)] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-xs mb-6">
            What clients say
          </p>
          <div className="space-y-4">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.author}
                className="bg-[oklch(0.12_0.005_285)] border border-white/8 p-6"
              >
                <p className="text-[oklch(0.72_0.01_75)] text-base italic leading-relaxed mb-4">
                  "{t.text}"
                </p>
                <p className="text-[oklch(0.45_0.01_75)] text-xs font-['Barlow_Condensed'] font-600 uppercase tracking-wider">
                  {t.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 border-t border-white/8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[oklch(0.50_0.01_75)] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-xs mb-6">
            Questions
          </p>
          <div>
            {FAQS.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section id="claim" className="py-20 bg-[oklch(0.10_0.005_285)] border-t border-white/8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-[#1D9E75]/12 border border-[#1D9E75]/25 px-5 py-2 text-sm text-[#4ECBA0] font-['Barlow_Condensed'] font-600 uppercase tracking-wider mb-6">
            4 spots remaining — April 2026
          </div>
          <h2 className="font-['Barlow_Condensed'] font-700 text-4xl sm:text-5xl text-white leading-tight mb-4">
            Your biological age is a number.
            <br />
            It's time to know it.
          </h2>
          <p className="text-[oklch(0.60_0.01_75)] text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Claim your complimentary Longevity Blueprint session at RETO
            Brickell. A $600 assessment. On us. This month only.
          </p>
          <ClaimButton size="large" />
          <p className="text-[oklch(0.38_0.01_75)] text-xs mt-4">
            No credit card. No commitment. Includes $100 Iyashi Dome bonus
            session.
          </p>

          {/* Guarantee box */}
          <div className="mt-8 border border-white/8 p-5 text-left flex gap-4 max-w-xl mx-auto">
            <div className="w-10 h-10 bg-[#1D9E75]/12 border border-[#1D9E75]/25 flex items-center justify-center flex-shrink-0">
              <Shield size={18} className="text-[#1D9E75]" />
            </div>
            <div>
              <p className="font-['Barlow_Condensed'] font-700 text-sm text-white mb-1">
                Our commitment to you
              </p>
              <p className="text-[oklch(0.55_0.01_75)] text-sm leading-relaxed">
                Your session is private, your data is yours, and there is zero
                obligation beyond showing up. If you don't leave with genuinely
                useful information about your health, tell us — and we'll make it
                right.
              </p>
            </div>
          </div>

          {/* Internal links */}
          <div className="mt-10 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-[oklch(0.45_0.01_75)]">
            <span>Also explore:</span>
            <Link href="/miami-personal-trainer">
              <span className="text-[oklch(0.72_0.12_75)] hover:text-[oklch(0.85_0.10_75)] transition-colors cursor-pointer font-['Barlow_Condensed'] font-600 uppercase tracking-wider">
                All Miami Programs
              </span>
            </Link>
          </div>
        </div>
      </section>

    </LandingPageLayout>
  );
}
