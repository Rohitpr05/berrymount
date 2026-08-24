import Link from "next/link";
import { cn } from "@/lib/utils";

const dots = [
  { cx: 12, cy: 3, r: 2.6, fill: "#7e3a8c" },
  { cx: 7, cy: 7, r: 2.6, fill: "#b3273f" },
  { cx: 17, cy: 7, r: 2.6, fill: "#38477d" },
  { cx: 3, cy: 12, r: 2.4, fill: "#a12c53" },
  { cx: 12, cy: 12, r: 2.8, fill: "#33203c" },
  { cx: 21, cy: 12, r: 2.4, fill: "#3a5a8f" },
];

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-2.5 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500"
      aria-label="Berrymount home"
    >
      <svg width="28" height="20" viewBox="0 0 24 17" className="shrink-0" aria-hidden="true">
        {dots.map((d, i) => (
          <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill={d.fill} />
        ))}
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-serif text-xl tracking-tight",
            tone === "light" ? "text-cream-50" : "text-plum-950",
          )}
        >
          berrymount
        </span>
        <span
          className={cn(
            "mt-0.5 text-[9px] font-medium tracking-[0.2em] uppercase",
            tone === "light" ? "text-cream-50/60" : "text-plum-950/50",
          )}
        >
          fresh · fine · flavourful
        </span>
      </span>
    </Link>
  );
}
