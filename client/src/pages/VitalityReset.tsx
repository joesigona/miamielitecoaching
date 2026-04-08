// Route: /vitality-reset
// SEO: women fitness 40+ miami, perimenopause training coconut grove, hormone-aware fitness miami
// Design: Dark luxury with rose accent (#993556) — targeting women 40+ in peri/post-menopause

import { useEffect, useState } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp } from "lucide-react";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663459681691/83tywCBKrbukToGzWmD9PC/hero-coconut-grove-5gCHpDXMEFXfxZiXSKRqkT.webp";

const TYPEFORM_URL = "https://q5lhjxf6lyg.typeform.com/to/mUElqlHh";

const INCLUDES = [
  {
    title: "DEXA Body Composition + VO2 Max Assessment",
    value: "$400 value",
    desc: "Week 1 begins with a complete biological baseline — your exact muscle-to-fat ratio, where fat is distributed, bone density, and your cardiovascular fitness age. This is the data your program is built around. Not assumptions — your actual body.",
  },
  {
    title: "8 × 1-on-1 Training Sessions",
    value: "$1,600 value",
    desc: "Weekly sessions with a certified sports science practitioner who understands female physiology and hormonal training principles. Programming is designed around your recovery capacity, cortisol rhythms, and the specific muscle groups most affected by hormonal decline.",
  },
  {
    title: "2 × Iyashi Dome Infrared Recovery Sessions",
    value: "$200 value",
    desc: "Infrared therapy used by longevity clinics and elite athletes worldwide — particularly effective for reducing inflammation, improving sleep quality, and accelerating muscle recovery in women navigating hormonal transitions.",
  },
  {
    title: "Hormone-Aware Nutrition Framework",
    value: "Included",
    desc: "Not a diet. A practical framework built around how your body processes food differently after 40 — protein timing, cortisol-sensitive meal structure, and anti-inflammatory principles that work with your hormonal reality.",
  },
  {
    title: "Progress Re-Assessment at Week 8",
    value: "Included",
    desc: "End-of-program DEXA and fitness re-test. Side-by-side comparison with your week-1 baseline. You see exactly what changed — in muscle, in fat, in cardiovascular fitness — with data you can hold in your hand.",
  },
];

const PHASES = [
  {
    num: "Week 1",
    title: "Baseline & Build Your Plan",
    desc: "DEXA and VO2 Max assessment at RETO Brickell. Results review with your specialist. Hormone-aware training program designed specifically around your body, your current fitness level, and your 8-week goal.",
  },
  {
    num: "Weeks 2–4",
    title: "Foundation Phase",
    desc: "Weekly 1-on-1 sessions focused on rebuilding movement quality, reactivating underused muscle groups, and establishing the resistance training base your body needs. First Iyashi Dome recovery session at week 3.",
  },
  {
    num: "Weeks 5–7",
    title: "Progression Phase",
    desc: "Intensity and load increase based on your adaptation. Cardiovascular programming layered in. Nutrition framework refined. Second Iyashi Dome session. Energy and body composition changes become visible.",
  },
  {
    num: "Week 8",
    title: "Re-Assessment & Forward Planning",
    desc: "Full DEXA and VO2 Max retest. Side-by-side comparison with week 1. Longevity consultation to review your results and build a 16-week continuation plan if you choose to keep going.",
  },
];

const SYMPTOMS = [
  { title: "Energy crashes", desc: "Afternoons that used to be productive now feel like fighting through fog — regardless of how much sleep you get." },
  { title: "Body composition shift", desc: "The weight isn't just more — it's in different places. And nothing you're doing seems to move it." },
  { title: "Workouts stopped working", desc: "The classes and routines that worked at 35 feel ineffective — or just leave you exhausted and sore without results." },
  { title: "Muscle loss", desc: "You feel softer, less toned — even though you're active. Strength feels harder to build and easier to lose." },
  { title: "Recovery takes longer", desc: "You need more rest between sessions. Pushing through like you used to leaves you wiped out for days." },
  { title: "You want answers, not guesses", desc: "You're done with generic advice. You want your actual numbers and a plan built specifically for your body." },
];

const TESTIMONIALS = [
  {
    quote: "I spent two years blaming myself for not working hard enough. The DEXA showed me that I'd actually lost significant muscle mass — something no scale could have told me. Within 8 weeks of training the right way, I had visible results for the first time in years. And I wasn't exhausted doing it.",
    name: "A.V.",
    title: "Coconut Grove, 49",
  },
  {
    quote: "The nutrition framework alone changed everything. I wasn't eating badly — I was eating for the wrong goals. Once that shifted, combined with the training, my energy came back in a way I hadn't felt in three years.",
    name: "M.L.",
    title: "Coconut Grove, 53",
  },
];

