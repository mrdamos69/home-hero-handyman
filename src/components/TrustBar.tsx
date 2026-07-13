import Icon from "@/components/Icon";

const points = [
  { icon: "chat", label: "Clear Communication" },
  { icon: "detail", label: "Detail-Oriented Work" },
  { icon: "broom", label: "Clean and Respectful Service" },
  { icon: "calendar", label: "Flexible Project Support" },
];

export default function TrustBar() {
  return (
    <section aria-label="Why clients choose us" className="border-b border-charcoal/5 bg-stone">
      <ul className="wrap grid grid-cols-2 gap-x-4 gap-y-5 py-6 sm:py-7 lg:grid-cols-4">
        {points.map((point) => (
          <li key={point.label} className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal-dark">
              <Icon name={point.icon} className="h-5 w-5" />
            </span>
            <span className="text-sm font-semibold text-charcoal">{point.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
