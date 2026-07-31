export default function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`eyebrow-rule mb-3 inline-flex items-center text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? "text-amber-light" : "text-amber-dark"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-[2rem] font-bold leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.85rem] ${
          light ? "text-cream" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      <span
        className={`mt-4 block h-1 w-16 rounded-full bg-gradient-to-r from-amber to-amber-light ${
          center ? "mx-auto" : ""
        }`}
        aria-hidden="true"
      />
      {intro && (
        <p className={`mt-5 text-lg leading-relaxed ${light ? "text-cream/70" : "text-ink-soft"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
