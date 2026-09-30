// Sayfaya özgü, kullanıcı odaklı içerik. Aynı paragraf farklı URL'lerde tekrar EDİLMEZ.
export type Faq = { q: string; a: string };
export type ServiceContent = {
  title: string; description: string; h1: string; lead: string;
  sections: { h: string; p: string }[]; problems: string[]; services: string[]; faq: Faq[];
  canonicalTo?: string; // aynı konuyu işleyen rehber sayfası varsa canonical oraya verilir
};
const S = (x: ServiceContent) => x;
export const serviceContent: Record<string, ServiceContent> = {
  "elektrik-ariza": S({
    title: "Eskişehir Elektrik Arıza | Elektrikçi Desteği",
    description: "Elektrik kesintisi, sigorta atması veya çalışmayan hatlarda önce neye bakmalısınız? Arızayı sınıflandırın, güvenli adımları öğrenin ve destek için bize ulaşın.",
    h1: "Elektrik arızası: önce ne olduğunu anlayın, sonra doğru desteğe ulaşın",
    lead: "Elektriğin tamamen gitmesi, bir odadaki prizlerin çalışmaması ya da sigortanın tekrar tekrar atması farklı arızalara işaret eder. Bu sayfa sorunu sınıflandırmanıza ve ne zaman profesyonel desteğe ihtiyaç olduğunu anlamanıza yardımcı olur.",
    sections: [
      { h: "Arızanın kapsamına bakın", p: "Tüm evde elektrik yoksa önce komşularınıza ve bina panosuna bakın. Bina genelinde kesinti varsa sorun çoğu zaman şebekeden kaynaklanır ve dağıtım şirketinin arıza kanalları ilgilenir. Yalnızca dairenizde ya da tek bir hatta sorun varsa iç tesisat veya bir cihaz arızalı olabilir." },
      { h: "Güvenle kontrol edebilecekleriniz", p: "Panodaki sigorta veya şalterin atıp atmadığına bakabilir, hattaki cihazların fişini çekip durumu gözlemleyebilirsiniz. Islak elle ya da ıslak zeminde pano ile uğraşmayın; kablo, priz veya pano içini açmayın." },
      { h: "Ne zaman uzman destek gerekir?", p: "Yanık kokusu, ısınma, kıvılcım, çarpılma hissi ya da cihazlar çıkarılsa bile sigortanın atması gibi durumlarda müdahale etmeyin; yetkili bir elektrikçiden destek alın." },
      { h: "Yönlendirme nasıl işler?", p: "Bu platform elektrik hizmetini kendisi vermez. Sorununuzu telefon, WhatsApp veya talep formuyla iletirsiniz; işin niteliğini ve ilçenizi değerlendirip uygun anlaşmalı servis sağlayıcıya yönlendiririz." },
    ],
    problems: ["elektrik-kesildi", "sigorta-neden-atar", "priz-calismiyor", "kacak-akim-rolesi-atiyor"],
    services: ["acil-elektrikci", "elektrik-tesisati"],
    faq: [
      { q: "Tüm evde elektrik yoksa önce neye bakmalıyım?", a: "Komşularda da elektrik olup olmadığına ve bina panosuna bakın. Yalnızca sizde yoksa daire panonuzdaki ana sigorta ve şalterleri dışarıdan kontrol edin. Hiçbiri atmamışsa sorun iç tesisatta ya da şebeke tarafında olabilir." },
      { q: "Arıza bildirirken hangi bilgileri paylaşmalıyım?", a: "Sorunun ne zaman başladığını, hangi oda veya cihazı etkilediğini, sigortanın atıp atmadığını ve ilçenizi yazmanız değerlendirmeyi kolaylaştırır." },
    ],
  }),
  "acil-elektrikci": S({
    title: "Eskişehir Acil Elektrikçi Desteği | Hangi Durumlar Acildir?",
    description: "Yanık kokusu, kıvılcım veya çarpılma hissi acil olabilir mi? Önce güvenlik adımlarını öğrenin, ardından uygun servis sağlayıcıya yönlendirilmek için bize ulaşın.",
    h1: "Acil elektrikçi desteği: hangi durumlar acil sayılır?",
    lead: "Her elektrik sorunu acil değildir, ama bazı belirtiler beklemeyi gerektirmez. Önce güvenliğinizi sağlayın, ardından desteğe ulaşın.",
    sections: [
      { h: "Acil olabilecek belirtiler", p: "Yanık veya erimiş plastik kokusu, prizde ya da panoda kıvılcım, duvarda veya panoda aşırı ısınma, çarpılma hissi ve su teması olan bir alanda elektrik sorunu acil değerlendirilmelidir." },
      { h: "Önce güvenlik", p: "Yangın, duman veya yaralanma varsa önce 112'yi arayın. Islak ortamda elektrikli aletlere ve panoya dokunmayın. Mümkünse ilgili hattın sigortasını güvenli bir konumdan kapatın ve şüpheli alandan uzak durun." },
      { h: "Talebinizde neyi belirtmelisiniz?", p: "Aciliyet durumunu, ilçenizi ve sorunun ne olduğunu açıkça yazın. Servis sağlayıcının uygunluğu çalışma saatlerine ve bölgeye göre değişir; bu nedenle süre veya kesintisiz hizmet sözü vermiyoruz." },
    ],
    problems: ["yanik-kokusu", "kivilcim-olusuyor", "elektrik-kacagi", "salter-atiyor"],
    services: ["elektrik-ariza", "elektrik-kacagi"],
    faq: [
      { q: "Eskişehir'de 7/24 elektrikçi bulunur mu?", a: "Çalışma saatleri anlaşmalı servis sağlayıcıya göre değişir ve bunu önceden garanti edemeyiz. Talebinizde aciliyeti ve ilçenizi belirtirseniz, o anda uygun bir servis sağlayıcıya yönlendirmeyi deneriz." },
      { q: "En yakın elektrikçiye nasıl ulaşırım?", a: "Telefon, WhatsApp veya talep formunda ilçenizi belirtin. Sorununuzu ve bölgenizi değerlendirip uygun servis sağlayıcıyı belirleriz; yakınlık, servis sağlayıcının çalışma bölgesine ve uygunluğuna bağlıdır." },
      { q: "Yanık kokusu geliyorsa ne yapmalıyım?", a: "Kokunun geldiği alandan uzaklaşın, ilgili hattın sigortasını güvenle kapatabiliyorsanız kapatın ve elektrikçi desteği alın. Duman veya alev varsa 112'yi arayın." },
    ],
  }),
  "elektrik-kacagi": S({
    title: "Eskişehir Elektrik Kaçağı | Belirtiler ve Yapılacaklar",
    description: "Çarpılma hissi, sık atan kaçak akım rölesi veya nemli alanda sorun mu var? Elektrik kaçağının belirtilerini ve ne zaman destek alınması gerektiğini öğrenin.",
    h1: "Elektrik kaçağı: belirtiler, olası nedenler ve ne zaman destek alınmalı",
    lead: "Elektrik kaçağı, akımın olması gereken yoldan dışarı sızması demektir. Bazen yalnızca kaçak akım rölesinin atmasıyla, bazen de dokunulan bir yüzeyde hafif bir çarpılma hissiyle fark edilir.",
    sections: [
      { h: "Nasıl fark edilir?", p: "Kaçak akım rölesinin sık atması, metal yüzeylerde karıncalanma veya çarpılma hissi ve nemli alanlardaki cihazlarda sorun kaçak şüphesi uyandırabilir. Bu belirtiler tek başına kaçağı kanıtlamaz; ölçüm ve kontrol gerekir." },
      { h: "Kendiniz ne yapabilirsiniz?", p: "Şüpheli cihazı fişten çekip rölenin yine atıp atmadığını gözlemleyebilirsiniz; bu, sorunun cihazda mı tesisatta mı olduğu hakkında ipucu verir. Tesisatı açmak, kabloları kurcalamak veya röleyi tekrar tekrar açmaya çalışmak güvenli değildir." },
      { h: "Ne zaman destek alınmalı?", p: "Çarpılma hissi varsa, röle cihazlar çıkarılsa da atıyorsa veya nemli bir alanda sorun yaşıyorsanız kaçağın yerini ölçüm yapabilen bir elektrikçi tespit etmelidir." },
    ],
    problems: ["elektrik-kacagi", "kacak-akim-rolesi-atiyor", "salter-atiyor"],
    services: ["elektrik-ariza", "acil-elektrikci"],
    faq: [
      { q: "Elektrik kaçağı tehlikeli midir?", a: "Kaçak akım çarpılma riski taşıyabilir. Şüphe varsa ilgili cihazı kullanmayı bırakıp bir elektrikçiye kontrol ettirmek önemlidir." },
      { q: "Kaçak akım rölesi atması ile elektrik kaçağı aynı şey midir?", a: "Röle, kaçağı algıladığında devreyi keser; yani atması bir belirtidir. Ancak her atma gerçek bir tesisat kaçağı anlamına gelmez, arızalı bir cihaz ya da nem de neden olabilir." },
    ],
  }),
  "elektrik-tesisati": S({
    title: "Eskişehir Elektrik Tesisatı | Yenileme ve Hat Değişimi",
    description: "Elektrik tesisatı ne zaman yenilenmeli? Yeni kurulum, hat değişimi ve tadilat öncesi dikkat edilecekler ile uygun servis sağlayıcıya ulaşma yolları.",
    h1: "Elektrik tesisatı: yenileme, hat değişimi ve yeni kurulum için ne bilmelisiniz?",
    lead: "Tesisat; panodan prizlere ve aydınlatmaya uzanan kablolama ve koruma elemanlarının bütünüdür. Eski binalarda, tadilat öncesinde veya yüksek güçlü bir cihaz eklerken tesisatın yeterliliği önem kazanır.",
    sections: [
      { h: "Hangi durumlarda tesisat işi gündeme gelir?", p: "Sık atan sigorta, ısınan priz veya kablolar, tadilat, mutfak veya klima gibi yüksek güçlü cihaz eklemek ve eski, yıpranmış kabloların yenilenmesi tesisat değerlendirmesi gerektirebilir." },
      { h: "Talebinizde işe yarayacak bilgiler", p: "Yapının yaklaşık yaşı, işin kapsamı (tek oda, tüm daire, pano yenileme), varsa mevcut sorun ve ilçe bilgisi, servis sağlayıcının işi doğru değerlendirmesini kolaylaştırır. Fiyat ve kapsam, işi yapacak servis sağlayıcı tarafından netleştirilir." },
      { h: "Güvenlik", p: "Pano ve hat değişimi kişisel denemeye uygun değildir; yetkin bir elektrikçi tarafından yapılmalıdır." },
    ],
    problems: ["sigorta-neden-atar", "salter-atiyor", "yanik-kokusu"],
    services: ["avize-montaji", "aydinlatma-problemleri"],
    faq: [
      { q: "Elektrik tesisatı ne zaman yenilenmelidir?", a: "Sık atan sigorta, ısınan priz veya kablo, yanık kokusu ya da çok eski tesisat yenileme ihtiyacına işaret edebilir. Kesin karar için tesisatın bir elektrikçi tarafından incelenmesi gerekir." },
      { q: "Tesisat işi için fiyat verebilir misiniz?", a: "Bu platform fiyat belirlemez. İşin kapsamı netleştikten sonra fiyatı, işi yapacak bağımsız servis sağlayıcı bildirir." },
    ],
  }),
  "avize-montaji": S({
    title: "Eskişehir Avize Montajı | Elektrikçi Desteği",
    description: "Avize montajından önce ağırlık, tavan tipi ve kablo çıkışı gibi noktalara bakın. Emin olmadığınız durumlarda uygun servis sağlayıcıya ulaşmanın yolları.",
    h1: "Avize montajı: başlamadan önce bilmeniz gerekenler",
    lead: "Avize montajı basit görünse de kablo bağlantısı, avizenin ağırlığı ve tavan sabitlemesi işin güvenliğini belirler.",
    sections: [
      { h: "Montaj öncesi hazırlık", p: "Avizenin ağırlığı, tavan tipi ve kablo çıkışının yeri montajın nasıl yapılacağını belirler. Ağır avizeler tavanda uygun bir taşıyıcı bağlantı gerektirebilir. Montaj sırasında ilgili hattın sigortası kapatılmalıdır." },
      { h: "Ne zaman elektrikçi desteği alınmalı?", p: "Tavanda kablo çıkışı yoksa, eski kabloların yıpranmış olduğunu görüyorsanız, avize ağırsa ya da ışık kontrolünü (dimmer, çok kademeli anahtar) değiştirmek istiyorsanız montajı bir elektrikçiye bırakmak daha güvenlidir." },
      { h: "Talebinizde belirtin", p: "Avize sayısı, tavan yüksekliği ve ürün tipi hakkında kısa bir not ile ilçenizi yazmanız işin değerlendirilmesini kolaylaştırır." },
    ],
    problems: ["lambalar-calismiyor", "sigorta-neden-atar"],
    services: ["aydinlatma-problemleri", "elektrik-tesisati"],
    faq: [
      { q: "Avize montajını kendim yapabilir miyim?", a: "Sigortayı kapatarak yapmak mümkün olsa da kablo bağlantısı, ağırlık ve tavan sabitlemesi elektrik bilgisi gerektirir. Emin değilseniz bir elektrikçiden destek alın." },
      { q: "Avize takıldıktan sonra sigorta atıyorsa ne yapmalıyım?", a: "Avizeyi devre dışı bırakıp sigortanın yine atıp atmadığına bakın; bağlantı veya avize kaynaklı bir kısa devre olabilir. Sigortayı tekrar tekrar açmaya çalışmadan bir elektrikçiye danışın." },
    ],
  }),
  "aydinlatma-problemleri": S({
    title: "Aydınlatma Sorunları | Yanmayan ve Titreyen Lambalar",
    description: "Lambalar yanmıyor, titriyor ya da sık yanıyorsa sorun ampulde mi tesisatta mı? Güvenle kontrol edebilecekleriniz ve destek almanız gereken durumlar.",
    h1: "Aydınlatma problemleri: yanmayan, titreyen veya sık yanan lambalar",
    lead: "Bir lambanın yanmaması çoğu zaman basit bir nedene dayanır; ama birden fazla lambayı etkileyen sorunlar tesisatı işaret edebilir.",
    sections: [
      { h: "Sorunun nedeni nerede olabilir?", p: "Tek bir lamba yanmıyorsa çoğunlukla ampulün kendisi, duy veya anahtar sorunludur. Birden fazla lamba etkileniyorsa hattın sigortası, bağlantı noktaları veya tesisat devrededir." },
      { h: "Güvenle kontrol edebilecekleriniz", p: "Lamba kapalıyken aynı tipte çalışan bir ampulle değiştirmeyi deneyebilir, diğer odalardaki lambaların durumunu gözlemleyebilirsiniz. Isınmış duy, yanık izi veya koku fark ederseniz kullanmayı bırakın." },
      { h: "Ne zaman destek alınmalı?", p: "Titreme birden fazla lambada görülüyorsa, anahtar ısınıyorsa ya da ampuller kısa sürede yanıyorsa bağlantı ve tesisat kontrolü gerekir." },
    ],
    problems: ["lambalar-calismiyor", "sigorta-neden-atar"],
    services: ["avize-montaji", "elektrik-tesisati"],
    faq: [
      { q: "Lambalar neden titrer?", a: "Gevşek duy veya anahtar bağlantısı, uyumsuz bir dimmer, ampulün kendisi ya da yük değişimleri neden olabilir. Birden fazla lambada görülüyorsa bir elektrikçi kontrolü gerekir." },
      { q: "Ampul neden sürekli yanıyor?", a: "Duy bağlantısı, gerilim dalgalanmaları veya ampul kalitesi etkili olabilir. Sorun tekrar ediyorsa bağlantı ve tesisat kontrolü yapılmalıdır." },
    ],
  }),
  // Aşağıdakiler arıza rehberleriyle aynı konuyu işler; yinelenen içerik üretmemek için canonical rehbere verilir.
  "priz-anahtar-ariza": S({ title: "Priz ve Anahtar Arızaları | Eskişehir Elektrik Arıza Rehberi", description: "Çalışmayan, ısınan veya gevşeyen priz ve anahtarlar için arıza rehberi.", h1: "Priz ve anahtar arızaları", lead: "Çalışmayan, ısınan veya gevşeyen priz ve anahtarlar için ayrıntılı rehberimiz hazır.", sections: [], problems: ["priz-calismiyor", "sigorta-neden-atar"], services: ["elektrik-ariza"], faq: [], canonicalTo: "/ariza-merkezi/priz-calismiyor" }),
  "sigorta-salter": S({ title: "Sigorta ve Şalter Sorunları | Eskişehir Elektrik Arıza Rehberi", description: "Sık atan sigorta ve şalterlerin olası nedenleri için arıza rehberi.", h1: "Sigorta ve şalter sorunları", lead: "Sık atan sigorta ve şalterlerin nedenleri için ayrıntılı rehberlerimiz hazır.", sections: [], problems: ["sigorta-neden-atar", "salter-atiyor"], services: ["elektrik-ariza"], faq: [], canonicalTo: "/ariza-merkezi/sigorta-neden-atar" }),
  "kacak-akim-roles": S({ title: "Kaçak Akım Rölesi | Eskişehir Elektrik Arıza Rehberi", description: "Sürekli atan kaçak akım rölesi için olası nedenler ve yapılacaklar.", h1: "Kaçak akım rölesi", lead: "Sürekli atan kaçak akım rölesi için ayrıntılı rehberimiz hazır.", sections: [], problems: ["kacak-akim-rolesi-atiyor", "elektrik-kacagi"], services: ["elektrik-kacagi"], faq: [], canonicalTo: "/ariza-merkezi/kacak-akim-rolesi-atiyor" }),
};

