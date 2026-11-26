import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F3EBDD]">
      <div aria-hidden="true" className="absolute -right-32 -top-36 h-96 w-96 rounded-full bg-[#FF765E]/15 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#123C3A]/15 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#123C3A]">
            Conseil · Transformation numérique
          </p>
          <h1 className="max-w-2xl text-5xl font-black leading-[1.02] tracking-tight text-[#123C3A] sm:text-6xl lg:text-7xl">
            Le numérique, au rythme de votre organisation<span className="text-[#FF765E]">.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#566865]">
            Nous aidons les équipes à clarifier leurs processus et à choisir des solutions utiles, adaptées à leurs moyens et à leurs objectifs.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/devis" className="inline-flex items-center justify-center rounded-full bg-[#FF765E] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#e6654f]">
              Parler de votre projet <span aria-hidden="true" className="ml-2">↗</span>
            </Link>
            <Link href="/expertises" className="inline-flex items-center justify-center rounded-full border border-[#123C3A]/25 bg-white/70 px-6 py-3.5 text-sm font-semibold text-[#123C3A] transition hover:bg-white">
              Découvrir nos expertises
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#123C3A]/15 pt-6 text-sm text-[#566865]">
            <span>Diagnostic pragmatique</span><span>Solutions adaptées</span><span>Accompagnement durable</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -left-5 top-10 h-24 w-24 rounded-full bg-[#FF765E] sm:-left-8" />
          <div className="relative rounded-[2rem] bg-[#123C3A] p-6 text-white shadow-[0_32px_80px_rgba(18,60,58,0.22)] sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F3EBDD]/65">Une démarche claire</p>
                <h2 className="mt-2 text-2xl font-bold">De l’analyse à l’action</h2>
              </div>
              <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-[#F3EBDD]">DigiFind</span>
            </div>
            <div className="mt-9 space-y-3">
              {[
                ["01", "Écouter le terrain", "Comprendre vos usages et vos priorités."],
                ["02", "Simplifier les processus", "Repérer les frictions avant de choisir un outil."],
                ["03", "Construire la suite", "Déployer une réponse utile et mesurable."],
              ].map(([number, title, description], index) => (
                <div key={number} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <span className={"flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-semibold " + (index === 1 ? "bg-[#FF765E] text-white" : "bg-[#F3EBDD]/10 text-[#F3EBDD]")}>{number}</span>
                  <div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm leading-6 text-white/65">{description}</p></div>
                </div>
              ))}
            </div>
            <p className="mt-6 border-t border-white/10 pt-5 text-sm text-[#F3EBDD]/65">Une transformation équilibrée commence par les bonnes questions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
