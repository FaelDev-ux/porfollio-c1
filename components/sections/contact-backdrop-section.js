export function ContactBackdropSection() {
  return (
    <section className="relative h-full w-full overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(255,79,154,0.18),transparent_40%),linear-gradient(180deg,#14080f_0%,#090507_48%,#030203_100%)] shadow-[0_40px_100px_rgba(0,0,0,0.75)]">
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/55 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
