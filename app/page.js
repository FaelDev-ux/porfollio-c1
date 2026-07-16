import { NavigationBar } from "@/components/layout/navigation-bar";
import { HeroSection } from "@/components/sections/hero-section";
import { PortfolioBackdropSection } from "@/components/sections/portfolio-backdrop-section";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <main id="conteudo-principal" tabIndex={-1}>
        <HeroSection />
        <PortfolioBackdropSection />
      </main>
    </>
  );
}
