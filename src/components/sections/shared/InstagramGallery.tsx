import Image from "next/image";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { images } from "@/data/images";
import { site } from "@/data/site";

const gallery = [
  images.strawberryBowl,
  images.blueberryBowl,
  images.raspberryPunnets,
  images.blackberryStack,
  images.greenhouse,
  images.blueberryHarvestHands,
];

export function InstagramGallery() {
  return (
    <section className="bg-cream-50 py-24 md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <Reveal>
            <Eyebrow tone="dark">Follow Our Journey</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl text-plum-950 md:text-4xl">@berrymountdxb</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-plum-950 transition-colors hover:text-gold-700"
            >
              <InstagramIcon className="size-4" />
              View on Instagram
            </a>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-2.5 sm:gap-4 md:grid-cols-6">
          {gallery.map((img, i) => (
            <Reveal key={img.src} delay={i * 0.05}>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-xl"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 768px) 16vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-plum-950/0 transition-colors group-hover:bg-plum-950/30">
                  <InstagramIcon className="size-5 text-cream-50 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
