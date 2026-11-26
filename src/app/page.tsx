import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { blogPosts } from "@/lib/blog-content";

const expertiseItems = [
  {
    title: "Audit et optimisation des processus",
    description:
      "Diagnostic des frictions opérationnelles, cartographie des flux et recommandation de solutions adaptées à l’organisation.",
  },
  {
    title: "Dématérialisation et GED",
    description:
      "Mise en place de systèmes d’archivage numérique, de workflows documentaires et de partage sécurisé des informations.",
  },
  {
    title: "Automatisation des tâches",
    description:
      "Réduction des tâches répétitives et gain de productivité grâce à des processus automatisés intelligents.",
  },
  {
    title: "IA et analyse de données",
    description:
      "Utilisation de la donnée pour améliorer la prise de décision, l’analyse et les performances de l’entreprise.",
  },
];

const methodology = [
  "Écoute des réalités opérationnelles",
  "Diagnostic des besoins et des priorités",
  "Conception de solutions adaptatives",
  "Mise en œuvre avec suivi de résultats",
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#123C3A]">
                Qui sommes-nous ?
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#123C3A] sm:text-4xl">
                Une expertise au service des organisations ambitieuses
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-slate-600">
              DigiFind aide les PME, administrations et organisations à moderniser
              leurs processus, mieux exploiter leurs données et améliorer leur
              performance grâce à des solutions concrètes et adaptées au contexte
              local.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {expertiseItems.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF0EB] text-lg font-bold text-[#FF765E]">
                  •
                </div>
                <h3 className="text-xl font-semibold text-[#123C3A]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#123C3A] py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF765E]">
                Nos solutions
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Des réponses concrètes aux enjeux de transformation
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {[
                "Gestion électronique des documents",
                "Digitalisation des processus métiers",
                "Automatisation des tâches et workflows",
                "Tableaux de bord & analyse de données",
                "Solutions sur mesure",
                "Accompagnement & formation",
              ].map((solution) => (
                <div
                  key={solution}
                  className="rounded-3xl border border-slate-700 bg-white/5 p-6"
                >
                  <div className="mb-4 h-12 w-12 rounded-2xl bg-[#123C3A]" />
                  <h3 className="text-xl font-semibold">{solution}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Une approche orientée résultats, pensée pour améliorer la
                    productivité, la traçabilité et la décision.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#123C3A]">
                Méthodologie
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#123C3A] sm:text-4xl">
                Une approche claire, simple et orientée résultats
              </h2>
            </div>
            <div className="space-y-5">
              {methodology.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#123C3A] font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="text-lg font-medium text-[#123C3A]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F3EBDD] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex items-end justify-between gap-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#123C3A]">
                  Actualités
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#123C3A] sm:text-4xl">
                  Les derniers articles du blog
                </h2>
              </div>
              <Link
                href="/blog"
                className="text-sm font-semibold text-[#123C3A] hover:text-[#123C3A]"
              >
                Voir tous les articles →
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="h-44 bg-gradient-to-br from-[#123C3A] to-[#FF765E]" />
                  <div className="p-6">
                    <span className="inline-flex rounded-full bg-[#FFF0EB] px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#FF765E]">
                      {post.category}
                    </span>
                    <h3 className="mt-4 text-xl font-semibold text-[#123C3A]">
                      <a href={"/blog/" + post.slug} className="hover:text-[#FF765E]">{post.title}</a>
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-[#123C3A] px-6 py-12 text-center text-white shadow-xl sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9ad8c3]">
              Prêt à avancer ?
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Lancez votre transformation numérique avec DigiFind
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/devis"
                className="rounded-full bg-[#FF765E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#e6654f]"
              >
                Demander un devis
              </a>
              <a
                href="/contact"
                className="rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#123C3A]"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
