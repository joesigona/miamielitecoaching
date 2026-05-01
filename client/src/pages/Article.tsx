// Article Page — Miami Elite Coaching
// SEO: Full article page with schema markup, meta tags, internal linking
// Design: Editorial dark layout, wide readable content column

import { useEffect } from "react";
import { Link, useParams } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { ARTICLES, CATEGORIES } from "@/lib/data";
import { Clock, ArrowLeft, ArrowRight } from "lucide-react";

export default function ArticlePage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  const article = ARTICLES.find((a) => a.slug === slug);
  const related = ARTICLES.filter(
    (a) => a.slug !== slug && a.category === article?.category
  ).slice(0, 2);
  const otherArticles = ARTICLES.filter(
    (a) => a.slug !== slug && !related.find((r) => r.slug === a.slug)
  ).slice(0, 2);
  const suggestedArticles = [...related, ...otherArticles].slice(0, 3);

  useEffect(() => {
    if (!article) return;
    document.title = `${article.metaTitle} | Miami Elite Coaching`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", article.metaDescription);

    // Article schema markup
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.metaDescription,
      image: article.image,
      datePublished: article.publishDate,
      dateModified: article.publishDate,
      author: {
        "@type": "Organization",
        name: "Miami Elite Coaching",
        url: "https://miamicoach-axg8hyvx.manus.space/",
      },
      publisher: {
        "@type": "Organization",
        name: "Miami Elite Coaching",
        logo: {
          "@type": "ImageObject",
          url: "https://miamicoach-axg8hyvx.manus.space/",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://miamicoach-axg8hyvx.manus.space/blog/${article.slug}`,
      },
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen bg-[oklch(0.08_0.005_285)]">
        <Navigation />
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
          <h1 className="font-['Barlow_Condensed'] font-700 text-4xl text-white">
            Article Not Found
          </h1>
          <p className="text-[oklch(0.55_0.01_75)]">
            This article doesn't exist yet.
          </p>
          <Link href="/blog">
            <span className="btn-gold">Back to Articles</span>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const categoryLabel =
    CATEGORIES.find((c) => c.id === article.category)?.label ||
    article.category;

  return (
    <div className="min-h-screen bg-[oklch(0.08_0.005_285)]">
      <Navigation />

      {/* Article Hero */}
      <section className="relative pt-24 pb-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${article.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.08_0.005_285/0.7)] via-[oklch(0.08_0.005_285/0.8)] to-[oklch(0.08_0.005_285)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[oklch(0.45_0.01_75)] mb-6 font-['Barlow_Condensed'] uppercase tracking-wider">
            <Link href="/">
              <span className="hover:text-[oklch(0.72_0.12_75)] transition-colors cursor-pointer">
                Home
              </span>
            </Link>
            <span>/</span>
            <Link href="/blog">
              <span className="hover:text-[oklch(0.72_0.12_75)] transition-colors cursor-pointer">
                Articles
              </span>
            </Link>
            <span>/</span>
            <span className="text-[oklch(0.72_0.12_75)]">{categoryLabel}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span className="badge-gold text-xs">{categoryLabel}</span>
            <div className="flex items-center gap-1 text-[oklch(0.45_0.01_75)] text-xs">
              <Clock size={10} />
              <span>{article.readTime} min read</span>
            </div>
            <span className="text-[oklch(0.35_0.01_75)] text-xs">
              {new Date(article.publishDate).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          <h1 className="font-['Barlow_Condensed'] font-800 text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
            {article.title}
          </h1>

          <p className="text-[oklch(0.65_0.01_75)] text-lg leading-relaxed max-w-2xl">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-2">
              <div
                className="article-prose"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Tags */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-[oklch(0.45_0.01_75)] text-xs uppercase tracking-widest font-['Barlow_Condensed'] mb-3">
                  Topics
                </p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[oklch(0.14_0.005_285)] border border-white/8 text-[oklch(0.55_0.01_75)] text-xs px-3 py-1 font-['Barlow_Condensed'] uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-8 flex justify-between items-center">
                <Link href="/blog">
                  <span className="flex items-center gap-2 text-[oklch(0.55_0.01_75)] hover:text-[oklch(0.72_0.12_75)] transition-colors text-sm font-['Barlow_Condensed'] font-600 uppercase tracking-wider cursor-pointer">
                    <ArrowLeft size={14} />
                    All Articles
                  </span>
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA Card */}
              <div className="bg-[oklch(0.12_0.005_285)] border border-[oklch(0.72_0.12_75)/0.3] p-6">
                <div className="badge-gold mb-4 text-xs">5 Spots Available</div>
                <h3 className="font-['Barlow_Condensed'] font-700 text-xl text-white mb-3">
                  Ready to Work with a Miami Personal Trainer?
                </h3>
                <p className="text-[oklch(0.55_0.01_75)] text-sm leading-relaxed mb-5">
                  Ready to know exactly where your biology stands? Start with a
                  Baseline Assessment — 90 minutes of diagnostics, a same-day
                  data review, and a 12-week training framework built to your numbers.
                </p>
                <Link href="/contact?program=Assessment">
                  <span className="btn-gold w-full justify-center text-xs">
                    Book an Assessment →
                  </span>
                </Link>
              </div>

              {/* Related Articles */}
              {suggestedArticles.length > 0 && (
                <div>
                  <p className="text-[oklch(0.45_0.01_75)] text-xs uppercase tracking-widest font-['Barlow_Condensed'] mb-4">
                    More Articles
                  </p>
                  <div className="space-y-4">
                    {suggestedArticles.map((a) => (
                      <Link key={a.slug} href={`/blog/${a.slug}`}>
                        <div className="group flex gap-3 cursor-pointer">
                          <div
                            className="w-16 h-16 bg-cover bg-center flex-shrink-0"
                            style={{ backgroundImage: `url(${a.image})` }}
                          />
                          <div>
                            <h4 className="font-['Barlow_Condensed'] font-600 text-white text-sm leading-tight group-hover:text-gold transition-colors">
                              {a.title}
                            </h4>
                            <div className="flex items-center gap-1 text-[oklch(0.40_0.01_75)] text-xs mt-1">
                              <Clock size={9} />
                              <span>{a.readTime} min</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Neighborhood Links */}
              <div className="bg-[oklch(0.10_0.005_285)] border border-white/8 p-5">
                <p className="text-[oklch(0.45_0.01_75)] text-xs uppercase tracking-widest font-['Barlow_Condensed'] mb-4">
                  Our Programs
                </p>
                <div className="space-y-2">
                  <Link href="/programs">
                    <div className="flex items-center justify-between py-2 border-b border-white/6 cursor-pointer group">
                      <span className="text-[oklch(0.70_0.01_75)] text-sm group-hover:text-gold transition-colors">
                        Brickell Program
                      </span>
                      <ArrowRight size={12} className="text-[oklch(0.40_0.01_75)] group-hover:text-gold transition-colors" />
                    </div>
                  </Link>
                  <Link href="/programs">
                    <div className="flex items-center justify-between py-2 cursor-pointer group">
                      <span className="text-[oklch(0.70_0.01_75)] text-sm group-hover:text-gold transition-colors">
                        Coconut Grove Program
                      </span>
                      <ArrowRight size={12} className="text-[oklch(0.40_0.01_75)] group-hover:text-gold transition-colors" />
                    </div>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[oklch(0.10_0.005_285)] border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-['Barlow_Condensed'] font-700 text-4xl text-white mb-4">
                Stop Reading. Start Training.
              </h2>
              <p className="text-[oklch(0.60_0.01_75)] leading-relaxed">
                The best personal trainers in Miami are booked out quickly.
                Book an assessment now to secure one of the 5 available spots this quarter.
              </p>
            </div>
            <LeadForm
              source={`article-${article.slug}`}
              title="Book Your Baseline Assessment"
              ctaText="Book an Assessment →"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
