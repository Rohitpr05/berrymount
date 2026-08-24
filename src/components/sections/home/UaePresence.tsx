import Image from "next/image";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { images } from "@/data/images";
import { site } from "@/data/site";

export function UaePresence() {
  return (
    <section className="bg-cream-50 py-24 md:py-32">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-6">
          <div className="relative aspect-16/11 overflow-hidden rounded-2xl">
            <Image
              src={images.dubaiSkyline.src}
              alt={images.dubaiSkyline.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-plum-950/40 via-transparent to-transparent" />
          </div>
        </Reveal>

        <div className="lg:col-span-6">
          <Reveal>
            <Eyebrow tone="dark">Supplying premium berries across the UAE</Eyebrow>
            <h2 className="mt-4 max-w-lg font-serif text-4xl leading-tight text-plum-950 text-balance md:text-5xl">
              Proudly rooted in Dubai.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-plum-950/65">
              Operating from the Dubai International Fruit &amp; Vegetable Market, Berrymount
              supplies premium berries to retailers, hotels, restaurants and cafés across the
              UAE.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex items-start gap-3 rounded-xl border border-plum-950/10 bg-cream-100 p-5">
              <MapPin className="mt-0.5 size-5 shrink-0 text-gold-600" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-plum-950">Head Office</p>
                <p className="mt-1 text-sm text-plum-950/60">{site.address.full}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
