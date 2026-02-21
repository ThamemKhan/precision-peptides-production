import { Link, useLocation } from "react-router-dom";
import { Mail, MapPin, Phone , Instagram, MessageCircle} from "lucide-react";
import logo from "@/assets/logo.jpg";

export const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleHashLink = (id: string) => {
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-card border-t border-border py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4" onClick={() => window.scrollTo(0, 0)}>
              <img src={logo} alt="Precision Peptides" className="h-10 w-auto rounded-full" />
              <span className="font-display text-xl font-bold">
                <span className="gradient-text">Precision </span>
                <span className="text-foreground">Peptides</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-4 text-sm sm:text-base">
              Premium research peptides for scientific advancement. 
              For research purposes only.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
              <li><Link to="/#products" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => handleHashLink("products")}>Products</Link></li>
              <li><Link to="/#about" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => handleHashLink("about")}>About Us</Link></li>
              <li><Link to="/#contact" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => handleHashLink("contact")}>Contact</Link></li>
            </ul>
          </div>


          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span>precisionpeptidesonline@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span>+91 93605 00020</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <Instagram className="w-5 h-5 text-primary flex-shrink-0" />
                <a
    href="https://www.instagram.com/precision_peptides.in?igsh=MTV4YTZzY3BrcGNzbQ=="
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-primary transition-colors"
  >
    Follow us on Instagram
  </a>

              </li>

              <li className="flex items-start gap-3 text-muted-foreground text-sm">
  <a
    href="https://wa.me/919360500020?text=Hello%20I%20want%20more%20details"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 hover:text-primary transition-colors"
  >
    <MessageCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
    <span>Chat with us on WhatsApp</span>
  </a>
</li>

              {/* <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Door.No.73, Bharathi Park 8th Cross, NSR Rd, Saibaba Colony, Coimbatore, Tamil Nadu 641011</span>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p className="text-sm">© {new Date().getFullYear()} Precision Peptides. All rights reserved.</p>
          <p className="text-xs mt-2">For research purposes only. Not for human consumption.</p>
        </div>
      </div>
    </footer>
  );
};
