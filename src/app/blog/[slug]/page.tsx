import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function BlogPostPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#123B68]">Transformation</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-[#0B1730] sm:text-5xl">
          Pourquoi la digitalisation commence par les processus
        </h1>
        <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
          <span>4 min de lecture</span>
          <span>•</span>
          <span>14 novembre 2026</span>
        </div>

        <div className="mt-10 h-80 rounded-[2rem] bg-gradient-to-br from-[#123B68] via-[#0B1730] to-[#00A884]" />

        <article className="mt-12 space-y-6 text-lg leading-8 text-slate-700">
          <p>
            La transformation numérique ne commence pas toujours par l’achat d’un logiciel. Elle commence souvent par une réflexion plus profonde sur les processus, la manière dont les équipes travaillent, les points de blocage et le niveau de traçabilité des activités.
          </p>
          <p>
            Avant d’automatiser, il faut comprendre ce qui doit être simplifié. C’est ce diagnostic qui permet ensuite d’adopter les bons outils, évite les erreurs coûteuses et garantit que la technologie soit réellement utile.
          </p>
          <p>
            Les organisations les plus performantes sont celles qui alignent stratégie, organisation et outils. La digitalisation devient alors un levier de performance et non un simple projet technique.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
