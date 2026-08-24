import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ProductCard } from "@/components/products/ProductCard";
import { berries } from "@/data/berries";

export function OurBerries() {
  return (
    <section className="bg-cream-50 py-24 md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <Eyebrow tone="dark">Our Berries</Eyebrow>
            <h2 className="mt-4 max-w-lg font-serif text-4xl leading-tight text-plum-950 text-balance md:text-5xl">
              Nature&rsquo;s finest, handpicked for you.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <Button href="/berries" variant="outline-dark" showArrow>
              View All Berries
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {berries.map((berry, i) => (
            <Reveal key={berry.slug} delay={i * 0.08}>
              <ProductCard berry={berry} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
