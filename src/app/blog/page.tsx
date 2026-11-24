import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const posts = [
  {
    title: "Pourquoi la digitalisation commence par les processus",
    category: "Transformation",
    excerpt: "Un regard sur la manière dont les organisations peuvent mieux identifier leurs frictions et mieux orienter leur transformation numérique.",
  },
  {
    title: "Comment mesurer le gain de productivité d’une structure",
    category: "Performance",
    excerpt: "Les indicateurs pertinents pour suivre les impacts réels d’un changement de méthode, d’outils ou de workflow.",
  },
  {
    title: "IA et données : trois leviers pour mieux piloter l’activité",
    category: "Data",
    excerpt: "Comment exploiter les données internes et les outils d’IA pour mieux prendre des décisions et améliorer l’efficacité.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#123B68]">Blog</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-[#0B1730] sm:text-5xl">Des idées utiles pour mieux transformer.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Retrouvez des articles, analyses et recommandations pour piloter votre transformation numérique avec davantage de clarté et de résultats.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="h-44 bg-gradient-to-br from-[#123B68] to-[#00A884]" />
              <div className="p-6">
                <span className="inline-flex rounded-full bg-[#EAF7F3] px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#00A884]">
                  {post.category}
                </span>
                <h2 className="mt-4 text-2xl font-bold text-[#0B1730]">{post.title}</h2>
                <p className="mt-3 text-slate-600">{post.excerpt}</p>
                <a href="/blog/slug-example" className="mt-6 inline-flex text-sm font-semibold text-[#123B68] hover:text-[#0B1730]">
                  Lire l’article →
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
