import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-24 text-center sm:py-32">
      <div className="wrap max-w-xl">
        <p className="font-heading text-6xl font-bold text-amber">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          This Page Doesn&apos;t Exist
        </h1>
        <p className="mt-4 text-lg text-ink-soft">
          The page you&apos;re looking for may have moved. Let&apos;s get you
          back to something useful.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-dark">
            Back to Home
          </Link>
          <Link href="/estimate" className="btn-primary">
            Request an Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
