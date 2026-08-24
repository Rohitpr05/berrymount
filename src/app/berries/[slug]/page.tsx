import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/shared/PageHero";
import { FinalCta } from "@/components/sections/shared/FinalCta";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ProductCard } from "@/components/products/ProductCard";
import { berries, getBerryBySlug } from "@/data/berries";

export function generateStaticParams() {
  return berries.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const berry = getBerryBySlug(slug);
  if (!berry) return {};
  return {
    title: berry.name,
    description: berry.description,
  };
}

export default async function BerryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const berry = getBerryBySlug(slug);
  if (!berry) notFound();

  const related = berries.filter((b) => b.slug !== berry.slug);

  return (
    <>
      <PageHero
        eyebrow={`Our Berries · ${berry.index}`}
        heading={berry.name}
        description={berry.description}
        image={berry.image}
        cta={{ label: "Enquire About This Berry", href: "/contact" }}
      />

      <section className="bg-cream-50 py-24 md:py-32">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow tone="dark">Characteristics</Eyebrow>
              <h2 className="mt-4 max-w-lg font-serif text-3xl leading-tight text-plum-950 text-balance md:text-4xl">
                {berry.tagline}
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-plum-950/65">{berry.description}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="mt-10 text-xs font-medium tracking-[0.2em] text-gold-700 uppercase">Best Enjoyed As</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {berry.uses.map((use) => (
                  <span key={use} className="rounded-full border border-plum-950/15 px-4 py-1.5 text-xs font-medium text-plum-950/70">
                    {use}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <h3 className="mt-10 text-xs font-medium tracking-[0.2em] text-gold-700 uppercase">Why You&rsquo;ll Love It</h3>
              <ul className="mt-4 space-y-2.5">
                {berry.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2.5 text-sm text-plum-950/75">
                    <span className="size-1.5 shrink-0 rounded-full bg-gold-600" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="rounded-2xl bg-cream-100 p-8">
                <h3 className="font-serif text-2xl text-plum-950">Interested in bulk supply?</h3>
                <p className="mt-3 text-sm leading-relaxed text-plum-950/60">
                  We supply {berry.name.toLowerCase()} to retailers, hotels, restaurants and
                  distributors across the UAE. Get in touch to discuss your requirements.
                </p>
                <Button href="/wholesale" variant="gold" className="mt-6">
                  Explore Wholesale
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-cream-100 py-24 md:py-32">
        <Container>
          <Reveal>
            <Eyebrow tone="dark">Related Berries</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl text-plum-950 md:text-4xl">You might also like</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
            {related.map((b, i) => (
              <Reveal key={b.slug} delay={i * 0.08}>
                <ProductCard berry={b} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
