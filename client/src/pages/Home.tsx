// Home Page — Miami Elite Coaching
// SEO: Miami personal trainer, miami elite coaching
// Redirects to the Brickell page (main landing) while also serving as a hub
// Design: Dark luxury, full-screen hero

import { useEffect } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ARTICLES } from "@/lib/data";
import { Clock, ArrowRight } from "lucide-react";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663459681691/83tywCBKrbukToGzWmD9PC/hero-brickell-PeJffJYKH7YsRmJxS5GutR.webp";

export default function Home() {
  useEffect(() => {
    document.title =
      "Miami Elite Coaching — Private Personal Training in Miami";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Miami's premier private personal training service. Expert coaches in Brickell, Coconut Grove & across Miami. Results guaranteed or you don't pay."
      );
  }, []);

  const recentArticles = ARTICLES.slice(0, 3);

  return (
    <div className="min-h-screen bg-[oklch(0.08_0.005_285)]">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.08_0.005_285/0.92)] via-[oklch(0.08_0.005_285/0.7)] to-[oklch(0.08_0.005_285/0.2)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="badge-gold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.12_75)] inline-block" />
              Miami's Premier Private Training
            </div>
            <h1 className="font-['Barlow_Condensed'] font-800 text-6xl sm:text-7xl lg:text-8xl text-white leading-[0.9] mb-6">
              Turn Back the Clock.{" "}
              <span className="text-gold">Your Best Body Starts Now.</span>
            </h1>
            <p className="text-[oklch(0.72_0.12_75)] text-lg leading-relaxed mb-10 max-w-xl">
              Private personal training that comes to you — or meet one of our
              expert coaches in your neighborhood. Serving Brickell, Coconut
              Grove, and across Miami. Results guaranteed in 90 days or you
              don't pay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/brickell#apply">
                <span className="btn-gold">Apply for the 90-Day Transformation</span>
              </Link>
              <Link href="/miami-personal-trainer">
                <span className="btn-ghost">Explore Programs</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[oklch(0.40_0.01_75)]">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-[oklch(0.72_0.12_75)/0.5]" />
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-[oklch(0.10_0.005_285)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[oklch(0.72_0.12_75)] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-sm mb-3">
            Programs
          </p>
          <h2 className="font-['Barlow_Condensed'] font-700 text-4xl sm:text-5xl text-white mb-12">
            Private Training Across Miami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Brickell",
                slug: "/brickell",
                desc: "The 90-Day Executive Transformation. Built for Brickell professionals who need results without wasting time.",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663459681691/83tywCBKrbukToGzWmD9PC/hero-brickell-PeJffJYKH7YsRmJxS5GutR.webp",
                badge: "5 Spots Available",
              },
              {
                name: "Coconut Grove",
                slug: "/coconut-grove",
                desc: "Outdoor and studio training in Miami's most naturally beautiful neighborhood.",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663459681691/83tywCBKrbukToGzWmD9PC/hero-coconut-grove-8JUS8dHVr69CWL2mzHotPn.webp",
                badge: "Outdoor & Studio",
              },
              {
                name: "All Miami",
                slug: "/miami-personal-trainer",
                desc: "Serving Coral Gables, South Beach, Wynwood, Edgewater, and beyond. Find your program.",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663459681691/83tywCBKrbukToGzWmD9PC/hero-blog-Lm26dz8LvEeJ9QD4Pqngfi.webp",
                badge: "All Neighborhoods",
              },
            ].map((program) => (
              <Link key={program.name} href={program.slug}>
                <div className="group relative overflow-hidden cursor-pointer card-hover">
                  <div
                    className="h-64 bg-cover bg-center"
                    style={{ backgroundImage: `url(${program.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.005_285)] via-[oklch(0.08_0.005_285/0.4)] to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="badge-gold mb-2 text-xs">{program.badge}</div>
                    <h3 className="font-['Barlow_Condensed'] font-700 text-2xl text-white group-hover:text-gold transition-colors mb-1">
                      {program.name}
                    </h3>
                    <p className="text-[oklch(0.65_0.01_75)] text-xs leading-relaxed">
                      {program.desc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: "90", suffix: " days", label: "To Guaranteed Results" },
              { stat: "100", suffix: "%", label: "Results Guarantee" },
              { stat: "3", suffix: " hrs/wk", label: "Time Required" },
              { stat: "5", suffix: " spots", label: "Available Per Quarter" },
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

      {/* Recent Articles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[oklch(0.72_0.12_75)] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-sm mb-2">
                Knowledge
              </p>
              <h2 className="font-['Barlow_Condensed'] font-700 text-4xl text-white">
                Latest Articles
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

      {/* Final CTA */}
      <section className="py-20 bg-[oklch(0.10_0.005_285)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="badge-gold mb-6 mx-auto w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.12_75)] inline-block" />
            Limited Availability
          </div>
          <h2 className="font-['Barlow_Condensed'] font-700 text-5xl sm:text-6xl text-white mb-6">
            5 Spots. 90 Days. Guaranteed Results.
          </h2>
          <p className="text-[oklch(0.60_0.01_75)] text-lg mb-8">
            Apply now and receive a call within the hour to discuss your goals.
          </p>
          <Link href="/brickell#apply">
            <span className="btn-gold text-base px-8 py-4">
              Apply for the 90-Day Transformation
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
