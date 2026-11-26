import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FormStatus } from "@/components/forms/form-status";

export default function AppointmentPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#123C3A]">Rendez-vous</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-[#123C3A] sm:text-5xl">Planifiez un échange avec DigiFind.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Réservez un moment pour présenter votre besoin et obtenir des recommandations adaptées à votre contexte.
          </p>
        </div>

        <FormStatus kind="appointment" className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Nom complet</label>
              <input name="name" required minLength={2} maxLength={120} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#123C3A]" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Entreprise</label>
              <input name="company" maxLength={160} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#123C3A]" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
              <input name="email" type="email" required className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#123C3A]" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Téléphone</label>
              <input name="phone" type="tel" required className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#123C3A]" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Objet du rendez-vous</label>
              <input name="subject" required maxLength={120} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#123C3A]" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Type de prestation</label>
              <select name="service" required defaultValue="" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#123C3A]">
                <option value="" disabled>Choisir un service</option>
                <option value="Audit">Audit</option>
                <option value="Digitalisation">Digitalisation</option>
                <option value="Automatisation">Automatisation</option>
                <option value="IA">IA</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Date souhaitée</label>
              <input name="date" type="date" required className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#123C3A]" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Heure souhaitée</label>
              <input name="time" type="time" required className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#123C3A]" />
            </div>
          </div>
          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-slate-700">Message complémentaire</label>
            <textarea name="message" required minLength={10} maxLength={5000} className="min-h-32 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#123C3A]" />
          </div>
          <div className="mt-5 max-w-md">
            <label className="mb-2 block text-sm font-medium text-slate-700">Mode de rencontre</label>
            <select name="mode" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#123C3A]">
              <option value="visio">Visioconférence</option>
              <option value="presentiel">Présentiel</option>
            </select>
          </div>
        </FormStatus>
      </main>
      <Footer />
    </>
  );
}
