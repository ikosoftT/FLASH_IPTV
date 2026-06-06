import { Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-champagne/30 bg-champagne/10 text-champagne">
            <Search className="h-7 w-7" aria-hidden="true" />
          </span>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-champagne">404</p>
          <h1 className="mt-4 text-balance text-4xl font-semibold text-white sm:text-6xl">This page is off the playlist</h1>
          <p className="mt-5 text-lg leading-8 text-platinum/68">
            The page you requested is not available. Return home or explore premium plans to continue.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/">Go Home</Button>
            <Button href="/pricing" variant="secondary">View Plans</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
