import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "gold" | "outline-light" | "outline-dark" | "ghost-light" | "ghost-dark";
  showArrow?: boolean;
};

const variants: Record<NonNullable<CommonProps["variant"]>, string> = {
  gold: "bg-gold-500 text-plum-950 hover:bg-gold-400",
  "outline-light": "border border-cream-50/40 text-cream-50 hover:border-cream-50 hover:bg-cream-50/10",
  "outline-dark": "border border-plum-900/30 text-plum-950 hover:border-plum-900 hover:bg-plum-900/5",
  "ghost-light": "text-cream-50 hover:text-gold-300",
  "ghost-dark": "text-plum-950 hover:text-gold-700",
};

const base =
  "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500";

function Arrow({ show }: { show?: boolean }) {
  if (!show) return null;
  return (
    <ArrowUpRight
      className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      aria-hidden="true"
    />
  );
}

export function Button({
  children,
  className,
  variant = "gold",
  showArrow = true,
  href,
  ...rest
}: CommonProps & ({ href: string } & Omit<React.ComponentProps<typeof Link>, "href" | "className">)) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...rest}>
      {children}
      <Arrow show={showArrow} />
    </Link>
  );
}

export function ButtonBase({
  children,
  className,
  variant = "gold",
  showArrow = true,
  ...rest
}: CommonProps & Omit<React.ComponentProps<"button">, "className">) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      {children}
      <Arrow show={showArrow} />
    </button>
  );
}
