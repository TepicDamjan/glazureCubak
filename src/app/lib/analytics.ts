import { track } from "@vercel/analytics";

export type ContactChannel = "phone" | "viber" | "whatsapp" | "facebook" | "contact_cta";
export type ContactLocation = "header" | "floating" | "hero" | "contact" | "footer";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Track clicks on call / contact CTAs (Vercel Analytics + GA4 if present). */
export function trackContactClick(channel: ContactChannel, location: ContactLocation) {
  track("Contact Click", { channel, location });

  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "contact_click", {
      event_category: "engagement",
      channel,
      location,
    });
  }
}
