import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — INFINI BOOST Tangier" },
      { name: "description", content: "Get in touch with INFINI BOOST in Tangier. Call, WhatsApp or send us a message for a free growth audit." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="container mx-auto px-6 pt-20 pb-12 text-center">
        <p className="text-sm text-primary font-medium">Contact</p>
        <h1 className="mt-3 text-5xl md:text-6xl font-bold">Let's talk <span className="text-gradient">growth.</span></h1>
        <p className="mt-5 text-muted-foreground max-w-2xl mx-auto text-lg">
          Tell us about your project. We typically reply within a few hours.
        </p>
      </section>

      <section className="container mx-auto px-6 pb-24 grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 rounded-2xl border border-border/60 bg-card/40 p-8 backdrop-blur">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Message sent! We'll get back to you shortly.");
              (e.target as HTMLFormElement).reset();
            }}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" required className="mt-2 bg-background/60" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required className="mt-2 bg-background/60" />
              </div>
            </div>
            <div>
              <Label htmlFor="company">Company</Label>
              <Input id="company" className="mt-2 bg-background/60" />
            </div>
            <div>
              <Label htmlFor="message">How can we help?</Label>
              <Textarea id="message" rows={5} required className="mt-2 bg-background/60" />
            </div>
            <Button type="submit" size="lg" className="w-full text-primary-foreground" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
              Send message
            </Button>
          </form>
        </div>

        <div className="lg:col-span-2 space-y-4">
          {[
            { icon: MapPin, title: "Office", value: "4ème Étage Bureau N°7, Dar Tounsi, Rue Ben Bouhout, Tangier 90070, Morocco" },
            { icon: Phone, title: "Phone", value: "+212 7 52 10 47 69", href: "tel:+212752104769" },
            { icon: MessageCircle, title: "WhatsApp", value: "Chat with us instantly", href: "https://wa.me/212752104769" },
            { icon: Clock, title: "Hours", value: "Open 24 hours · 7 days a week" },
          ].map(({ icon: Icon, title, value, href }) => (
            <a
              key={title}
              href={href ?? "#"}
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel="noopener"
              className="flex gap-4 rounded-2xl border border-border/60 bg-card/40 p-5 backdrop-blur transition hover:border-primary/40"
            >
              <div className="h-11 w-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--gradient-primary)" }}>
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-semibold">{title}</div>
                <div className="text-sm text-muted-foreground mt-1">{value}</div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
