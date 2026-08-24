import { Store, UtensilsCrossed, Truck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

const segments = [
  { icon: UtensilsCrossed, title: "Hospitality & Food Service", description: "Consistent quality for chefs, restaurants and hotels." },
  { icon: Store, title: "Retail & Supermarkets", description: "Attractive, ready-to-sell packs that consumers love." },
  { icon: Truck, title: "Distributors & Wholesalers", description: "Bulk supply with reliability you can count on." },
];

export function WholesaleTeaser() {
  return (
    <section className="bg-plum-900 py-24 md:py-32">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow tone="light">Business & Wholesale</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-cream-50 text-balance md:text-5xl">
              Perfect for every business need.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream-50/60">
              From single restaurants to nationwide retail chains, Berrymount supplies
              premium berries with the consistency your business depends on.
            </p>
            <Button href="/wholesale" variant="gold" className="mt-8">
              Partner With Us
            </Button>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:col-span-7">
          {segments.map((seg, i) => (
            <Reveal key={seg.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-cream-50/10 bg-plum-800/40 p-6">
                <seg.icon className="size-6 text-gold-400" aria-hidden="true" />
                <h3 className="mt-5 text-sm font-semibold text-cream-50">{seg.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-cream-50/50">{seg.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
