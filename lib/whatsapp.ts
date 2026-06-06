import { brand, contact } from "./data";

type WhatsAppPlan = {
  label: string;
  price: number;
  devices: number;
};

export function whatsappUrl(message = contact.defaultWhatsAppMessage) {
  return `${contact.whatsappBaseUrl}/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function whatsappPlanUrl(plan: WhatsAppPlan) {
  return whatsappUrl(`Hello ${brand.name}, I want to start a subscription.

Plan: ${plan.label}
Devices: ${plan.devices} ${plan.devices === 1 ? "Device" : "Devices"}
Price: $${plan.price}

Please help me activate my IPTV subscription.`);
}
