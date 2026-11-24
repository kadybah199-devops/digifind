import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0B1730] text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#123B68] text-sm font-bold text-white">
              D
            </div>
            <div>
              <div className="text-lg font-bold text-white">DigiFind</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                Transformation numérique
              </div>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-300">
            DigiFind accompagne les organisations dans leur transformation numérique avec des solutions utiles,
            adaptées et orientées performance.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white">Navigation</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li><Link href="/a-propos" className="hover:text-white">À propos</Link></li>
            <li><Link href="/expertises" className="hover:text-white">Expertises</Link></li>
            <li><Link href="/solutions" className="hover:text-white">Solutions</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white">Services</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>Audit numérique</li>
            <li>Digitalisation des processus</li>
            <li>GED & archivage</li>
            <li>Automatisation</li>
            <li>IA & analyse de données</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white">Contact</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>+224 000 00 00 00</li>
            <li>contact@digifind.com</li>
            <li>Conakry, Guinée</li>
            <li>Du lundi au vendredi</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-700">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 DigiFind. Tous droits réservés.</p>
          <div className="flex gap-5">
            <Link href="/contact" className="hover:text-white">Nous écrire</Link>
            <Link href="/devis" className="hover:text-white">Demander un devis</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
