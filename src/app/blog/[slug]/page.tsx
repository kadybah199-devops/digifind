import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { blogPosts } from "@/lib/blog-content";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <Link href="/blog" className="text-sm font-semibold text-[#123C3A] hover:text-[#FF765E]">← Tous les articles</Link>
        <article className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#123C3A]">{post.category}</p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#123C3A] sm:text-6xl">{post.title}</h1>
          <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1 text-sm text-slate-500">
            <span>{post.publishedAt}</span><span aria-hidden="true">·</span><span>{post.readingTime} min de lecture</span>
          </div>
          <div className="mt-10 flex min-h-64 items-end rounded-[2rem] bg-[#123C3A] p-8 sm:min-h-80 sm:p-12">
            <span className="max-w-xl text-2xl font-semibold leading-snug text-[#F3EBDD] sm:text-4xl">Le numérique devient utile quand il répond à un besoin réel.</span>
          </div>
          <div className="mx-auto mt-10 max-w-2xl space-y-6 text-lg leading-8 text-slate-700">
            {post.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
