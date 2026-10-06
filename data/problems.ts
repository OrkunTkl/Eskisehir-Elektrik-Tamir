import { problemDocs } from "./docs";
export type Severity = "acil" | "dikkat" | "bilgi";
export type Problem = { slug: string; title: string; label: string; short: string; severity: Severity };
const meta: [string, string, string][] = [
  ["sigorta-neden-atar", "Sigorta Neden Atar?", "Sigorta atıyor"],
  ["salter-atiyor", "Şalter Neden Atar?", "Şalter atıyor"],
  ["priz-calismiyor", "Priz Çalışmıyor: Ne Yapmalı?", "Priz çalışmıyor"],
  ["elektrik-kesildi", "Elektrik Kesildi: Bina mı, Şebeke mi?", "Elektrik kesildi"],
  ["kacak-akim-rolesi-atiyor", "Kaçak Akım Rölesi Neden Atar?", "Röle atıyor"],
  ["yanik-kokusu", "Yanık Kokusu Geliyor", "Yanık kokusu"],
  ["kivilcim-olusuyor", "Kıvılcım Oluşuyor", "Kıvılcım çıkıyor"],
  ["lambalar-calismiyor", "Lambalar Çalışmıyor", "Lamba yanmıyor"],
  ["elektrik-kacagi", "Elektrik Kaçağından Şüpheleniyorum", "Kaçak şüphesi"],
]; 
export const problems: Problem[] = meta.map(([slug, title, label]) => ({ slug, title, label, short: problemDocs[slug].lead, severity: problemDocs[slug].severity }));