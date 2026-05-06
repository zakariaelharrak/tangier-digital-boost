import { MessageCircle, Zap, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const perks = [
  { icon: Zap, title: "Instant replies", desc: "Average response under 10 minutes during business hours." },
  { icon: Clock, title: "Available 24/7", desc: "Day or night, our team is ready to talk strategy." },
  { icon: ShieldCheck, title: "No commitment", desc: "Free first consultation. No contracts to sign." },
];

export function WhatsAppSection() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl border border-border/60 p-10 md:p-16" style={{ background: "linear-gradient(135deg, oklch(0.55 0.18 150), oklch(0.7 0.2 145))" }}>
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="relative grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-primary-foreground">
            <div className="inline-flex items-center gap-2 rounded-full bg-background/15 backdrop-blur px-3 py-1 text-xs">
              <MessageCircle className="h-3 w-3" /> WhatsApp · +212 7 52 10 47 69
            </div>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold">Talk to a strategist now.</h2>
            <p className="mt-4 text-primary-foreground/85 max-w-md">
              Skip the forms. Send us a quick message on WhatsApp and we'll start mapping your growth opportunity right away.
            </p>
            <Button asChild size="lg" className="mt-8 bg-background text-foreground hover:bg-background/90">
              <a href="https://wa.me/212752104769?text=Hi%20INFINI%20BOOST%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener">
                <MessageCircle className="mr-2 h-4 w-4" /> Chat on WhatsApp
              </a>
            </Button>
          </div>
          <div className="grid gap-3">
            {perks.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 rounded-2xl bg-background/15 backdrop-blur border border-background/20 p-5 text-primary-foreground">
                <div className="h-10 w-10 rounded-xl bg-background/20 flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">{title}</div>
                  <div className="text-sm text-primary-foreground/80 mt-0.5">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
