import { quoteRequests } from "@/lib/admin-data";

export default function AdminQuotesPage() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#0B1730]">Gestion des devis</h2>
        <button className="rounded-full bg-[#00A884] px-4 py-2 text-sm font-medium text-white">Exporter</button>
      </div>

      <div className="space-y-4">
        {quoteRequests.map((quote) => (
          <div key={quote.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-lg font-semibold text-[#0B1730]">{quote.client}</div>
                <div className="text-sm text-slate-500">{quote.company}</div>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#EAF3FF] px-2.5 py-1 text-xs font-medium text-[#123B68]">
                  {quote.status}
                </span>
                <button className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-[#0B1730]">
                  Modifier
                </button>
              </div>
            </div>
            <div className="mt-2 text-xs text-slate-500">{quote.id} • {quote.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
