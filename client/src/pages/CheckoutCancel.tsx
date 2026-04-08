import { useEffect } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { XCircle } from "lucide-react";

export default function CheckoutCancel() {
  useEffect(() => {
    document.title = "Payment Cancelled — Miami Elite Coaching";
  }, []);

  return (
    <div className="min-h-screen bg-[oklch(0.08_0.005_285)]">
      <Navigation />
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
        <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center mb-6">
          <XCircle className="w-10 h-10 text-red-400" />
        </div>
        <h1 className="font-['Barlow_Condensed'] font-700 text-4xl text-white mb-3">
          Payment Cancelled
        </h1>
        <p className="text-[oklch(0.60_0.01_75)] text-lg mb-2 max-w-md">
          No worries — your payment was not processed. If you have any questions
          about our programs, feel free to reach out.
        </p>
        <p className="text-[oklch(0.72_0.12_75)] text-sm mb-8">
          You can try again anytime.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/">
            <span className="btn-gold">Back to Home</span>
          </Link>
          <Link href="/miami-personal-trainer">
            <span className="btn-ghost">Explore Programs</span>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
