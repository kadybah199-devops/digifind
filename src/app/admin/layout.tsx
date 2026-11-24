import Link from "next/link";

const links = [
  { href: "/admin", label: "Tableau de bord" },
  { href: "/admin/rendez-vous", label: "Rendez-vous" },
  { href: "/admin/devis", label: "Devis" },
  { href: "/admin/blog", label: "Blog" },
  { href: "/admin/settings", label: "Paramètres" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100 text-[#0B1730]">
      <aside className="fixed inset-y-0 left-0 w-72 border-r border-slate-200 bg-[#0B1730] text-white">
        <div className="flex items-center gap-3 border-b border-slate-700 px-6 py-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#123B68] text-sm font-bold text-white">
            D
          </div>
          <div>
            <div className="text-lg font-bold">DigiFind</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Administration</div>
          </div>
        </div>

        <nav className="space-y-2 px-4 py-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="ml-72 min-h-screen">
        <header className="border-b border-slate-200 bg-white px-8 py-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#123B68]">Administration</p>
              <h1 className="text-2xl font-bold text-[#0B1730]">Tableau de bord</h1>
            </div>
            <div className="rounded-full bg-[#EAF7F3] px-4 py-2 text-sm font-medium text-[#00A884]">
              Admin connecté
            </div>
          </div>
        </header>

        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
