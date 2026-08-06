const items = [
  "Building Maintenance",
  "Commercial Maintenance",
  "Apartment Buildings",
  "HOA & Condo Upkeep",
  "Preventive Maintenance",
  "Welding & Metal Work",
  "Railings & Gates",
  "Emergency Repairs",
  "Drywall & Painting",
  "Turnovers & Punch Lists",
];

function Row() {
  return (
    <>
      {items.map((label, i) => (
        <span key={`${label}-${i}`} className="flex items-center">
          <span className="px-6 text-sm font-semibold uppercase tracking-[0.18em] text-cream/85">
            {label}
          </span>
          <span className="text-amber-light" aria-hidden="true">✦</span>
        </span>
      ))}
    </>
  );
}

export default function TrustBar() {
  return (
    <section
      aria-label="What we do"
      className="glow-divider relative overflow-hidden border-y border-cream/10 bg-charcoal py-4"
    >
      <div className="marquee">
        <div className="marquee-track">
          <Row />
          <Row />
        </div>
      </div>
    </section>
  );
}
