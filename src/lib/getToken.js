import { error } from "better-auth/api";
import { authClient } from "./auth-client";

export const getToken = async () => {
  try {
    const session = await authClient.getSession()
    console.log("Session:", session)  // দেখো এখানে কি আছে
    console.log("Token:", session?.token)  // Token এখানে থাকবে
    return session?.token || null
  } catch (error) {
    console.error("Token fetch error:", error)
    return null
  }
}