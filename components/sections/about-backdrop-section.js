import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { BrandMarquee } from "@/components/sections/brand-marquee";
import { Container } from "@/components/ui/container";
import { SectionWatermark } from "@/components/ui/section-watermark";

export function AboutBackdropSection() {
  return (
    <section
      className="relative h-full w-full overflow-hidden bg-[radial-gradient(circle_at_18%_50%,rgba(255,79,154,0.14),transparent_38%),linear-gradient(135deg,#120a0f_0%,#080507_46%,#030203_100%)] pt-20 shadow-[-40px_0_100px_rgba(0,0,0,0.72)]"
      aria-labelledby="titulo-sobre"
    >
      <div
        className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-brand/55 to-transparent"
        aria-hidden="true"
      />

      <div className="absolute inset-y-0 right-0 w-full md:w-[58%] lg:w-[54%]">
        <Image
          src="/images/profile/hero-background.webp"
          alt="Rebeca trabalhando com uma câmera em um estúdio"
          fill
          sizes="(min-width: 1024px) 54vw, (min-width: 768px) 58vw, 100vw"
          className="object-cover object-[center_28%] grayscale"
        />
        <div
          className="absolute inset-0 bg-black/58 md:bg-black/12"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#080507] via-[#080507]/88 to-[#080507]/15 md:from-[#080507] md:via-[#080507]/72 md:to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#030203] to-transparent"
          aria-hidden="true"
        />
      </div>

      <div
        className="pointer-events-none absolute top-20 right-0 left-0 h-px bg-gradient-to-r from-transparent via-brand/35 to-transparent"
        aria-hidden="true"
      />

      <SectionWatermark>PRODUTORA</SectionWatermark>

      <Container className="about-content relative z-10 flex h-full flex-col pt-3 pb-3 sm:py-8">
        <div className="about-main flex min-h-0 flex-1 items-start sm:items-center">
          <div className="max-w-xl lg:max-w-2xl">
            <p className="about-eyebrow font-mono text-[0.65rem] font-medium tracking-[0.3em] text-brand-light uppercase sm:text-xs">
              Sobre mim
            </p>

            <h2
              id="titulo-sobre"
              className="about-title mt-2 text-[clamp(1.8rem,8.5vw,2.5rem)] leading-[1.02] font-semibold tracking-[-0.035em] text-balance text-white sm:mt-4 sm:text-5xl sm:leading-[1.04] lg:text-6xl"
            >
              Um olhar atento para histórias que precisam
              <span className="block bg-linear-to-r from-brand-light via-brand to-[#ff71b0] bg-clip-text text-transparent">
                ganhar movimento.
              </span>
            </h2>

            <div className="about-description mt-3 max-w-xl space-y-3 text-[0.78rem] leading-5 text-white/72 sm:mt-5 sm:text-base sm:leading-7">
              <p>
                Sou produtora audiovisual e transformo ideias em vídeos com
                intenção, ritmo e identidade. Meu trabalho começa na escuta:
                entender a história, o objetivo e a mensagem que cada projeto
                precisa transmitir é o que orienta todas as escolhas criativas.
              </p>
              <p className="hidden sm:block">
                Da produção à edição, penso cada detalhe para que imagem, som e
                narrativa funcionem juntos. Mais do que criar vídeos visualmente
                bonitos, busco construir conteúdos que comuniquem com clareza,
                gerem conexão e representem com autenticidade cada pessoa, marca
                ou projeto.
              </p>
            </div>

            <div className="about-stages mt-4 grid max-w-lg grid-cols-3 border-y border-white/12 py-3 sm:mt-9 sm:py-5">
              {["Conceito", "Produção", "Edição"].map((stage, index) => (
                <div
                  key={stage}
                  className={`px-3 first:pl-0 last:pr-0 sm:px-5 ${
                    index > 0 ? "border-l border-white/12" : ""
                  }`}
                >
                  <span className="block font-mono text-[0.55rem] tracking-[0.18em] text-brand-light/75">
                    0{index + 1}
                  </span>
                  <span className="mt-1 block text-xs font-medium tracking-[0.08em] text-white uppercase sm:text-sm">
                    {stage}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contato"
              className="about-cta group relative z-10 mt-4 inline-flex min-h-11 w-full items-center justify-center gap-3 border border-white/25 bg-black/25 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-[border-color,background-color] duration-200 hover:border-brand hover:bg-brand/10 focus-visible:outline-2 sm:mt-9 sm:min-h-12 sm:w-auto"
            >
              Vamos criar juntos
              <ArrowUpRight
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        <BrandMarquee />
      </Container>
    </section>
  );
}
