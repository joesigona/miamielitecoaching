// Miami Personal Trainer Hub Page — Miami Elite Coaching
// SEO Target: "personal trainer miami", "miami personal trainer", "personal training miami"
// This is the main SEO hub page targeting high-volume keywords
// Design: Dark luxury, editorial, information-rich

import { useEffect } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { TESTIMONIALS } from "@/lib/data";

const BLOG_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663459681691/83tywCBKrbukToGzWmD9PC/hero-blog-Lm26dz8LvEeJ9QD4Pqngfi.webp";

export default function MiamiPersonalTrainerPage() {
  useEffect(() => {
    document.title =
      "Personal Trainer Miami — Private Coaching for Miami Professionals | Miami Elite Coaching";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Miami's premier private personal training service. Expert coaches in Brickell, Coconut Grove, Coral Gables & South Beach. Results guaranteed or you don't pay."
      );

    // Add structured data for this page
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Personal Training Miami",
      provider: {
        "@type": "LocalBusiness",
        name: "Miami Elite Coaching",
        url: "https://miamicoach-axg8hyvx.manus.space/",
      },
      areaServed: [
        { "@type": "City", name: "Miami" },
        { "@type": "Neighborhood", name: "Brickell" },
        { "@type": "Neighborhood", name: "Coconut Grove" },
        { "@type": "Neighborhood", name: "Coral Gables" },
        { "@type": "Neighborhood", name: "South Beach" },
      ],
      description:
        "Private personal training for Miami professionals. Results guaranteed or you don't pay.",
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  const neighborhoods = [
    {
      name: "Brickell",
      slug: "/programs",
      desc: "Private training for executives and finance professionals in Miami's financial district.",
      highlight: "90-Day Executive Transformation",
    },
    {
      name: "Coconut Grove",
      slug: "/programs",
      desc: "Outdoor and studio training in Miami's most naturally beautiful neighborhood.",
      highlight: "Outdoor & Studio Options",
    },
    {
      name: "Coral Gables",
      slug: "/programs",
      desc: "Premium private training for Coral Gables professionals and families.",
      highlight: "Coming Soon",
    },
    {
      name: "South Beach",
      slug: "/programs",
      desc: "Beach-lifestyle fitness programming for South Beach residents.",
      highlight: "Coming Soon",
    },
    {
      name: "Wynwood",
      slug: "/programs",
      desc: "Creative district training for Wynwood's entrepreneurial community.",
      highlight: "Coming Soon",
    },
    {
      name: "Edgewater",
      slug: "/programs",
      desc: "Bayfront training for Edgewater's growing professional community.",
      highlight: "Coming Soon",
    },
  ];

  return (
    <div className="min-h-screen bg-[oklch(0.08_0.005_285)]">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${BLOG_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.08_0.005_285/0.3)] to-[oklch(0.08_0.005_285)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="badge-gold mb-6">Miami's Premier Private Training</div>
            <h1 className="font-['Barlow_Condensed'] font-800 text-6xl sm:text-7xl text-white leading-[0.9] mb-6">
              Personal Trainer{" "}
              <span className="text-gold">Miami</span>
            </h1>
            <p className="text-[oklch(0.70_0.01_75)] text-xl leading-relaxed max-w-2xl">
              Miami's most results-focused private personal training service.
              We work with professionals across Brickell, Coconut Grove, Coral
              Gables, and South Beach — delivering guaranteed results in 90 days
              or you don't pay.
            </p>
          </div>
        </div>
      </section>

      {/* Why Miami Elite */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[oklch(0.72_0.12_75)] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-sm mb-3">
                What Sets Us Apart
              </p>
              <h2 className="font-['Barlow_Condensed'] font-700 text-4xl sm:text-5xl text-white leading-tight mb-6">
                Personal Training Built for Miami's Professionals
              </h2>
              <p className="text-[oklch(0.65_0.01_75)] leading-relaxed mb-6">
                Miami's fitness industry is saturated with trainers who offer
                generic programs and count reps. We do something different: we
                treat your health like you treat your business — with data,
                systems, and accountability.
              </p>
              <p className="text-[oklch(0.65_0.01_75)] leading-relaxed mb-8">
                Every client gets a fully individualized program built around
                their schedule, their goals, and their lifestyle. No
                cookie-cutter plans. No wasted time. And a results guarantee
                that no commercial gym trainer can offer.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "90", label: "Days to Results" },
                  { stat: "100%", label: "Results Guarantee" },
                  { stat: "3", label: "Hours/Week Required" },
                  { stat: "5", label: "Spots Available" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-[oklch(0.12_0.005_285)] border border-white/8 p-5"
                  >
                    <div className="font-['Barlow_Condensed'] font-800 text-4xl text-gold mb-1">
                      {item.stat}
                    </div>
                    <div className="text-[oklch(0.55_0.01_75)] text-xs uppercase tracking-wider font-['Barlow_Condensed']">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Private, Premium Facilities",
                  desc: "No commercial gym chaos. We train at OM Movement, RETO, and other premium private facilities across Miami.",
                },
                {
                  title: "Individualized Programming",
                  desc: "Every program is built from scratch for your body, your goals, your schedule, and your lifestyle.",
                },
                {
                  title: "Nutrition Coaching Included",
                  desc: "Custom nutrition protocols that work with your real life — business dinners, travel, and all.",
                },
                {
                  title: "Travel Programming",
                  desc: "Weekly hotel-room and hotel-gym workouts keep your progress on track no matter where business takes you.",
                },
                {
                  title: "Results Guarantee",
                  desc: "Follow the program for 90 days. If you don't see measurable results, you receive a full refund.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 bg-[oklch(0.10_0.005_285)] border border-white/6"
                >
                  <div className="w-1 bg-[oklch(0.72_0.12_75)] flex-shrink-0" />
                  <div>
                    <h3 className="font-['Barlow_Condensed'] font-700 text-white text-base mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[oklch(0.55_0.01_75)] text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-20 bg-[oklch(0.10_0.005_285)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[oklch(0.72_0.12_75)] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-sm mb-3">
            Service Areas
          </p>
          <h2 className="font-['Barlow_Condensed'] font-700 text-4xl sm:text-5xl text-white mb-4">
            Personal Training Across Miami
          </h2>
          <p className="text-[oklch(0.60_0.01_75)] max-w-2xl mb-12">
            We serve clients across Miami's most desirable neighborhoods. Each
            program is adapted to the specific lifestyle and training
            environment of your area.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {neighborhoods.map((n) => (
              <Link key={n.name} href={n.slug}>
                <div className="bg-[oklch(0.12_0.005_285)] border border-white/8 p-6 card-hover cursor-pointer group">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-['Barlow_Condensed'] font-700 text-white text-xl group-hover:text-gold transition-colors">
                      {n.name}
                    </h3>
                    <span className="badge-gold text-xs">{n.highlight}</span>
                  </div>
                  <p className="text-[oklch(0.55_0.01_75)] text-sm leading-relaxed">
                    {n.desc}
                  </p>
                  <div className="mt-4 text-[oklch(0.72_0.12_75)] text-xs font-['Barlow_Condensed'] font-600 uppercase tracking-wider">
                    Learn More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-['Barlow_Condensed'] font-700 text-4xl text-white mb-12">
            Results From Across Miami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-[oklch(0.12_0.005_285)] border border-white/8 p-5"
              >
                <p className="text-[oklch(0.75_0.01_75)] text-sm leading-relaxed mb-4 italic">
                  "{t.quote}"
                </p>
                <div className="border-t border-white/8 pt-3">
                  <p className="font-['Barlow_Condensed'] font-700 text-white text-sm">
                    {t.name}
                  </p>
                  <p className="text-[oklch(0.50_0.01_75)] text-xs mt-0.5">
                    {t.title}
                  </p>
                  <div className="badge-gold mt-2 text-xs">{t.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20 bg-[oklch(0.10_0.005_285)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-['Barlow_Condensed'] font-700 text-4xl text-white mb-8">
            Finding the Right Personal Trainer in Miami
          </h2>
          <div className="article-prose space-y-6">
            <p>
              Miami is one of the most fitness-conscious cities in the United
              States — but that doesn't mean finding the right personal trainer
              is easy. The city is saturated with fitness professionals ranging
              from certified coaches with decades of experience to weekend
              certification holders working out of commercial gyms.
            </p>
            <p>
              The difference between a good personal trainer and a great one
              comes down to three things: individualization, accountability, and
              results. Generic programs produce generic results. The best
              trainers in Miami build every program from scratch, based on your
              specific body, your specific goals, and your specific life.
            </p>
            <h3>What to Look for in a Miami Personal Trainer</h3>
            <p>
              When evaluating personal trainers in Miami, prioritize coaches
              who offer body composition tracking (not just scale weight),
              nutrition support beyond the gym, and some form of accountability
              between sessions. The best trainers treat your health like a
              business — with data, systems, and measurable outcomes.
            </p>
            <p>
              Credentials matter, but results matter more. Ask any trainer you
              consider for client testimonials, before/after data, and a clear
              explanation of their methodology. If they can't articulate why
              they program the way they do, move on.
            </p>
            <h3>Personal Training in Miami: What It Should Cost</h3>
            <p>
              Quality personal training in Miami ranges from $100 to $250+ per
              session for private coaching. Package pricing typically runs
              $1,200–$2,000/month for three sessions per week with a premium
              trainer. Be wary of trainers who undercut significantly — in this
              industry, you generally get what you pay for.
            </p>
            <p>
              The right question isn't "how cheap can I find a trainer?" It's
              "what's the ROI on investing in my health?" For most Miami
              professionals, the answer is clear.
            </p>
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section id="apply" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-['Barlow_Condensed'] font-700 text-5xl text-white leading-tight mb-6">
                Ready to Work with Miami's Best?
              </h2>
              <p className="text-[oklch(0.60_0.01_75)] leading-relaxed mb-8">
                Apply below and we'll reach out within the hour to discuss your
                goals and find the right program for you.
              </p>
              <div className="space-y-3">
                {[
                  "Serving Brickell, Coconut Grove, Coral Gables & more",
                  "Results guaranteed in 90 days",
                  "Only 5 spots available per quarter",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.12_75)]" />
                    <span className="text-[oklch(0.70_0.01_75)] text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <LeadForm source="miami-personal-trainer" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