const FAQS = [
  { q: "I'm not very fit right now. Is that okay?", a: "It's exactly where most women start this program. The assessment in week 1 tells us precisely what your body can handle, and your training is built around that — not around a generic benchmark. You will not be pushed beyond what's appropriate for you." },
  { q: "I'm post-menopause, not peri. Is this still relevant?", a: "Completely. The program is designed for both — the hormonal principles that govern training, recovery, and nutrition apply in both phases. Your specialist will tailor your program to where you are right now." },
  { q: "How much time does this take each week?", a: "One 60-minute session per week at RETO, plus optional home or travel programming provided by your specialist. Most women find the weekly session becomes the anchor that makes everything else easier." },
  { q: "I already see a doctor / OB-GYN for hormonal support. Is this compatible?", a: "Yes — and it complements it. The Vitality Reset focuses on the training, body composition, and lifestyle components that medical hormone therapy alone doesn't address. Many clients work with both and find the combination significantly more effective than either alone." },
  { q: "Are payment plans available?", a: "Yes. The program can be split into two payments of $600, charged at weeks 1 and 4. Contact us after booking and we'll arrange it." },
  { q: "What happens after 8 weeks?", a: "You receive your re-assessment results and a full forward plan. Many clients continue with a 16-week program — and founding members receive priority pricing for any continuation package. There's no pressure; the 8-week program is complete in itself." },
];

function BuyNowButton({ size = "default" }: { size?: "default" | "large" }) {
  const [loading, setLoading] = useState(false);
  const cls = size === "large"
    ? "inline-flex items-center gap-2 bg-[#993556] text-[#FBEAF0] font-['Barlow_Condensed'] font-700 text-sm uppercase tracking-widest px-10 py-5 hover:bg-[#72243E] transition-colors cursor-pointer border border-[#993556] hover:border-[#C05A7E]"
    : "inline-flex items-center gap-2 bg-[#993556] text-[#FBEAF0] font-['Barlow_Condensed'] font-700 text-xs uppercase tracking-widest px-6 py-3 hover:bg-[#72243E] transition-colors cursor-pointer";
  async function handleBuy() {
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/create-checkout", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ productId: "vitality-reset" }) });
      const data = await res.json();
      if (data.url) window.open(data.url, "_blank");
    } catch (err) { console.error("Checkout error:", err); } finally { setLoading(false); }
  }
  return (
    <button onClick={handleBuy} disabled={loading} className={cls}>
      {loading ? "Processing..." : "BUY NOW — $1,200 →"}
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
        {open ? <ChevronUp className="w-5 h-5 text-[#C05A7E] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#C05A7E] flex-shrink-0" />}
      </button>
      {open && <p className="text-[oklch(0.60_0.01_75)] text-sm leading-relaxed pb-5 pr-8">{a}</p>}
    </div>
  );
}

