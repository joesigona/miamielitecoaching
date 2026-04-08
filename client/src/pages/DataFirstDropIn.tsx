// Route: /data-first-dropin
// SEO: DEXA scan miami, VO2 max test brickell, body composition test miami, health assessment miami
// Design: Dark luxury with indigo accent (#534AB7) — lowest barrier entry, targeting everyone

import { useEffect, useState } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp } from "lucide-react";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663459681691/83tywCBKrbukToGzWmD9PC/article-thumb-1-ioFYxUHKSMXBbQwzKqXbPD.webp";

const TYPEFORM_URL = "https://q5lhjxf6lyg.typeform.com/to/fKybxD1d";

const INCLUDES = [
  {
    title: "DEXA Body Composition Scan",
    desc: "Medical-grade measurement of your exact body fat percentage, lean muscle mass by region, visceral fat levels, and bone density. The data point that makes BMI, body weight, and most fitness trackers look like guesswork by comparison.",
  },
  {
    title: "VO2 Max Cardiovascular Fitness Test",
    desc: "The single most predictive biomarker for long-term health and longevity. You'll know your cardiovascular fitness age, your percentile ranking for your age group, and whether your heart and lungs are aging faster or slower than your years.",
  },
  {
    title: "45-min Results Consultation + Personal Roadmap",
    desc: "A certified specialist walks you through every number — what it means, what's working, what needs attention, and the specific actions most likely to move the needle for your body. Not generic advice. A personalized action list built from your data.",
  },
  {
    title: "Printed Biomarker Report",
    desc: "A full summary of your results — DEXA scan breakdown, VO2 Max score and fitness age, biological age benchmark, and your priority action areas — printed and yours to keep. A baseline you can reference and improve against over time.",
  },
];

const STEPS = [
  { num: "1", title: "Book online — takes 2 minutes", desc: "Choose your date and time. No intake form, no application. Just pick a slot and show up. Confirmation sent immediately." },
  { num: "2", title: "Arrive at RETO Brickell", desc: "Come in comfortable clothing. Avoid heavy meals for 3–4 hours prior to your DEXA scan. Parking available. You'll be seen privately — no waiting room, no gym floor." },
  { num: "3", title: "Complete your DEXA + VO2 Max tests", desc: "Both assessments take approximately 45 minutes combined. Non-invasive, no discomfort. A specialist is with you the entire time explaining what's happening and why it matters." },
  { num: "4", title: "Review your results — consultation + roadmap", desc: "Sit down with your specialist and walk through your complete Biomarker Report. Every number explained. A prioritized action plan tailored to your results. No jargon, no overwhelm." },
  { num: "5", title: "Leave with your report — and your next move", desc: "You walk out with your printed Biomarker Report, your roadmap, and complete clarity on where you stand and what to do next. Done by mid-morning — with or without any further commitment." },
];

const REPORT_ROWS = [
  { label: "Total body fat %", value: "Exact measurement + healthy range for your age" },
  { label: "Lean muscle mass", value: "By region — arms, legs, trunk" },
  { label: "Visceral fat level", value: "The health-critical fat around your organs" },
  { label: "Bone density score", value: "Compared to age-matched norms" },
  { label: "VO2 Max score", value: "Your cardiovascular fitness number" },
  { label: "Cardiovascular fitness age", value: "How old your heart and lungs are performing" },
  { label: "Biological age benchmark", value: "Composite biological age vs. chronological age" },
  { label: "Priority action areas", value: "Top 3 interventions specific to your results" },
];

const TESTIMONIALS = [
  {
    quote: "I booked this specifically because there was no commitment involved. I figured I'd get the data and think about it. I signed up for a training program before I'd even left the building. The numbers made the decision obvious.",
    name: "T.H.",
    title: "Brickell, 44",
  },
  {
    quote: "Honestly thought this would be a sales pitch disguised as an assessment. It wasn't. I got real information about my body that I'd never had before — including that my cardiovascular fitness age is six years younger than I am. That was worth every cent of the $350 regardless of anything else.",
    name: "S.M.",
    title: "Coconut Grove, 51",
  },
];

const FAQS = [
  { q: "Is this just a sales pitch for a bigger program?", a: "No. The Drop-In is a complete, standalone session. You receive your full Biomarker Report and consultation regardless of whether you continue with anything else. If you'd like to explore training programs after your session, we're happy to walk you through the options — but there is no pressure, no follow-up calls, and no obligation." },
  { q: "What's the difference between this and the free Longevity Blueprint?", a: "The Blueprint is complimentary and offered to a very limited number of people each month as an introductory experience. The Drop-In is available weekly, books immediately with no application, and includes a more detailed results consultation and roadmap. Both include a DEXA and VO2 Max — the Drop-In adds more depth in the follow-through." },
  { q: "Do I need to be in good shape to do this?", a: "Not at all. The assessment is designed to tell you where you are right now — whatever that looks like. There's nothing to pass or fail. The less data you currently have about your health, the more valuable this session will be." },
  { q: "How does the $100 credit work?", a: "If you book any training package within 7 days of completing your Drop-In, $100 is automatically deducted from the package price. No code, no negotiation — it's applied at checkout. After 7 days, the credit expires." },
  { q: "Can I book multiple sessions over time to track progress?", a: "Absolutely. Many clients use the Drop-In as a quarterly benchmark — booking every 90 days to track changes in their body composition and cardiovascular fitness over time. A 10% repeat-booking discount applies from your second session onward." },
];

