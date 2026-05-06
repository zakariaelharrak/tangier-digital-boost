import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { name: "Yassine El Amrani", initials: "YA", rating: 5, text: "INFINI BOOST transformed our online presence. Within 4 months our organic traffic tripled and we're finally ranking #1 for our main keywords. Truly professional team." },
  { name: "Sarah Bennani", initials: "SB", rating: 5, text: "The most transparent agency we've worked with. Weekly reports, clear ROI, and a team that actually understands our business. Highly recommend." },
  { name: "Mohammed Chraibi", initials: "MC", rating: 5, text: "We hired them for Google Ads and ended up redoing our whole funnel. ROAS went from 1.8 to 4.6 in two months. These guys know what they're doing." },
  { name: "Laila Tazi", initials: "LT", rating: 5, text: "Beautiful website, brilliant SEO strategy, and incredible support. INFINI BOOST feels less like a vendor and more like part of our team." },
  { name: "Karim Ziani", initials: "KZ", rating: 5, text: "Honest, fast, and genuinely creative. They reshaped our brand and delivered measurable growth from week one. Worth every dirham." },
];

export function Reviews() {
  const [i, setI] = useState(0);
  const next = () => setI((i + 1) % reviews.length);
  const prev = () => setI((i - 1 + reviews.length) % reviews.length);
  const r = reviews[i];

  return (
    <section className="container mx-auto px-6 py-24">
      <div className="text-center mb-12">
        <p className="text-sm text-primary font-medium">Reviews</p>
        <h2 className="mt-2 text-4xl md:text-5xl font-bold">Loved by ambitious brands.</h2>
        <div className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
          <div className="flex">{[...Array(5)].map((_, k) => <Star key={k} className="h-4 w-4 fill-primary text-primary" />)}</div>
          5.0 on Google · {reviews.length}+ reviews
        </div>
      </div>

      <div className="relative max-w-3xl mx-auto">
        <div className="rounded-3xl border border-border/60 bg-card/40 p-8 md:p-12 backdrop-blur min-h-[260px]">
          <div className="flex mb-4">{[...Array(r.rating)].map((_, k) => <Star key={k} className="h-5 w-5 fill-primary text-primary" />)}</div>
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90">"{r.text}"</p>
          <div className="mt-6 flex items-center gap-3">
            <div className="h-11 w-11 rounded-full flex items-center justify-center font-semibold text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
              {r.initials}
            </div>
            <div>
              <div className="font-semibold">{r.name}</div>
              <div className="text-xs text-muted-foreground">via Google Reviews</div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-2">
            {reviews.map((_, k) => (
              <button key={k} onClick={() => setI(k)} aria-label={`Go to review ${k + 1}`}
                className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-2 bg-border"}`} />
            ))}
          </div>
          <div className="flex gap-2">
            <button onClick={prev} aria-label="Previous review" className="h-10 w-10 rounded-full border border-border/60 bg-card/40 hover:border-primary/50 flex items-center justify-center transition">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={next} aria-label="Next review" className="h-10 w-10 rounded-full border border-border/60 bg-card/40 hover:border-primary/50 flex items-center justify-center transition">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
