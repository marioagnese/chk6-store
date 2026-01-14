import Link from "next/link";

const categories = [
  { title: "Apparel", href: "/shop?cat=apparel", desc: "Training & daily wear" },
  { title: "Packs", href: "/shop?cat=packs", desc: "EDC, range, travel" },
  { title: "Footwear", href: "/shop?cat=footwear", desc: "Grip, comfort, durability" },
  { title: "Accessories", href: "/shop?cat=accessories", desc: "Belts, gloves, essentials" },
  { title: "New Arrivals", href: "/new", desc: "Latest drops" },
  { title: "Best Sellers", href: "/bestsellers", desc: "Top picks" },
];

export default function CategoryGrid() {
  return (
    <section>
      <div className="mb-4 flex items-end justify-between">
        <h2 className="text-lg font-semibold text-white">Shop by category</h2>
        <Link className="text-sm text-white/70 hover:text-white" href="/shop">
          View all →
        </Link>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <Link
            key={c.title}
            href={c.href}
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10"
          >
            <div className="text-white font-medium">{c.title}</div>
            <div className="mt-1 text-sm text-white/60">{c.desc}</div>
            <div className="mt-6 text-xs text-white/50 group-hover:text-white/70">
              Explore →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
