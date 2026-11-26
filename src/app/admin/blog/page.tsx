import { blogPosts } from "@/lib/admin-data";

export default function AdminBlogPage() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#123C3A]">Gestion du blog</h2>
        <button className="rounded-full bg-[#123C3A] px-4 py-2 text-sm font-medium text-white">+ Nouvel article</button>
      </div>

      <div className="space-y-4">
        {blogPosts.map((post) => (
          <div key={post.title} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div>
              <div className="font-semibold text-[#123C3A]">{post.title}</div>
              <div className="text-sm text-slate-500">{post.category}</div>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-[#FFF0EB] px-2.5 py-1 text-xs font-medium text-[#FF765E]">
                {post.status}
              </span>
              <button className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-[#123C3A]">
                Éditer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
