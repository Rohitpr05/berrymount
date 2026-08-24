import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function LegalLayout({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="bg-plum-950 pt-36 pb-16 md:pt-44 md:pb-20">
        <Container>
          <Eyebrow tone="light">{eyebrow}</Eyebrow>
          <h1 className="mt-5 font-serif text-4xl text-cream-50 md:text-5xl">{title}</h1>
          <p className="mt-3 text-sm text-cream-50/50">Last updated: {updated}</p>
        </Container>
      </section>
      <section className="bg-cream-50 py-20">
        <Container className="max-w-3xl">
          <div className="prose-legal space-y-8 text-sm leading-relaxed text-plum-950/75">{children}</div>
        </Container>
      </section>
    </>
  );
}
