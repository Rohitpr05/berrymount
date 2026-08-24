"use client";

import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/data/nav";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="rounded-full p-2 text-cream-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
      >
        <Menu className="size-6" aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-100 bg-plum-950"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <Logo tone="light" />
              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="rounded-full p-2 text-cream-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
              >
                <X className="size-6" aria-hidden="true" />
              </button>
            </div>

            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
              className="flex flex-col gap-1 px-6 pt-6"
            >
              {mainNav.map((item) => (
                <motion.div
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
                  }}
                >
                  <Link
                    href={item.href}
                    className="block border-b border-cream-50/10 py-4 font-serif text-3xl text-cream-50 transition-colors hover:text-gold-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <div className="px-6 pt-8">
              <Button href="/contact" className="w-full justify-center" variant="gold">
                Partner With Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
