"use client";

import { useState } from "react";

type Props = { kind: "contact" | "quote" | "appointment"; children: React.ReactNode; className?: string };

export function FormStatus({ kind, children, className }: Props) {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const values = Object.fromEntries(form.entries());
    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, kind }),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error || "Une erreur est survenue.");
      formElement.reset();
      setState("sent");
      setMessage("Merci, votre demande a bien été envoyée. Notre équipe vous répondra rapidement.");
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Une erreur est survenue.");
    }
  }

  return (
    <form onSubmit={submit} className={className}>
      {children}
      <button disabled={state === "sending"} type="submit" className="mt-6 inline-flex rounded-full bg-[#00A884] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#008f70] disabled:cursor-wait disabled:opacity-60">
        {state === "sending" ? "Envoi en cours…" : kind === "contact" ? "Envoyer le message" : kind === "quote" ? "Envoyer la demande" : "Demander un rendez-vous"}
      </button>
      {message && <p role="status" aria-live="polite" className={`mt-4 text-sm ${state === "error" ? "text-red-700" : "text-emerald-800"}`}>{message}</p>}
    </form>
  );
}
