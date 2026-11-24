import Link from "next/link";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Expertises", href: "/expertises" },
  { label: "Solutions", href: "/solutions" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="DigiFind Accueil">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#123B68] text-sm font-bold text-white shadow-sm">
            D
          </div>
          <div>
            <div className="text-lg font-bold tracking-tight text-[#0B1730]">DigiFind</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
              Transformation numérique
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-[#123B68]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/rendez-vous"
            className="hidden rounded-full border border-[#123B68] px-4 py-2 text-sm font-medium text-[#123B68] transition hover:bg-[#123B68] hover:text-white sm:inline-flex"
          >
            Prendre rendez-vous
          </Link>
          <Link
            href="/devis"
            className="inline-flex rounded-full bg-[#00A884] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#008f70]"
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </header>
  );
}
