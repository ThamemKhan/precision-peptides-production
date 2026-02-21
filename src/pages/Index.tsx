import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { PeptideChain3D } from "@/components/PeptideChain3D";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <PeptideChain3D />
      <div className="relative z-10">
        <Header />
        <Hero />
        <ProductGrid />
        <Features />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
