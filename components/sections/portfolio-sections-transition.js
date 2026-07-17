"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { AboutBackdropSection } from "@/components/sections/about-backdrop-section";
import { ContactBackdropSection } from "@/components/sections/contact-backdrop-section";
import { PortfolioBackdropSection } from "@/components/sections/portfolio-backdrop-section";

export function PortfolioSectionsTransition() {
  const sequenceRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sequenceRef,
    offset: ["start start", "end end"],
  });

  const aboutX = useTransform(
    scrollYProgress,
    [0, 1 / 6, 0.5, 1],
    ["100%", "100%", "0%", "0%"],
  );
  const contactY = useTransform(
    scrollYProgress,
    [0, 2 / 3, 1],
    ["-100%", "-100%", "0%"],
  );
  const aboutOpacity = useTransform(scrollYProgress, [0.28, 0.38], [0, 1]);
  const contactOpacity = useTransform(scrollYProgress, [0.78, 0.88], [0, 1]);

  return (
    <div ref={sequenceRef} className="relative z-20 h-[400svh]">
      <span
        id="portfolio"
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        aria-hidden="true"
      />

      <div className="sticky top-0 h-svh overflow-hidden">
        <PortfolioBackdropSection />

        <motion.div
          className="absolute inset-0 z-30 will-change-transform"
          style={
            prefersReducedMotion ? { opacity: aboutOpacity } : { x: aboutX }
          }
        >
          <AboutBackdropSection />
        </motion.div>

        <motion.div
          className="absolute inset-0 z-40 will-change-transform"
          style={
            prefersReducedMotion ? { opacity: contactOpacity } : { y: contactY }
          }
        >
          <ContactBackdropSection />
        </motion.div>
      </div>

      <span
        id="sobre"
        className="pointer-events-none absolute inset-x-0 top-[37.5%] h-px"
        aria-hidden="true"
      />
      <span
        id="contato"
        className="pointer-events-none absolute inset-x-0 top-[75%] h-px"
        aria-hidden="true"
      />
    </div>
  );
}
