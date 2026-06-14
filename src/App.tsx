import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Index from "./pages/Index";
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Register";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const RESEARCH_CONFIRMATION_KEY = "research-purpose-confirmed";

const App = () => {
  const [hasConfirmedResearchUse, setHasConfirmedResearchUse] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.localStorage.getItem(RESEARCH_CONFIRMATION_KEY) === "true";
  });

  const confirmResearchUse = () => {
    window.localStorage.setItem(RESEARCH_CONFIRMATION_KEY, "true");
    setHasConfirmedResearchUse(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className={hasConfirmedResearchUse ? "" : "pointer-events-none blur-sm transition-[filter] duration-200"}>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/product/:handle" element={<ProductDetail />} />
              <Route path="/register" element={<Register />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>

        <DialogPrimitive.Root open={!hasConfirmedResearchUse}>
          <DialogPrimitive.Portal>
            <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-background/70 backdrop-blur-md" />
            <DialogPrimitive.Content
              className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg border border-primary/20 bg-card p-6 text-card-foreground shadow-2xl focus:outline-none"
              onEscapeKeyDown={(event) => event.preventDefault()}
              onInteractOutside={(event) => event.preventDefault()}
              onPointerDownOutside={(event) => event.preventDefault()}
            >
              <DialogPrimitive.Title className="font-['Outfit'] text-2xl font-semibold leading-tight text-foreground">
                Research Purposes Only
              </DialogPrimitive.Title>
              <DialogPrimitive.Description className="mt-3 text-sm leading-6 text-muted-foreground">
                The peptides and related products on this website are intended strictly for laboratory research use
                only. They are not for human consumption, medical use, diagnosis, treatment, or any household
                application.
              </DialogPrimitive.Description>
              <Button className="mt-6 w-full" size="lg" onClick={confirmResearchUse}>
                I Understand and Confirm
              </Button>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        </DialogPrimitive.Root>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
