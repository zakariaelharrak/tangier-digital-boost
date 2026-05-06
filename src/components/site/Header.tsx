import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }} />
          <span className="font-display text-lg font-bold tracking-tight">
            INFINI<span className="text-gradient">BOOST</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition">Home</Link>
          <Link to="/services" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition">Services</Link>
          <Link to="/about" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition">About</Link>
          <Link to="/contact" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition">Contact</Link>
        </nav>
        <Button asChild size="sm" className="bg-primary text-primary-foreground hover:opacity-90" style={{ background: "var(--gradient-primary)" }}>
          <a href="https://wa.me/212752104769" target="_blank" rel="noopener">Get a Quote</a>
        </Button>
      </div>
    </header>
  );
}
