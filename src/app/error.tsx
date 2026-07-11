"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="py-24 text-center sm:py-32">
      <div className="wrap max-w-xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Something Went Wrong</h1>
        <p className="mt-4 text-lg text-ink-soft">
          An unexpected error occurred. You can try again, or head back to the
          home page.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button type="button" onClick={reset} className="btn-primary">
            Try Again
          </button>
          <Link href="/" className="btn-outline">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
