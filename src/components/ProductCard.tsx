import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Dna, Beaker, CheckCircle } from "lucide-react";
import { Product } from "@/data/products";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore(state => state.addItem);
  const defaultVariant = product.variants[0];

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!defaultVariant) return;

    addItem({
      product,
      variantId: defaultVariant.id,
      variantTitle: defaultVariant.title,
      quantity: 1,
    });

    toast.success("Added to cart", { description: product.title });
  };

  return (
    <Link to={`/product/${product.handle}`} className="group">
      <div className="glass-card overflow-hidden transition-all duration-500 hover:border-primary/40 hover:glow-effect hover:-translate-y-1">
        <div className="aspect-square bg-secondary/30 relative overflow-hidden">
          {product.image ? (
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Dna className="w-8 h-8 text-primary animate-pulse-glow" />
              </div>
              <span className="text-sm text-muted-foreground font-display">{product.title}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full bg-background/70 backdrop-blur-md border border-primary/20">
            <Beaker className="w-3 h-3 text-primary" />
            <span className="text-[10px] text-primary font-medium">Research Grade</span>
          </div>
        </div>
        
        <div className="p-4 sm:p-5 md:p-6">
          <h3 className="font-display font-bold text-base sm:text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
            {product.title}
          </h3>
          
          <p className="text-xs sm:text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle className={`w-4 h-4 ${product.inStock ? 'text-primary' : 'text-muted-foreground'}`} />
              <span className={`text-sm font-semibold ${product.inStock ? 'text-primary' : 'text-muted-foreground'}`}>
                {product.comingsoon ? "Coming Soon" : product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>
            
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
              onClick={handleAddToCart}
              disabled={!product.inStock || product.comingsoon}
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">Add</span>
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};
