// Brickell Page — Miami Elite Coaching
// SEO: Personal trainer Brickell Miami, executive transformation
// Design: Dark luxury, hero with city backdrop, editorial sections

import { useEffect } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { FAQS, TESTIMONIALS } from "@/lib/data";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663459681691/83tywCBKrbukToGzWmD9PC/hero-brickell-PeJffJYKH7YsRmJxS5GutR.webp";

export default function BrickellPage() {
  useEffect(() => {
    document.title =
      "Personal Trainer Brickell Miami — 90-Day Executive Transformation | Miami Elite Coaching";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Private personal training for Brickell executives. 3 sessions/week, custom nutrition, results guaranteed. Only 5 spots available this quarter."
      );
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const brickellTestimonials = TESTIMONIALS.filter(
    (t) => t.neighborhood === "Brickell"
  );

  return (
    <div className="min-h-screen bg-[oklch(0.08_0.005_285)]">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.005_285)] via-[oklch(0.08_0.005_285/0.6)] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.08_0.005_285/0.7)] to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="badge-gold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.12_75)] inline-block" />
              Brickell Executives Only — 5 Spots Available
            </div>
            <h1 className="font-['Barlow_Condensed'] font-800 text-6xl sm:text-7xl lg:text-8xl text-white leading-[0.9] mb-6">
              Million-Dollar Life.{" "}
              <span className="text-gold">Weak Body.</span>{" "}
              Let's Fix It.
            </h1>
            <p className="text-[oklch(0.75_0.01_75)] text-lg leading-relaxed mb-8 max-w-xl">
              You've built the career, the portfolio, the lifestyle. But your
              body is the one asset you've been neglecting — and it's starting
              to cost you energy, confidence, and time with your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#apply" className="btn-gold">
                Apply for the 90-Day Transformation
              </a>
            </div>
            <div className="flex flex-wrap gap-6 mt-8">
              {[
                "Results Guaranteed or You Don't Pay",
                "Only 3 Hours/Week Required",
                "Brickell-Based Training",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-[oklch(0.65_0.01_75)] text-sm"
                >
                  <span className="w-1 h-1 rounded-full bg-[oklch(0.72_0.12_75)]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-[oklch(0.10_0.005_285)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-[oklch(0.72_0.12_75)] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-sm mb-3">
              Sound Familiar?
            </p>
            <h2 className="font-['Barlow_Condensed'] font-700 text-4xl sm:text-5xl text-white leading-tight">
              You're not failing because you lack discipline. You're failing
              because your approach isn't built for your life.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "You hit the 3 PM wall",
                desc: "Your energy crashes mid-afternoon right when your most important decisions need to be made.",
              },
              {
                title: "Your old tricks stopped working",
                desc: "The same diet and workout that kept you lean at 32 does nothing at 45. Your body has changed.",
              },
              {
                title: "No time, no system",
                desc: "You've tried gyms, apps, and YouTube workouts. Without a precise, accountable system, nothing sticks.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border-l-2 border-[oklch(0.72_0.12_75)] pl-6 py-2"
              >
                <h3 className="font-['Barlow_Condensed'] font-700 text-xl text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-[oklch(0.60_0.01_75)] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Program */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[oklch(0.72_0.12_75)] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-sm mb-3">
                The Program
              </p>
              <h2 className="font-['Barlow_Condensed'] font-700 text-4xl sm:text-5xl text-white leading-tight mb-6">
                The 90-Day Executive Transformation
              </h2>
              <p className="text-[oklch(0.65_0.01_75)] leading-relaxed mb-8">
                A private, results-guaranteed coaching program built for
                Brickell professionals. Three focused hours per week. Precision
                nutrition. Travel programming. And a trainer who manages your
                health like you manage your business — with data,
                accountability, and zero wasted time.
              </p>
              <ul className="space-y-4">
                {[
                  "3 private 1-on-1 sessions per week at OM Movement or RETO",
                  "Custom nutrition protocol — no calorie counting, no guessing",
                  "Travel workout programming for hotel stays",
                  "Weekly body composition tracking and progress metrics",
                  "Direct WhatsApp access to your coach 7 days a week",
                  "100% results guarantee — get in shape or you don't pay",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-5 h-5 bg-[oklch(0.72_0.12_75)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M2 5l2.5 2.5L8 3"
                          stroke="oklch(0.08 0.005 285)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[oklch(0.80_0.01_75)] text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing Card */}
            <div className="bg-[oklch(0.12_0.005_285)] border border-[oklch(0.72_0.12_75)/0.3] p-8">
              <div className="badge-gold mb-6">Risk-Free Guarantee</div>
              <h3 className="font-['Barlow_Condensed'] font-700 text-3xl text-white mb-2">
                Get Results or Don't Pay
              </h3>
              <p className="text-[oklch(0.60_0.01_75)] text-sm leading-relaxed mb-8">
                If you follow the program and don't see measurable results in 90
                days, you receive a full refund. No questions asked. That's how
                confident we are.
              </p>
              <div className="border-t border-white/10 pt-6 mb-6">
                <p className="text-[oklch(0.50_0.01_75)] text-xs uppercase tracking-widest font-['Barlow_Condensed'] mb-1">
                  Investment
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="font-['Barlow_Condensed'] font-800 text-5xl text-white">
                    $1,500
                  </span>
                  <span className="text-[oklch(0.55_0.01_75)] text-sm">
                    /month
                  </span>
                </div>
                <p className="text-[oklch(0.50_0.01_75)] text-xs mt-1">
                  3-month minimum commitment
                </p>
              </div>
              <a href="#apply" className="btn-gold w-full justify-center">
                Apply Now — 5 Spots Left
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[oklch(0.10_0.005_285)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[oklch(0.72_0.12_75)] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-sm mb-3">
            Results
          </p>
          <h2 className="font-['Barlow_Condensed'] font-700 text-4xl sm:text-5xl text-white mb-12">
            What Brickell Executives Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {brickellTestimonials.map((t) => (
              <div
                key={t.name}
                className="bg-[oklch(0.12_0.005_285)] border border-white/8 p-6"
              >
                <p className="text-[oklch(0.80_0.01_75)] text-sm leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <div className="border-t border-white/8 pt-4">
                  <p className="font-['Barlow_Condensed'] font-700 text-white text-base">
                    {t.name}
                  </p>
                  <p className="text-[oklch(0.55_0.01_75)] text-xs mt-0.5">
                    {t.title}
                  </p>
                  <div className="badge-gold mt-3 text-xs">{t.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[oklch(0.72_0.12_75)] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-sm mb-3">
            FAQ
          </p>
          <h2 className="font-['Barlow_Condensed'] font-700 text-4xl text-white mb-10">
            Common Questions
          </h2>
          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="border border-white/8 bg-[oklch(0.10_0.005_285)]"
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-['Barlow_Condensed'] font-600 text-white text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-[oklch(0.72_0.12_75)] flex-shrink-0 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-[oklch(0.65_0.01_75)] text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Form */}
      <section id="apply" className="py-20 bg-[oklch(0.10_0.005_285)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="badge-gold mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.12_75)] inline-block" />
                5 Spots Available This Quarter
              </div>
              <h2 className="font-['Barlow_Condensed'] font-700 text-5xl text-white leading-tight mb-6">
                Ready to Make Your Body Match Your Life?
              </h2>
              <p className="text-[oklch(0.60_0.01_75)] leading-relaxed mb-8">
                Apply below and you'll receive a call within the hour. We'll
                discuss your goals, your schedule, and whether the program is
                the right fit. No pressure, no sales pitch — just a direct
                conversation.
              </p>
              <div className="space-y-4">
                {[
                  "Response within 1 hour",
                  "No commitment required for the call",
                  "100% results guarantee on the program",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.12_75)]" />
                    <span className="text-[oklch(0.70_0.01_75)] text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-[oklch(0.50_0.01_75)] text-xs uppercase tracking-widest font-['Barlow_Condensed'] mb-3">
                  Also Serving
                </p>
                <Link href="/coconut-grove">
                  <span className="text-[oklch(0.72_0.12_75)] text-sm font-['Barlow_Condensed'] font-600 uppercase tracking-wider hover:text-[oklch(0.82_0.10_75)] transition-colors cursor-pointer">
                    Coconut Grove Program →
                  </span>
                </Link>
              </div>
            </div>
            <LeadForm source="brickell" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
