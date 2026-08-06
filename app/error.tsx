"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Route rendering failed", error);
  }, [error]);

  return (
    <section className="flex min-h-[70svh] items-center px-6 py-32 md:px-10">
      <div className="max-w-3xl">
        <p className="font-mono text-xxs uppercase tracking-[0.22em] text-dim">
          System interruption
        </p>
        <h1 className="mt-5 font-heading text-[clamp(3.5rem,9vw,8rem)] leading-[0.85] font-black uppercase">
          We lost the signal.
        </h1>
        <p className="mt-7 max-w-xl text-sm leading-7 text-muted">
          This section could not be loaded. Retry the request or return to the
          homepage while the connection recovers.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={reset}
            className="kelvar-button-frame min-h-12 border px-5 font-mono text-xxs uppercase tracking-[0.18em]"
          >
            Retry
          </button>
          <Link
            href="/"
            className="kelvar-button-frame inline-flex min-h-12 items-center border px-5 font-mono text-xxs uppercase tracking-[0.18em]"
          >
            Return home
          </Link>
        </div>
      </div>
    </section>
  );
}
