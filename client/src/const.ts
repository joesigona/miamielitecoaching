export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

// Default Manus OAuth portal — used as fallback when build-time env vars are missing.
const DEFAULT_OAUTH_PORTAL_URL = "https://manus.im";
const DEFAULT_APP_ID = "83tywCBKrbukToGzWmD9PC";

// Generate login URL at runtime so redirect URI reflects the current origin.
// Hardened so a missing/invalid VITE_OAUTH_PORTAL_URL never crashes the React tree.
export const getLoginUrl = (): string => {
  try {
    const rawPortal = import.meta.env.VITE_OAUTH_PORTAL_URL;
    const oauthPortalUrl =
      typeof rawPortal === "string" && rawPortal.length > 0
        ? rawPortal
        : DEFAULT_OAUTH_PORTAL_URL;

    const rawAppId = import.meta.env.VITE_APP_ID;
    const appId =
      typeof rawAppId === "string" && rawAppId.length > 0 ? rawAppId : DEFAULT_APP_ID;

    const redirectUri = `${window.location.origin}/api/oauth/callback`;
    const state = btoa(redirectUri);

    const url = new URL(`${oauthPortalUrl.replace(/\/$/, "")}/app-auth`);
    url.searchParams.set("appId", appId);
    url.searchParams.set("redirectUri", redirectUri);
    url.searchParams.set("state", state);
    url.searchParams.set("type", "signIn");

    return url.toString();
  } catch (err) {
    // Defensive: never throw from this helper — render falls back to a safe href.
    // eslint-disable-next-line no-console
    console.error("[getLoginUrl] Failed to build OAuth URL:", err);
    return "/";
  }
};
