import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FormStatus } from "@/components/forms/form-status";

export default function QuotePage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#123B68]">Demande de devis</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-[#0B1730] sm:text-5xl">Décrivez votre besoin et obtenez une réponse adaptée.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Nous vous aiderons à définir la meilleure solution, les impacts attendus et la manière la plus efficace de transformer votre organisation.
          </p>
        </div>

        <FormStatus kind="quote" className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Nom complet</label>
              <input name="name" required minLength={2} maxLength={120} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#123B68]" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Organisation</label>
              <input name="company" maxLength={160} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#123B68]" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Secteur d’activité</label>
              <input name="sector" maxLength={120} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#123B68]" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Service recherché</label>
              <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#123B68]">
                <option value="Audit">Audit</option>
                <option value="Digitalisation">Digitalisation</option>
                <option value="Automatisation">Automatisation</option>
                <option value="IA">IA</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
              <input name="email" type="email" required className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#123B68]" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Téléphone</label>
              <input name="phone" type="tel" required className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#123B68]" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Budget estimatif</label>
              <input name="budget" type="number" min="0" step="1" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#123B68]" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Délai souhaité</label>
              <input name="deadline" maxLength={120} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#123B68]" />
            </div>
          </div>
          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-slate-700">Description du besoin</label>
            <textarea name="message" required minLength={10} maxLength={5000} className="min-h-36 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#123B68]" />
          </div>
          <input type="hidden" name="service" value="Audit" />
        </FormStatus>
      </main>
      <Footer />
    </>
  );
}
