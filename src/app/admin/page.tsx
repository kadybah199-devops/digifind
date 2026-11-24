import { redirect } from "next/navigation";
import { connection } from "next/server";
import { Suspense } from "react";
import { requireAdminAuth } from "@/lib/admin-auth";
import { dashboardKpis, recentAppointments, quoteRequests, blogPosts } from "@/lib/admin-data";

export default function AdminDashboardPage() {
  return (
    <Suspense fallback={<div className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-500">Chargement du tableau de bord…</div>}>
      <AdminDashboardContent />
    </Suspense>
  );
}

async function AdminDashboardContent() {
  await connection();
  const isAuthenticated = await requireAdminAuth();

  if (!isAuthenticated) {
    redirect("/admin/login");
  }

  return (
    <div className="space-y-8">
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {dashboardKpis.map((item) => (
          <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className={`mb-4 h-2.5 w-16 rounded-full ${item.accent}`} />
            <div className="text-3xl font-bold text-[#0B1730]">{item.value}</div>
            <div className="mt-2 text-sm text-slate-600">{item.label}</div>
          </div>
        ))}
      </section>

      <section className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-xl font-bold text-[#0B1730]">Rendez-vous récents</h2>
          <div className="space-y-4">
            {recentAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                <div>
                  <div className="font-semibold text-[#0B1730]">{appointment.client}</div>
                  <div className="text-sm text-slate-500">{appointment.subject}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-500">{appointment.date}</div>
                  <div className="mt-1 inline-flex rounded-full bg-[#EAF7F3] px-2.5 py-1 text-xs font-medium text-[#00A884]">
                    {appointment.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-xl font-bold text-[#0B1730]">Demandes de devis</h2>
          <div className="space-y-4">
            {quoteRequests.map((quote) => (
              <div key={quote.id} className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="font-semibold text-[#0B1730]">{quote.client}</div>
                    <div className="text-sm text-slate-500">{quote.company}</div>
                  </div>
                  <span className="rounded-full bg-[#EAF3FF] px-2.5 py-1 text-xs font-medium text-[#123B68]">
                    {quote.status}
                  </span>
                </div>
                <div className="mt-2 text-xs text-slate-500">{quote.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-xl font-bold text-[#0B1730]">Articles récents</h2>
        <div className="space-y-3">
          {blogPosts.map((post) => (
            <div key={post.title} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
              <div>
                <div className="font-semibold text-[#0B1730]">{post.title}</div>
                <div className="text-sm text-slate-500">{post.category}</div>
              </div>
              <span className="rounded-full bg-[#EAF7F3] px-2.5 py-1 text-xs font-medium text-[#00A884]">
                {post.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
