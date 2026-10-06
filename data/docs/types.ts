// Sayfa içerik şemaları. Her içerik dosyası bu tiplerden birini default export eder.
export type Faq = { q: string; a: string };
export type Block = { h: string; p: string[] };
export type Item = { t: string; d: string };

export type ServiceDoc = {
  slug: string;
  meta: { title: string; description: string };
  kicker: string; // kısa üst etiket, örn. "Arıza · Kesinti"
  h1: string;
  lead: string; // 2-3 cümle
  sections: Block[]; // 5-6 bölüm, her biri 2-3 paragraf
  signs: Item[]; // "Bu belirtiler varsa" 4-5 madde
  prepare: string[]; // talep ederken yazılacak bilgiler, 5-6 madde
  dont: string[]; // yapılmaması gerekenler, 4-6 madde
  faq: Faq[]; // 5-6 soru
  problems: string[]; // ilgili arıza rehberi slug'ları
  services: string[]; // ilgili hizmet slug'ları
};

export type ProblemDoc = {
  slug: string;
  meta: { title: string; description: string };
  severity: "acil" | "dikkat" | "bilgi";
  h1: string;
  lead: string; // 2-3 cümle
  sections: Block[]; // 3-4 bölüm, her biri 2-3 paragraf
  causes: Item[]; // 5-6 neden
  steps: Item[]; // güvenle yapılabilecek sıralı adımlar, 4-6
  dont: string[]; // yapma listesi, 4-5
  call: string[]; // servis çağırma ölçütleri, 4-5
  faq: Faq[]; // 5 soru
  problems: string[];
  services: string[];
};