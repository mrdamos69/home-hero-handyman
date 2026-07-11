import { business } from "@/config/business";

export default function ServiceAreaList() {
  return (
    <div>
      <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4" aria-label="Service areas">
        {business.serviceAreas.map((area) => (
          <li
            key={area}
            className="rounded-btn border border-charcoal/10 bg-white px-4 py-3 text-sm font-medium text-ink"
          >
            {area}
          </li>
        ))}
        <li className="rounded-btn border border-dashed border-charcoal/20 bg-transparent px-4 py-3 text-sm text-ink-soft">
          Other nearby areas — just ask
        </li>
      </ul>
      <p className="mt-5 text-sm text-ink-soft">
        Service availability may vary depending on project size, location and scheduling.
      </p>
    </div>
  );
}
