import { PHONE_NUMBER } from "./constants";

/**
 * Generates a WhatsApp click-to-chat URL with a prefilled message.
 * @param message Optional message to prefill. If omitted, a generic message is used.
 */
export function getWhatsAppLink(message?: string): string {
  const defaultMessage = "Hi! I found your shop online and I'd like to know more about your services.";
  const text = message || defaultMessage;
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
}

/**
 * Generates a link to the WhatsApp Business Catalog/Price list.
 */
export function getWhatsAppCatalogLink(): string {
  return `https://wa.me/c/${PHONE_NUMBER}`;
}
