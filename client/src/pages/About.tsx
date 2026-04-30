// About Page — Miami Elite Coaching
// Route: /about

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About | Miami Elite Coaching";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Meet the team behind Miami Elite Coaching. A multidisciplinary collective of MDs, Neurospecialists, DPTs, and CSCS coaches dedicated to extending your healthspan."
      );
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[oklch(0.08_0.005_285)]">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[oklch(0.72_0.12_75)] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-xs mb-4">
            About Us
          </p>
          <h1 className="font-['Barlow_Condensed'] font-800 text-5xl sm:text-6xl text-white leading-tight mb-6">
            Not a Gym.{" "}
            <span className="text-gold italic">A Longevity Practice.</span>
          </h1>
          <p className="text-[oklch(0.62_0.01_75)] text-lg leading-relaxed max-w-3xl">
            Miami Elite Coaching was founded on a simple premise: the fitness industry
            is broken. It sells aesthetics when it should sell healthspan. It relies on
            intuition when it should rely on data. We exist to fix that — one client,
            one protocol, one measurable outcome at a time.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-[oklch(0.10_0.005_285)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-['Barlow_Condensed'] font-700 text-3xl text-white mb-6">
                The Mission
              </h2>
              <p className="text-[oklch(0.62_0.01_75)] text-base leading-relaxed mb-5">
                We merge elite human performance coaching with cutting-edge biological
                protocols to extend your healthspan — the years you're sharp, strong,
                and fully in the game. Not just alive. Performing.
              </p>
              <p className="text-[oklch(0.62_0.01_75)] text-base leading-relaxed">
                Every protocol we build starts with your data: bloodwork, DEXA scans,
                VO2 Max testing, and continuous biometric monitoring. From there, a
                multidisciplinary team of specialists designs a program that evolves
                with your biology — not against it.
              </p>
            </div>
            <div>
              <h2 className="font-['Barlow_Condensed'] font-700 text-3xl text-white mb-6">
                The Team
              </h2>
              <div className="space-y-4">
                {[
                  { role: "Medical Doctors (MDs)", desc: "Clinical oversight and longevity medicine protocols" },
                  { role: "Neurospecialists", desc: "Cognitive resilience and brain performance optimization" },
                  { role: "Doctors of Physical Therapy (DPTs)", desc: "Biomechanical assessment and injury prevention" },
                  { role: "CSCS Coaches", desc: "Elite performance programming and athletic development" },
                ].map((member, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 bg-[oklch(0.12_0.005_285)] border border-white/8 p-5"
                  >
                    <div className="w-8 h-8 bg-[oklch(0.72_0.12_75)] flex items-center justify-center flex-shrink-0">
                      <span className="font-['Barlow_Condensed'] font-800 text-[oklch(0.08_0.005_285)] text-sm">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <p className="font-['Barlow_Condensed'] font-700 text-white text-sm tracking-wide uppercase">
                        {member.role}
                      </p>
                      <p className="text-[oklch(0.50_0.01_75)] text-xs leading-relaxed">
                        {member.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[oklch(0.72_0.12_75)] font-['Barlow_Condensed'] font-600 uppercase tracking-widest text-xs mb-4">
            Location
          </p>
          <h2 className="font-['Barlow_Condensed'] font-700 text-4xl text-white mb-4">
            Based in Brickell, Miami
          </h2>
          <p className="text-[oklch(0.62_0.01_75)] text-base leading-relaxed max-w-2xl mx-auto mb-4">
            All sessions take place at RETO Brickell — a state-of-the-art performance
            facility in the heart of Miami's financial district. We also serve clients
            in Coconut Grove and Coral Gables.
          </p>
          <p className="text-[oklch(0.45_0.01_75)] text-sm">
            Joe Sigona Fitness LLC &middot; Brickell, Miami FL
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
