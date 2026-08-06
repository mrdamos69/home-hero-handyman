import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { featuredImages } from "@/config/gallery";

const tasks = [
  "Preventive maintenance",
  "Common-area upkeep",
  "Unit turnovers & punch lists",
  "Drywall & paint touch-ups",
  "Door & hardware repairs",
  "Welding & metal repairs",
  "Fixture replacement",
  "Recurring scheduled visits",
  "On-call & emergency repairs",
  "One point of contact",
];

export default function PropertyManagerSection() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="pm-heading">
      <div className="wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <div className="media-frame relative aspect-[4/3] overflow-hidden rounded-card bg-stone">
            <Image
              src={featuredImages.maintenance.src}
              alt={featuredImages.maintenance.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2">
          <p className="eyebrow-rule mb-3 inline-flex items-center text-xs font-semibold uppercase tracking-[0.2em] text-amber-dark">
            For buildings &amp; property owners
          </p>
          <h2 id="pm-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
            Building Maintenance &amp; Upkeep — On One Contract
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Home Hero Service keeps commercial and residential buildings in good shape —
            apartment buildings, condos and HOAs, offices, retail and individual homes.
            From preventive maintenance and repairs to welding and emergency call-outs, we
            give property owners and managers one dependable point of contact.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {tasks.map((task) => (
              <li key={task} className="flex items-start gap-2.5 text-sm text-ink">
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-amber-dark" />
                {task}
              </li>
            ))}
          </ul>
          <Link href="/building-maintenance" className="btn-dark mt-8">
            Explore Building Maintenance
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
