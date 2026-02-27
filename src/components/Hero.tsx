import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Truck, Award } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-primary font-medium">For Research Purposes Only</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Premium Research</span>
            <br />
            <span className="gradient-text">Peptides</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Advancing scientific discovery with high-purity peptides. 
            Laboratory-grade compounds for cutting-edge research and development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg px-8 py-6 glow-effect"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 text-foreground hover:bg-primary/10 text-base sm:text-lg px-8 py-6"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-4 glass-card">
              <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
              <div className="text-left">
                <p className="font-semibold text-foreground text-sm sm:text-base">99%+ Purity</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Lab Verified</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 glass-card">
              <Truck className="w-7 h-7 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
              <div className="text-left">
                <p className="font-semibold text-foreground text-sm sm:text-base">Fast Shipping</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Secure Delivery</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 glass-card">
              <Award className="w-7 h-7 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
              <div className="text-left">
                <p className="font-semibold text-foreground text-sm sm:text-base">Janoshik Labs tested</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Every Order</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
