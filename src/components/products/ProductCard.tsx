import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Berry } from "@/data/berries";
import { cn } from "@/lib/utils";

const accentBg: Record<Berry["accent"], string> = {
  strawberry: "from-berry-strawberry/70",
  blueberry: "from-berry-blueberry/70",
  raspberry: "from-berry-raspberry/70",
  blackberry: "from-berry-blackberry/80",
};

export function ProductCard({ berry, className }: { berry: Berry; className?: string }) {
  return (
    <Link
      href={`/berries/${berry.slug}`}
      className={cn(
        "group relative flex aspect-3/4 flex-col justify-end overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500",
        className,
      )}
    >
      <Image
        src={berry.image.src}
        alt={berry.image.alt}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className={cn("absolute inset-0 bg-gradient-to-t via-plum-950/10 to-transparent", accentBg[berry.accent])} />
      <div className="relative z-10 p-6">
        <p className="text-xs font-medium tracking-[0.2em] text-cream-50/70 uppercase">{berry.tagline}</p>
        <div className="mt-1.5 flex items-center justify-between">
          <h3 className="font-serif text-2xl text-cream-50">{berry.name}</h3>
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-cream-50/15 text-cream-50 backdrop-blur-sm transition-all duration-300 group-hover:bg-gold-500 group-hover:text-plum-950">
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
