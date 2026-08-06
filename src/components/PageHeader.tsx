/** Dark hero band used on inner pages — premium aurora + gradient accent. */
export default function PageHeader({
  eyebrow,
  title,
  intro,
  accent,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  /** Optional trailing phrase rendered in the gold gradient. */
  accent?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-charcoal py-16 text-cream sm:py-24">
      <div className="aurora" aria-hidden="true" />
      <div className="orb orb-gold -right-32 -top-40 h-[30rem] w-[30rem]" aria-hidden="true" />
      <div className="absolute inset-0 grid-texture" aria-hidden="true" />

      <div className="wrap spotlight relative z-10 max-w-3xl">
        {eyebrow && (
          <p className="eyebrow-rule mb-3 inline-flex items-center text-xs font-semibold uppercase tracking-[0.2em] text-amber-light">
            {eyebrow}
          </p>
        )}
        <h1
          data-fx-hl="1"
          className="text-4xl font-bold leading-[1.06] tracking-tight text-cream sm:text-5xl lg:text-[3.4rem]"
        >
          {title}
          {accent && (
            <>
              {" "}
              <span className="text-gradient-hero text-glow">{accent}</span>
            </>
          )}
        </h1>
        {intro && <p className="mt-5 text-lg leading-relaxed text-cream/75 sm:text-xl">{intro}</p>}
      </div>
    </section>
  );
}
