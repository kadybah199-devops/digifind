import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const values = [
  "Éthique professionnelle",
  "Confiance et transparence",
  "Solutions utiles et concrètes",
  "Performance mesurable",
  "Approche adaptée au contexte africain",
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#123C3A]">À propos</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-[#123C3A] sm:text-5xl">
            DigiFind, un partenaire de transformation numérique.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            DigiFind est un cabinet de conseil et d’intégration spécialisé dans la transformation numérique des organisations.
            Notre mission est d’aider les entreprises, administrations et structures à améliorer leur performance à travers des solutions numériques adaptées à leurs réalités, leurs moyens et leurs objectifs.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF765E]">Mission</p>
            <h2 className="mt-4 text-2xl font-bold text-[#123C3A]">Mettre la technologie au service des résultats.</h2>
            <p className="mt-4 text-slate-600">
              Nous aidons les organisations à simplifier leurs processus, renforcer leur productivité et exploiter le potentiel des outils numériques avec une approche pragmatique.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF765E]">Vision</p>
            <h2 className="mt-4 text-2xl font-bold text-[#123C3A]">Devenir un acteur de référence en transformation numérique.</h2>
            <p className="mt-4 text-slate-600">
              Nous aspirons à soutenir des organisations plus compétitives, plus résilientes et mieux préparées aux défis du numérique.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF765E]">Philosophie</p>
            <h2 className="mt-4 text-2xl font-bold text-[#123C3A]">La bonne technologie, au bon coût.</h2>
            <p className="mt-4 text-slate-600">
              Nous privilégions des solutions utiles, accessibles, évolutives et alignées avec les priorités réelles des organisations.
            </p>
          </div>
        </div>

        <section className="mt-20 grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#123C3A]">Notre approche</p>
            <h2 className="mt-4 text-3xl font-bold text-[#123C3A]">Des solutions pensées pour le terrain.</h2>
            <p className="mt-5 text-slate-600">
              Nous comprenons les réalités des organisations africaines : contraintes budgétaires, besoin de résultats rapides, nécessité d’outils fiables et évolutifs, et besoin d’accompagnement durable.
            </p>
            <p className="mt-4 text-slate-600">
              C’est pourquoi notre modèle privilégie l’écoute, le diagnostic, la simplicité de mise en œuvre et le transfert de compétences pour renforcer les capacités internes.
            </p>
          </div>
          <div className="rounded-[2rem] bg-[#123C3A] p-8 text-white">
            <h3 className="text-2xl font-bold">Nos valeurs</h3>
            <ul className="mt-6 space-y-4">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-3 text-slate-200">
                  <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#FF765E] text-xs font-bold text-[#123C3A]">✓</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
