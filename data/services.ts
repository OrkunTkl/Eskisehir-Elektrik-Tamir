const base = [
 { slug: "elektrik-ariza", title: "Elektrik Arızası", desc: "Elektrik kesintisi, çalışmayan hatlar ve nedeni belli olmayan arızalar için yönlendirme." },
 { slug: "acil-elektrikci", title: "Acil Elektrikçi", desc: "Yanık kokusu, kıvılcım gibi acil durumlarda önce güvenlik adımları, ardından servis yönlendirmesi." },
 { slug: "elektrik-kacagi", title: "Elektrik Kaçağı", desc: "Çarpılma hissi veya kaçak akım şüphesinde ne yapılması gerektiği ve servis yönlendirmesi." },
 { slug: "elektrik-tesisati", title: "Elektrik Tesisatı", desc: "Yeni tesisat, yenileme ve hat değişimi ihtiyaçları için servis yönlendirmesi." },
 { slug: "avize-montaji", title: "Avize Montajı", desc: "Avize ve aydınlatma armatürü montajı için servis yönlendirmesi." },
 { slug: "priz-anahtar-ariza", title: "Priz ve Anahtar Arızaları", desc: "Çalışmayan, ısınan veya gevşeyen priz ve anahtarlar." },
 { slug: "sigorta-salter", title: "Sigorta / Şalter Sorunları", desc: "Sık atan sigorta ve şalterlerin olası nedenleri." },
 { slug: "kacak-akim-roles", title: "Kaçak Akım Rölesi", desc: "Sürekli atan kaçak akım rölesi için olası nedenler ve yönlendirme." },
 { slug: "aydinlatma-problemleri", title: "Aydınlatma Problemleri", desc: "Yanmayan, titreyen veya sık yanan lambalar." },
];

export const services = base.map((s) => ({ ...s, image: `/services/${s.slug}.svg` })); // kendi görselinizi koyunca uzantıyı burada değiştirin