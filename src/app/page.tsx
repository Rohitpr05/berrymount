import { Hero } from "@/components/sections/home/Hero";
import { OurBerries } from "@/components/sections/home/OurBerries";
import { OurStory } from "@/components/sections/home/OurStory";
import { FarmToTable } from "@/components/sections/home/FarmToTable";
import { Quality } from "@/components/sections/home/Quality";
import { UaePresence } from "@/components/sections/home/UaePresence";
import { WholesaleTeaser } from "@/components/sections/home/WholesaleTeaser";
import { Testimonials } from "@/components/sections/shared/Testimonials";
import { InstagramGallery } from "@/components/sections/shared/InstagramGallery";
import { FinalCta } from "@/components/sections/shared/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <OurBerries />
      <OurStory />
      <FarmToTable />
      <Quality />
      <UaePresence />
      <WholesaleTeaser />
      <Testimonials />
      <InstagramGallery />
      <FinalCta />
    </>
  );
}
