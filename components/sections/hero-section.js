import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionWatermark } from "@/components/ui/section-watermark";

export function HeroSection() {
  return (
    <section className="relative isolate flex h-full min-h-svh items-center overflow-hidden bg-black pt-20">
      <Image
        src="/images/profile/background.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-30 scale-[1.04] object-cover object-[center_26%] blur-[10px] grayscale"
        aria-hidden="true"
      />

      <div className="absolute inset-0 -z-20 bg-black/58" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_46%,transparent_0%,rgba(0,0,0,0.18)_38%,rgba(0,0,0,0.82)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-background via-background/55 to-transparent" />
      <div className="absolute inset-x-0 top-20 -z-10 h-px bg-gradient-to-r from-transparent via-brand/45 to-transparent" />

      <SectionWatermark>REBECA</SectionWatermark>

      <Container className="relative z-10 flex min-h-[calc(100svh-5rem)] items-center justify-center py-20 text-center">
        <div className="hero-reveal mx-auto max-w-4xl">
          <p className="mb-6 font-mono text-xs font-medium tracking-[0.3em] text-brand-light uppercase sm:text-sm">
            Produção e direção audiovisual
          </p>

          <h1 className="text-4xl leading-[1.08] font-semibold text-balance text-white sm:text-6xl lg:text-6xl">
            Ideias que ganham forma,
            <span className="block bg-linear-to-r from-brand-light via-brand to-[#ff71b0] bg-clip-text text-transparent">
              histórias que ganham vida.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
            Produções que preservam histórias, identidade e emoção em cada
            detalhe.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#portfolio"
              className="group flex min-h-11 w-full items-center justify-center gap-3 rounded-2xl bg-white px-7 text-sm font-semibold text-background transition-colors duration-200 hover:bg-brand-light focus-visible:outline-2 sm:w-auto"
            >
              Ver portfólio
              <ArrowRight
                className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="#sobre"
              className="flex min-h-12 w-full items-center justify-center rounded-2xl border border-white/25 bg-black/20 px-7 text-sm font-medium text-white backdrop-blur-sm transition-colors duration-200 hover:border-brand hover:bg-brand/10 focus-visible:outline-2 sm:w-auto"
            >
              Conheça meu trabalho
            </a>
          </div>
        </div>
      </Container>

      <a
        href="#portfolio"
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] tracking-[0.22em] text-white/55 uppercase transition-colors hover:text-brand-light"
        aria-label="Ir para o portfólio"
      >
        Explorar
        <ArrowDown className="size-4" aria-hidden="true" />
      </a>
    </section>
  );
}
