import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center bg-plum-950 pt-24">
      <Container>
        <Eyebrow tone="light">404</Eyebrow>
        <h1 className="mt-5 max-w-lg font-serif text-4xl text-cream-50 text-balance md:text-5xl">
          This page has been picked clean.
        </h1>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-cream-50/60">
          We couldn&rsquo;t find the page you were looking for. Let&rsquo;s get you back to
          something fresh.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Button href="/" variant="gold">
            Back to Home
          </Button>
          <Button href="/berries" variant="outline-light" showArrow={false}>
            Explore Our Berries
          </Button>
        </div>
      </Container>
    </section>
  );
}
