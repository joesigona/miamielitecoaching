// Route: /longevity-duo
// SEO: couples health assessment miami, biological age test miami, longevity testing brickell
// Design: Dark luxury with emerald accent (#1D9E75) — targeting couples/pairs

import { useEffect, useState } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp } from "lucide-react";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663459681691/83tywCBKrbukToGzWmD9PC/hero-blog-Lm26dz8LvEeJ9QD4Pqngfi.webp";

const TYPEFORM_URL = "https://q5lhjxf6lyg.typeform.com/to/fe89pL85";

const INCLUDES = [
  {
    title: "2 × DEXA Body Composition Scans",
    desc: "The gold standard in body fat, lean muscle, and bone density measurement. See exactly where your body is storing fat and how much functional muscle you carry.",
  },
  {
    title: "2 × VO2 Max Cardiovascular Tests",
    desc: "The single best predictor of long-term health and longevity. Know your true cardiovascular fitness age and how it compares to elite-level benchmarks.",
  },
  {
    title: "1 × Joint Longevity Consultation (60 min)",
    desc: "Sit down together with a certified specialist and review your individual results, identify shared goals, and walk away with a personalized roadmap for each of you.",
  },
  {
    title: "2 × Personalized Biological Age Reports",
    desc: "A printed and digital summary of your biomarkers, cardiovascular fitness age, and priority action areas. Yours to keep and track over time.",
  },
];

const TESTIMONIALS = [
  {
    quote: "We did this for our anniversary and it completely reframed how we think about the next decade. Seeing our VO2 Max numbers side by side was a wake-up call — and also oddly competitive. We both signed up for training the following week.",
    name: "M. & R.",
    title: "Coconut Grove",
  },
  {
    quote: "As a CEO, I'm used to data driving every decision. This gave me data on the most important thing I own — my health. The fact that my wife could do it with me made it a no-brainer.",
    name: "D.A.",
    title: "Brickell",
  },
];

const FAQS = [
  { q: "How long does the session take?", a: "Plan for approximately 90 minutes total — roughly 45 minutes for both assessments and 60 minutes for your joint consultation. Sessions can be scheduled back-to-back or the consultation can be booked for a separate day." },
  { q: "Do we need to prepare anything?", a: "Avoid heavy meals for 3–4 hours before your DEXA scan. Wear comfortable clothing. No other preparation is required — the team at RETO will guide you through everything." },
  { q: "Can we use this as a gift?", a: "Absolutely. After booking, email us and we'll send a printable gift certificate. Perfect for birthdays, anniversaries, or a milestone moment." },
  { q: "What happens after the assessment?", a: "You receive your Biological Age Reports and a personal roadmap. From there, you can choose to continue with individual 1-on-1 training sessions — both partners receive a $75 credit that applies immediately toward any coaching package." },
  { q: "Is this only for couples?", a: "Not at all. Best friends, siblings, business partners, mother-daughter pairs — anyone who wants to do this together. Two people, one shared commitment." },
];

function BuyNowButton({ size = "default" }: { size?: "default" | "large" }) {
  const [loading, setLoading] = useState(false);
  const cls = size === "large"
    ? "inline-flex items-center gap-2 bg-[#1D9E75] text-[#E1F5EE] font-['Barlow_Condensed'] font-700 text-sm uppercase tracking-widest px-10 py-5 hover:bg-[#0F6E56] transition-colors cursor-pointer border border-[#1D9E75] hover:border-[#3DC49A]"
    : "inline-flex items-center gap-2 bg-[#1D9E75] text-[#E1F5EE] font-['Barlow_Condensed'] font-700 text-xs uppercase tracking-widest px-6 py-3 hover:bg-[#0F6E56] transition-colors cursor-pointer";
  async function handleBuy() {
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/create-checkout", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ productId: "longevity-duo" }) });
      const data = await res.json();
      if (data.url) window.open(data.url, "_blank");
    } catch (err) { console.error("Checkout error:", err); } finally { setLoading(false); }
  }
  return (
    <button onClick={handleBuy} disabled={loading} className={cls}>
      {loading ? "Processing..." : "BUY NOW — $599 →"}
    </button>
  );
}