export const problemSeoTitle: Record<string, string> = {
  "priz-calismiyor": "Priz Çalışmıyor | Eskişehir Elektrik Arıza Rehberi",
  "sigorta-neden-atar": "Sigorta Neden Atar? | Eskişehir Elektrik Arıza Rehberi",
  "salter-atiyor": "Şalter Neden Atar? | Eskişehir Elektrik Arıza Rehberi",
  "kacak-akim-rolesi-atiyor": "Kaçak Akım Rölesi Neden Atar? | Eskişehir Arıza Rehberi",
  "elektrik-kacagi": "Elektrik Kaçağı Şüphesi | Eskişehir Elektrik Arıza Rehberi",
  "elektrik-kesildi": "Elektrik Kesildi: Bina mı, Şebeke mi? | Arıza Rehberi",
};

export const problemFaq: Record<string, Faq[]> = {
  "sigorta-neden-atar": [
    { q: "Sigorta neden sürekli atar?", a: "Çoğunlukla aynı hatta çok sayıda cihaz çalıştığında aşırı yük oluşur. Kısa devre, arızalı bir cihaz veya yıpranmış tesisat da sigortanın tekrar tekrar atmasına yol açabilir. Hangi cihazı çalıştırınca attığını not etmek nedeni bulmayı kolaylaştırır." },
    { q: "Sigortayı tekrar tekrar açmak sorun olur mu?", a: "Sigorta bir korumadır; zorla tekrar tekrar açmak arızayı gizler ve riski artırabilir. Birkaç denemeden sonra atmaya devam ediyorsa destek alın." },
  ],
  "salter-atiyor": [
    { q: "Şalter atınca önce ne yapmalıyım?", a: "Hangi cihazın çalıştığını not edin, hattaki cihazların fişini çekin ve şalteri bir kez açmayı deneyin. Hemen tekrar atıyorsa zorlamayın." },
    { q: "Şalter yalnızca nemli havada atıyorsa ne olabilir?", a: "Nem veya su teması yalıtımı etkileyerek kaçak akıma yol açabilir. Bu durumda bir elektrikçi kontrolü gerekir." },
  ],
  "priz-calismiyor": [
    { q: "Priz neden çalışmaz?", a: "Hattın sigortasının atması, priz bağlantısının gevşemesi veya yanması ya da taktığınız cihazın arızalı olması en sık nedenlerdir. Başka bir cihaz takarak ve panoyu dışarıdan kontrol ederek ayrım yapabilirsiniz." },
    { q: "Priz ısınıyorsa veya yanık kokusu varsa ne yapmalıyım?", a: "Kullanmayı bırakın, fişi güvenle çekin, hattın sigortasını kapatıp elektrikçiden destek alın. Prizi kendiniz açmayın." },
  ],
  "elektrik-kesildi": [
    { q: "Elektrik kesintisinde ne yapmalıyım?", a: "Önce kesintinin yalnızca dairenizde mi yoksa bina veya mahallede mi olduğuna bakın. Bina genelinde ise dağıtım şirketinin arıza bildirim kanallarını kullanın. Yalnızca daireniz etkileniyorsa panoyu dışarıdan kontrol edin." },
    { q: "Elektrik geldiğinde cihazlarım zarar görebilir mi?", a: "Kesinti sonrası ani gerilim dalgalanması hassas cihazlara zarar verebilir. Kesinti sırasında pahalı cihazların fişini çekmek ve elektrik geldikten sonra kısa bir süre beklemek mantıklıdır." },
  ],
  "kacak-akim-rolesi-atiyor": [
    { q: "Kaçak akım rölesi neden atar?", a: "Akımın toprağa veya istenmeyen bir yola sızdığını algıladığında atar. Nem, arızalı bir cihaz ya da tesisattaki yalıtım sorunu nedeni olabilir." },
    { q: "Röle yeniden açıldığında hemen atıyorsa ne yapmalıyım?", a: "Bağlı cihazları çıkarıp tekrar deneyin; yine atıyorsa sorun tesisatta olabilir. Röle bir koruma elemanıdır, devre dışı bırakmak güvenli değildir." },
  ],
  "elektrik-kacagi": [
    { q: "Elektrik kaçağından nasıl şüphelenilir?", a: "Kaçak akım rölesinin sık atması, metal yüzeylere dokunurken hafif çarpılma hissi, nemli alanlarda cihaz sorunları ve açıklanamayan fatura artışı şüphe uyandırabilir. Kesin tespit için ölçüm gerekir." },
    { q: "Fatura artışı kaçağın kanıtı mıdır?", a: "Hayır. Fatura artışının başka nedenleri de olabilir. Asıl önemli nokta güvenliktir: çarpılma hissi veya röle atması varsa destek alın." },
  ],
};

