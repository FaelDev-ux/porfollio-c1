"use client";

import { ArrowUpRight, AtSign, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionWatermark } from "@/components/ui/section-watermark";
import { contactData } from "@/data/contact";

const contactSteps = [
  {
    title: "Compartilhe a ideia",
    description: "Pode ser apenas um ponto de partida.",
  },
  {
    title: "Alinhamos o caminho",
    description: "Objetivo, formato e possibilidades.",
  },
  {
    title: "Criamos juntos",
    description: "Do planejamento à entrega final.",
  },
];

function buildWhatsappUrl() {
  const phoneNumber = contactData.whatsappNumber.replace(/\D/g, "");

  if (!phoneNumber) {
    return "";
  }

  const message =
    "Olá, Rebeca! Gostaria de conversar sobre um projeto audiovisual.";

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

export function ContactBackdropSection() {
  const [contactStatus, setContactStatus] = useState("");
  const whatsappUrl = buildWhatsappUrl();

  function handleUnavailableContact() {
    setContactStatus("O WhatsApp profissional será disponibilizado em breve.");
  }

  return (
    <section className="relative flex h-full w-full items-center overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(255,79,154,0.18),transparent_40%),linear-gradient(180deg,#14080f_0%,#090507_48%,#030203_100%)] pt-20 shadow-[0_40px_100px_rgba(0,0,0,0.75)]">
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/55 to-transparent"
        aria-hidden="true"
      />
      <SectionWatermark>VISUAL</SectionWatermark>

      <Container className="relative z-10 py-8 sm:py-12">
        <div className="mx-auto w-full max-w-5xl text-center">
          <div className="inline-flex min-h-8 items-center gap-2.5 border border-brand/25 bg-brand/10 px-3.5 font-mono text-[0.65rem] font-medium tracking-[0.18em] text-brand-light uppercase sm:text-xs">
            <span
              className="relative flex size-2 items-center justify-center"
              aria-hidden="true"
            >
              <span className="absolute size-2 rounded-full bg-brand/30" />
              <span className="relative size-1.5 rounded-full bg-brand-light" />
            </span>
            {contactData.availability}
          </div>

          <h2 className="mx-auto mt-4 max-w-4xl text-4xl leading-[1.02] font-semibold tracking-[-0.035em] text-balance text-white sm:text-6xl lg:text-7xl">
            Tem uma ideia?
            <span className="block bg-linear-to-r from-brand-light via-brand to-[#ff71b0] bg-clip-text text-transparent">
              Vamos colocar em movimento.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
            Você não precisa chegar com tudo definido. Conte o que imaginou e
            vamos encontrar o melhor caminho para transformar sua ideia em
            vídeo.
          </p>

          <div className="mx-auto mt-7 grid max-w-3xl grid-cols-3 border-y border-white/10 sm:mt-9">
            {contactSteps.map((step, index) => (
              <div
                key={step.title}
                className={`px-2 py-4 sm:px-5 sm:py-5 ${
                  index > 0 ? "border-l border-white/10" : ""
                }`}
              >
                <span className="font-mono text-[0.55rem] tracking-[0.18em] text-brand-light/75">
                  0{index + 1}
                </span>
                <h3 className="mt-1 text-[0.65rem] leading-4 font-semibold tracking-[0.06em] text-white uppercase sm:text-sm sm:leading-5">
                  {step.title}
                </h3>
                <p className="mt-1 hidden text-xs leading-5 text-white/48 sm:block">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-col items-center sm:mt-6">
            {whatsappUrl ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex min-h-12 w-full max-w-sm cursor-pointer items-center justify-center gap-3 bg-gradient-to-r from-brand-deep to-brand px-6 text-sm font-semibold text-white transition-[filter,transform] duration-200 hover:brightness-110 focus-visible:outline-2 active:scale-[0.98] sm:w-auto"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Conversar sobre seu projeto
                <ArrowUpRight
                  className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            ) : (
              <button
                type="button"
                className="group flex min-h-12 w-full max-w-sm cursor-pointer items-center justify-center gap-3 bg-gradient-to-r from-brand-deep to-brand px-6 text-sm font-semibold text-white transition-[filter,transform] duration-200 hover:brightness-110 focus-visible:outline-2 active:scale-[0.98] sm:w-auto"
                onClick={handleUnavailableContact}
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Conversar sobre seu projeto
                <ArrowUpRight
                  className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </button>
            )}

            <p
              className="mt-2 min-h-5 text-xs text-brand-light"
              role="status"
              aria-live="polite"
            >
              {contactStatus}
            </p>
          </div>

          <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-3 border-t border-white/10 pt-5 sm:mt-7 sm:grid-cols-2 sm:gap-6 sm:pt-6">
            {contactData.email ? (
              <a
                href={`mailto:${contactData.email}`}
                className="group flex min-h-11 items-center justify-center gap-3 text-left text-sm text-white/65 transition-colors hover:text-white focus-visible:outline-2"
              >
                <Mail className="size-4 text-brand-light" aria-hidden="true" />
                <span>
                  <span className="block text-[0.6rem] tracking-[0.18em] text-white/40 uppercase">
                    E-mail
                  </span>
                  {contactData.email}
                </span>
              </a>
            ) : (
              <div className="flex min-h-11 items-center justify-center gap-3 text-left text-sm text-white/45">
                <Mail className="size-4 text-brand-light" aria-hidden="true" />
                <span>
                  <span className="block text-[0.6rem] tracking-[0.18em] text-white/40 uppercase">
                    E-mail
                  </span>
                  Em breve
                </span>
              </div>
            )}

            {contactData.instagramUrl ? (
              <a
                href={contactData.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-11 items-center justify-center gap-3 text-left text-sm text-white/65 transition-colors hover:text-white focus-visible:outline-2"
              >
                <AtSign
                  className="size-4 text-brand-light"
                  aria-hidden="true"
                />
                <span>
                  <span className="block text-[0.6rem] tracking-[0.18em] text-white/40 uppercase">
                    Instagram
                  </span>
                  {contactData.instagramHandle}
                </span>
              </a>
            ) : (
              <div className="flex min-h-11 items-center justify-center gap-3 text-left text-sm text-white/45">
                <AtSign
                  className="size-4 text-brand-light"
                  aria-hidden="true"
                />
                <span>
                  <span className="block text-[0.6rem] tracking-[0.18em] text-white/40 uppercase">
                    Instagram
                  </span>
                  Em breve
                </span>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