function CtaButton({ size = "default", label = "Have Questions? Apply First →" }: { size?: "default" | "large"; label?: string }) {
  const cls = size === "large"
    ? "inline-flex items-center gap-2 border border-white/20 text-white font-['Barlow_Condensed'] font-700 text-sm uppercase tracking-widest px-10 py-5 hover:bg-white/5 transition-colors cursor-pointer"
    : "inline-flex items-center gap-2 border border-white/20 text-white font-['Barlow_Condensed'] font-700 text-xs uppercase tracking-widest px-6 py-3 hover:bg-white/5 transition-colors cursor-pointer";
  return (
    <a href={TYPEFORM_URL} target="_blank" rel="noopener noreferrer" className={cls}>
      {label}
    </a>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/8 last:border-b-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left cursor-pointer">
        <span className="font-['Barlow_Condensed'] font-600 text-base text-white pr-4">{q}</span>
        {open ? <ChevronUp className="w-5 h-5 text-[#3DC49A] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#3DC49A] flex-shrink-0" />}
      </button>
      {open && <p className="text-[oklch(0.60_0.01_75)] text-sm leading-relaxed pb-5 pr-8">{a}</p>}
    </div>
  );
}

export default function LongevityDuo() {
  useEffect(() => {
    document.title = "Longevity Duo — Biological Age Assessment for Two | Miami Elite Coaching";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "The Longevity Duo is a complete biological age assessment for two — DEXA scan, VO2 Max test, and joint longevity consultation at RETO Brickell. $599 for two. Miami's premier couples health experience.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[oklch(0.10_0.005_285)]">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.06_0.005_285)] via-[oklch(0.06_0.005_285)]/90 to-[oklch(0.06_0.005_285)]/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#1D9E75]/15 border border-[#1D9E75]/30 text-[#3DC49A] font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D9E75] animate-pulse inline-block" />
              Limited to 6 Pairs Per Month — Brickell & Coconut Grove
            </div>
            <h1 className="font-['Barlow_Condensed'] font-800 text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] mb-4">
              The Best Investment You'll Ever Make Is in{" "}
              <span className="text-[#3DC49A] italic font-['Source_Serif_4']">
                Each Other's Health.
              </span>
            </h1>
            <p className="text-[oklch(0.65_0.01_75)] text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              A complete biological age assessment for two — DEXA body composition scan, VO2 Max cardiovascular test, and a shared longevity consultation at RETO Brickell's elite biohacking facility. Know your numbers. Build your plan. Together.
            </p>

            <div className="flex items-baseline gap-4 mb-2 flex-wrap">
              <span className="font-['Barlow_Condensed'] font-800 text-4xl text-[#3DC49A]">$599 for two</span>
              <span className="text-[oklch(0.45_0.01_75)] line-through text-lg">$800</span>
              <span className="bg-[#FAEEDA]/15 text-[#D4A853] font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-wider px-3 py-1">Save $201</span>
            </div>
            <p className="text-[oklch(0.45_0.01_75)] text-sm mb-6">No membership required. Book online in under 2 minutes.</p>

            <BuyNowButton size="large" />
            <div className="mt-3" />
            <CtaButton size="large" />
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest text-[#3DC49A] mb-3">Why This Matters</p>
          <h2 className="font-['Barlow_Condensed'] font-800 text-3xl sm:text-4xl text-white mb-6">
            Most People Don't Know How Fast They're Actually Aging.
          </h2>
          <p className="text-[oklch(0.60_0.01_75)] leading-relaxed max-w-3xl mb-4">
            After 40, your body composition, cardiovascular fitness, and metabolic health shift in ways that are invisible to the naked eye — but completely measurable with the right tools. The Longevity Duo gives you and your partner a precise, data-driven snapshot of where you stand biologically — not just chronologically.
          </p>
          <p className="text-[oklch(0.60_0.01_75)] leading-relaxed max-w-3xl mb-8">
            Because the decision to take your health seriously is more powerful when you make it together.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            {[
              { num: "10–15 yrs", label: "Average gap between chronological age and biological age in sedentary adults after 40" },
              { num: "3×", label: "More likely to maintain a health habit when a partner is also committed to the same goal" },
            ].map((s, i) => (
              <div key={i} className="bg-white/4 border border-white/6 p-5">
                <p className="font-['Barlow_Condensed'] font-800 text-3xl text-[#3DC49A] mb-1">{s.num}</p>
                <p className="text-[oklch(0.55_0.01_75)] text-sm leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Includes */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest text-[#3DC49A] mb-3">What's Included for Both of You</p>
          <h2 className="font-['Barlow_Condensed'] font-800 text-3xl sm:text-4xl text-white mb-8">
            Everything You Need. Nothing You Don't.
          </h2>
          <div className="space-y-0 divide-y divide-white/6">
            {INCLUDES.map((item, i) => (
              <div key={i} className="flex gap-4 py-5">
                <div className="w-8 h-8 rounded-full bg-[#1D9E75]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 10 10" fill="none" className="w-3 h-3"><path d="M2 5l2.5 2.5L8 3" stroke="#3DC49A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <div>
                  <p className="font-['Barlow_Condensed'] font-700 text-white mb-1">{item.title}</p>
                  <p className="text-[oklch(0.55_0.01_75)] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bonuses */}
          <div className="mt-8 bg-[#D4A853]/10 border border-[#D4A853]/25 p-6">
            <p className="font-['Barlow_Condensed'] font-700 text-xs uppercase tracking-widest text-[#D4A853] mb-4">Free Bonuses — Included with Every Booking</p>
            <div className="space-y-3">
              <p className="text-[oklch(0.65_0.01_75)] text-sm leading-relaxed">One complimentary Iyashi Dome infrared session for the pair ($100 value) — the same recovery technology used by elite athletes and anti-aging clinics worldwide</p>
              <p className="text-[oklch(0.65_0.01_75)] text-sm leading-relaxed">$75 training credit each toward personal coaching with a Sports Scientist at RETO ($150 combined value)</p>
              <p className="text-[oklch(0.65_0.01_75)] text-sm leading-relaxed">10% off both training packages if you decide to continue together after your assessment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest text-[#3DC49A] mb-3">Where It Happens</p>
          <h2 className="font-['Barlow_Condensed'] font-800 text-3xl sm:text-4xl text-white mb-4">
            At RETO Brickell — Miami's Premier Longevity Facility.
          </h2>
          <p className="text-[oklch(0.60_0.01_75)] leading-relaxed max-w-3xl mb-6">
            Your assessment takes place at RETO in Brickell — a world-class biohacking and longevity center offering medical-grade technology in a private, luxury setting. Think less gym, more performance lab. Valet parking available. Private consultation suite. No crowded waiting rooms.
          </p>
          <div className="inline-flex items-center gap-3 bg-white/4 border border-white/8 px-4 py-2.5">
            <span className="w-2 h-2 rounded-full bg-[#1D9E75]" />
            <span className="text-[oklch(0.55_0.01_75)] text-sm">Located in Brickell, Miami — 15 minutes from Coconut Grove</span>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest text-[#3DC49A] mb-3">This Is for You If...</p>
          <h2 className="font-['Barlow_Condensed'] font-800 text-3xl sm:text-4xl text-white mb-6">
            You're Done Guessing and Ready to Know.
          </h2>
          <p className="text-[oklch(0.60_0.01_75)] leading-relaxed max-w-3xl mb-4">
            The Longevity Duo is ideal for couples, close friends, or partners who are 40+ and serious about adding quality years to their lives. Whether you're a Brickell executive and your partner, or a Coconut Grove couple who's decided that this year is the year — this is your starting point.
          </p>
          <p className="text-[oklch(0.60_0.01_75)] leading-relaxed max-w-3xl">
            It also makes a remarkable gift. A milestone birthday. An anniversary. A shared commitment to the next chapter.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest text-[#3DC49A] mb-6">What Clients Say</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white/3 border border-white/6 p-6">
                <p className="text-white/80 italic leading-relaxed mb-4">"{t.quote}"</p>
                <p className="text-[oklch(0.45_0.01_75)] text-sm">{t.name} — {t.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest text-[#3DC49A] mb-3">Common Questions</p>
          <h2 className="font-['Barlow_Condensed'] font-800 text-3xl text-white mb-8">Frequently Asked</h2>
          {FAQS.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#1D9E75]/15 border border-[#1D9E75]/30 inline-block px-5 py-2 mb-6">
            <p className="text-[#3DC49A] font-['Barlow_Condensed'] font-700 text-sm">Only 6 Longevity Duo slots available per month — currently booking for April & May</p>
          </div>
          <h2 className="font-['Barlow_Condensed'] font-800 text-3xl sm:text-4xl text-white mb-4">
            Ready to Invest in Your Future — Together?
          </h2>
          <p className="text-[oklch(0.60_0.01_75)] leading-relaxed mb-8 max-w-xl mx-auto">
            Book in under 2 minutes. No commitment beyond the assessment. Full results in hand the same day.
          </p>
          <BuyNowButton size="large" />
          <div className="mt-3" />
          <CtaButton size="large" />
          <p className="text-[oklch(0.40_0.01_75)] text-xs mt-4">Includes $250 in free bonuses. Spots are limited.</p>

          <div className="mt-8 bg-white/3 border border-white/6 p-5 text-left flex gap-4">
            <div className="w-9 h-9 bg-[#1D9E75]/20 flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="#3DC49A" strokeWidth="1.2" /><path d="M9 6v4M9 12v.5" stroke="#3DC49A" strokeWidth="1.2" strokeLinecap="round" /></svg>
            </div>
            <div>
              <p className="font-['Barlow_Condensed'] font-700 text-white mb-1">Continue together and save 10%</p>
              <p className="text-[oklch(0.55_0.01_75)] text-sm leading-relaxed">Clients who enroll in personal training packages after their Duo assessment receive 10% off both programs — applied automatically at booking. Ask about our couples scheduling options.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
