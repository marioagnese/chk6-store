import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="text-white font-semibold">CHK6 STORE</div>
            <p className="mt-2 text-sm text-white/60">
              Tactical essentials, training-ready apparel, and everyday carry gear.
            </p>
          </div>

          <div className="text-sm">
            <div className="mb-2 font-medium text-white">Shop</div>
            <ul className="space-y-2 text-white/60">
              <li><Link className="hover:text-white" href="/shop">All Products</Link></li>
              <li><Link className="hover:text-white" href="/new">New Arrivals</Link></li>
              <li><Link className="hover:text-white" href="/bestsellers">Best Sellers</Link></li>
              <li><Link className="hover:text-white" href="/deals">Deals</Link></li>
            </ul>
          </div>

          <div className="text-sm">
            <div className="mb-2 font-medium text-white">Support</div>
            <ul className="space-y-2 text-white/60">
              <li><Link className="hover:text-white" href="/shipping">Shipping</Link></li>
              <li><Link className="hover:text-white" href="/returns">Returns</Link></li>
              <li><Link className="hover:text-white" href="/faq">FAQ</Link></li>
              <li><Link className="hover:text-white" href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="text-sm">
            <div className="mb-2 font-medium text-white">Get updates</div>
            <p className="text-white/60">
              Drops, restocks, and member-only offers.
            </p>
            <form className="mt-3 flex gap-2">
              <input
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none placeholder:text-white/30"
                placeholder="Email address"
              />
              <button
                type="button"
                className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:opacity-90"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} CHK6 STORE. All rights reserved.</div>
          <div className="flex gap-4">
            <Link className="hover:text-white" href="/privacy">Privacy</Link>
            <Link className="hover:text-white" href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
