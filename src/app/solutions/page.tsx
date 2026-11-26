import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const categories = [
  {
    title: "GED et archivage numérique",
    description: "Organisation des documents, sécurisation des données, traçabilité et accès rapide aux informations clés.",
  },
  {
    title: "Digitalisation des processus",
    description: "Conception de workflows plus simples, plus rapides et plus fiables pour les équipes opérationnelles.",
  },
  {
    title: "Automatisation",
    description: "Mise en place d’outils pour réduire les tâches répétitives, améliorer les délais et la qualité de service.",
  },
  {
    title: "Intelligence artificielle",
    description: "Utilisation de l’IA pour améliorer l’analyse, la performance et la prise de décision structurelle.",
  },
  {
    title: "Tableaux de bord et analyse",
    description: "Suivi de la performance et pilotage stratégique grâce à des indicateurs fiables et présentés clairement.",
  },
  {
    title: "Solutions sur mesure",
    description: "Conception de solutions spécifiques répondant aux contraintes propres à chaque organisation.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#123C3A]">Solutions</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-[#123C3A] sm:text-5xl">Des solutions numériques utiles, testées et adaptées.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Chemin de transformation, outils de gestion, automatisation et données : DigiFind conçoit des solutions à la fois efficaces, accessibles et alignées sur les priorités de chaque organisation.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <article key={category.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF0EB] text-xl font-bold text-[#FF765E]">
                •
              </div>
              <h2 className="text-2xl font-bold text-[#123C3A]">{category.title}</h2>
              <p className="mt-4 text-slate-600">{category.description}</p>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
