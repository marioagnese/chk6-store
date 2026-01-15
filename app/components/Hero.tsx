import Link from "next/link";
import HeroBackdrop from "./HeroBackdrop";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-black p-8 sm:p-12">
      <HeroBackdrop />

      <div className="relative z-10 grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-5">
          <p className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            CHK6 Tactical • Built to perform
          </p>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Gear that holds up when it matters.
          </h1>

          <p className="max-w-prose text-white/70">
            Durable apparel and mission-ready essentials—designed for training, duty, and everyday carry.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/shop"
              className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-black hover:opacity-90"
            >
              Shop New Arrivals
            </Link>
            <Link
              href="/bestsellers"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-medium text-white hover:bg-white/10"
            >
              Best Sellers
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
            <div className="space-y-3">
              <div className="text-sm text-white/70">Why CHK6</div>
              <ul className="space-y-2 text-sm text-white/80">
                <li>• Reinforced stitching & durable fabrics</li>
                <li>• Designed for range, gym, and street</li>
                <li>• Minimal branding, maximum function</li>
              </ul>
            </div>
          </div>

          <div className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-[radial-gradient(circle_at_50%_50%,rgba(255,80,0,0.15),transparent_60%)]" />
        </div>
      </div>
    </section>
  );
}
