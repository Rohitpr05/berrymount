"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/data/nav";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "bg-plum-950/90 py-3 shadow-lg shadow-plum-950/20 backdrop-blur-md" : "bg-transparent py-5",
      )}
    >
      <div className="mx-auto flex w-full max-w-(--container-page) items-center justify-between px-6 md:px-10 lg:px-14">
        <Logo tone="light" />

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {mainNav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-sm text-sm font-medium tracking-wide text-cream-50/85 transition-colors hover:text-gold-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500",
                  active && "text-gold-300",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="/wholesale" variant="gold">
            Partner With Us
          </Button>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
