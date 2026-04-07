// App.tsx — Miami Elite Coaching
// Routes: Home, Brickell, Coconut Grove, Miami Personal Trainer, Blog, Article
// Design: Dark luxury, Barlow Condensed + Source Serif 4

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import BrickellPage from "./pages/Brickell";
import CoconutGrovePage from "./pages/CoconutGrove";
import MiamiPersonalTrainerPage from "./pages/MiamiPersonalTrainer";
import BlogPage from "./pages/Blog";
import ArticlePage from "./pages/Article";
import LongevityBlueprintPage from "./pages/LongevityBlueprint";
import CeoProtocolPage from "./pages/CeoProtocol";
import VitalityResetPage from "./pages/VitalityReset";
import LongevityDuoPage from "./pages/LongevityDuo";
import DataFirstDropInPage from "./pages/DataFirstDropIn";
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/brickell" component={BrickellPage} />
      <Route path="/coconut-grove" component={CoconutGrovePage} />
      <Route path="/miami-personal-trainer" component={MiamiPersonalTrainerPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/:slug" component={ArticlePage} />
      <Route path="/longevity-blueprint" component={LongevityBlueprintPage} />
      <Route path="/ceo-performance-protocol" component={CeoProtocolPage} />
      <Route path="/vitality-reset" component={VitalityResetPage} />
      <Route path="/longevity-duo" component={LongevityDuoPage} />
      <Route path="/data-first-dropin" component={DataFirstDropInPage} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
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
