"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/admin", label: "Tableau de bord" },
  { href: "/admin/rendez-vous", label: "Rendez-vous" },
  { href: "/admin/devis", label: "Devis" },
  { href: "/admin/blog", label: "Blog" },
  { href: "/admin/settings", label: "Paramètres" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/admin/login") return <>{children}</>;

  return (
    <div className="min-h-screen bg-slate-100 text-[#123C3A]">
      <aside className="border-b border-[#123C3A] bg-[#123C3A] text-white md:fixed md:inset-y-0 md:left-0 md:w-72 md:border-b-0 md:border-r md:border-slate-200">
        <div className="flex items-center gap-3 border-b border-slate-700 px-6 py-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF765E] text-sm font-bold text-white">
            D
          </div>
          <div>
            <div className="text-lg font-bold">DigiFind</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Administration</div>
          </div>
        </div>

        <nav aria-label="Navigation administration" className="flex gap-2 overflow-x-auto px-4 py-4 md:block md:space-y-2 md:py-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white md:block"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="min-h-screen md:ml-72">
        <header className="border-b border-slate-200 bg-white px-8 py-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#123C3A]">Administration</p>
              <h1 className="text-2xl font-bold text-[#123C3A]">Tableau de bord</h1>
            </div>
            <div className="rounded-full bg-[#FFF0EB] px-4 py-2 text-sm font-medium text-[#FF765E]">
              Admin connecté
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-8">
          <div className="mb-6 rounded-2xl border border-[#FF765E]/30 bg-[#FFF0EB] px-4 py-3 text-sm text-[#71392f]">
            Aperçu avec données de démonstration. La base Supabase n’est pas encore raccordée.
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
