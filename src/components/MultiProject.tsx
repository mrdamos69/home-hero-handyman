import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";

const examples = [
  "Install shelves",
  "Adjust a door",
  "Patch drywall",
  "Replace hardware",
  "Mount a mirror",
  "Assemble furniture",
];

export default function MultiProject() {
  return (
    <section className="bg-charcoal py-16 text-cream sm:py-20">
      <div className="wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber">
            The handyman advantage
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-cream sm:text-4xl">
            One Visit. Multiple Projects Completed.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-cream/70">
            Have a list of repairs, installations or adjustments around your
            property? Send us the details and photos. We can review the scope,
            organize the tasks and help you complete multiple projects during
            one scheduled visit.
          </p>
          <Link href="/estimate" className="btn-primary mt-8">
            Send Your Project List
          </Link>
        </Reveal>

        <Reveal delay={100}>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2" aria-label="Example project list">
            {examples.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-btn border border-cream/10 bg-cream/5 px-4 py-3.5"
              >
                <Icon name="check" className="h-5 w-5 shrink-0 text-amber" />
                <span className="text-sm font-medium text-cream/90">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
