"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";

const navigationLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#inicio");

  useEffect(() => {
    let animationFrameId;

    function updateActiveSection() {
      const activationPoint = window.innerHeight * 0.5;
      let nextActiveHref = navigationLinks[0].href;

      navigationLinks.forEach((link) => {
        const section = document.querySelector(link.href);

        if (section && section.getBoundingClientRect().top <= activationPoint) {
          nextActiveHref = link.href;
        }
      });

      setActiveHref((currentHref) =>
        currentHref === nextActiveHref ? currentHref : nextActiveHref,
      );
    }

    function scheduleActiveSectionUpdate() {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateActiveSection);
    }

    updateActiveSection();
    window.addEventListener("scroll", scheduleActiveSectionUpdate, {
      passive: true,
    });
    window.addEventListener("resize", scheduleActiveSectionUpdate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", scheduleActiveSectionUpdate);
      window.removeEventListener("resize", scheduleActiveSectionUpdate);
    };
  }, []);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-md">
      <a
        href="#conteudo-principal"
        className="absolute top-2 left-4 z-50 -translate-y-16 bg-white px-4 py-2 text-sm font-semibold text-background transition-transform focus:translate-y-0 focus:outline-2"
      >
        Pular para o conteúdo
      </a>
      <Container className="flex h-20 items-center justify-between">
        <a
          href="#inicio"
          className="group flex min-h-11 items-center gap-3 focus-visible:outline-2"
          aria-label="Rebeca Produtora Audiovisual — início"
          onClick={closeMenu}
        >
          <span className="text-sm font-bold tracking-[0.2em] text-white">
            REBECA
          </span>
          <span className="h-4 w-px bg-brand transition-transform duration-300 group-hover:scale-y-125" />
          <span className="text-[0.65rem] tracking-[0.24em] text-white/60">
            PRODUTORA AUDIOVISUAL
          </span>
        </a>

        <nav className="hidden md:block" aria-label="Navegação principal">
          <ul className="flex items-center gap-8">
            {navigationLinks.map((link) => {
              const isActive = activeHref === link.href;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`relative flex min-h-11 items-center text-xs font-medium tracking-[0.14em] uppercase transition-colors duration-200 focus-visible:outline-2 ${
                      isActive ? "text-white" : "text-white/60 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute inset-x-0 bottom-1 h-px origin-center bg-gradient-to-r from-brand-deep via-brand to-brand-light transition-[transform,opacity] duration-300 ${
                        isActive
                          ? "scale-x-100 opacity-100"
                          : "scale-x-0 opacity-0"
                      }`}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <a
          href="#contato"
          className="hidden min-h-11 items-center border border-white/20 px-5 text-xs font-semibold tracking-[0.14em] text-white uppercase transition-colors duration-200 hover:border-brand hover:bg-brand/10 focus-visible:outline-2 md:flex"
        >
          Solicitar orçamento
        </a>

        <button
          type="button"
          className="flex size-11 cursor-pointer items-center justify-center border border-white/15 bg-black/25 text-white transition-colors hover:border-brand md:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="menu-mobile"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {isOpen ? (
        <nav
          id="menu-mobile"
          className="mobile-menu-reveal border-t border-white/10 bg-background/98 px-5 py-6 md:hidden"
          aria-label="Navegação móvel"
        >
          <ul className="space-y-1">
            {navigationLinks.map((link) => {
              const isActive = activeHref === link.href;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    aria-current={isActive ? "location" : undefined}
                    className={`flex min-h-12 items-center border-b text-sm tracking-[0.14em] uppercase transition-colors ${
                      isActive
                        ? "border-brand/40 text-brand-light"
                        : "border-white/8 text-white/70 hover:text-brand-light"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href="#contato"
            onClick={closeMenu}
            className="mt-6 flex min-h-12 items-center justify-center bg-gradient-to-r from-brand-deep to-brand px-5 text-sm font-semibold text-white"
          >
            Solicitar orçamento
          </a>
        </nav>
      ) : null}
    </header>
  );
}
