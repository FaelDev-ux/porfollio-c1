import { NavigationBar } from "@/components/layout/navigation-bar";
import { PortfolioSectionsTransition } from "@/components/sections/portfolio-sections-transition";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <main id="conteudo-principal" className="relative" tabIndex={-1}>
        <span
          id="inicio"
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          aria-hidden="true"
        />
        <PortfolioSectionsTransition />
      </main>
    </>
  );
}
