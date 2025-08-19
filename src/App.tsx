import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StrengthConditioning from "./pages/StrengthConditioning";
import SchedulePrivateLesson from "./pages/SchedulePrivateLesson";
import ScheduleStrengthConditioning from "./pages/ScheduleStrengthConditioning";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/strength-conditioning" element={<StrengthConditioning />} />
          <Route path="/schedule/private-lesson" element={<SchedulePrivateLesson />} />
          <Route path="/schedule/strength-conditioning" element={<ScheduleStrengthConditioning />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