export const problemRelated: Record<string, { problems: string[]; services: string[] }> = {
  "sigorta-neden-atar": { problems: ["salter-atiyor", "priz-calismiyor"], services: ["elektrik-ariza", "elektrik-tesisati"] },
  "salter-atiyor": { problems: ["sigorta-neden-atar", "kacak-akim-rolesi-atiyor"], services: ["elektrik-ariza", "acil-elektrikci"] },
  "priz-calismiyor": { problems: ["sigorta-neden-atar", "yanik-kokusu"], services: ["elektrik-ariza", "elektrik-tesisati"] },
  "elektrik-kesildi": { problems: ["sigorta-neden-atar", "salter-atiyor"], services: ["elektrik-ariza", "acil-elektrikci"] },
  "kacak-akim-rolesi-atiyor": { problems: ["elektrik-kacagi", "salter-atiyor"], services: ["elektrik-kacagi", "elektrik-ariza"] },
  "yanik-kokusu": { problems: ["kivilcim-olusuyor", "priz-calismiyor"], services: ["acil-elektrikci", "elektrik-tesisati"] },
  "kivilcim-olusuyor": { problems: ["yanik-kokusu", "priz-calismiyor"], services: ["acil-elektrikci", "elektrik-ariza"] },
  "lambalar-calismiyor": { problems: ["sigorta-neden-atar", "priz-calismiyor"], services: ["aydinlatma-problemleri", "avize-montaji"] },
  "elektrik-kacagi": { problems: ["kacak-akim-rolesi-atiyor", "salter-atiyor"], services: ["elektrik-kacagi", "acil-elektrikci"] },
};