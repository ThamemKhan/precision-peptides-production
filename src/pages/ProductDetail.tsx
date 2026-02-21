import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PeptideChain3D } from "@/components/PeptideChain3D";
import { Button } from "@/components/ui/button";
import { getProductByHandle } from "@/data/products";
import { useCartStore } from "@/stores/cartStore";
import { ArrowLeft, ShoppingCart, Minus, Plus, Shield, Truck, Award, Dna, Beaker, FlaskConical, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore(state => state.addItem);

  const product = handle ? getProductByHandle(handle) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [handle]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background relative">
        <PeptideChain3D />
        <div className="relative z-10">
          <Header />
          <div className="pt-32 container mx-auto px-4 text-center min-h-[60vh]">
            <h1 className="text-2xl font-bold text-foreground mb-4">Product not found</h1>
            <Link to="/">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Store
              </Button>
            </Link>
          </div>
          <Footer />
        </div>
      </div>
    );
  }

  const selectedVariant = product.variants[selectedVariantIndex];

  const handleAddToCart = () => {
    if (!selectedVariant) return;
    addItem({
      product,
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      quantity,
    });
    toast.success("Added to cart", { description: `${quantity}x ${product.title}` });
  };

  return (
    <div className="min-h-screen bg-background relative">
      <PeptideChain3D />
      <div className="relative z-10">
        <Header />
        
        <main className="pt-24 md:pt-32 pb-20">
          <div className="container mx-auto px-4">
            <Link to="/#products" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Products
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Product Image */}
              <div>
                <div className="glass-card overflow-hidden group">
                  <div className="aspect-square bg-secondary/30 relative">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                        <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center">
                          <Dna className="w-12 h-12 text-primary animate-pulse-glow" />
                        </div>
                        <span className="text-muted-foreground font-display">{product.title}</span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center">
                      <FlaskConical className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 mb-4">
                  <Beaker className="w-3 h-3 text-primary" />
                  <span className="text-xs text-primary font-medium">Research Peptide</span>
                </div>

                <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {product.title}
                </h1>
                
                <p className="text-muted-foreground mb-6 text-base sm:text-lg leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center gap-2 mb-8">
                  <CheckCircle className={`w-5 h-5 ${product.inStock ? 'text-primary' : 'text-muted-foreground'}`} />
                  <span className={`text-lg font-semibold font-display ${product.inStock ? 'text-primary' : 'text-muted-foreground'}`}>
                    {product.inStock ? "Available for Research" : "Currently Unavailable"}
                  </span>
                </div>

                {/* Variant Selection */}
                {product.variants.length > 1 && (
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-foreground mb-3 font-display">Select Size</label>
                    <div className="flex flex-wrap gap-3">
                      {product.variants.map((variant, index) => (
                        <Button
                          key={variant.id}
                          variant={selectedVariantIndex === index ? "default" : "outline"}
                          size="lg"
                          onClick={() => setSelectedVariantIndex(index)}
                          className={selectedVariantIndex === index 
                            ? "bg-primary text-primary-foreground glow-effect px-6" 
                            : "border-border text-foreground hover:border-primary hover:bg-primary/5 px-6"
                          }
                        >
                          {variant.title}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-foreground mb-3 font-display">Quantity</label>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-border rounded-xl bg-secondary/20">
                      <Button variant="ghost" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-foreground hover:text-primary">
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-14 text-center font-display font-semibold text-lg text-foreground">{quantity}</span>
                      <Button variant="ghost" size="icon" onClick={() => setQuantity(quantity + 1)} className="text-foreground hover:text-primary">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 glow-effect font-display"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Register Interest
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-3">
                  Our team will contact you to finalize the purchase over a call.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
                  <div className="flex flex-col items-center text-center p-3 sm:p-4 glass-card group hover:border-primary/30 transition-all">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] sm:text-xs text-muted-foreground font-medium">99%+ Purity</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-3 sm:p-4 glass-card group hover:border-primary/30 transition-all">
                    <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] sm:text-xs text-muted-foreground font-medium">Fast Shipping</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-3 sm:p-4 glass-card group hover:border-primary/30 transition-all">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] sm:text-xs text-muted-foreground font-medium">COA Included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default ProductDetail;
