export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-6xl flex-col justify-between gap-10 rounded-[2rem] border border-stone-200 bg-white/90 p-8 shadow-[0_24px_80px_rgba(120,113,108,0.12)] backdrop-blur sm:p-12">
        <section className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)]">
          <div className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-amber-700">
              Next.js 16 + Vercel
            </p>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
                Jiyu Kaku starts from a clean, production-ready baseline.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
                The repository now uses the App Router, TypeScript, Tailwind CSS,
                ESLint, and a Vercel-friendly workflow without carrying extra
                framework glue you do not need yet.
              </p>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-stone-200 bg-stone-950 p-6 text-stone-50 shadow-[0_20px_60px_rgba(28,25,23,0.18)]">
            <p className="text-xs uppercase tracking-[0.26em] text-stone-400">
              Start here
            </p>
            <div className="mt-4 space-y-3 text-sm text-stone-300">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-medium text-white">Default local loop</p>
                <code className="mt-2 block text-stone-200">npm run dev</code>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-medium text-white">
                  Pull Vercel project settings
                </p>
                <code className="mt-2 block text-stone-200">
                  npm run vercel:link
                </code>
                <code className="mt-2 block text-stone-200">
                  npm run vercel:pull
                </code>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-medium text-white">Run with Vercel parity</p>
                <code className="mt-2 block text-stone-200">
                  npm run vercel:dev
                </code>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="rounded-[1.5rem] border border-stone-200 bg-stone-100/80 p-5">
            <p className="text-sm font-medium text-stone-500">Source</p>
            <p className="mt-2 text-lg font-semibold text-stone-950">
              App Router structure
            </p>
            <p className="mt-3 text-sm leading-6 text-stone-600">
              Routes live under <code>src/app</code>, ready for layouts, server
              components, and route handlers.
            </p>
          </article>

          <article className="rounded-[1.5rem] border border-stone-200 bg-amber-50 p-5">
            <p className="text-sm font-medium text-amber-700">Runtime</p>
            <p className="mt-2 text-lg font-semibold text-stone-950">
              Node 24.x target
            </p>
            <p className="mt-3 text-sm leading-6 text-stone-600">
              The project is pinned to a Vercel-supported LTS Node major for
              predictable local and hosted behavior.
            </p>
          </article>

          <article className="rounded-[1.5rem] border border-stone-200 bg-white p-5">
            <p className="text-sm font-medium text-stone-500">Next step</p>
            <p className="mt-2 text-lg font-semibold text-stone-950">
              Build the product
            </p>
            <p className="mt-3 text-sm leading-6 text-stone-600">
              Replace this landing page with the actual experience and keep the
              Vercel workflow intact as the app grows.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
