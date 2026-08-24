import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/navigation/Logo";
import { NewsletterForm } from "./NewsletterForm";
import { footerNav } from "@/data/nav";
import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-plum-950 text-cream-50">
      <Container className="grid grid-cols-1 gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-50/60">
            {site.description}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Berrymount on Facebook"
              className="flex size-9 items-center justify-center rounded-full border border-cream-50/15 text-cream-50/70 transition-colors hover:border-gold-500 hover:text-gold-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
            >
              <FacebookIcon className="size-4" />
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Berrymount on Instagram"
              className="flex size-9 items-center justify-center rounded-full border border-cream-50/15 text-cream-50/70 transition-colors hover:border-gold-500 hover:text-gold-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
            >
              <InstagramIcon className="size-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Quick links" className="md:col-span-2">
          <h3 className="text-xs font-medium tracking-[0.2em] text-gold-400 uppercase">Quick Links</h3>
          <ul className="mt-5 space-y-3">
            {footerNav.quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="rounded-sm text-sm text-cream-50/65 transition-colors hover:text-gold-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Our berries" className="md:col-span-2">
          <h3 className="text-xs font-medium tracking-[0.2em] text-gold-400 uppercase">Our Berries</h3>
          <ul className="mt-5 space-y-3">
            {footerNav.ourBerries.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="rounded-sm text-sm text-cream-50/65 transition-colors hover:text-gold-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h3 className="text-xs font-medium tracking-[0.2em] text-gold-400 uppercase">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm text-cream-50/65">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold-500" aria-hidden="true" />
              <span>{site.address.line1}, {site.address.line2}, {site.address.line3}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="size-4 shrink-0 text-gold-500" aria-hidden="true" />
              <a href={site.phoneHref} className="rounded-sm transition-colors hover:text-gold-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="size-4 shrink-0 text-gold-500" aria-hidden="true" />
              <a href={site.emailHref} className="rounded-sm transition-colors hover:text-gold-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500">
                {site.email}
              </a>
            </li>
          </ul>

          <h3 className="mt-8 text-xs font-medium tracking-[0.2em] text-gold-400 uppercase">Newsletter</h3>
          <p className="mt-3 text-sm text-cream-50/60">Stay updated with our latest products, stories and offers.</p>
          <div className="mt-4 max-w-xs">
            <NewsletterForm />
          </div>
        </div>
      </Container>

      <div className="border-t border-cream-50/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-cream-50/45 md:flex-row">
          <p>© {year} Berrymount. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="rounded-sm transition-colors hover:text-gold-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500">
              Privacy Policy
            </Link>
            <Link href="/terms" className="rounded-sm transition-colors hover:text-gold-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500">
              Terms &amp; Conditions
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
