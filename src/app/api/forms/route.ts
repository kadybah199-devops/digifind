import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

const common = {
  name: z.string().trim().min(2).max(120),
  email: z.email().max(254),
  phone: z.string().trim().min(6).max(40),
  company: z.string().trim().max(160).optional().default(""),
  service: z.string().trim().max(120),
  message: z.string().trim().min(10).max(5000),
};

const submissionSchema = z.discriminatedUnion("kind", [
  z.object({ kind: z.literal("contact"), ...common, subject: z.string().trim().min(2).max(160) }),
  z.object({ kind: z.literal("quote"), ...common, sector: z.string().trim().max(120).optional().default(""), budget: z.string().regex(/^$|^\d+(\.\d{1,2})?$/).optional().default(""), deadline: z.string().max(120).optional().default("") }),
  z.object({ kind: z.literal("appointment"), ...common, date: z.iso.date().refine((date) => date >= new Date().toISOString().slice(0, 10)), time: z.string().regex(/^\d{2}:\d{2}$/), mode: z.enum(["presentiel", "visio"]) }),
]);

export async function POST(request: Request) {
  let input: unknown;
  try {
    input = await request.json();
  } catch {
    return NextResponse.json({ error: "Le formulaire est invalide." }, { status: 400 });
  }

  const parsed = submissionSchema.safeParse(input);
  if (!parsed.success) {
    return NextResponse.json({ error: "Vérifiez les champs du formulaire." }, { status: 400 });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    return NextResponse.json({ error: "Le formulaire est momentanément indisponible." }, { status: 503 });
  }

  const db = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
  const values = parsed.data;
  let result;

  if (values.kind === "contact") {
    result = await db.from("contact_messages").insert({
      full_name: values.name,
      email: values.email,
      phone: values.phone || null,
      subject: values.subject,
      message: values.message,
    });
  } else if (values.kind === "quote") {
    result = await db.from("quote_requests").insert({
      customer_name: values.name,
      company_name: values.company || null,
      email: values.email,
      phone: values.phone,
      sector: values.sector || null,
      description: `${values.service}\n\n${values.message}`,
      budget_estimate: values.budget ? Number(values.budget) : null,
      desired_deadline: values.deadline || null,
      reference: `DF-${crypto.randomUUID().slice(0, 8).toUpperCase()}`,
    });
  } else {
    result = await db.from("appointments").insert({
      customer_name: values.name,
      company_name: values.company || null,
      email: values.email,
      phone: values.phone,
      subject: values.service,
      preferred_date: values.date,
      preferred_time: values.time,
      meeting_mode: values.mode,
      message: values.message || null,
    });
  }

  if (result.error) {
    console.error("Supabase form insert failed:", result.error.message);
    return NextResponse.json({ error: "Impossible d’enregistrer votre demande. Réessayez plus tard." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
