import { useEffect } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

export default function CheckoutSuccess() {
  useEffect(() => {
    document.title = "Payment Successful — Miami Elite Coaching";
  }, []);

  return (
    <div className="min-h-screen bg-[oklch(0.08_0.005_285)]">
      <Navigation />
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
        <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-green-400" />
        </div>
        <h1 className="font-['Barlow_Condensed'] font-700 text-4xl text-white mb-3">
          Payment Successful!
        </h1>
        <p className="text-[oklch(0.60_0.01_75)] text-lg mb-2 max-w-md">
          Thank you for your purchase. Our team will be in touch within the next
          hour to schedule your first session.
        </p>
        <p className="text-[oklch(0.72_0.12_75)] text-sm mb-8">
          A confirmation email has been sent to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/">
            <span className="btn-gold">Back to Home</span>
          </Link>
          <Link href="/blog">
            <span className="btn-ghost">Read Our Articles</span>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
