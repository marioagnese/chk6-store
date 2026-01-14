export const dynamic = "force-dynamic";
export const revalidate = 0;

import SiteHeader from "./components/SiteHeader";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import CategoryGrid from "./components/CategoryGrid";
import ProductGrid from "./components/ProductGrid";
import { prisma } from "@/lib/prisma";

export default async function HomePage() {
  const products = await prisma.product.findMany({
    take: 8,
    orderBy: { createdAt: "desc" },
    where: { status: "ACTIVE" },
    include: {
      images: { orderBy: { sortOrder: "asc" }, take: 1 },
      variants: { orderBy: { priceCents: "asc" }, take: 1 },
    },
  });

  const cards = products.map((p) => ({
    id: p.id,
    handle: p.handle,
    title: p.title,
    vendor: p.vendor,
    imageUrl: p.images[0]?.url ?? null,
    priceCents: p.variants[0]?.priceCents ?? null,
    currency: p.variants[0]?.currency ?? "usd",
  }));

  const featured = cards.slice(0, 4);
  const newArrivals = cards;

  return (
    <div className="min-h-dvh bg-black text-white">
      <SiteHeader />

      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-8">
        <Hero />
        <CategoryGrid />

        <ProductGrid title="Featured" products={featured} />
        <ProductGrid title="New arrivals" products={newArrivals} />

        <section className="grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-white font-medium">Purpose-built materials</div>
            <div className="mt-1 text-sm text-white/60">
              Durable fabrics and reinforced stress points where it counts.
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-white font-medium">Clean, tactical design</div>
            <div className="mt-1 text-sm text-white/60">
              Functional details without looking “costume tactical”.
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-white font-medium">Ready for scale</div>
            <div className="mt-1 text-sm text-white/60">
              Prisma + Postgres foundation for catalog, orders, and fulfillment.
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
