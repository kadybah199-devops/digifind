"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Expertises", href: "/expertises" },
  { label: "Solutions", href: "/solutions" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#123C3A]/10 bg-[#FFFEFC]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="DigiFind Accueil">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#123C3A] text-sm font-bold text-[#F3EBDD] shadow-sm">D</span>
          <span>
            <span className="block text-lg font-bold tracking-tight text-[#123C3A]">DigiFind</span>
            <span className="block text-[10px] uppercase tracking-[0.22em] text-slate-500">Transformation numérique</span>
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}
              className={"text-sm font-medium transition hover:text-[#FF765E] " + (pathname === item.href ? "text-[#123C3A]" : "text-slate-700")}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/rendez-vous" className="rounded-full border border-[#123C3A]/25 px-4 py-2 text-sm font-medium text-[#123C3A] transition hover:bg-[#F3EBDD]">
            Prendre rendez-vous
          </Link>
          <Link href="/devis" className="inline-flex rounded-full bg-[#FF765E] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#e6654f]">
            Demander un devis
          </Link>
        </div>

        <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#123C3A]/20 text-[#123C3A] lg:hidden"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}>
          <span aria-hidden="true" className="text-xl leading-none">{menuOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {menuOpen ? (
        <nav id="mobile-navigation" aria-label="Navigation mobile" className="border-t border-[#123C3A]/10 bg-[#FFFEFC] px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1 sm:grid-cols-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
                aria-current={pathname === item.href ? "page" : undefined}
                className="rounded-xl px-4 py-3 text-sm font-medium text-[#123C3A] hover:bg-[#F3EBDD]">
                {item.label}
              </Link>
            ))}
            <Link href="/rendez-vous" onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-semibold text-[#123C3A] hover:bg-[#F3EBDD]">Prendre rendez-vous</Link>
            <Link href="/devis" onClick={() => setMenuOpen(false)} className="rounded-xl bg-[#FF765E] px-4 py-3 text-sm font-semibold text-white">Demander un devis</Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
