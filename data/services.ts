// Hizmet listesi ve sıralaması. Sayfa metinleri data/docs/service-*.ts içindedir.
export type ServiceIcon = "alert" | "siren" | "shield" | "cable" | "chandelier" | "plug" | "breaker" | "gauge" | "bulb";
export type Service = { slug: string; title: string; desc: string; kicker: string; icon: ServiceIcon };
export const services: Service[] = [
  { slug: "elektrik-ariza", title: "Elektrik Arızası", kicker: "Kesinti · Hat arızası", icon: "alert", desc: "Elektrik kesintisi, çalışmayan hatlar ve nedeni belli olmayan arızalarda önce kapsamı anlayın." },
  { slug: "acil-elektrikci", title: "Acil Elektrikçi", kicker: "Yanık kokusu · Kıvılcım", icon: "siren", desc: "Bekletmemesi gereken belirtiler: önce güvenlik adımları, sonra servis yönlendirmesi." },
  { slug: "elektrik-kacagi", title: "Elektrik Kaçağı", kicker: "Çarpılma hissi · Röle", icon: "shield", desc: "Çarpılma hissi veya kaçak akım şüphesinde ne yapılır, kaçak nasıl tespit edilir." },
  { slug: "elektrik-tesisati", title: "Elektrik Tesisatı", kicker: "Yenileme · Hat değişimi", icon: "cable", desc: "Eski binalar, tadilatlar ve yeni yükler için tesisat yenileme ve hat değişimi." },
  { slug: "avize-montaji", title: "Avize Montajı", kicker: "Aydınlatma · Montaj", icon: "chandelier", desc: "Ağırlık, tavan tipi ve kablo çıkışı: avize montajında güvenli yöntem." },
  { slug: "priz-anahtar-ariza", title: "Priz ve Anahtar", kicker: "Değişim · Onarım", icon: "plug", desc: "Çalışmayan, ısınan ya da gevşeyen priz ve anahtarlarda profesyonel müdahale." },
  { slug: "sigorta-salter", title: "Sigorta ve Şalter", kicker: "Pano · Koruma", icon: "breaker", desc: "Sık atan sigorta ve şalterlerde pano kontrolü, parça değişimi ve yük dengesi." },
  { slug: "kacak-akim-roles", title: "Kaçak Akım Rölesi", kicker: "Koruma rölesi", icon: "gauge", desc: "Sürekli atan, hiç atmayan ya da hiç olmayan kaçak akım rölesi için destek." },
  { slug: "aydinlatma-problemleri", title: "Aydınlatma Sorunları", kicker: "Titreme · Yanmama", icon: "bulb", desc: "Yanmayan, titreyen veya sık patlayan lambaların ardındaki gerçek neden." },
];