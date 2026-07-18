"use client";

import { ChevronLeft, ChevronRight, Film } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionWatermark } from "@/components/ui/section-watermark";
import { portfolioSlots } from "@/data/portfolio";

const carouselOffsets = [-2, -1, 0, 1, 2];

function loopIndex(index, length) {
  return (index + length) % length;
}

export function PortfolioBackdropSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const visibleItems = useMemo(
    () =>
      carouselOffsets.map((offset) => ({
        item:
          portfolioSlots[
            loopIndex(activeIndex + offset, portfolioSlots.length)
          ],
        offset,
      })),
    [activeIndex],
  );

  function showPrevious() {
    setActiveIndex((current) => loopIndex(current - 1, portfolioSlots.length));
  }

  function showNext() {
    setActiveIndex((current) => loopIndex(current + 1, portfolioSlots.length));
  }

  function handleKeyboard(event) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
    }
  }

  return (
    <section
      className="absolute inset-0 z-0 overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(255,79,154,0.13),transparent_34%),linear-gradient(180deg,#0d090c_0%,#050305_34%,#030203_100%)] pt-28 shadow-[0_-32px_90px_rgba(0,0,0,0.72)] sm:pt-32"
      aria-labelledby="portfolio-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-20 h-px bg-gradient-to-r from-transparent via-brand/25 to-transparent"
        aria-hidden="true"
      />

      <SectionWatermark>SOARES</SectionWatermark>

      <Container className="relative z-10 flex h-full flex-col py-5 sm:py-7">
        <header className="shrink-0">
          <div>
            <p className="font-mono text-[0.65rem] font-medium tracking-[0.2em] text-brand-light uppercase sm:text-xs">
              Portfólio audiovisual
            </p>
            <h2
              id="portfolio-heading"
              className="mt-2 text-3xl leading-none font-semibold tracking-[-0.04em] text-white sm:text-5xl"
            >
              Narrativas em <span className="text-brand">movimento.</span>
            </h2>
          </div>
        </header>

        <div
          className="relative min-h-0 flex-1 overflow-hidden focus-visible:outline-2"
          role="region"
          aria-roledescription="carrossel"
          aria-label="Projetos em vídeo"
          tabIndex={0}
          onKeyDown={handleKeyboard}
        >
          <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-center">
            <motion.div
              className="flex w-max cursor-grab items-center gap-3 active:cursor-grabbing sm:gap-5"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              drag={prefersReducedMotion ? false : "x"}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.08}
              onDragEnd={(_, info) => {
                if (info.offset.x < -45) showNext();
                if (info.offset.x > 45) showPrevious();
              }}
            >
              {visibleItems.map(({ item, offset }) => {
                const distance = Math.abs(offset);
                const isActive = offset === 0;

                return (
                  <motion.article
                    key={item.id}
                    className={`relative aspect-[9/16] h-[clamp(16rem,46svh,25rem)] shrink-0 overflow-hidden border bg-[#0b080a] ${
                      isActive
                        ? "border-brand/65 shadow-[0_28px_80px_rgba(255,79,154,0.17)]"
                        : "border-white/15"
                    }`}
                    layout={prefersReducedMotion ? false : "position"}
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : distance === 1 ? 0.58 : 0.22,
                      scale: isActive ? 1 : distance === 1 ? 0.9 : 0.82,
                      y: isActive ? 0 : distance === 1 ? 8 : 16,
                    }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    aria-hidden={!isActive}
                  >
                    {item.videoUrl && isActive ? (
                      <video
                        className="absolute inset-0 h-full w-full object-cover"
                        src={item.videoUrl}
                        poster={item.poster}
                        aria-label={`Vídeo: ${item.title}`}
                        controls
                        playsInline
                        preload="metadata"
                      >
                        Seu navegador não oferece suporte à reprodução de vídeo.
                      </video>
                    ) : (
                      <>
                        {item.poster ? (
                          <>
                            <Image
                              className="object-cover"
                              src={item.poster}
                              alt={`Capa do vídeo ${item.title}`}
                              sizes="(min-width: 640px) 14rem, 10rem"
                              fill
                            />
                            <div
                              className="absolute inset-0 bg-black/25"
                              aria-hidden="true"
                            />
                          </>
                        ) : (
                          <div
                            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_27%,rgba(255,155,199,0.2),transparent_24%),linear-gradient(145deg,rgba(255,255,255,0.035),transparent_42%),linear-gradient(180deg,#100b0e_0%,#050305_100%)]"
                            aria-hidden="true"
                          />
                        )}
                        <div
                          className="absolute inset-x-5 top-5 flex items-center justify-between font-mono text-[0.55rem] tracking-[0.16em] text-white/35 uppercase"
                          aria-hidden="true"
                        >
                          <span>9:16</span>
                          <span>{item.position}</span>
                        </div>
                        {!item.poster && (
                          <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
                            <span className="flex size-12 items-center justify-center rounded-full border border-brand/35 bg-brand/10 text-brand-light">
                              <Film className="size-5" aria-hidden="true" />
                            </span>
                            <p className="mt-4 text-xs font-semibold tracking-[0.14em] text-white uppercase">
                              Espaço para vídeo
                            </p>
                          </div>
                        )}
                        <div
                          className="absolute inset-x-5 bottom-5 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent"
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </div>

        <footer className="flex min-h-12 shrink-0 items-center justify-between border-t border-white/10 pt-3">
          <p
            className="font-mono text-[0.6rem] tracking-[0.16em] text-white/45 uppercase"
            aria-live="polite"
          >
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(portfolioSlots.length).padStart(2, "0")}
          </p>

          <p className="hidden font-mono text-[0.6rem] tracking-[0.14em] text-white/35 uppercase md:block">
            Arraste ou use as setas
          </p>

          <div className="flex gap-2">
            <button
              type="button"
              className="flex size-11 cursor-pointer items-center justify-center border border-white/15 text-white/65 transition-[color,border-color,background-color] duration-200 hover:border-brand/55 hover:bg-brand/10 hover:text-white focus-visible:outline-2 active:scale-95"
              aria-label="Mostrar projeto anterior"
              onClick={showPrevious}
            >
              <ChevronLeft className="size-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="flex size-11 cursor-pointer items-center justify-center border border-white/15 text-white/65 transition-[color,border-color,background-color] duration-200 hover:border-brand/55 hover:bg-brand/10 hover:text-white focus-visible:outline-2 active:scale-95"
              aria-label="Mostrar próximo projeto"
              onClick={showNext}
            >
              <ChevronRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </footer>
      </Container>
    </section>
  );
}
