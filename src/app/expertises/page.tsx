import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const expertiseItems = [
  {
    title: "Conseil et diagnostic de transformation numérique",
    description: "Analyse du niveau de maturité numérique, évaluation des processus, identification des priorités et plan d’action chiffré.",
  },
  {
    title: "Audit et optimisation des processus métiers",
    description: "Cartographie des flux, identification des goulots d’étranglement et mise en place d’une meilleure organisation de travail.",
  },
  {
    title: "Gestion électronique des documents (GED)",
    description: "Mise en place d’un système d’archivage et de circulation des documents pour plus de sécurité et de rapidité.",
  },
  {
    title: "Dématérialisation et archivage numérique",
    description: "Transformation des documents papiers vers un environnement numérique plus fiable, accessible et traçable.",
  },
  {
    title: "Automatisation des processus",
    description: "Mise en place de workflows, d’automatisations et d’outils pour réduire les tâches répétitives et améliorer le service.",
  },
  {
    title: "IA, données et performance",
    description: "Utilisation de la donnée et de l’IA pour mieux piloter les activités, améliorer le reporting et la prise de décision.",
  },
];

export default function ExpertisesPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#123B68]">Expertises</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-[#0B1730] sm:text-5xl">Des expertises pensées pour la performance.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            DigiFind intervient sur les enjeux de transformation numérique qui touchent directement la productivité, la qualité de service et la durabilité des organisations.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {expertiseItems.map((item) => (
            <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF7F3] text-xl font-bold text-[#00A884]">
                ✓
              </div>
              <h2 className="text-2xl font-bold text-[#0B1730]">{item.title}</h2>
              <p className="mt-4 text-slate-600">{item.description}</p>
              <a href="/devis" className="mt-6 inline-flex text-sm font-semibold text-[#123B68] hover:text-[#0B1730]">
                Demander un devis →
              </a>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
