import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { images } from "@/data/images";

export function FinalCta({
  heading = "Let's grow something fresh together.",
  description = "Whether you're a household, a restaurant or a retailer — Berrymount is ready to be your trusted berry partner.",
  ctaLabel = "Start a Partnership",
  ctaHref = "/contact",
}: {
  heading?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-plum-950 py-24 md:py-32">
      <Image
        src={images.raspberryPunnets.src}
        alt=""
        fill
        aria-hidden="true"
        sizes="100vw"
        className="object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-plum-950 via-plum-950/95 to-plum-950/70" />

      <Container className="relative">
        <Reveal className="max-w-xl">
          <h2 className="font-serif text-4xl leading-tight text-cream-50 text-balance md:text-5xl">
            {heading}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-cream-50/65 md:text-base">{description}</p>
          <Button href={ctaHref} variant="gold" className="mt-9">
            {ctaLabel}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
