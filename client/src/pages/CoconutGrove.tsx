// Coconut Grove Page — Miami Elite Coaching
// SEO: Personal trainer Coconut Grove Miami, outdoor training
// Design: Dark luxury with tropical/natural imagery

import { useEffect, useState } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { FAQS, TESTIMONIALS } from "@/lib/data";
import { ChevronDown } from "lucide-react";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663459681691/83tywCBKrbukToGzWmD9PC/hero-coconut-grove-8JUS8dHVr69CWL2mzHotPn.webp";

export default function CoconutGrovePage() {
  useEffect(() => {
    document.title =
      "Personal Trainer Coconut Grove Miami — Private Outdoor & Studio Training | Miami Elite Coaching";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Private personal training in Coconut Grove, Miami. Outdoor sessions in the Grove's beautiful parks and premium studio training. Results guaranteed."
      );
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[oklch(0.08_0.005_285)]">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.005_285)] via-[oklch(0.08_0.005_285/0.5)] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.08_0.005_285/0.7)] to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="badge-gold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.12_75)] inline-block" />
              Coconut Grove — Private Coaching in the Heart of the Grove
            </div>
            <h1 className="font-['Barlow_Condensed'] font-800 text-6xl sm:text-7xl lg:text-8xl text-white leading-[0.9] mb-6">
              Train Where{" "}
              <span className="text-gold">Miami Breathes.</span>
            </h1>
            <p className="text-[oklch(0.75_0.01_75)] text-lg leading-relaxed mb-8 max-w-xl">
              Coconut Grove is Miami's most naturally beautiful neighborhood —
              and the perfect backdrop for a fitness program that actually fits
              your life. Whether you prefer outdoor sessions under the banyan
              trees or private studio training, we build the program around you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#apply" className="btn-gold">
                Apply for the 90-Day Transformation
              </a>
            </div>
            <div className="flex flex-wrap gap-6 mt-8">
              {[
                "Outdoor & Studio Options",
                "Family-Friendly Scheduling",
                "Results Guaranteed",
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

      {/* Why the Grove */}
      <section className="py-20 bg-[oklch(0.10_0.005_285)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[oklch(0.72_0.12_75)] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-sm mb-3">
                Why Coconut Grove
              </p>
              <h2 className="font-['Barlow_Condensed'] font-700 text-4xl sm:text-5xl text-white leading-tight mb-6">
                The Grove Lifestyle Deserves a Training Program to Match
              </h2>
              <p className="text-[oklch(0.65_0.01_75)] leading-relaxed mb-6">
                Coconut Grove residents are a different kind of Miami
                professional. You chose the Grove for its natural beauty, its
                slower pace, its sense of community. Your fitness program should
                reflect that — not force you into a sterile commercial gym.
              </p>
              <p className="text-[oklch(0.65_0.01_75)] leading-relaxed">
                We offer outdoor training in Peacock Park and Kennedy Park, with
                the bay as your backdrop. Or, if you prefer a controlled
                environment, private studio sessions at Grove-area facilities.
                Either way, the program is built around your goals, your
                schedule, and your life.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  title: "Peacock Park",
                  desc: "Outdoor sessions with bay views and open space",
                },
                {
                  title: "Kennedy Park",
                  desc: "Functional training in a beautiful natural setting",
                },
                {
                  title: "Private Studios",
                  desc: "Premium indoor facilities for focused training",
                },
                {
                  title: "Your Building",
                  desc: "Residential gym training at your convenience",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[oklch(0.12_0.005_285)] border border-white/8 p-5"
                >
                  <h3 className="font-['Barlow_Condensed'] font-700 text-white text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[oklch(0.55_0.01_75)] text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Pricing Card */}
            <div className="bg-[oklch(0.12_0.005_285)] border border-[oklch(0.72_0.12_75)/0.3] p-8">
              <div className="badge-gold mb-6">Risk-Free Guarantee</div>
              <h3 className="font-['Barlow_Condensed'] font-700 text-3xl text-white mb-2">
                The 90-Day Grove Transformation
              </h3>
              <p className="text-[oklch(0.60_0.01_75)] text-sm leading-relaxed mb-8">
                The same results-guaranteed program as our Brickell offering —
                adapted for the Grove lifestyle. Three sessions per week,
                custom nutrition, and a trainer who fits your world.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Outdoor training in Peacock Park & Kennedy Park",
                  "Private studio sessions available",
                  "Custom nutrition coaching",
                  "Family-friendly scheduling",
                  "Travel workout programming",
                  "100% results guarantee",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-4 h-4 bg-[oklch(0.72_0.12_75)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path
                          d="M1.5 4l1.5 1.5L6.5 2"
                          stroke="oklch(0.08 0.005 285)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[oklch(0.75_0.01_75)] text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-white/10 pt-6 mb-6">
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
                Apply Now
              </a>
            </div>

            <div>
              <p className="text-[oklch(0.72_0.12_75)] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-sm mb-3">
                Results
              </p>
              <h2 className="font-['Barlow_Condensed'] font-700 text-4xl text-white mb-6">
                What Grove Clients Are Saying
              </h2>
              <div className="bg-[oklch(0.12_0.005_285)] border border-white/8 p-6 mb-6">
                <p className="text-[oklch(0.80_0.01_75)] text-sm leading-relaxed mb-6 italic">
                  "Training in the Grove with the bay in the background — it
                  doesn't feel like a workout. It feels like the life I always
                  wanted. And the results have been incredible."
                </p>
                <div className="border-t border-white/8 pt-4">
                  <p className="font-['Barlow_Condensed'] font-700 text-white text-base">
                    S. Martinez
                  </p>
                  <p className="text-[oklch(0.55_0.01_75)] text-xs mt-0.5">
                    Architect & Mother of Two, Coconut Grove
                  </p>
                  <div className="badge-gold mt-3 text-xs">
                    Lost 14 lbs, gained energy
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-white/10">
                <p className="text-[oklch(0.50_0.01_75)] text-xs uppercase tracking-widest font-['Barlow_Condensed'] mb-3">
                  Also in Miami
                </p>
                <Link href="/brickell">
                  <span className="text-[oklch(0.72_0.12_75)] text-sm font-['Barlow_Condensed'] font-600 uppercase tracking-wider hover:text-[oklch(0.82_0.10_75)] transition-colors cursor-pointer">
                    Brickell Executive Program →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Longevity Blueprint Promo */}
      <section className="py-16 border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[oklch(0.12_0.005_285)] border border-[#1D9E75]/25 p-8 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-[#1D9E75]/12 border border-[#1D9E75]/25 text-[#4ECBA0] font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest px-3 py-1 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1D9E75] animate-pulse inline-block" />
                Free — $600 Value
              </div>
              <h3 className="font-['Barlow_Condensed'] font-700 text-2xl sm:text-3xl text-white mb-2">
                Not sure where to start? Discover your biological age first.
              </h3>
              <p className="text-[oklch(0.60_0.01_75)] text-sm leading-relaxed max-w-xl">
                The Longevity Blueprint is a complimentary DEXA scan, VO2 Max test, and 1-on-1 consultation at RETO Brickell — a $600 value, free for qualifying Coconut Grove applicants. Know your numbers before you commit to anything.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a href="https://q5lhjxf6lyg.typeform.com/to/GjjmWBrN" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#1D9E75] text-white font-['Barlow_Condensed'] font-700 text-xs uppercase tracking-widest px-6 py-3 hover:bg-[#178763] transition-colors cursor-pointer whitespace-nowrap">
                Claim Free Blueprint →
              </a>
              <Link href="/longevity-blueprint">
                <span className="inline-flex items-center gap-2 border border-[#1D9E75]/40 text-[#4ECBA0] font-['Barlow_Condensed'] font-700 text-xs uppercase tracking-widest px-6 py-3 hover:bg-[#1D9E75]/10 transition-colors cursor-pointer whitespace-nowrap">
                  Learn More
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[oklch(0.10_0.005_285)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-['Barlow_Condensed'] font-700 text-4xl text-white mb-10">
            Common Questions
          </h2>
          <div className="space-y-2">
            {FAQS.slice(0, 4).map((faq, i) => (
              <div
                key={i}
                className="border border-white/8 bg-[oklch(0.12_0.005_285)]"
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
      <section id="apply" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-['Barlow_Condensed'] font-700 text-5xl text-white leading-tight mb-6">
                Start Your Grove Transformation
              </h2>
              <p className="text-[oklch(0.60_0.01_75)] leading-relaxed">
                Apply below and we'll reach out within the hour to discuss your
                goals and find the right training setup for you in the Grove.
              </p>
            </div>
            <LeadForm
              source="coconut-grove"
              title="Apply for the Grove Program"
              ctaText="Apply for the 90-Day Transformation →"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
