const encoder = new TextEncoder();
const maxAgeSeconds = 60 * 60 * 24;

async function signingKey() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 32) throw new Error("ADMIN_SESSION_SECRET must contain at least 32 characters.");
  return crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign", "verify"]);
}

export async function createAdminSession() {
  const issuedAt = Math.floor(Date.now() / 1000).toString();
  const key = await signingKey();
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(issuedAt));
  const binary = Array.from(new Uint8Array(signature), (byte) => String.fromCharCode(byte)).join("");
  return `${issuedAt}.${btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "")}`;
}

export async function verifyAdminSession(value?: string) {
  if (!value) return false;
  const [issuedAtText, signatureText, extra] = value.split(".");
  if (!issuedAtText || !signatureText || extra) return false;
  const issuedAt = Number(issuedAtText);
  const now = Math.floor(Date.now() / 1000);
  if (!Number.isInteger(issuedAt) || issuedAt > now + 60 || now - issuedAt > maxAgeSeconds) return false;
  try {
    const key = await signingKey();
    const base64 = signatureText.replace(/-/g, "+").replace(/_/g, "/");
    const binary = atob(base64.padEnd(Math.ceil(base64.length / 4) * 4, "="));
    const signature = Uint8Array.from(binary, (character) => character.charCodeAt(0));
    return crypto.subtle.verify("HMAC", key, signature, encoder.encode(issuedAtText));
  } catch {
    return false;
  }
}

export const adminSessionMaxAge = maxAgeSeconds;
