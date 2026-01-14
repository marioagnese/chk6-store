import ProductCard from "./ProductCard";

type CardProduct = Parameters<typeof ProductCard>[0]["p"];

export default function ProductGrid({
  title,
  products,
}: {
  title: string;
  products: CardProduct[];
}) {
  return (
    <section>
      <div className="mb-4 flex items-end justify-between">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
      </div>

      {products.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/60">
          No products yet. Add products to the DB (or seed) and they’ll appear here.
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      )}
    </section>
  );
}
