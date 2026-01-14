import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0">
      <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_40%),radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.15),transparent_45%)]" />
      <div className="relative px-6 py-12 md:px-10 md:py-16">
        <div className="max-w-xl">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">
            Built for hard use • Designed for daily wear
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Gear that holds up when it matters.
          </h1>

          <p className="mt-4 text-white/70">
            Tactical apparel, packs, and essentials — clean design, durable materials,
            and purpose-built details.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-black hover:opacity-90"
            >
              Shop All
            </Link>
            <Link
              href="/new"
              className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
            >
              New Arrivals
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 text-xs text-white/70">
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">Fast shipping</div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">Easy returns</div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">Secure checkout</div>
          </div>
        </div>
      </div>
    </section>
  );
}
