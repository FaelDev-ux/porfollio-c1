export function SectionWatermark({ children }) {
  return (
    <span
      className="pointer-events-none absolute right-[-0.05em] bottom-[-0.22em] z-0 text-[clamp(8rem,24vw,24rem)] leading-none font-black tracking-[-0.08em] text-white/[0.025] select-none"
      aria-hidden="true"
    >
      {children}
    </span>
  );
}
