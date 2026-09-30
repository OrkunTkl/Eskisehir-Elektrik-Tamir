import type { Provider } from "@/types/provider";
// Sadece gerçek anlaşmalı servis doğrulanınca gerçek veriyle doldurulur.
export const providers: Provider[] = [{ id: "mock-1", businessName: "MOCK_PROVIDER", phone: "PHONE_PLACEHOLDER", whatsapp: "WHATSAPP_PLACEHOLDER", districts: ["Odunpazarı", "Tepebaşı"], services: ["elektrik-ariza"], verified: false, active: false }];
