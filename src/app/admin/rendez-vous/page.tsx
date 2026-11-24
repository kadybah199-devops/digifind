import { recentAppointments } from "@/lib/admin-data";

export default function AdminAppointmentsPage() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#0B1730]">Gestion des rendez-vous</h2>
        <button className="rounded-full bg-[#123B68] px-4 py-2 text-sm font-medium text-white">+ Nouveau</button>
      </div>

      <div className="space-y-4">
        {recentAppointments.map((appointment) => (
          <div key={appointment.id} className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-lg font-semibold text-[#0B1730]">{appointment.client}</div>
              <div className="text-sm text-slate-500">{appointment.subject}</div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-500">{appointment.date}</span>
              <span className="rounded-full bg-[#EAF7F3] px-2.5 py-1 text-xs font-medium text-[#00A884]">
                {appointment.status}
              </span>
              <button className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-[#0B1730]">
                Voir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
