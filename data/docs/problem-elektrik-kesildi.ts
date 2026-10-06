import type { ProblemDoc } from "./types";

const doc: ProblemDoc = {
  slug: "elektrik-kesildi",
  meta: {
    title: "Elektrik Kesildi: Bina mı Şebeke mi? | Eskişehir Elektrik",
    description:
      "Elektrik kesilince önce sorunun şebekede mi evinizde mi olduğunu anlayın. Eskişehir için güvenli kontrol adımları ve servis çağırma ölçütleri bu rehberde.",
  },
  severity: "bilgi",
  h1: "Elektrik Kesildi: Sorun Sizde mi, Şebekede mi?",
  lead: "Elektrik kesildiğinde ilk yapılacak iş paniğe kapılmadan sorunun nerede olduğunu anlamaktır. Kesinti bütün mahalleyi etkiliyorsa beklemek ve doğru kanala bildirmek gerekir; yalnızca sizde varsa panoya ve cihazlara bakmak işe yarar. Bu rehber ikisini ayırt etmenizi ve güvenli adımlarla ilerlemenizi sağlar.",
  sections: [
    {
      h: "İlk kontrol: kesinti yalnızca sizde mi?",
      p: [
        "En hızlı ayrım dışarıya bakmaktır. Komşu pencerelerde ışık yanıyor mu, sokak lambaları çalışıyor mu, asansör ve bina girişindeki aydınlatma devrede mi? Çevrede de elektrik yoksa sorun büyük olasılıkla şebeke ya da bölgesel bir kesintidir. Bu durumda evinizin tesisatında bir arıza aramak zaman kaybıdır.",
        "Yalnızca sizin dairenizde elektrik yoksa daire içindeki koruma elemanlarına bakmak gerekir. Aynı katta ya da bitişik dairelerde elektrik varken sizde yoksa ana şalter, kaçak akım rölesi veya daire içi bir hat atmış olabilir. Bu ayrım hem doğru kişiyi aramanızı hem de bir servis çağırmanın gerekip gerekmediğini anlamanızı sağlar.",
      ],
    },
    {
      h: "Şebeke kesintisinde ne yapılır?",
      p: [
        "Şebekeden kaynaklı kesintiler planlı bakım, hava koşulları ya da dağıtım hattındaki bir arıza nedeniyle olabilir. Bu tür kesintileri bölgenizdeki elektrik dağıtım şirketi yönetir. Şirketin arıza hattına ya da resmi bildirim kanallarına başvurarak kesintinin bilinip bilinmediğini ve duyuru olup olmadığını öğrenebilirsiniz. Platformumuz dağıtım şirketi değildir ve şebeke kesintisini çözemez.",
        "Kesinti sürerken birkaç basit önlem almak iyi olur. Çalışan hassas cihazların fişini çekin; elektrik aniden geri geldiğinde ortaya çıkabilecek voltaj dalgalanması cihazlara zarar verebilir. Elektrikli ısıtıcıyı ve fırını kapalı konuma alın. Elektrik gelince ışıkları ve cihazları birer birer devreye almak, ani yüklenmeyi azaltır.",
        "Mum kullanıyorsanız yangın riskine dikkat edin. Mümkünse pille çalışan lamba ya da el feneri tercih edin.",
      ],
    },
    {
      h: "Yalnızca sizde kesikse panoda neye bakmalısınız?",
      p: [
        "Panoda önce ana şalterin ve kaçak akım rölesinin durumuna bakın. Kollardan biri aşağıdaysa o koruma elemanı atmış demektir. Atma nedenini cihazlardan biri ya da bir hat arızası oluşturmuş olabilir. Önce yüksek güçlü cihazların fişini çekin, sonra ilgili kolu bir kez kaldırmayı deneyin; hemen yeniden atıyorsa tekrar denemeyin.",
        "Hiçbir kol atmamış gibi görünüyor ama elektrik yoksa daha derin bir sorun olabilir. Bu durumda elektrik sayacına ve daire girişine ait bölümün sorumluluğu başka olabilir; evde müdahale etmeye çalışmayın. Pano kapağını açmak ya da bağlantılara dokunmak tehlikelidir. Sebebi bulunamayan kesintilerde bağımsız bir servis sağlayıcıdan destek istemek en güvenli yoldur.",
      ],
    },
    {
      h: "Eskişehir'de mevsim ve yapıya göre dikkat edilecekler",
      p: [
        "Sert kışlarda kar, buz ve rüzgâr hatlara zarar verebilir; aynı zamanda ısıtma ihtiyacı yükseldiği için şebeke üzerindeki yük artar. Kesinti sırasında ısıtıcılar çalışmadığı için evin soğuması hızlı olur; bu yüzden battaniye, termos ve pille çalışan aydınlatma gibi hazırlıklar faydalı olur. Soba ya da yakıtlı ısıtıcı kullanırken havalandırmaya özellikle dikkat etmek gerekir.",
        "Odunpazarı'ndaki eski yapılarda ortak sayaç ve pano düzeni farklı olabilir; bu yüzden kesintinin kaynağını bina yöneticisiyle birlikte kontrol etmek gerekebilir. Tepebaşı'ndaki sitelerde ortak alan elektriğinin ayrı bir yapısı olduğundan site yönetimi bilgi verebilir. Öğrenci evlerinde ev sahibiyle iletişim kurmak, ilçelerdeki müstakil evlerde ise dış hat ve direk durumuna bakmak gerekebilir; direğe ya da düşmüş hatta asla yaklaşmayın.",
      ],
    },
  ],
  causes: [
    {
      t: "Şebeke veya bölgesel kesinti",
      d: "Planlı bakım, hava koşulları ya da dağıtım hattı arızası çevredeki birçok bina için elektriği keser.",
    },
    {
      t: "Ana şalterin atması",
      d: "Toplam yük ya da arıza nedeniyle ana şalter devreyi keser ve bütün daire elektriksiz kalır.",
    },
    {
      t: "Kaçak akım rölesinin atması",
      d: "Nem, arızalı cihaz ya da yalıtım sorunu nedeniyle röle devreyi keser; bu bir güvenlik göstergesidir.",
    },
    {
      t: "Daire içi hat arızası",
      d: "Hat üzerindeki bir bağlantı ya da kablo hasarı belirli bölümlerin ya da bütün dairenin elektriğini kesebilir.",
    },
    {
      t: "Bina ortak tesisat sorunu",
      d: "Ortak pano, sayaç ya da bina ana hattındaki bir arıza birden fazla daireyi etkileyebilir.",
    },
    {
      t: "Yüksek güçlü cihazların birlikte çalışması",
      d: "Kış aylarında ısıtıcı, fırın ve su ısıtıcısı gibi cihazların birlikte kullanılması koruma elemanlarının devreyi kesmesine yol açabilir.",
    },
  ],
  steps: [
    {
      t: "Çevreyi kontrol edin",
      d: "Komşu pencerelere, sokak aydınlatmasına ve bina girişine bakın. Kesintinin yalnızca sizde mi yoksa çevrede de mi olduğunu belirleyin.",
    },
    {
      t: "Şebeke kesintisini bildirin",
      d: "Çevrede de elektrik yoksa bölgenizdeki elektrik dağıtım şirketinin arıza hattına ya da resmi bildirim kanallarına başvurun.",
    },
    {
      t: "Hassas cihazları koruyun",
      d: "Bilgisayar, televizyon ve buzdolabı gibi cihazların fişini çekin; ani dönüşte oluşabilecek dalgalanmadan korunmuş olurlar.",
    },
    {
      t: "Panoyu dışarıdan inceleyin",
      d: "Yalnızca sizde kesikse ana şalter ve kaçak akım rölesinin durumuna bakın. Pano kapağını açmayın ve ellerinizin kuru olduğundan emin olun.",
    },
    {
      t: "Atan kolu bir kez kaldırın",
      d: "Yüksek güçlü cihazları çıkardıktan sonra denerseniz bir kez deneyin. Yeniden atıyorsa durun.",
    },
    {
      t: "Elektrik gelince cihazları sırayla açın",
      d: "Işıkları ve cihazları tek tek devreye alın; sorun varsa hangi cihazda çıktığını anlarsınız.",
    },
  ],
  dont: [
    "Kesinti sırasında pano kapağını açıp içeride bir şey aramayın.",
    "Düşmüş kabloya, direğe ya da trafoya yaklaşmayın; yakın durmak bile tehlikelidir.",
    "Kapalı alanda jeneratör, mangal ya da yakıtlı ısıtıcı çalıştırmayın; zehirli gaz tehlikesi vardır.",
    "Elektrik gelir gelmez tüm ısıtıcı ve cihazları aynı anda devreye almayın.",
    "Mumu gözetimsiz bırakmayın ve perde gibi yanıcı malzemelerin yanına koymayın.",
  ],
  call: [
    "Yalnızca sizde elektrik yoksa ve panoda atan bir koruma elemanı görünmüyorsa.",
    "Atan şalter ya da röle kaldırılır kaldırılmaz yeniden atıyorsa.",
    "Kesinti sırasında ya da öncesinde yanık kokusu, patlama sesi veya kıvılcım olduysa.",
    "Elektrik geldiğinde bazı prizler ya da lambalar çalışmıyorsa.",
    "Kesintiler tekrarlıyor ve şebeke kaynaklı olmadığı anlaşılıyorsa.",
  ],
  faq: [
    {
      q: "Elektrik kesintisinin şebekeden mi evden mi olduğunu nasıl anlarım?",
      a: "Komşu pencerelerde ve sokakta ışık olup olmadığına bakın. Çevrede de elektrik yoksa şebeke kaynaklı olması muhtemeldir. Yalnızca sizdeyse panodaki ana şalter ve kaçak akım rölesini dışarıdan kontrol edin. Emin olamazsanız bölgenizdeki elektrik dağıtım şirketinin arıza hattından bilgi alabilirsiniz.",
    },
    {
      q: "Kesinti bittiğinde cihazlara zarar gelir mi?",
      a: "Elektrik aniden geri geldiğinde voltaj dalgalanması hassas cihazlara zarar verebilir. Bunu önlemek için kesinti başlar başlamaz bilgisayar, televizyon ve benzeri cihazların fişini çekin. Elektrik geldikten sonra bir süre bekleyip cihazları sırayla takmak da güvenlidir. Bu, bir garanti değil, makul bir önlemdir.",
    },
    {
      q: "Sadece benim daire karanlıkta ama şalterler yerinde, ne yapmalıyım?",
      a: "Bu durumda sorun daire girişinde, sayaç ya da ortak tesisat tarafında olabilir. Komşularda elektrik varken sizde yoksa ev içinde müdahale etmeye çalışmayın. Bina yöneticisini bilgilendirin ve bağımsız bir servis sağlayıcıdan inceleme isteyin. Panoyu açmak tehlikelidir.",
    },
    {
      q: "Kesinti sırasında ısıtmayı nasıl yönetmeliyim?",
      a: "Elektrikli ısıtıcıları kapatın; elektrik geri geldiğinde ani yüklenmeyi önlersiniz. Kalın giyinin, tek odada toplanın ve kapı pencere aralıklarını kapatın. Soba ya da yakıtlı ısıtıcı kullanırsanız havalandırmayı ihmal etmeyin, çünkü karbonmonoksit zehirlenmesi ciddi bir risktir. Rahatsızlık hissederseniz 112'yi arayın.",
    },
    {
      q: "Kesintiler sık tekrarlıyorsa ne anlama gelir?",
      a: "Kesintilerin sebebi şebeke ise dağıtım şirketine bildirim yapmak gerekir. Yalnızca sizde tekrarlıyorsa aşırı yük, gevşek bağlantı ya da hat arızası olabilir. Atma zamanlarını, çalışan cihazları ve diğer belirtileri not edip bağımsız bir servis sağlayıcıdan yerinde inceleme isteyin.",
    },
  ],
  problems: ["salter-atiyor", "sigorta-neden-atar", "kacak-akim-rolesi-atiyor", "lambalar-calismiyor"],
  services: ["elektrik-ariza", "acil-elektrikci", "sigorta-salter", "elektrik-tesisati"],
};

export default doc;