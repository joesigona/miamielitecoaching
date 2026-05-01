import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";

const PROGRAMS = [
  { value: "Assessment", label: "Baseline Assessment" },
  { value: "Custom-Made Protocol", label: "Custom-Made Protocol" },
  { value: "General Inquiry", label: "General Inquiry" },
];

export default function Contact() {
  const [location] = useLocation();
  
  const [formData, setFormData] = useState({
    program: "",
    email: "",
    phone: "",
    name: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pre-fill program from URL query parameter
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const program = params.get("program");
    if (program) {
      setFormData((prev) => ({ ...prev, program }));
    }
  }, []);

  const sendInquiry = trpc.contact.sendInquiry.useMutation({
    onSuccess: () => {
      alert("Inquiry sent! We'll get back to you within 24 hours.");
      setFormData({ program: "", email: "", phone: "", name: "", message: "" });
      setIsSubmitting(false);
    },
    onError: (error: any) => {
      alert(error.message || "Failed to send inquiry. Please try again.");
      setIsSubmitting(false);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.program || !formData.email || !formData.phone || !formData.name) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    await sendInquiry.mutateAsync(formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-[oklch(0.08_0.005_285)]">
      <Navigation />

      {/* Page Header */}
      <section className="py-16 sm:py-20 border-b border-white/8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-['Barlow_Condensed'] font-800 text-5xl sm:text-6xl text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-[oklch(0.72_0.12_75)] text-lg">
            Interested in a program? Fill out the form below and we'll reach out within 24 hours to discuss your longevity goals.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 sm:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white/5 border-white/10 p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Program Selection */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Program Interest *
                </label>
                <Select value={formData.program} onValueChange={(value) => handleChange("program", value)}>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white">
                    <SelectValue placeholder="Select a program" />
                  </SelectTrigger>
                  <SelectContent>
                    {PROGRAMS.map((prog) => (
                      <SelectItem key={prog.value} value={prog.value}>
                        {prog.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Full Name *
                </label>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Phone *
                </label>
                <Input
                  type="tel"
                  placeholder="+1 (305) 555-0000"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Message (Optional)
                </label>
                <Textarea
                  placeholder="Tell us about your health goals or any questions you have..."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 min-h-[120px]"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[oklch(0.72_0.12_75)] hover:bg-[oklch(0.85_0.10_75)] text-[oklch(0.08_0.005_285)] font-bold py-3 rounded-lg transition-colors"
              >
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </Button>

              <p className="text-xs text-white/50 text-center">
                We respect your privacy. Your information will only be used to contact you about your inquiry.
              </p>
            </form>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
