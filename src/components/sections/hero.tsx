import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F3F5F8]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(18,59,104,0.14),transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(0,168,132,0.16),transparent_32%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
        <div>
          <div className="mb-6 inline-flex items-center rounded-full border border-[#123B68]/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#123B68]">
            Cabinet de conseil & transformation numérique
          </div>
          <h1 className="max-w-xl text-4xl font-black tracking-tight text-[#0B1730] sm:text-5xl lg:text-6xl">
            Transformez vos processus. <span className="text-[#123B68]">Accélérez votre performance.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            DigiFind accompagne les entreprises et les organisations dans leur transformation numérique grâce à des solutions adaptées à leurs besoins, à leurs ressources et à leurs objectifs.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/devis"
              className="inline-flex items-center justify-center rounded-full bg-[#00A884] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#008f70]"
            >
              Demander un devis
            </Link>
            <Link
              href="/rendez-vous"
              className="inline-flex items-center justify-center rounded-full border border-[#123B68] bg-white px-6 py-3 text-sm font-semibold text-[#123B68] transition hover:bg-[#123B68] hover:text-white"
            >
              Prendre rendez-vous
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-600">
            <div>
              <span className="block text-2xl font-bold text-[#0B1730]">+150</span>
              <span>Projets accompagnés</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-[#0B1730]">96%</span>
              <span>Satisfaction client</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-[#0B1730]">24/7</span>
              <span>Accompagnement</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_25px_80px_rgba(11,23,48,0.12)]">
            <div className="rounded-2xl bg-[#0B1730] p-6 text-white">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-300">Diagnostic digital</span>
                <span className="rounded-full bg-[#00A884] px-2.5 py-1 text-xs font-semibold text-white">Actif</span>
              </div>
              <div className="mt-8 space-y-5">
                <div>
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>Processus</span>
                    <span>78%</span>
                  </div>
                  <div className="mt-2 h-2.5 rounded-full bg-slate-700">
                    <div className="h-2.5 w-[78%] rounded-full bg-[#00A884]" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>Digitalisation</span>
                    <span>86%</span>
                  </div>
                  <div className="mt-2 h-2.5 rounded-full bg-slate-700">
                    <div className="h-2.5 w-[86%] rounded-full bg-[#123B68]" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>Automatisation</span>
                    <span>64%</span>
                  </div>
                  <div className="mt-2 h-2.5 rounded-full bg-slate-700">
                    <div className="h-2.5 w-[64%] rounded-full bg-[#00A884]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-sm text-slate-500">Diagnostic</div>
                <div className="mt-2 text-2xl font-bold text-[#0B1730]">12 jours</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-sm text-slate-500">ROI estimé</div>
                <div className="mt-2 text-2xl font-bold text-[#0B1730]">+41%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
