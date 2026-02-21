import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartDrawer } from "@/components/CartDrawer";
import logo from "@/assets/logo.jpg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group" onClick={() => window.scrollTo(0, 0)}>
            <img src={logo} alt="Precision Peptides" className="h-10 md:h-12 w-auto rounded-full" />
            <span className="font-display text-xl md:text-2xl font-bold tracking-tight">
              <span className="gradient-text">Precision </span>
              <span className="text-foreground">Peptides</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors font-medium" onClick={() => window.scrollTo(0, 0)}>Home</Link>
            <Link to="/#products" className="text-muted-foreground hover:text-foreground transition-colors font-medium" onClick={() => scrollToSection("products")}>Products</Link>
            <Link to="/#about" className="text-muted-foreground hover:text-foreground transition-colors font-medium" onClick={() => scrollToSection("about")}>About</Link>
            <Link to="/#contact" className="text-muted-foreground hover:text-foreground transition-colors font-medium" onClick={() => scrollToSection("contact")}>Contact</Link>
            <a
  href="https://wa.me/919360500020?text=Hello%20I%20am%20interested%20in%20your%20products"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setIsMenuOpen(false)}
  className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors font-medium"
>
  <MessageCircle className="w-5 h-5" />
  Chat on WhatsApp
</a>
          </nav>

          <div className="flex items-center gap-4">
            <CartDrawer />
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors font-medium" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>Home</Link>
              <Link to="/#products" className="text-muted-foreground hover:text-foreground transition-colors font-medium" onClick={() => scrollToSection("products")}>Products</Link>
              <Link to="/#about" className="text-muted-foreground hover:text-foreground transition-colors font-medium" onClick={() => scrollToSection("about")}>About</Link>
              <Link to="/#contact" className="text-muted-foreground hover:text-foreground transition-colors font-medium" onClick={() => scrollToSection("contact")}>Contact</Link>
              <a
  href="https://wa.me/919360500020?text=Hello%20I%20am%20interested%20in%20your%20products"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setIsMenuOpen(false)}
  className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors font-medium"
>
  <MessageCircle className="w-5 h-5" />
  Chat on WhatsApp
</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
