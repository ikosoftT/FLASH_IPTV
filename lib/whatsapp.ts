import { brand, contact } from "./data";

type WhatsAppPlan = {
  label: string;
  devices: number;
};

export function whatsappUrl(message = contact.defaultWhatsAppMessage) {
  return `${contact.whatsappBaseUrl}/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function whatsappPlanUrl(plan: WhatsAppPlan) {
  const deviceLabel = `${plan.devices} ${plan.devices === 1 ? "Device" : "Devices"}`;

  return whatsappUrl(`Hello ${brand.name}, plan ${plan.label} - ${deviceLabel}.`);
}
