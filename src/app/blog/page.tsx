import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { blogPosts } from "@/lib/blog-content";

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#123C3A]">Le journal DigiFind</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-[#123C3A] sm:text-6xl">Des idées pour transformer avec justesse.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Analyses, retours de terrain et repères pratiques pour faire évoluer les organisations avec clarté.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article key={post.slug} className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-[#123C3A]/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className={"flex h-48 items-end p-6 " + (index === 0 ? "bg-[#123C3A]" : index === 1 ? "bg-[#F3EBDD]" : "bg-[#FF765E]")}>
                <span className={"rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider " + (index === 1 ? "bg-white text-[#123C3A]" : "bg-white/15 text-white")}>{post.category}</span>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">{post.publishedAt} · {post.readingTime} min de lecture</p>
                <h2 className="mt-4 text-2xl font-bold leading-tight text-[#123C3A]">{post.title}</h2>
                <p className="mt-3 flex-1 leading-7 text-slate-600">{post.excerpt}</p>
                <Link href={"/blog/" + post.slug} className="mt-6 inline-flex font-semibold text-[#123C3A] group-hover:text-[#e6654f]">
                  Lire l’article <span aria-hidden="true" className="ml-2">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