function BuyNowButton({ size = "default" }: { size?: "default" | "large" }) {
  const [loading, setLoading] = useState(false);
  const cls = size === "large"
    ? "inline-flex items-center gap-2 bg-[#534AB7] text-[#EEEDFE] font-['Barlow_Condensed'] font-700 text-sm uppercase tracking-widest px-10 py-5 hover:bg-[#3C3489] transition-colors cursor-pointer border border-[#534AB7] hover:border-[#7B73D1]"
    : "inline-flex items-center gap-2 bg-[#534AB7] text-[#EEEDFE] font-['Barlow_Condensed'] font-700 text-xs uppercase tracking-widest px-6 py-3 hover:bg-[#3C3489] transition-colors cursor-pointer";
  async function handleBuy() {
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/create-checkout", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ productId: "data-first-drop-in" }) });
      const data = await res.json();
      if (data.url) window.open(data.url, "_blank");
    } catch (err) { console.error("Checkout error:", err); } finally { setLoading(false); }
  }
  return (
    <button onClick={handleBuy} disabled={loading} className={cls}>
      {loading ? "Processing..." : "BUY NOW — $350 →"}
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
        {open ? <ChevronUp className="w-5 h-5 text-[#7B73D1] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#7B73D1] flex-shrink-0" />}
      </button>
      {open && <p className="text-[oklch(0.60_0.01_75)] text-sm leading-relaxed pb-5 pr-8">{a}</p>}
    </div>
  );
}

