import { track } from "@vercel/analytics";

export type ContactChannel = "phone" | "viber" | "whatsapp" | "facebook" | "contact_cta";
export type ContactLocation = "header" | "floating" | "hero" | "contact" | "footer";

/** Track clicks on call / contact CTAs in Vercel Analytics. */
export function trackContactClick(channel: ContactChannel, location: ContactLocation) {
  track("Contact Click", { channel, location });
}
