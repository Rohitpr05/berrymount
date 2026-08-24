import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  tone = "dark",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 text-xs font-medium tracking-[0.25em] uppercase",
        tone === "dark" ? "text-gold-700" : "text-gold-300",
        className,
      )}
    >
      <span className={cn("h-px w-8", tone === "dark" ? "bg-gold-600" : "bg-gold-400")} />
      {children}
    </div>
  );
}
