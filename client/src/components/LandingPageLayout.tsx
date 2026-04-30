// LandingPageLayout — Isolated layout for paid landing pages
// No main site navigation, no footer nav, no cross-links
// Only: minimal logo header + content + subtle footer with back link
// All landing pages wrapped in this get noindex meta tag

import { Helmet } from "react-helmet-async";
import { Link } from "wouter";

export default function LandingPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen bg-[oklch(0.08_0.005_285)]">
        {/* Minimal header — logo only, no nav links */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-[oklch(0.08_0.005_285/0.95)] backdrop-blur-sm border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-full bg-[oklch(0.72_0.12_75)] flex items-center justify-center">
                  <span className="text-black font-bold text-xs font-['Barlow_Condensed']">ME</span>
                </div>
                <span className="font-['Barlow_Condensed'] font-semibold text-white text-lg tracking-wide group-hover:text-[oklch(0.72_0.12_75)] transition-colors">
                  Miami Elite Coaching
                </span>
              </Link>
            </div>
          </div>
        </header>

        <main>{children}</main>

        {/* Minimal footer — legal text + subtle back link for SEO integrity */}
        <footer className="bg-[oklch(0.06_0.005_285)] border-t border-white/8 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[oklch(0.40_0.01_75)] text-xs">
              &copy; {new Date().getFullYear()} Miami Elite Coaching &middot; Joe Sigona Fitness LLC &middot; Brickell, Miami FL
            </p>
            <a
              href="/"
              className="inline-block mt-3 text-xs no-underline transition-opacity"
              style={{ color: "#6B7280", opacity: 0.6 }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.textDecoration = "underline"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.6"; e.currentTarget.style.textDecoration = "none"; }}
            >
              &larr; Back to Miami Elite Coaching
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
