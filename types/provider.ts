export type Provider = {
  id: string; businessName: string; phone: string; whatsapp: string; address?: string;
  districts: string[]; services: string[]; verified: boolean; active: boolean;
  // Gerçek bilgi yoksa boş bırakılır. Google linkleri yalnızca servis sağlayıcının gerçek profiline ait olmalı.
  googleBusinessUrl?: string; googleReviewUrl?: string;
};