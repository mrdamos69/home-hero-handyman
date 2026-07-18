import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { featuredImages } from "@/config/gallery";

const tasks = [
  "Move-in and move-out repairs",
  "Punch lists",
  "Hardware replacement",
  "Drywall patching",
  "Paint touch-ups",
  "Door adjustments",
  "Furniture assembly",
  "Fixture installation",
  "General property inspections",
  "Recurring maintenance visits",
];

export default function PropertyManagerSection() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="pm-heading">
      <div className="wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-stone">
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
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-dark">
            For landlords &amp; property managers
          </p>
          <h2 id="pm-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
            Reliable Maintenance Support for Rental Properties
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Home Hero Service provides practical repair and maintenance support
            for apartments, rental homes and small residential properties. We
            help property owners and managers address punch lists, tenant
            turnover tasks and ongoing maintenance needs.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {tasks.map((task) => (
              <li key={task} className="flex items-start gap-2.5 text-sm text-ink">
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-amber-dark" />
                {task}
              </li>
            ))}
          </ul>
          <Link href="/property-maintenance" className="btn-dark mt-8">
            Discuss Property Maintenance
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
