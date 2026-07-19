"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { AboutBackdropSection } from "@/components/sections/about-backdrop-section";
import { ContactBackdropSection } from "@/components/sections/contact-backdrop-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PortfolioBackdropSection } from "@/components/sections/portfolio-backdrop-section";

export function PortfolioSectionsTransition() {
  const sequenceRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sequenceRef,
    offset: ["start start", "end end"],
  });
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 22,
    mass: 0.7,
    restDelta: 0.001,
  });

  const portfolioY = useTransform(
    smoothScrollProgress,
    [0, 1 / 9, 1 / 3, 1],
    ["100%", "100%", "0%", "0%"],
  );
  const aboutX = useTransform(
    smoothScrollProgress,
    [0, 4 / 9, 2 / 3, 1],
    ["100%", "100%", "0%", "0%"],
  );
  const contactY = useTransform(
    smoothScrollProgress,
    [0, 7 / 9, 1],
    ["-100%", "-100%", "0%"],
  );
  const portfolioOpacity = useTransform(
    smoothScrollProgress,
    [0.16, 0.24],
    [0, 1],
  );
  const aboutOpacity = useTransform(smoothScrollProgress, [0.52, 0.6], [0, 1]);
  const contactOpacity = useTransform(
    smoothScrollProgress,
    [0.84, 0.92],
    [0, 1],
  );
  const portfolioPointerEvents = useTransform(
    smoothScrollProgress,
    (progress) => (progress >= 0.28 ? "auto" : "none"),
  );
  const aboutPointerEvents = useTransform(smoothScrollProgress, (progress) =>
    progress >= 0.62 ? "auto" : "none",
  );
  const contactPointerEvents = useTransform(smoothScrollProgress, (progress) =>
    progress >= 0.92 ? "auto" : "none",
  );

  return (
    <div ref={sequenceRef} className="relative h-[550svh]">
      <span
        id="portfolio"
        className="pointer-events-none absolute inset-x-0 top-[27.2727%] h-px"
        aria-hidden="true"
      />

      <div className="sticky top-0 h-svh overflow-hidden">
        <HeroSection />

        <motion.div
          className="absolute inset-0 z-20 will-change-transform"
          style={
            prefersReducedMotion
              ? {
                  opacity: portfolioOpacity,
                  pointerEvents: portfolioPointerEvents,
                }
              : { y: portfolioY, pointerEvents: portfolioPointerEvents }
          }
        >
          <PortfolioBackdropSection />
        </motion.div>

        <motion.div
          className="absolute inset-0 z-30 will-change-transform"
          style={
            prefersReducedMotion
              ? {
                  opacity: aboutOpacity,
                  pointerEvents: aboutPointerEvents,
                }
              : { x: aboutX, pointerEvents: aboutPointerEvents }
          }
        >
          <AboutBackdropSection />
        </motion.div>

        <motion.div
          className="absolute inset-0 z-40 will-change-transform"
          style={
            prefersReducedMotion
              ? {
                  opacity: contactOpacity,
                  pointerEvents: contactPointerEvents,
                }
              : { y: contactY, pointerEvents: contactPointerEvents }
          }
        >
          <ContactBackdropSection />
        </motion.div>
      </div>

      <span
        id="sobre"
        className="pointer-events-none absolute inset-x-0 top-[54.5455%] h-px"
        aria-hidden="true"
      />
      <span
        id="contato"
        className="pointer-events-none absolute inset-x-0 top-[81.8182%] h-px"
        aria-hidden="true"
      />
    </div>
  );
}
