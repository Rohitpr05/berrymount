import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-plum-950 py-24 md:py-32">
      <Container>
        <Reveal>
          <Eyebrow tone="light">What Our Customers Say</Eyebrow>
          <h2 className="mt-4 max-w-lg font-serif text-4xl leading-tight text-cream-50 text-balance md:text-5xl">
            Trusted for freshness, every time.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 6).map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <figure className="h-full rounded-2xl border border-cream-50/10 bg-plum-900/50 p-7">
                <Quote className="size-5 text-gold-500" aria-hidden="true" />
                <blockquote className="mt-4 text-sm leading-relaxed text-cream-50/80">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-xs font-medium tracking-wide text-gold-300 uppercase">
                  {t.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
