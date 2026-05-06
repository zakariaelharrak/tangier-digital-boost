import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — INFINI BOOST Tangier" },
      { name: "description", content: "Learn about INFINI BOOST, the Tangier-based SEO & digital marketing agency obsessed with measurable growth." },
    ],
  }),
  component: About,
});

const values = [
  { k: "Data over opinions", v: "Every recommendation is backed by analytics, research and tested benchmarks." },
  { k: "Transparent partnership", v: "Live dashboards, weekly comms and no jargon. You always know where your budget goes." },
  { k: "Compound thinking", v: "We build assets — content, infrastructure, brand — that keep returning long after launch." },
];

function About() {
  return (
    <>
      <section className="container mx-auto px-6 pt-20 pb-12 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm text-primary font-medium">About</p>
          <h1 className="mt-3 text-5xl md:text-6xl font-bold">Built in Tangier. <span className="text-gradient">Boosting brands</span> worldwide.</h1>
          <p className="mt-5 text-muted-foreground text-lg">
            INFINI BOOST is a digital marketing agency that helps ambitious teams turn marketing into a growth engine. We combine strategy, SEO, performance media and creative under one roof — so every channel pulls in the same direction.
          </p>
          <p className="mt-4 text-muted-foreground">
            From boutique startups in Morocco to international e-commerce brands, our work is judged on a single metric: did we move the business forward?
          </p>
        </div>
        <div className="relative aspect-square rounded-3xl border border-border/60 overflow-hidden bg-card/40 backdrop-blur">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
          <div className="relative h-full flex flex-col items-center justify-center p-10 text-center">
            <div className="text-7xl font-display font-bold text-gradient">∞</div>
            <p className="mt-4 text-muted-foreground max-w-xs">Infinite iteration. Compounding results. That's the boost.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">How we work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map(({ k, v }) => (
            <div key={k} className="rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold text-gradient">{k}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 pb-24 text-center">
        <Button asChild size="lg" className="text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
          <Link to="/contact">Work with us</Link>
        </Button>
      </section>
    </>
  );
}
