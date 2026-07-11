import Image from "next/image";
import Link from "next/link";
import { business } from "@/config/business";

export default function Hero() {
  return (
    <section className="bg-charcoal text-cream">
      <div className="wrap grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-14 lg:py-24">
        <div>
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-cream sm:text-5xl lg:text-[3.4rem]">
            Reliable Handyman Services for Your Home or Property
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/75">
            From repairs and installations to ongoing property maintenance, Home
            Hero Handyman helps homeowners, landlords and property managers
            complete projects with clear communication and attention to detail.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/estimate" className="btn-primary">
              {business.cta.primary}
            </Link>
            <Link href="/services" className="btn-outline-light">
              View Services
            </Link>
          </div>
          <p className="mt-6 text-sm text-cream/55">
            Serving Los Angeles homeowners, rental properties and small businesses.
          </p>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-charcoal-soft lg:aspect-[5/4]">
          {/*
            Replace /public/images/hero-handyman-work.jpg with a real photo of
            your own clean, finished work — see public/images/README.md.
          */}
          <Image
            src="/images/hero-handyman-work.jpg"
            alt="Neat, finished handyman work in a modern Los Angeles home interior"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
