import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function getAuthToken() {
  try {
    const { token } = await auth.api.getToken({
      headers: await headers(),
    });
    return token || null;
  } catch (err) {
    console.error("getAuthToken: no active session");
    return null;
  }
}

export async function getAuthSession() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    return session;
  } catch (err) {
    console.error("getAuthSession: no active session");
    return null;
  }
}