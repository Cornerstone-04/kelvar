"use client";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <main className="flex min-h-screen items-center justify-center p-8 text-center">
          <div>
            <h1>Kelvar Industries is temporarily unavailable.</h1>
            <button
              type="button"
              onClick={reset}
              className="mt-6 border border-white px-5 py-3"
            >
              Retry
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
