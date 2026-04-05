// Footer — Miami Elite Coaching
// Design: Dark, minimal, with gold accents and SEO-friendly internal links

import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.06_0.005_285)] border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-[oklch(0.72_0.12_75)] flex items-center justify-center">
                <span className="font-['Barlow_Condensed'] font-800 text-[oklch(0.08_0.005_285)] text-sm">
                  M
                </span>
              </div>
              <span className="font-['Barlow_Condensed'] font-700 text-white text-sm tracking-wide uppercase">
                Miami Elite Coaching
              </span>
            </div>
            <p className="text-[oklch(0.55_0.01_75)] text-sm leading-relaxed">
              Private personal training for Miami professionals. Results guaranteed or you don't pay.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-['Barlow_Condensed'] font-700 text-white text-sm tracking-widest uppercase mb-4">
              Programs
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/brickell">
                  <span className="text-[oklch(0.55_0.01_75)] text-sm hover:text-[oklch(0.72_0.12_75)] transition-colors cursor-pointer">
                    Brickell Executive Program
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/coconut-grove">
                  <span className="text-[oklch(0.55_0.01_75)] text-sm hover:text-[oklch(0.72_0.12_75)] transition-colors cursor-pointer">
                    Coconut Grove Program
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/miami-personal-trainer">
                  <span className="text-[oklch(0.55_0.01_75)] text-sm hover:text-[oklch(0.72_0.12_75)] transition-colors cursor-pointer">
                    Miami Personal Training
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Articles */}
          <div>
            <h4 className="font-['Barlow_Condensed'] font-700 text-white text-sm tracking-widest uppercase mb-4">
              Articles
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/blog">
                  <span className="text-[oklch(0.55_0.01_75)] text-sm hover:text-[oklch(0.72_0.12_75)] transition-colors cursor-pointer">
                    All Articles
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/blog/best-personal-trainers-miami">
                  <span className="text-[oklch(0.55_0.01_75)] text-sm hover:text-[oklch(0.72_0.12_75)] transition-colors cursor-pointer">
                    Best Trainers in Miami
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/blog/eating-healthy-miami-restaurants">
                  <span className="text-[oklch(0.55_0.01_75)] text-sm hover:text-[oklch(0.72_0.12_75)] transition-colors cursor-pointer">
                    Eating Healthy in Miami
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/blog/miami-personal-trainer-cost">
                  <span className="text-[oklch(0.55_0.01_75)] text-sm hover:text-[oklch(0.72_0.12_75)] transition-colors cursor-pointer">
                    Personal Trainer Cost
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Barlow_Condensed'] font-700 text-white text-sm tracking-widest uppercase mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li className="text-[oklch(0.55_0.01_75)] text-sm">
                Miami, Florida
              </li>
              <li className="text-[oklch(0.55_0.01_75)] text-sm">
                Brickell · Coconut Grove
              </li>
              <li>
                <Link href="/brickell#apply">
                  <span className="text-[oklch(0.72_0.12_75)] text-sm hover:text-[oklch(0.82_0.10_75)] transition-colors cursor-pointer font-['Barlow_Condensed'] font-600 uppercase tracking-wider">
                    Apply Now →
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[oklch(0.40_0.01_75)] text-xs">
            © {new Date().getFullYear()} Miami Elite Coaching. All rights reserved. Results may vary. Guarantee subject to program compliance.
          </p>
          <div className="flex gap-6">
            <Link href="/coconut-grove">
              <span className="text-[oklch(0.40_0.01_75)] text-xs hover:text-[oklch(0.72_0.12_75)] transition-colors cursor-pointer">
                Coconut Grove Program
              </span>
            </Link>
            <Link href="/blog">
              <span className="text-[oklch(0.40_0.01_75)] text-xs hover:text-[oklch(0.72_0.12_75)] transition-colors cursor-pointer">
                Articles
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
