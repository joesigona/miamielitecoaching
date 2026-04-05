// 404 Not Found — Miami Elite Coaching

import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[oklch(0.08_0.005_285)]">
      <Navigation />
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
        <div className="font-['Barlow_Condensed'] font-800 text-[8rem] text-[oklch(0.15_0.005_285)] leading-none mb-4">
          404
        </div>
        <h1 className="font-['Barlow_Condensed'] font-700 text-3xl text-white mb-3">
          Page Not Found
        </h1>
        <p className="text-[oklch(0.55_0.01_75)] text-sm mb-8 max-w-sm">
          Sorry, the page you're looking for doesn't exist. It may have been
          moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/">
            <span className="btn-gold">Go Home</span>
          </Link>
          <Link href="/blog">
            <span className="btn-ghost">Read Articles</span>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