export default function VitalityReset() {
  useEffect(() => {
    document.title = "Vitality Reset — 8-Week Hormone-Aware Fitness for Women 40+ | Miami Elite Coaching";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "The Vitality Reset is an 8-week, science-backed fitness program designed for women in peri and post-menopause. DEXA testing, hormone-aware training, and infrared recovery at RETO Brickell. Coconut Grove, Miami.");
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
            <div className="inline-flex items-center gap-2 bg-[#993556]/15 border border-[#993556]/30 text-[#C05A7E] font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#993556] animate-pulse inline-block" />
              Coconut Grove — Founding Member Rate — 8 Weeks
            </div>
            <h1 className="font-['Barlow_Condensed'] font-800 text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] mb-4">
              Your Body Changed After 40.{" "}
              <span className="text-[#C05A7E] italic font-['Source_Serif_4']">
                Your Fitness Plan Should Too.
              </span>
            </h1>
            <p className="text-[oklch(0.65_0.01_75)] text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              The Vitality Reset is an 8-week, science-backed program designed specifically for women in peri and post-menopause. Built on clinical-grade body composition testing and hormone-aware training, it works with your body's new biology — not against it.
            </p>

            <div className="flex items-baseline gap-4 mb-2 flex-wrap">
              <span className="font-['Barlow_Condensed'] font-800 text-4xl text-[#C05A7E]">$1,200</span>
              <span className="text-[oklch(0.45_0.01_75)] line-through text-lg">$1,600</span>
              <span className="bg-[#993556]/20 text-[#C05A7E] font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-wider px-3 py-1">Save $400</span>
            </div>
            <p className="text-[oklch(0.45_0.01_75)] text-sm mb-6">8-week program · Limited to 6 women this quarter · Payment plans available</p>

            <BuyNowButton size="large" />
            <div className="mt-3" />
            <CtaButton size="large" />

            <div className="mt-6 bg-[#993556]/10 border border-[#993556]/25 px-4 py-3 max-w-md">
              <p className="text-[#C05A7E] font-['Barlow_Condensed'] font-600 text-sm">
                Founding member pricing closes when the first cohort fills. 6 spots — currently 3 remaining.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Biology Section */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest text-[#C05A7E] mb-3">What's Actually Happening in Your Body</p>
          <h2 className="font-['Barlow_Condensed'] font-800 text-3xl sm:text-4xl text-white mb-6">
            It's Not Willpower. It's Biology — and It Changed.
          </h2>
          <div className="max-w-3xl">
            <p className="text-[oklch(0.60_0.01_75)] leading-relaxed mb-4">
              If you're eating the way you always have, moving the way you always have, and your body is responding completely differently — you are not imagining it. After 40, and especially around perimenopause and menopause, estrogen and progesterone shifts change how your body stores fat, builds muscle, recovers from exercise, and regulates energy.
            </p>
            <p className="text-[oklch(0.60_0.01_75)] leading-relaxed mb-6">
              The problem isn't you. The problem is that almost everything written about women's fitness was designed for a 28-year-old body. The Vitality Reset is built around the body you actually have right now.
            </p>
          </div>

          <div className="border-l-3 border-[#993556] bg-white/3 px-6 py-5 mb-8 max-w-3xl" style={{ borderLeftWidth: "3px" }}>
            <p className="text-white/80 italic leading-relaxed">
              "Cardio alone won't rebuild muscle lost to hormonal decline. Generic plans don't account for cortisol sensitivity. And eating less often makes things worse, not better. If you've tried everything and nothing is working — it's not you. It's the plan."
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { num: "30–40%", label: "Of women in perimenopause experience significant body composition changes — muscle loss, fat redistribution — within 2–3 years" },
              { num: "DEXA", label: "The only accurate way to measure what's actually happening to muscle and fat — not weight, not BMI, not how clothes fit" },
              { num: "8 weeks", label: "The minimum effective window for measurable change in body composition and cardiovascular fitness when training is hormone-aware" },
            ].map((s, i) => (
              <div key={i} className="bg-white/4 border border-white/6 p-5">
                <p className="font-['Barlow_Condensed'] font-800 text-2xl text-[#C05A7E] mb-1">{s.num}</p>
                <p className="text-[oklch(0.55_0.01_75)] text-sm leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest text-[#C05A7E] mb-3">Is This You?</p>
          <h2 className="font-['Barlow_Condensed'] font-800 text-3xl sm:text-4xl text-white mb-8">
            You'll Recognize at Least Four of These.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SYMPTOMS.map((s, i) => (
              <div key={i} className="bg-white/3 border border-white/6 p-5">
                <p className="font-['Barlow_Condensed'] font-700 text-white mb-2">{s.title}</p>
                <p className="text-[oklch(0.55_0.01_75)] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Includes */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest text-[#C05A7E] mb-3">What's Included — The Full Reset</p>
          <h2 className="font-['Barlow_Condensed'] font-800 text-3xl sm:text-4xl text-white mb-8">
            Eight Weeks. Every Component Chosen for Your Biology.
          </h2>
          <div className="space-y-0 divide-y divide-white/6">
            {INCLUDES.map((item, i) => (
              <div key={i} className="flex gap-4 py-5">
                <div className="w-8 h-8 rounded-full bg-[#993556]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 10 10" fill="none" className="w-3 h-3"><path d="M2 5l2.5 2.5L8 3" stroke="#C05A7E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <div>
                  <div className="flex items-baseline gap-3 mb-1 flex-wrap">
                    <p className="font-['Barlow_Condensed'] font-700 text-white">{item.title}</p>
                    <span className="text-[#C05A7E] font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-wider">{item.value}</span>
                  </div>
                  <p className="text-[oklch(0.55_0.01_75)] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bonuses */}
          <div className="mt-8 bg-[#993556]/10 border border-[#993556]/25 p-6">
            <p className="font-['Barlow_Condensed'] font-700 text-xs uppercase tracking-widest text-[#C05A7E] mb-4">Founding Member Bonuses</p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-[#C05A7E] font-bold flex-shrink-0">+</span>
                <p className="text-[oklch(0.65_0.01_75)] text-sm leading-relaxed">Complimentary longevity consultation ($200 value) — a dedicated session to review your full biological age picture and map a long-term health strategy beyond the 8 weeks</p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#C05A7E] font-bold flex-shrink-0">+</span>
                <p className="text-[oklch(0.65_0.01_75)] text-sm leading-relaxed">Referral discount — bring a friend and both of you receive $75 off your programs. Shared accountability makes results stick.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest text-[#C05A7E] mb-3">How the 8 Weeks Unfold</p>
          <h2 className="font-['Barlow_Condensed'] font-800 text-3xl sm:text-4xl text-white mb-8">
            A Structured Reset — With a Real Finish Line.
          </h2>
          <div className="space-y-3">
            {PHASES.map((p, i) => (
              <div key={i} className="bg-white/3 border border-white/6 p-5 flex gap-4">
                <span className="bg-[#993556]/20 text-[#C05A7E] font-['Barlow_Condensed'] font-700 text-xs uppercase tracking-wider px-3 py-1 h-fit flex-shrink-0 whitespace-nowrap">{p.num}</span>
                <div>
                  <p className="font-['Barlow_Condensed'] font-700 text-white mb-1">{p.title}</p>
                  <p className="text-[oklch(0.55_0.01_75)] text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest text-[#C05A7E] mb-3">Where It Happens</p>
          <h2 className="font-['Barlow_Condensed'] font-800 text-3xl sm:text-4xl text-white mb-4">
            RETO Brickell — Private, Clinical-Grade, and Nothing Like a Gym.
          </h2>
          <p className="text-[oklch(0.60_0.01_75)] leading-relaxed max-w-3xl mb-6">
            Your sessions and assessments take place at RETO — Miami's premier longevity and biohacking facility. Private consultation suites. Medical-grade equipment. No crowded studio classes, no waiting for machines, no mirrors full of people half your age. This is a precision health environment built for serious people who want real results.
          </p>
          <div className="inline-flex items-center gap-3 bg-white/4 border border-white/8 px-4 py-2.5">
            <span className="w-2 h-2 rounded-full bg-[#993556]" />
            <span className="text-[oklch(0.55_0.01_75)] text-sm">Brickell, Miami — 15 minutes from Coconut Grove. Parking available.</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest text-[#C05A7E] mb-6">What Clients Say</p>
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
          <p className="font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest text-[#C05A7E] mb-3">Questions</p>
          <h2 className="font-['Barlow_Condensed'] font-800 text-3xl text-white mb-8">Frequently Asked</h2>
          {FAQS.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#993556]/15 border border-[#993556]/30 inline-block px-5 py-2 mb-6">
            <p className="text-[#C05A7E] font-['Barlow_Condensed'] font-700 text-sm">Founding member rate — 3 of 6 spots remaining</p>
          </div>
          <h2 className="font-['Barlow_Condensed'] font-800 text-3xl sm:text-4xl text-white mb-4">
            Eight Weeks From Now, You Could Have Your Body's Real Data — and Real Results.
          </h2>
          <p className="text-[oklch(0.60_0.01_75)] leading-relaxed mb-8 max-w-xl mx-auto">
            The Vitality Reset is not a crash program, a detox, or another thing to power through. It's a precise, science-backed 8-week engagement that finally works with your biology — and ends with data showing exactly what changed.
          </p>
          <BuyNowButton size="large" />
          <div className="mt-3" />
          <CtaButton size="large" />
          <p className="text-[oklch(0.40_0.01_75)] text-xs mt-4">Founding member rate closes when the cohort fills. Includes $200 longevity consultation bonus.</p>

          <div className="mt-8 bg-white/3 border border-white/6 p-5 text-left flex gap-4">
            <div className="w-9 h-9 bg-[#993556]/20 flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9h12M9 3l6 6-6 6" stroke="#C05A7E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <div>
              <p className="font-['Barlow_Condensed'] font-700 text-white mb-1">Continue to 16 weeks — and track your biological age over time</p>
              <p className="text-[oklch(0.55_0.01_75)] text-sm leading-relaxed">Clients who extend to a 16-week program add monthly DEXA re-testing to see their muscle-to-fat ratio change in real time. Most women see measurable biological age improvements within the first two cycles.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
