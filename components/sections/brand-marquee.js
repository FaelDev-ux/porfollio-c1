import Image from "next/image";
import { brands } from "@/data/brands";

function BrandList({ duplicate = false }) {
  return (
    <div
      className="flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14 lg:gap-16 lg:pr-16"
      aria-hidden={duplicate || undefined}
    >
      {brands.map((brand) => (
        <div
          key={brand.name}
          className="relative h-10 w-32 shrink-0 sm:h-12 sm:w-40 lg:w-44"
        >
          <Image
            src={brand.logo}
            alt={duplicate ? "" : brand.name}
            fill
            loading="eager"
            sizes="(min-width: 1024px) 176px, (min-width: 640px) 160px, 128px"
            className={`object-contain opacity-80 ${
              brand.lightLogo ? "brightness-0 invert" : ""
            }`}
          />
        </div>
      ))}
    </div>
  );
}

export function BrandMarquee() {
  return (
    <div className="mt-4 w-full shrink-0 border-y border-white/10 py-3.5 sm:mt-5 sm:py-4">
      <p className="mb-3 text-center font-mono text-[0.58rem] font-medium tracking-[0.2em] text-white/55 uppercase sm:mb-4 sm:text-[0.65rem]">
        Marcas presentes em projetos que produzi
      </p>

      <div className="brand-marquee-window overflow-hidden">
        <div className="brand-marquee-track flex w-max items-center">
          <BrandList />
          <BrandList duplicate />
        </div>
      </div>
    </div>
  );
}
