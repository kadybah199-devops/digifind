import { cookies } from "next/headers";
import { verifyAdminSession } from "@/lib/admin-session";

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  return verifyAdminSession(cookieStore.get("digifind_admin_session")?.value);
}

export async function requireAdminAuth() {
  const authenticated = await isAdminAuthenticated();
  return authenticated;
}