export default function DataFirstDropIn() {
  useEffect(() => {
    document.title = "Data-First Drop-In — DEXA Scan & VO2 Max Test in One Session | Miami Elite Coaching";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "The Data-First Drop-In is a single 90-minute health assessment at RETO Brickell — DEXA body composition scan, VO2 Max test, personalized consultation, and printed Biomarker Report. $350, no commitment. Miami.");
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
            <div className="inline-flex items-center gap-2 bg-[#534AB7]/15 border border-[#534AB7]/30 text-[#7B73D1] font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#534AB7] animate-pulse inline-block" />
              No Membership · No Commitment · One Session
            </div>
            <h1 className="font-['Barlow_Condensed'] font-800 text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] mb-4">
              Not Ready to Commit?{" "}
              <span className="text-[#7B73D1] italic font-['Source_Serif_4']">
                Start With the Data.
              </span>
            </h1>
            <p className="text-[oklch(0.65_0.01_75)] text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              The Data-First Drop-In is a single, complete health assessment session at RETO Brickell — a DEXA body composition scan, VO2 Max cardiovascular test, a personalized results consultation, and a printed Biomarker Report you take home. No program. No pressure. Just everything you need to finally make an informed decision about your health.
            </p>

            <div className="flex items-baseline gap-4 mb-2 flex-wrap">
              <span className="font-['Barlow_Condensed'] font-800 text-4xl text-[#7B73D1]">$350</span>
              <span className="text-[oklch(0.45_0.01_75)] line-through text-lg">$500</span>
              <span className="bg-[#534AB7]/20 text-[#7B73D1] font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-wider px-3 py-1">Save $150</span>
            </div>
            <p className="text-[oklch(0.45_0.01_75)] text-sm mb-6">Single session · Capped at 8 per week · Results same day</p>

            <BuyNowButton size="large" />
            <div className="mt-3" />
            <CtaButton size="large" />
            <p className="text-[oklch(0.40_0.01_75)] text-xs mt-3">Book online in under 2 minutes. No intake form required.</p>

            <div className="mt-6 bg-[#534AB7]/10 border border-[#534AB7]/25 px-4 py-3 max-w-md">
              <p className="text-[#7B73D1] font-['Barlow_Condensed'] font-600 text-sm">
                Only 8 Drop-In slots available per week. Currently booking April 14–30.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest text-[#7B73D1] mb-3">Who This Is For</p>
          <h2 className="font-['Barlow_Condensed'] font-800 text-3xl sm:text-4xl text-white mb-6 max-w-3xl">
            For Everyone Who's Been Meaning to Do Something About Their Health — But Isn't Ready to Commit Yet.
          </h2>
          <p className="text-[oklch(0.60_0.01_75)] leading-relaxed max-w-3xl mb-4">
            Maybe you've looked at health programs before and hesitated. Maybe the timing wasn't right, the commitment felt too heavy, or you just weren't sure what you actually needed. The Data-First Drop-In removes every one of those barriers.
          </p>
          <p className="text-[oklch(0.60_0.01_75)] leading-relaxed max-w-3xl mb-8">
            One session. No program attached. No follow-up pressure. You come in, you get your complete health picture, and you leave with real data — and a clear roadmap — whether you continue with us or not.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { num: "90 min", label: "Total session time — tests, consultation, and report. Most clients are done before mid-morning." },
              { num: "Same day", label: "Your full Biomarker Report is printed and handed to you before you leave the facility." },
              { num: "$100", label: "Credit toward any training package — automatically applied if you book within 7 days of your drop-in." },
            ].map((s, i) => (
              <div key={i} className="bg-white/4 border border-white/6 p-5">
                <p className="font-['Barlow_Condensed'] font-800 text-2xl text-[#7B73D1] mb-1">{s.num}</p>
                <p className="text-[oklch(0.55_0.01_75)] text-sm leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Includes */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest text-[#7B73D1] mb-3">What You Get — The Complete Picture</p>
          <h2 className="font-['Barlow_Condensed'] font-800 text-3xl sm:text-4xl text-white mb-8">
            Four Deliverables. One Session. No Strings.
          </h2>
          <div className="space-y-0 divide-y divide-white/6">
            {INCLUDES.map((item, i) => (
              <div key={i} className="flex gap-4 py-5">
                <div className="w-8 h-8 rounded-full bg-[#534AB7]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 10 10" fill="none" className="w-3 h-3"><path d="M2 5l2.5 2.5L8 3" stroke="#7B73D1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <div>
                  <p className="font-['Barlow_Condensed'] font-700 text-white mb-1">{item.title}</p>
                  <p className="text-[oklch(0.55_0.01_75)] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* $100 Credit Highlight */}
          <div className="mt-8 bg-[#534AB7]/15 border-2 border-[#7B73D1]/40 p-6">
            <p className="font-['Barlow_Condensed'] font-700 text-xs uppercase tracking-widest text-[#7B73D1] mb-2">7-Day Upgrade Offer</p>
            <p className="font-['Barlow_Condensed'] font-800 text-xl text-white mb-2">Book a training package within 7 days — get $100 back.</p>
            <p className="text-[oklch(0.60_0.01_75)] text-sm leading-relaxed">If you complete your Drop-In and decide you want to continue with a structured program — the CEO Performance Protocol, the Vitality Reset, or any coaching package — $100 of your Drop-In fee is automatically applied as a credit. No code needed.</p>
          </div>
        </div>
      </section>

      {/* Biomarker Report */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest text-[#7B73D1] mb-3">What Your Report Includes</p>
          <h2 className="font-['Barlow_Condensed'] font-800 text-3xl sm:text-4xl text-white mb-8">
            The Data You Walk Out With — On Paper, Same Day.
          </h2>
          <div className="bg-white/3 border border-white/8 p-6">
            <p className="font-['Barlow_Condensed'] font-700 text-white mb-4">Your Biomarker Report — sample breakdown</p>
            <div className="divide-y divide-white/6">
              {REPORT_ROWS.map((r, i) => (
                <div key={i} className="flex justify-between items-center py-3">
                  <span className="text-[oklch(0.55_0.01_75)] text-sm">{r.label}</span>
                  <span className="text-[#7B73D1] font-['Barlow_Condensed'] font-600 text-sm text-right ml-4">{r.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest text-[#7B73D1] mb-3">How the Session Runs</p>
          <h2 className="font-['Barlow_Condensed'] font-800 text-3xl sm:text-4xl text-white mb-8">
            Simple. Private. Done in One Morning.
          </h2>
          <div className="space-y-3">
            {STEPS.map((s, i) => (
              <div key={i} className="flex gap-4 py-4 border-b border-white/6 last:border-b-0">
                <div className="w-8 h-8 rounded-full bg-[#534AB7]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#7B73D1] font-['Barlow_Condensed'] font-700 text-sm">{s.num}</span>
                </div>
                <div>
                  <p className="font-['Barlow_Condensed'] font-700 text-white mb-1">{s.title}</p>
                  <p className="text-[oklch(0.55_0.01_75)] text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest text-[#7B73D1] mb-3">Bonus — Bring Someone</p>
          <h2 className="font-['Barlow_Condensed'] font-800 text-3xl text-white mb-6">Refer a Friend. You Both Save.</h2>
          <div className="bg-[#534AB7]/10 border border-[#534AB7]/25 p-6">
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-[#7B73D1] font-bold flex-shrink-0">+</span>
                <p className="text-[oklch(0.65_0.01_75)] text-sm leading-relaxed">Share your booking link with a friend, partner, or colleague — when they complete their own Drop-In session, you both receive $50 off your next booking at RETO. No limits on referrals.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#7B73D1] font-bold flex-shrink-0">+</span>
                <p className="text-[oklch(0.65_0.01_75)] text-sm leading-relaxed">Want to come in together? Book the <Link href="/longevity-duo" className="text-[#3DC49A] underline">Longevity Duo</Link> instead — two full assessments and a joint consultation for $599.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest text-[#7B73D1] mb-3">Where It Happens</p>
          <h2 className="font-['Barlow_Condensed'] font-800 text-3xl sm:text-4xl text-white mb-4">
            RETO Brickell — Not a Gym. A Precision Health Facility.
          </h2>
          <p className="text-[oklch(0.60_0.01_75)] leading-relaxed max-w-3xl mb-6">
            RETO is Miami's premier longevity and biohacking center. Medical-grade DEXA scanning. Private consultation suites. Clinical-level VO2 Max testing. No gym atmosphere, no crowds, no mirrors full of strangers. This is where serious people go when they want real data about their health.
          </p>
          <div className="inline-flex items-center gap-3 bg-white/4 border border-white/8 px-4 py-2.5">
            <span className="w-2 h-2 rounded-full bg-[#534AB7]" />
            <span className="text-[oklch(0.55_0.01_75)] text-sm">Brickell, Miami — 15 minutes from Coconut Grove. Parking available.</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest text-[#7B73D1] mb-6">What Clients Say</p>
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
          <p className="font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest text-[#7B73D1] mb-3">Questions</p>
          <h2 className="font-['Barlow_Condensed'] font-800 text-3xl text-white mb-8">Frequently Asked</h2>
          {FAQS.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest text-[#7B73D1] mb-4">Currently Booking — April 14 to 30</p>
          <h2 className="font-['Barlow_Condensed'] font-800 text-3xl sm:text-4xl text-white mb-4">
            One Session. Complete Picture. No Strings Attached.
          </h2>
          <p className="text-[oklch(0.60_0.01_75)] leading-relaxed mb-6 max-w-xl mx-auto">
            The Data-First Drop-In is the easiest decision you'll make for your health this year. $350, 90 minutes, and you leave knowing more about your body than most people learn in a decade.
          </p>

          {/* Spots visual */}
          <div className="flex justify-center gap-2 mb-2">
            {[1, 2, 3].map(i => <div key={i} className="w-3.5 h-3.5 rounded-full bg-[#534AB7]" />)}
            {[4, 5, 6, 7, 8].map(i => <div key={i} className="w-3.5 h-3.5 rounded-full bg-[#534AB7]/20 border border-[#7B73D1]/40" />)}
          </div>
          <p className="text-[oklch(0.45_0.01_75)] text-xs mb-6">3 of 8 weekly slots filled — 5 remaining this week</p>

          <BuyNowButton size="large" />
          <div className="mt-3" />
          <CtaButton size="large" />
          <p className="text-[oklch(0.40_0.01_75)] text-xs mt-4">Includes $100 upgrade credit if you book a program within 7 days. No commitment beyond the session.</p>

          <div className="mt-8 bg-white/3 border border-white/6 p-5 text-left flex gap-4">
            <div className="w-9 h-9 bg-[#534AB7]/20 flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9h12M9 3l6 6-6 6" stroke="#7B73D1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <div>
              <p className="font-['Barlow_Condensed'] font-700 text-white mb-1">Ready for more? Your $350 becomes a credit.</p>
              <p className="text-[oklch(0.55_0.01_75)] text-sm leading-relaxed">Book the <Link href="/ceo-performance-protocol" className="text-[#5BA3D9] underline">CEO Performance Protocol</Link> or the <Link href="/vitality-reset" className="text-[#C05A7E] underline">Vitality Reset</Link> within 7 days of your Drop-In and your assessment fee is applied as a $100 credit toward the program.</p>
            </div>
          </div>

          <div className="mt-4 bg-white/3 border border-white/6 p-5 text-left flex gap-4">
            <div className="w-9 h-9 bg-[#534AB7]/20 flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2L3 5v5c0 3.5 2.5 6.5 6 7.5 3.5-1 6-4 6-7.5V5L9 2z" stroke="#7B73D1" strokeWidth="1.2" strokeLinejoin="round" /></svg>
            </div>
            <div>
              <p className="font-['Barlow_Condensed'] font-700 text-white mb-1">Our commitment to you</p>
              <p className="text-[oklch(0.55_0.01_75)] text-sm leading-relaxed">You will leave this session with useful, actionable information about your health. Your data is yours — we don't share it, sell it, or use it to market to you beyond what you ask for. If you don't feel your $350 was well spent, tell us and we'll make it right.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
