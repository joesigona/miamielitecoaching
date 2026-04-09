// Navigation — Miami Elite Coaching
// 3 items: Home | Programs (dropdown) | Articles
// Mobile: hamburger → accordion for Programs

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";

const PROGRAMS = [
  {
    href: "/longevity-blueprint",
    label: "Longevity Blueprint",
    price: "Free",
    description: "Complimentary longevity assessment + DEXA scan consultation",
  },
  {
    href: "/ceo-performance-protocol",
    label: "CEO Performance Protocol",
    price: "$2,400",
    description: "12-week private performance system for Brickell executives",
  },
  {
    href: "/vitality-reset",
    label: "Vitality Reset",
    price: "$1,200",
    description: "8-week transformation program for women 40+ in Coconut Grove",
  },
  {
    href: "/longevity-duo",
    label: "Longevity Duo",
    price: "$599",
    description: "4-week couples longevity program with dual DEXA scans",
  },
  {
    href: "/data-first-drop-in",
    label: "Data-First Drop-In",
    price: "$350",
    description: "Single session: DEXA + VO2 Max + coached workout",
  },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProgramsOpen(false);
  }, [location]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProgramsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActive = (href: string) => location === href;
  const isProgramActive = PROGRAMS.some((p) => location === p.href);

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
            <Link
              href="/"
              className={`px-4 py-2 rounded font-['Barlow_Condensed'] text-sm font-medium tracking-wider uppercase transition-colors ${
                isActive("/")
                  ? "text-[oklch(0.72_0.12_75)]"
                  : "text-[oklch(0.85_0.01_285)] hover:text-[oklch(0.72_0.12_75)]"
              }`}
            >
              Home
            </Link>

            {/* Programs dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProgramsOpen((v) => !v)}
                onMouseEnter={() => setProgramsOpen(true)}
                className={`flex items-center gap-1 px-4 py-2 rounded font-['Barlow_Condensed'] text-sm font-medium tracking-wider uppercase transition-colors ${
                  isProgramActive || programsOpen
                    ? "text-[oklch(0.72_0.12_75)]"
                    : "text-[oklch(0.85_0.01_285)] hover:text-[oklch(0.72_0.12_75)]"
                }`}
              >
                Programs
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${programsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {programsOpen && (
                <div
                  onMouseLeave={() => setProgramsOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 rounded-xl border border-[oklch(0.72_0.12_75/0.2)] bg-[oklch(0.10_0.005_285)] shadow-2xl shadow-black/60 overflow-hidden"
                >
                  <div className="p-2">
                    {PROGRAMS.map((prog) => (
                      <Link
                        key={prog.href}
                        href={prog.href}
                        onClick={() => setProgramsOpen(false)}
                        className={`flex items-start justify-between gap-3 px-3 py-3 rounded-lg transition-colors group ${
                          isActive(prog.href)
                            ? "bg-[oklch(0.72_0.12_75/0.12)]"
                            : "hover:bg-[oklch(0.72_0.12_75/0.08)]"
                        }`}
                      >
                        <div className="flex-1 min-w-0">
                          <p
                            className={`font-['Barlow_Condensed'] font-semibold text-sm tracking-wide ${
                              isActive(prog.href)
                                ? "text-[oklch(0.72_0.12_75)]"
                                : "text-white group-hover:text-[oklch(0.72_0.12_75)] transition-colors"
                            }`}
                          >
                            {prog.label}
                          </p>
                          <p className="text-[oklch(0.65_0.01_285)] text-xs mt-0.5 leading-snug">
                            {prog.description}
                          </p>
                        </div>
                        <span
                          className={`shrink-0 font-['Barlow_Condensed'] font-bold text-sm mt-0.5 ${
                            prog.price === "Free"
                              ? "text-emerald-400"
                              : "text-[oklch(0.72_0.12_75)]"
                          }`}
                        >
                          {prog.price}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className={`px-4 py-2 rounded font-['Barlow_Condensed'] text-sm font-medium tracking-wider uppercase transition-colors ${
                isActive("/blog")
                  ? "text-[oklch(0.72_0.12_75)]"
                  : "text-[oklch(0.85_0.01_285)] hover:text-[oklch(0.72_0.12_75)]"
              }`}
            >
              Articles
            </Link>

            <Link
              href="/longevity-blueprint"
              className="ml-3 px-4 py-2 rounded bg-[oklch(0.72_0.12_75)] text-black font-['Barlow_Condensed'] font-bold text-sm tracking-wider uppercase hover:bg-[oklch(0.78_0.14_75)] transition-colors"
            >
              Book Free Session
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
            <Link
              href="/"
              className={`block px-3 py-2.5 rounded font-['Barlow_Condensed'] font-medium tracking-wider uppercase text-sm transition-colors ${
                isActive("/")
                  ? "text-[oklch(0.72_0.12_75)] bg-[oklch(0.72_0.12_75/0.08)]"
                  : "text-[oklch(0.85_0.01_285)] hover:text-[oklch(0.72_0.12_75)]"
              }`}
            >
              Home
            </Link>

            {/* Programs accordion */}
            <div>
              <button
                onClick={() => setMobileProgramsOpen((v) => !v)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded font-['Barlow_Condensed'] font-medium tracking-wider uppercase text-sm transition-colors ${
                  isProgramActive || mobileProgramsOpen
                    ? "text-[oklch(0.72_0.12_75)] bg-[oklch(0.72_0.12_75/0.08)]"
                    : "text-[oklch(0.85_0.01_285)] hover:text-[oklch(0.72_0.12_75)]"
                }`}
              >
                Programs
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${mobileProgramsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {mobileProgramsOpen && (
                <div className="mt-1 ml-3 border-l-2 border-[oklch(0.72_0.12_75/0.3)] pl-3 space-y-1">
                  {PROGRAMS.map((prog) => (
                    <Link
                      key={prog.href}
                      href={prog.href}
                      className={`flex items-center justify-between gap-2 px-2 py-2 rounded transition-colors ${
                        isActive(prog.href)
                          ? "text-[oklch(0.72_0.12_75)]"
                          : "text-[oklch(0.75_0.01_285)] hover:text-[oklch(0.72_0.12_75)]"
                      }`}
                    >
                      <span className="font-['Barlow_Condensed'] text-sm font-medium">{prog.label}</span>
                      <span
                        className={`font-['Barlow_Condensed'] font-bold text-xs shrink-0 ${
                          prog.price === "Free" ? "text-emerald-400" : "text-[oklch(0.72_0.12_75)]"
                        }`}
                      >
                        {prog.price}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className={`block px-3 py-2.5 rounded font-['Barlow_Condensed'] font-medium tracking-wider uppercase text-sm transition-colors ${
                isActive("/blog")
                  ? "text-[oklch(0.72_0.12_75)] bg-[oklch(0.72_0.12_75/0.08)]"
                  : "text-[oklch(0.85_0.01_285)] hover:text-[oklch(0.72_0.12_75)]"
              }`}
            >
              Articles
            </Link>

            <div className="pt-2">
              <Link
                href="/longevity-blueprint"
                className="block text-center px-4 py-3 rounded bg-[oklch(0.72_0.12_75)] text-black font-['Barlow_Condensed'] font-bold text-sm tracking-wider uppercase hover:bg-[oklch(0.78_0.14_75)] transition-colors"
              >
                Book Free Session
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
