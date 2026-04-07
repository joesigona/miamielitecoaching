// Navigation — Miami Elite Coaching
// Design: Dark luxury, minimal top nav with gold accents
// Font: Barlow Condensed for nav items

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/miami-personal-trainer", label: "Programs" },
  { href: "/longevity-blueprint", label: "Longevity Blueprint" },
  { href: "/ceo-performance-protocol", label: "CEO Protocol" },
  { href: "/vitality-reset", label: "Vitality Reset" },
  { href: "/longevity-duo", label: "Longevity Duo" },
  { href: "/data-first-dropin", label: "Drop-In" },
  { href: "/blog", label: "Articles" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[oklch(0.08_0.005_285/0.97)] backdrop-blur-md border-b border-white/8"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-2.5 cursor-pointer">
                <div className="w-8 h-8 bg-[oklch(0.72_0.12_75)] flex items-center justify-center">
                  <span className="font-['Barlow_Condensed'] font-800 text-[oklch(0.08_0.005_285)] text-sm tracking-wider">
                    M
                  </span>
                </div>
                <span className="font-['Barlow_Condensed'] font-700 text-white text-base tracking-wide uppercase">
                  Miami Elite Coaching
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`nav-link text-xs ${
                      location === link.href ? "active" : ""
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <Link href="/brickell#apply">
                <span className="btn-gold text-xs py-2.5 px-5">
                  Apply Now
                </span>
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[oklch(0.08_0.005_285)] pt-16">
          <div className="flex flex-col p-6 gap-6">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className="font-['Barlow_Condensed'] font-700 text-2xl text-white uppercase tracking-wide block">
                  {link.label}
                </span>
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10">
              <Link href="/brickell#apply">
                <span className="btn-gold w-full text-center justify-center">
                  Apply Now
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
