import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { queryClient } from "./lib/queryClient";
import Home from "@/pages/Home";
import OnboardingFlow from "@/pages/OnboardingFlow";
import Dashboard from "@/pages/Dashboard";
import Coach from "@/pages/Coach";
import RecoveryPlan from "@/pages/RecoveryPlan";
import Community from "@/pages/Community";
import Education from "@/pages/Education";
import HabitLibrary from "@/pages/HabitLibrary";
import SOSSupport from "@/pages/SOSSupport";
import ProfileSettings from "@/pages/ProfileSettings";
import NotFound from "@/pages/not-found";
import SiteLayout from "@/layouts/SiteLayout";
import AppLayout from "@/layouts/AppLayout";
import FloatingSOSButton from "@/components/common/FloatingSOSButton";
import SOSModal from "@/components/common/SOSModal";
import { useState } from "react";

function App() {
  const [sosOpen, setSosOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Toaster />
          <Routes>
            <Route element={<SiteLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/onboarding" element={<OnboardingFlow />} />
            </Route>
            <Route element={<AppLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/coach" element={<Coach />} />
              <Route path="/plan" element={<RecoveryPlan />} />
              <Route path="/community" element={<Community />} />
              <Route path="/education" element={<Education />} />
              <Route path="/library" element={<HabitLibrary />} />
              <Route path="/sos" element={<SOSSupport />} />
              <Route path="/profile" element={<ProfileSettings />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <FloatingSOSButton onClick={() => setSosOpen(true)} />
          <SOSModal open={sosOpen} onClose={() => setSosOpen(false)} />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
