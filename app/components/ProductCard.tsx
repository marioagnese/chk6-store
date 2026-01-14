import Link from "next/link";

type CardProduct = {
  id: string;
  handle: string;
  title: string;
  vendor?: string | null;
  imageUrl?: string | null;
  priceCents?: number | null;
  currency?: string | null;
};

function formatMoney(cents?: number | null, currency?: string | null) {
  if (cents == null) return null;
  const value = cents / 100;
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: (currency ?? "USD").toUpperCase(),
    }).format(value);
  } catch {
    return `$${value.toFixed(2)}`;
  }
}

export default function ProductCard({ p }: { p: CardProduct }) {
  const price = formatMoney(p.priceCents, p.currency);

  return (
    <Link
      href={`/p/${p.handle}`}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10"
    >
      <div className="aspect-[4/3] w-full bg-black/40">
        {p.imageUrl ? (
          <img
            src={p.imageUrl}
            alt={p.title}
            className="h-full w-full object-cover opacity-95 group-hover:opacity-100"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-white/25">
            No image
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="text-xs text-white/50">{p.vendor ?? "CHK6"}</div>
        <div className="mt-1 line-clamp-2 text-sm font-medium text-white">
          {p.title}
        </div>
        <div className="mt-2 text-sm text-white/80">{price ?? "—"}</div>
      </div>
    </Link>
  );
}
