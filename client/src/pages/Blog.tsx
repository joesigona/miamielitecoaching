// Blog / Articles Hub Page — Miami Elite Coaching
// SEO: Miami fitness blog, personal trainer articles, miami workout tips
// Design: Dark editorial, article card grid, category filters

import { useEffect, useState } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ARTICLES, CATEGORIES } from "@/lib/data";
import { Clock, ArrowRight } from "lucide-react";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663459681691/83tywCBKrbukToGzWmD9PC/hero-blog-Lm26dz8LvEeJ9QD4Pqngfi.webp";

export default function BlogPage() {
  useEffect(() => {
    document.title =
      "Miami Fitness Articles & Training Tips | Miami Elite Coaching Blog";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Expert fitness articles for Miami professionals. Personal training tips, nutrition advice, and local fitness guides from Miami Elite Coaching."
      );
  }, []);

  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === activeCategory);

  const featured = ARTICLES[0];
  const rest = filtered.slice(activeCategory === "all" ? 1 : 0);

  return (
    <div className="min-h-screen bg-[oklch(0.08_0.005_285)]">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[oklch(0.08_0.005_285)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="badge-gold mb-4">Miami Fitness Knowledge</div>
          <h1 className="font-['Barlow_Condensed'] font-800 text-5xl sm:text-6xl text-white mb-4">
            Articles & Guides
          </h1>
          <p className="text-[oklch(0.60_0.01_75)] text-lg max-w-xl">
            Expert training, nutrition, and lifestyle content for Miami
            professionals who want real results.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="sticky top-16 z-30 bg-[oklch(0.08_0.005_285/0.95)] backdrop-blur-md border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 px-4 py-1.5 font-['Barlow_Condensed'] font-600 text-xs uppercase tracking-widest transition-all ${
                  activeCategory === cat.id
                    ? "bg-[oklch(0.72_0.12_75)] text-[oklch(0.08_0.005_285)]"
                    : "text-[oklch(0.55_0.01_75)] hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {activeCategory === "all" && featured && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[oklch(0.72_0.12_75)] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-xs mb-6">
              Featured
            </p>
            <Link href={`/blog/${featured.slug}`}>
              <div className="group grid grid-cols-1 lg:grid-cols-2 gap-0 cursor-pointer overflow-hidden bg-[oklch(0.12_0.005_285)] border border-white/8 card-hover">
                <div
                  className="h-64 lg:h-auto bg-cover bg-center"
                  style={{ backgroundImage: `url(${featured.image})` }}
                />
                <div className="p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="badge-gold text-xs">
                        {CATEGORIES.find((c) => c.id === featured.category)
                          ?.label || featured.category}
                      </span>
                      <div className="flex items-center gap-1 text-[oklch(0.45_0.01_75)] text-xs">
                        <Clock size={10} />
                        <span>{featured.readTime} min read</span>
                      </div>
                    </div>
                    <h2 className="font-['Barlow_Condensed'] font-700 text-3xl sm:text-4xl text-white group-hover:text-gold transition-colors leading-tight mb-4">
                      {featured.title}
                    </h2>
                    <p className="text-[oklch(0.60_0.01_75)] text-sm leading-relaxed">
                      {featured.excerpt}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-[oklch(0.72_0.12_75)] font-['Barlow_Condensed'] font-600 uppercase tracking-wider text-xs">
                    Read Article <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Article Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {rest.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((article) => (
                <Link key={article.slug} href={`/blog/${article.slug}`}>
                  <div className="group bg-[oklch(0.12_0.005_285)] border border-white/8 overflow-hidden card-hover cursor-pointer h-full flex flex-col">
                    <div
                      className="h-48 bg-cover bg-center flex-shrink-0"
                      style={{ backgroundImage: `url(${article.image})` }}
                    />
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="badge-gold text-xs">
                          {CATEGORIES.find((c) => c.id === article.category)
                            ?.label || article.category}
                        </span>
                        <div className="flex items-center gap-1 text-[oklch(0.40_0.01_75)] text-xs">
                          <Clock size={10} />
                          <span>{article.readTime} min</span>
                        </div>
                      </div>
                      <h3 className="font-['Barlow_Condensed'] font-700 text-xl text-white group-hover:text-gold transition-colors leading-tight mb-3">
                        {article.title}
                      </h3>
                      <p className="text-[oklch(0.55_0.01_75)] text-sm leading-relaxed flex-1">
                        {article.excerpt}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-[oklch(0.72_0.12_75)] font-['Barlow_Condensed'] font-600 uppercase tracking-wider text-xs">
                        Read More <ArrowRight size={10} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-[oklch(0.50_0.01_75)]">
                No articles in this category yet. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter / Lead Capture */}
      <section className="py-16 bg-[oklch(0.10_0.005_285)] border-t border-white/8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Barlow_Condensed'] font-700 text-3xl text-white mb-3">
            Get the Best Miami Fitness Content
          </h2>
          <p className="text-[oklch(0.55_0.01_75)] text-sm mb-6">
            New articles every week. No spam. Unsubscribe anytime.
          </p>
          <form
            className="flex gap-2 max-w-md mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              const input = e.currentTarget.querySelector("input");
              if (input?.value) {
                input.value = "";
                alert("Thanks! You're on the list.");
              }
            }}
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-[oklch(0.16_0.005_285)] border border-white/10 text-white placeholder-[oklch(0.40_0.01_75)] px-4 py-3 text-sm focus:outline-none focus:border-[oklch(0.72_0.12_75)] transition-colors"
            />
            <button type="submit" className="btn-gold py-3 px-5 text-xs">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
