import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FormStatus } from "@/components/forms/form-status";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#123B68]">Contact</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-[#0B1730] sm:text-5xl">Discutons de votre projet.</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Nous sommes à l’écoute de vos besoins pour vous proposer des solutions concrètes, adaptées et durables.
            </p>
            <div className="mt-10 space-y-5 text-slate-700">
              <p><strong>Email :</strong> contact@digifind.com</p>
              <p><strong>Téléphone :</strong> +224 000 00 00 00</p>
              <p><strong>Localisation :</strong> Conakry, Guinée</p>
            </div>
          </div>

          <FormStatus kind="contact" className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Nom complet</label>
                <input name="name" required minLength={2} maxLength={120} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0 focus:border-[#123B68]" placeholder="Votre nom" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                <input name="email" type="email" required className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#123B68]" placeholder="vous@email.com" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Téléphone</label>
                <input name="phone" type="tel" required className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#123B68]" placeholder="+224 ..." />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Objet</label>
                <input name="subject" required maxLength={160} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#123B68]" placeholder="Demande de devis" />
              </div>
            </div>
            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
              <textarea name="message" required minLength={10} maxLength={5000} className="min-h-36 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#123B68]" placeholder="Expliquez votre besoin..." />
            </div>
            <input type="hidden" name="service" value="Contact" />
          </FormStatus>
        </div>
      </main>
      <Footer />
    </>
  );
}
