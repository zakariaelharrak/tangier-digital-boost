import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Search, Target, TrendingUp, BarChart3, Globe2, Sparkles, Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — INFINI BOOST Digital Marketing Tangier" },
      { name: "description", content: "SEO, paid media, growth strategy, analytics, web design and creative services from INFINI BOOST in Tangier." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Search, title: "SEO & Content Marketing", points: ["Technical SEO audits", "Keyword & topic strategy", "Content production at scale", "Local & international SEO"] },
  { icon: Target, title: "Performance Advertising", points: ["Google Ads & Shopping", "Meta & TikTok campaigns", "Creative testing frameworks", "ROAS-driven optimization"] },
  { icon: TrendingUp, title: "Growth Strategy & Consulting", points: ["Market & competitor research", "Customer journey mapping", "Funnel & offer development", "Quarterly growth roadmaps"] },
  { icon: BarChart3, title: "Analytics & CRO", points: ["GA4 + Tag Manager setup", "Dashboards & reporting", "A/B testing programs", "Landing page optimization"] },
  { icon: Globe2, title: "Web Design & Development", points: ["Conversion-focused websites", "E-commerce builds", "Performance & Core Web Vitals", "Multilingual experiences"] },
  { icon: Sparkles, title: "Social Media & Creative", points: ["Content calendars", "Short-form video", "Community management", "Brand identity systems"] },
];

function Services() {
  return (
    <>
      <section className="container mx-auto px-6 pt-20 pb-12 text-center">
        <p className="text-sm text-primary font-medium">Services</p>
        <h1 className="mt-3 text-5xl md:text-6xl font-bold max-w-3xl mx-auto">Everything you need to <span className="text-gradient">scale.</span></h1>
        <p className="mt-5 text-muted-foreground max-w-2xl mx-auto text-lg">
          Pick a single service or let us build a full-stack growth engine. Every engagement is custom-built around your business model.
        </p>
      </section>

      <section className="container mx-auto px-6 pb-24 grid gap-6 md:grid-cols-2">
        {services.map(({ icon: Icon, title, points }) => (
          <div key={title} className="rounded-2xl border border-border/60 bg-card/40 p-8 backdrop-blur">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            <ul className="mt-6 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="container mx-auto px-6 pb-24 text-center">
        <Button asChild size="lg" className="text-primary-foreground" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
          <Link to="/contact">Book a discovery call</Link>
        </Button>
      </section>
    </>
  );
}
