// Navigation — Miami Elite Coaching
// Clean nav: Home | Programs | About | Articles | Book Assessment CTA
// No dropdown, no prices, no landing page links

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isActive = (href: string) => location === href;

  const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/programs", label: "Programs" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Articles" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.08_0.005_285/0.98)] shadow-lg shadow-black/40 backdrop-blur-md"
          : "bg-[oklch(0.08_0.005_285/0.85)] backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-[oklch(0.72_0.12_75)] flex items-center justify-center">
              <span className="text-black font-bold text-xs font-['Barlow_Condensed']">ME</span>
            </div>
            <span className="font-['Barlow_Condensed'] font-semibold text-white text-lg tracking-wide group-hover:text-[oklch(0.72_0.12_75)] transition-colors">
              Miami Elite Coaching
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded font-['Barlow_Condensed'] text-sm font-medium tracking-wider uppercase transition-colors ${
                  isActive(link.href)
                    ? "text-[oklch(0.72_0.12_75)]"
                    : "text-[oklch(0.85_0.01_285)] hover:text-[oklch(0.72_0.12_75)]"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/longevity-blueprint"
              className="ml-3 px-4 py-2 rounded bg-[oklch(0.72_0.12_75)] text-black font-['Barlow_Condensed'] font-bold text-sm tracking-wider uppercase hover:bg-[oklch(0.78_0.14_75)] transition-colors"
            >
              Book Assessment
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 text-[oklch(0.85_0.01_285)] hover:text-[oklch(0.72_0.12_75)] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[oklch(0.72_0.12_75/0.15)] bg-[oklch(0.08_0.005_285/0.98)]">
          <div className="px-4 py-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2.5 rounded font-['Barlow_Condensed'] font-medium tracking-wider uppercase text-sm transition-colors ${
                  isActive(link.href)
                    ? "text-[oklch(0.72_0.12_75)] bg-[oklch(0.72_0.12_75/0.08)]"
                    : "text-[oklch(0.85_0.01_285)] hover:text-[oklch(0.72_0.12_75)]"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-2">
              <Link
                href="/longevity-blueprint"
                className="block text-center px-4 py-3 rounded bg-[oklch(0.72_0.12_75)] text-black font-['Barlow_Condensed'] font-bold text-sm tracking-wider uppercase hover:bg-[oklch(0.78_0.14_75)] transition-colors"
              >
                Book Assessment
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
