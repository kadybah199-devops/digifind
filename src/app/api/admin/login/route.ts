import { createHash, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import { adminSessionMaxAge, createAdminSession } from "@/lib/admin-session";

function equalSecret(input: string, expected: string) {
  const inputHash = createHash("sha256").update(input).digest();
  const expectedHash = createHash("sha256").update(expected).digest();
  return timingSafeEqual(inputHash, expectedHash);
}

export async function POST(request: Request) {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!email || !password || !secret || secret.length < 32) {
    return NextResponse.json({ error: "La connexion admin n’est pas configurée." }, { status: 503 });
  }

  let body: { email?: unknown; password?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Identifiants invalides." }, { status: 400 });
  }
  const submittedEmail = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const submittedPassword = typeof body.password === "string" ? body.password : "";
  if (!equalSecret(submittedEmail, email.trim().toLowerCase()) || !equalSecret(submittedPassword, password)) {
    return NextResponse.json({ error: "Adresse e-mail ou mot de passe incorrect." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set("digifind_admin_session", await createAdminSession(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: adminSessionMaxAge,
  });
  return response;
}
