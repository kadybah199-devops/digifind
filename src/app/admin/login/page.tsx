"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setSubmitting(true);
    setError("");
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error || "Connexion impossible.");
      router.push("/admin");
      router.refresh();
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Connexion impossible.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F3EBDD] px-4">
      <div className="w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#123C3A] text-xl font-bold text-white">
            D
          </div>
          <h1 className="mt-5 text-3xl font-black text-[#123C3A]">Connexion admin</h1>
          <p className="mt-2 text-sm text-slate-500">Accès réservé aux comptes autorisés</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#123C3A]"
              placeholder="admin@digifind.com"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#123C3A]"
              placeholder="••••••••"
            />
          </div>

          <button
            disabled={submitting}
            type="submit"
            className="w-full rounded-full bg-[#FF765E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#e6654f]"
          >
            {submitting ? "Connexion…" : "Se connecter"}
          </button>
          {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
        </form>
      </div>
    </div>
  );
}
