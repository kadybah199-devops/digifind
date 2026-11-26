import { siteSettings } from "@/lib/admin-data";

export default function AdminSettingsPage() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-[#123C3A]">Paramètres du site</h2>

      <div className="space-y-4">
        {siteSettings.map((setting) => (
          <div key={setting.key} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#123C3A]">{setting.key}</div>
            <div className="mt-2 text-slate-700">{setting.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
