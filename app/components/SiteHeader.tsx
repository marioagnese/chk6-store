import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        <div className="py-2 text-center text-xs text-white/70">
          Free shipping over $99 • Built for training, duty, and everyday carry
        </div>

        <div className="flex items-center gap-3 py-3">
          <Link href="/" className="font-semibold tracking-wide text-white">
            CHK6<span className="text-white/60"> STORE</span>
          </Link>

          <nav className="hidden items-center gap-4 text-sm text-white/80 md:flex">
            <Link className="hover:text-white" href="/shop">
              Shop
            </Link>
            <Link className="hover:text-white" href="/new">
              New
            </Link>
            <Link className="hover:text-white" href="/bestsellers">
              Best Sellers
            </Link>
            <Link className="hover:text-white" href="/deals">
              Deals
            </Link>
          </nav>

          <div className="ml-auto flex flex-1 items-center gap-3 md:max-w-md">
            <div className="flex w-full items-center rounded-full border border-white/10 bg-white/5 px-3 py-2">
              <span className="mr-2 text-white/40">⌕</span>
              <input
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
                placeholder="Search gear, apparel, packs…"
              />
            </div>

            <div className="hidden items-center gap-3 text-white/80 md:flex">
              <Link className="hover:text-white" href="/account">
                Account
              </Link>
              <Link className="hover:text-white" href="/cart">
                Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
