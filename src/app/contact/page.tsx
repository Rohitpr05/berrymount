import type { Metadata } from "next";
import { Phone, Mail, MapPin, Zap, ShieldCheck, Globe, Handshake } from "lucide-react";
import { PageHero } from "@/components/sections/shared/PageHero";
import { InstagramGallery } from "@/components/sections/shared/InstagramGallery";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { LocationMapClient } from "@/components/map/LocationMapClient";
import { images } from "@/data/images";
import { site } from "@/data/site";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Berrymount for enquiries, wholesale partnerships or bulk orders. Find our Dubai location, phone, email and send us a message.",
};

const highlights = [
  { icon: Zap, title: "Quick Response", description: "We aim to respond promptly to every enquiry." },
  { icon: ShieldCheck, title: "Premium Quality", description: "Consistent quality you can rely on." },
  { icon: Globe, title: "UAE-Wide Supply", description: "Supplying premium berries across the Emirates." },
  { icon: Handshake, title: "Reliable Partnerships", description: "Built on trust, transparency and long-term value." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Let's Grow Together"
        heading="We'd Love To"
        highlight="Hear From You."
        description="Have a question, a partnership idea, or a bulk order in mind? Our team is here to connect."
        image={images.raspberryPunnets}
        cta={{ label: "Send An Enquiry", href: "#enquiry-form" }}
      />

      <section id="enquiry-form" className="bg-cream-50 py-24 md:py-32">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow tone="dark">Get In Touch</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl text-plum-950 md:text-4xl">
                We&rsquo;re here to help your business grow.
              </h2>
            </Reveal>

            <div className="mt-8 space-y-4">
              <InfoRow icon={Phone} label="Phone" value={site.phone} href={site.phoneHref} />
              <InfoRow icon={Mail} label="Email" value={site.email} href={site.emailHref} />
              <InfoRow icon={MapPin} label="Head Office" value={site.address.full} />
            </div>
          </div>

          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="rounded-2xl bg-plum-950 p-8 md:p-10">
              <Eyebrow tone="light">Send Us An Inquiry</Eyebrow>
              <h3 className="mt-4 font-serif text-2xl text-cream-50">
                Fill out the form and our team will get back to you.
              </h3>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-cream-100 pb-24 md:pb-32">
        <Container>
          <Reveal>
            <Eyebrow tone="dark">Our Location</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl text-plum-950 md:text-4xl">
              Find us at Dubai&rsquo;s leading fresh produce market.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 overflow-hidden rounded-2xl border border-plum-950/10">
              <div className="h-96 w-full">
                <LocationMapClient />
              </div>
              <div className="grid grid-cols-1 divide-y divide-plum-950/10 bg-cream-50 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                {locations.map((loc) => (
                  <div key={loc.id} className="p-6">
                    <p className="text-sm font-semibold text-plum-950">{loc.name}</p>
                    <p className="mt-1.5 text-sm text-plum-950/60">{loc.address.join(", ")}</p>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-xs font-medium text-gold-700 underline underline-offset-4 hover:text-gold-600"
                    >
                      Get Directions
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-plum-950 py-14">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h) => (
              <div key={h.title} className="flex items-start gap-3">
                <h.icon className="mt-0.5 size-5 shrink-0 text-gold-400" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-cream-50">{h.title}</p>
                  <p className="mt-1 text-xs text-cream-50/50">{h.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <InstagramGallery />
    </>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 rounded-xl bg-cream-100 p-5">
      <Icon className="mt-0.5 size-5 shrink-0 text-gold-700" />
      <div>
        <p className="text-xs font-medium tracking-wide text-plum-950/50 uppercase">{label}</p>
        <p className="mt-1 text-sm font-medium text-plum-950">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block transition-opacity hover:opacity-80">
      {content}
    </a>
  ) : (
    content
  );
}
