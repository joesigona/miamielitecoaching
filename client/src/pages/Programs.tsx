// Programs.tsx — Miami Elite Coaching
// Inquiry-only gallery: 2 programs, no prices, no free offers
// Each card has a single "Inquire" button

import { useEffect } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const PROGRAMS = [
  {
    name: "CEO Performance Protocol",
    description:
      "A 12-week data-driven protocol built for executives 40+. DEXA, VO2 Max, and elite coaching included — all calibrated to your biology.",
    accent: "#185FA5",
    icon: "01",
  },
  {
    name: "Vitality Reset",
    description:
      "An 8-week transformation program designed for women navigating perimenopause and beyond. Hormone-aware training, metabolic optimization, and measurable results.",
    accent: "#993556",
    icon: "02",
  },
];

export default function ProgramsPage() {
  useEffect(() => {
    document.title = "Programs | Miami Elite Coaching";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Explore Miami Elite Coaching programs — the Longevity Blueprint and Longevity Duo. Precision health and performance at RETO Brickell."
      );
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[oklch(0.08_0.005_285)]">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[oklch(0.72_0.12_75)] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-xs mb-4">
            Our Programs
          </p>
          <h1 className="font-['Barlow_Condensed'] font-800 text-5xl sm:text-6xl text-white leading-tight mb-6">
            Performance Protocols Built for{" "}
            <span className="text-gold italic">Your Biology</span>
          </h1>
          <p className="text-[oklch(0.62_0.01_75)] text-lg leading-relaxed max-w-2xl mx-auto">
            Every program starts with data and ends with measurable results.
            No templates. No guesswork. Just precision coaching calibrated to you.
          </p>
        </div>
      </section>

      {/* Program Cards */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROGRAMS.map((program) => (
              <div
                key={program.name}
                className="bg-[oklch(0.12_0.005_285)] border border-white/8 p-8 flex flex-col card-hover"
              >
                {/* Number badge */}
                <div
                  className="w-10 h-10 flex items-center justify-center mb-6"
                  style={{ backgroundColor: program.accent }}
                >
                  <span className="font-['Barlow_Condensed'] font-800 text-white text-sm">
                    {program.icon}
                  </span>
                </div>

                <h3 className="font-['Barlow_Condensed'] font-700 text-2xl text-white mb-4 leading-tight">
                  {program.name}
                </h3>

                <p className="text-[oklch(0.58_0.01_75)] text-sm leading-relaxed mb-8 flex-1">
                  {program.description}
                </p>

                <Link href={`/contact?program=${encodeURIComponent(program.name)}`}>
                  <span
                    className="inline-flex items-center gap-2 font-['Barlow_Condensed'] font-700 text-sm uppercase tracking-wider transition-colors cursor-pointer"
                    style={{ color: program.accent }}
                  >
                    Inquire About This Program <ArrowRight size={14} />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[oklch(0.10_0.005_285)] border-t border-white/8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Barlow_Condensed'] font-700 text-4xl text-white mb-4">
            Not Sure Which Program Is Right for You?
          </h2>
          <p className="text-[oklch(0.60_0.01_75)] text-base mb-8 max-w-xl mx-auto">
            Start with a free assessment. We'll review your goals, run baseline tests,
            and recommend the protocol that fits your biology and lifestyle.
          </p>
          <Link href="/programs">
            <span className="btn-gold text-sm px-8 py-4">
              Book Free Assessment
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
