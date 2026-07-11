/** Dark hero band used on inner pages. */
export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="bg-charcoal py-14 text-cream sm:py-20">
      <div className="wrap max-w-3xl">
        {eyebrow && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl font-bold tracking-tight text-cream sm:text-5xl">{title}</h1>
        {intro && <p className="mt-4 text-lg leading-relaxed text-cream/70">{intro}</p>}
      </div>
    </section>
  );
}
