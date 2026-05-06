import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="container mx-auto px-6 py-12 grid gap-8 md:grid-cols-4">
        <div>
          <img src={logo} alt="INFINI BOOST" className="h-10 w-auto" />
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            SEO & digital marketing agency based in Tangier, Morocco. Driving sustainable growth.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Navigate</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="tel:+212752104769" className="hover:text-foreground">+212 7 52 10 47 69</a></li>
            <li><a href="https://wa.me/212752104769" className="hover:text-foreground">WhatsApp</a></li>
            <li>Open 24/7</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Office</h4>
          <p className="text-sm text-muted-foreground">
            4ème Étage Bureau N°7,<br />Dar Tounsi, Rue Ben Bouhout,<br />Tangier 90070, Morocco
          </p>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} INFINI BOOST. All rights reserved.
      </div>
    </footer>
  );
}
