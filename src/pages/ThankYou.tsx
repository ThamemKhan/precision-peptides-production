import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PeptideChain3D } from "@/components/PeptideChain3D";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";
import { CheckCircle, ArrowRight, Phone, Dna } from "lucide-react";

const ThankYou = () => {
  const clearCart = useCartStore(state => state.clearCart);

  useEffect(() => {
    clearCart();
    window.scrollTo(0, 0);
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-background relative">
      <PeptideChain3D />
      <div className="relative z-10">
        <Header />

        <main className="pt-28 md:pt-36 pb-20 min-h-[70vh] flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="relative inline-flex mb-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary/10 flex items-center justify-center animate-pulse-glow">
                  <CheckCircle className="w-10 h-10 sm:w-14 sm:h-14 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <Dna className="w-4 h-4 text-accent" />
                </div>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Thank You!</span>
              </h1>

              <p className="text-lg sm:text-xl text-foreground mb-3 font-display">
                Your registration has been submitted successfully.
              </p>

              <p className="text-muted-foreground mb-10 max-w-lg mx-auto text-base sm:text-lg">
                Our delivery team will get in touch with you shortly to confirm your order details and arrange delivery.
              </p>

              <div className="glass-card p-5 sm:p-6 md:p-8 mb-10 max-w-lg mx-auto">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-display font-semibold text-foreground">What happens next?</h3>
                    <p className="text-sm text-muted-foreground">Our sales team will call you within 24 hours</p>
                  </div>
                </div>
                <div className="space-y-3 text-left text-sm">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                    <p className="text-muted-foreground">Our team will review your product registration</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                    <p className="text-muted-foreground">You'll receive a call to discuss details and delivery</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                    <p className="text-muted-foreground">Payment and delivery will be arranged over the call</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/#products">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 glow-effect font-display">
                    Explore More Products
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary/30 text-foreground hover:bg-primary/10 px-8">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default ThankYou;
