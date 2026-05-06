import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, TrendingUp, Target, Sparkles, BarChart3, Globe2, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "INFINI BOOST — SEO & Digital Marketing Agency in Tangier" },
      { name: "description", content: "We help Moroccan and international brands grow with SEO, paid media and full-funnel digital strategy. Based in Tangier, working worldwide." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Search, title: "SEO & Content", desc: "Technical SEO, on-page optimization and content engines that rank and convert." },
  { icon: Target, title: "Performance Ads", desc: "Google, Meta, TikTok campaigns engineered for ROAS, not just impressions." },
  { icon: TrendingUp, title: "Growth Strategy", desc: "Funnel mapping, market research and roadmaps that align with revenue goals." },
  { icon: BarChart3, title: "Analytics & CRO", desc: "GA4, dashboards and conversion experiments that compound results." },
  { icon: Globe2, title: "Web & Branding", desc: "Fast, beautiful websites that turn traffic into loyal customers." },
  { icon: Sparkles, title: "Social & Creative", desc: "Scroll-stopping creative built for the channels that matter to you." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
        <div className="container mx-auto relative px-6 pt-20 pb-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <Star className="h-3 w-3 fill-primary text-primary" /> 5.0 rated agency · Tangier, Morocco
            </div>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05]">
              Marketing that <span className="text-gradient">compounds</span> growth.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              INFINI BOOST is a data-driven SEO & digital marketing agency. We craft full-funnel strategies that lift brands from invisible to inevitable.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="text-primary-foreground" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
                <Link to="/contact">Start a project <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border bg-card/30 backdrop-blur">
                <Link to="/services">Explore services</Link>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[["+180%", "Avg. organic lift"], ["24/7", "Always-on team"], ["5.0★", "Google rated"]].map(([k, v]) => (
                <div key={k}>
                  <div className="text-2xl font-display font-bold text-gradient">{k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl opacity-60 blur-3xl" style={{ background: "var(--gradient-hero)" }} />
            <img src={heroImg} alt="Digital growth visualization" width={1600} height={1000} className="relative rounded-3xl border border-border/60 shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-6 py-24">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <p className="text-sm text-primary font-medium">What we do</p>
            <h2 className="mt-2 text-4xl md:text-5xl font-bold max-w-xl">A full growth stack, executed end-to-end.</h2>
          </div>
          <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
            All services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur transition hover:border-primary/40">
              <div className="h-11 w-11 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 p-12 md:p-16 text-center" style={{ background: "var(--gradient-hero)" }}>
          <div className="absolute inset-0 bg-grid opacity-20" />
          <h2 className="relative text-4xl md:text-5xl font-bold text-primary-foreground max-w-2xl mx-auto">
            Ready to boost your brand to infinity?
          </h2>
          <p className="relative mt-4 text-primary-foreground/80 max-w-xl mx-auto">
            Tell us about your goals — we'll send back a free growth audit within 48 hours.
          </p>
          <Button asChild size="lg" variant="secondary" className="relative mt-8 bg-background text-foreground hover:bg-background/90">
            <Link to="/contact">Get your free audit <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
