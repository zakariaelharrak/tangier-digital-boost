import { MapPin } from "lucide-react";

export function MapSection() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-sm text-primary font-medium inline-flex items-center gap-2 justify-center">
          <MapPin className="h-4 w-4" /> Find us
        </p>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold">
          Visit our <span className="text-gradient">Tangier</span> office
        </h2>
        <p className="mt-4 text-muted-foreground">
          4ème Étage Bureau N°7, Dar Tounsi, Rue Ben Bouhout, Tangier 90070, Morocco
        </p>
      </div>
      <div className="relative rounded-3xl overflow-hidden border border-border/60 shadow-2xl">
        <div className="absolute inset-0 pointer-events-none rounded-3xl" style={{ boxShadow: "var(--shadow-glow)" }} />
        <iframe
          title="INFINI BOOST office location"
          src="https://www.google.com/maps?q=SEO+%26+Digital+Marketing+Agency+Tangier+INFINI+BOOST&output=embed"
          width="100%"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block w-full grayscale-[40%] contrast-110"
        />
      </div>
    </section>
  );
}
