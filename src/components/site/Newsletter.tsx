import { useState } from "react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { toast } from "sonner";

const schema = z.string().trim().email({ message: "Please enter a valid email" }).max(255);

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(email);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("You're in! Look out for our next growth playbook.");
      setEmail("");
      setLoading(false);
    }, 600);
  };

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-10 md:p-14 backdrop-blur">
        <div className="absolute inset-0 opacity-50" style={{ background: "var(--gradient-radial)" }} />
        <div className="relative grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs text-muted-foreground">
              <Mail className="h-3 w-3 text-primary" /> Growth newsletter
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">Marketing playbooks, in your inbox.</h2>
            <p className="mt-3 text-muted-foreground">One email a month. Real tactics, real numbers, no fluff.</p>
          </div>
          <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength={255}
              className="bg-background/60 h-12"
              required
            />
            <Button type="submit" disabled={loading} size="lg" className="text-primary-foreground" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
              {loading ? "Subscribing…" : "Subscribe"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
