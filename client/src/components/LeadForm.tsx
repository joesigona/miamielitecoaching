// LeadForm — Miami Elite Coaching
// Reusable lead capture form for all landing pages
// Design: Dark card, gold accents, minimal fields

import { useState } from "react";
import { toast } from "sonner";

interface LeadFormProps {
  source?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
}

export default function LeadForm({
  source = "website",
  title = "Book an Assessment",
  subtitle = "Fill out the form below and you'll receive a call within the hour to discuss your goals and confirm your spot.",
  ctaText = "Book an Assessment →",
}: LeadFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    time: "",
    goal: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    toast.success("Request received! We'll call you within the hour.");
  };

  if (submitted) {
    return (
      <div className="bg-[oklch(0.12_0.005_285)] border border-[oklch(0.72_0.12_75)/0.3] p-8 text-center">
        <div className="w-12 h-12 bg-[oklch(0.72_0.12_75)] flex items-center justify-center mx-auto mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="oklch(0.08 0.005 285)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="font-['Barlow_Condensed'] font-700 text-2xl text-white mb-2">
          Request Received
        </h3>
        <p className="text-[oklch(0.65_0.01_75)] text-sm">
          We'll reach out within the hour to discuss your goals and confirm your spot. Check your email for a confirmation.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[oklch(0.12_0.005_285)] border border-white/10 p-6 sm:p-8">
      <h2 className="font-['Barlow_Condensed'] font-700 text-3xl text-white mb-2">
        {title}
      </h2>
      <p className="text-[oklch(0.60_0.01_75)] text-sm mb-6 leading-relaxed">
        {subtitle}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-[oklch(0.70_0.01_75)] text-xs font-['Barlow_Condensed'] font-600 uppercase tracking-widest mb-1.5">
            Full Name <span className="text-[oklch(0.72_0.12_75)]">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
            className="w-full bg-[oklch(0.16_0.005_285)] border border-white/10 text-white placeholder-[oklch(0.40_0.01_75)] px-4 py-3 text-sm focus:outline-none focus:border-[oklch(0.72_0.12_75)] transition-colors"
          />
        </div>

        <div>
          <label className="block text-[oklch(0.70_0.01_75)] text-xs font-['Barlow_Condensed'] font-600 uppercase tracking-widest mb-1.5">
            Email Address <span className="text-[oklch(0.72_0.12_75)]">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            className="w-full bg-[oklch(0.16_0.005_285)] border border-white/10 text-white placeholder-[oklch(0.40_0.01_75)] px-4 py-3 text-sm focus:outline-none focus:border-[oklch(0.72_0.12_75)] transition-colors"
          />
        </div>

        <div>
          <label className="block text-[oklch(0.70_0.01_75)] text-xs font-['Barlow_Condensed'] font-600 uppercase tracking-widest mb-1.5">
            Phone Number <span className="text-[oklch(0.72_0.12_75)]">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="(305) 000-0000"
            required
            className="w-full bg-[oklch(0.16_0.005_285)] border border-white/10 text-white placeholder-[oklch(0.40_0.01_75)] px-4 py-3 text-sm focus:outline-none focus:border-[oklch(0.72_0.12_75)] transition-colors"
          />
        </div>

        <div>
          <label className="block text-[oklch(0.70_0.01_75)] text-xs font-['Barlow_Condensed'] font-600 uppercase tracking-widest mb-1.5">
            Best Time to Reach You
          </label>
          <select
            name="time"
            value={form.time}
            onChange={handleChange}
            className="w-full bg-[oklch(0.16_0.005_285)] border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-[oklch(0.72_0.12_75)] transition-colors appearance-none"
          >
            <option value="">Select a time window...</option>
            <option value="morning">Morning (7am–10am)</option>
            <option value="midday">Midday (10am–1pm)</option>
            <option value="afternoon">Afternoon (1pm–4pm)</option>
            <option value="evening">Evening (4pm–7pm)</option>
          </select>
        </div>

        <div>
          <label className="block text-[oklch(0.70_0.01_75)] text-xs font-['Barlow_Condensed'] font-600 uppercase tracking-widest mb-1.5">
            Primary Goal (optional)
          </label>
          <select
            name="goal"
            value={form.goal}
            onChange={handleChange}
            className="w-full bg-[oklch(0.16_0.005_285)] border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-[oklch(0.72_0.12_75)] transition-colors appearance-none"
          >
            <option value="">Select your main goal...</option>
            <option value="fat-loss">Lose Body Fat</option>
            <option value="muscle">Build Muscle & Strength</option>
            <option value="energy">Improve Energy & Performance</option>
            <option value="health">General Health & Longevity</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-gold w-full justify-center text-sm mt-2"
        >
          {loading ? "Submitting..." : ctaText}
        </button>

        <p className="text-[oklch(0.40_0.01_75)] text-xs text-center">
          No spam. No pressure. Just a direct conversation about your goals.
        </p>
      </form>
    </div>
  );
}
