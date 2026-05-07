// App.tsx — Miami Elite Coaching
// Routes: Home, Miami Personal Trainer, Programs, Contact, Blog, Article, Longevity Blueprint, Longevity Duo
// Design: Dark luxury, Barlow Condensed + Source Serif 4
//
// NAVIGATION NOTE:
// The individual program pages below are intentionally NOT listed in the nav menu.
// They are used as standalone lead landing pages — backlink each URL directly
// to its corresponding lead source (ads, email, referral, etc.).
//
//   /longevity-blueprint       → Lead source: [your link here]
//   /longevity-duo             → Lead source: [your link here]
//
// All are still accessible via direct URL and visible on the /programs overview page.

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import MiamiPersonalTrainerPage from "./pages/MiamiPersonalTrainer";
import BlogPage from "./pages/Blog";
import ArticlePage from "./pages/Article";
import ProgramsPage from "./pages/Programs";
import LongevityBlueprintPage from "./pages/LongevityBlueprint";
import LongevityDuoPage from "./pages/LongevityDuo";
import AssessmentLandingPage from "./pages/AssessmentLandingPage";
import CoreHealth from "./pages/CoreHealth";
import AdminLeads from "./pages/AdminLeads";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BiohackingMiamiSummer from "./pages/BiohackingMiamiSummer";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import CheckoutCancel from "./pages/CheckoutCancel";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/miami-personal-trainer" component={MiamiPersonalTrainerPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/:slug" component={ArticlePage} />

      {/* Programs overview — linked from nav */}
      <Route path="/programs" component={ProgramsPage} />
      <Route path="/contact" component={ContactPage} />

      {/* Individual program pages — hidden from nav, used as lead landing pages */}
      <Route path="/longevity-blueprint" component={LongevityBlueprintPage} />
      <Route path="/longevity-duo" component={LongevityDuoPage} />

      {/* Generic brand-wide assessment landing page — partner QR codes, Google Ads, direct prospects */}
      <Route path="/assessment" component={AssessmentLandingPage} />

      {/* Core Health partnership landing page — destination of flyer QR code */}
      <Route path="/corehealth" component={CoreHealth} />

      {/* Individual article pages with custom layout */}
      <Route path="/articles/biohacking-miami-summer-longevity" component={BiohackingMiamiSummer} />

      <Route path="/checkout/success" component={CheckoutSuccess} />
      <Route path="/checkout/cancel" component={CheckoutCancel} />

      {/* Admin routes — gated server-side via adminProcedure (Manus OAuth + role) */}
      <Route path="/admin/leads" component={AdminLeads} />
      <Route path="/admin" component={AdminLeads} />

      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
