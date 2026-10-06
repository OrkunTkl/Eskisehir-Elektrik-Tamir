import type { ProblemDoc } from "./types";

const doc: ProblemDoc = {
  slug: "priz-calismiyor",
  meta: {
    title: "Priz Çalışmıyor: Nedenleri ve Çözüm | Eskişehir Elektrik",
    description:
      "Priz çalışmıyorsa sorun cihazda mı, hatta mı? Eskişehir'de evde güvenle yapabileceğiniz kontroller ve bağımsız servise başvuru ölçütleri bu rehberde.",
  },
  severity: "dikkat",
  h1: "Priz Çalışmıyor: Sorun Cihazda mı, Hatta mı?",
  lead: "Bir prizin çalışmaması çoğu zaman basit bir nedene bağlıdır, ama ısınma, koku ya da kararma varsa durum değişir. Bu rehber, sorunun tek prizde mi yoksa bütün odada mı olduğunu ayırt etmenize ve güvenli kalarak ne yapacağınıza karar vermenize yardım eder.",
  sections: [
    {
      h: "Önce kapsamı belirleyin: tek priz mi, bütün oda mı?",
      p: [
        "İlk soru şudur: yalnızca bir priz mi çalışmıyor, yoksa aynı odadaki ya da aynı hattaki birkaç priz mi? Bu ayrım sorunun yerini büyük ölçüde gösterir. Tek prizde sorun varsa genellikle priz, fiş ya da o prize bağlı cihaz şüphelidir. Birkaç priz birlikte gidiyorsa ortak hat, sigorta ya da bir ara bağlantı devrede olabilir.",
        "Bunu anlamak için prize çalıştığından emin olduğunuz küçük bir cihaz takın; örneğin telefon şarj aleti. Çalışıyorsa sorun önceki cihazdadır. Çalışmıyorsa komşu odadaki prizlerde de deneme yapın. Elektrik gelen ve gitmeyen prizleri listelemek, servis sağlayıcıya verebileceğiniz çok değerli bir bilgidir.",
      ],
    },
    {
      h: "Panoya bakmak ne zaman işe yarar?",
      p: [
        "Priz hattı genellikle panoda ayrı bir sigortaya bağlıdır. O sigorta atmışsa aynı hattaki bütün prizler birden çalışmaz hale gelir. Bu yüzden panoya bakıp kolu aşağıda kalan bir sigorta olup olmadığını kontrol etmek mantıklıdır. Pano kapağını açmadan, yalnızca dışarıdan görünen kollara bakmak yeterlidir.",
        "Aşağıda kalan bir sigorta görürseniz önce o hattaki cihazların fişini çekin, sonra sigortayı bir kez kaldırın. Sigorta tutuyorsa cihazları sırayla takarak hangisinin sorun çıkardığını arayabilirsiniz. Sigorta yeniden atıyorsa ısrar etmeyin. Mutfak gibi yüksek güçlü cihazların bulunduğu yerlerde sorun çoğunlukla bu şekilde kendini gösterir.",
        "Sigorta atmamışsa ve prizlerin hepsi hâlâ çalışmıyorsa, hattaki bir bağlantı gevşemiş olabilir. Bu durumda evde bir şey yapmaya çalışmak yerine servis desteği almak daha güvenlidir.",
      ],
    },
    {
      h: "Prizin kendisinde sorun varsa nasıl anlaşılır?",
      p: [
        "Prizin kendisi arızalıysa genellikle bazı işaretler görünür. Fiş gevşek oturuyor ya da prizden dışarı kayıyorsa iç kontaklar yıpranmış olabilir. Çalışırken fiş sıcaksa, priz yüzeyi kararmışsa, plastik kısım erimişse ya da hafif yanık kokusu geliyorsa bağlantı ısınıyordur. Bu belirtiler, prizin hemen kullanımdan çıkarılması gerektiğini gösterir.",
        "Eskişehir'de kış aylarında prize bağlanan ısıtıcılar yüksek akım çeker ve zayıf bağlantıyı daha çabuk ısıtır. Bu yüzden ısıtıcı, su ısıtıcısı ya da fırın gibi cihazların takıldığı priz diğerlerinden daha çabuk yıpranır. Odunpazarı'ndaki eski yapılarda eski tip prizler ve topraksız hatlar, öğrenci evlerinde ise defalarca takılıp sökülen ve çoklu priz yüklenen prizler bu açıdan daha riskli olabilir.",
      ],
    },
    {
      h: "Kendi başınıza yapabilecekleriniz ve yapamayacaklarınız",
      p: [
        "Güvenli olan kontroller şunlardır: başka bir cihaz denemek, fişi sıkıca yerleştirmek, uzatma kablosunu devre dışı bırakmak ve panodaki sigortaya dışarıdan bakmak. Bunlar sorunun yerini daraltır ve çoğu zaman servis çağırmadan önce neyin işlemediğini anlamanıza yardım eder.",
        "Priz kapağını açmak, vidaları sıkmak ya da kabloyu kontrol etmek ise sigorta kapalı olsa bile risklidir; çünkü hat bilgisi yanlış olabilir ya da başka bir devre prize bağlı kalabilir. Bu işlemler yetkin bir servis sağlayıcıya bırakılmalıdır. Platformumuz hizmeti kendisi vermez; sizi anlaşmalı bağımsız servis sağlayıcılara yönlendirir.",
      ],
    },
  ],
  causes: [
    {
      t: "Hattın sigortasının atması",
      d: "Aynı sigortaya bağlı bütün prizler birlikte kesilir. Aşırı yük ya da arızalı bir cihaz bunun sık nedenidir.",
    },
    {
      t: "Gevşemiş bağlantı",
      d: "Priz arkasındaki kablo bağlantısı gevşemiş olabilir; aralıklı çalışma ve ısınma görülür.",
    },
    {
      t: "Yanmış veya yıpranmış priz",
      d: "İç kontaklar ısınma nedeniyle bozulur; fiş gevşek oturur, kararma ve yanık kokusu görülebilir.",
    },
    {
      t: "Cihazın veya fişin arızası",
      d: "Sorun prizde değil cihazın kablosunda, fişinde ya da iç aksamında olabilir; başka cihazla denemek ayırt eder.",
    },
    {
      t: "Uzatma kablosu veya çoklu priz",
      d: "Arızalı bir uzatma ya da fazla yüklenmiş çoklu priz, prizin çalışmadığı izlenimini verebilir.",
    },
    {
      t: "Kaçak akım rölesinin atması",
      d: "Röle atınca ilgili hattaki ya da bütün evdeki prizler elektriksiz kalır; panoda röle kolu kontrol edilmelidir.",
    },
  ],
  steps: [
    {
      t: "Başka bir cihaz deneyin",
      d: "Prize çalıştığından emin olduğunuz küçük bir cihaz takın. Çalışıyorsa sorun önceki cihazdadır.",
    },
    {
      t: "Uzatma kablosunu devre dışı bırakın",
      d: "Uzatma ya da çoklu priz kullanıyorsanız çıkarın ve cihazı doğrudan prize takarak deneyin.",
    },
    {
      t: "Diğer prizleri kontrol edin",
      d: "Aynı odadaki ve komşu odadaki prizleri deneyin. Hangi prizlerin çalışmadığını not edin.",
    },
    {
      t: "Panoya dışarıdan bakın",
      d: "Sigorta ya da kaçak akım rölesinin atıp atmadığına bakın. Pano kapağını açmayın ve ellerinizin kuru olduğundan emin olun.",
    },
    {
      t: "Sigortayı en fazla bir kez kaldırın",
      d: "Hattaki cihazları çıkardıktan sonra denerseniz bir kez deneyin. Yeniden atıyorsa durun.",
    },
    {
      t: "Servis talebi oluşturun",
      d: "Priz çalışmıyor ve nedenini bulamadıysanız ya da ısınma belirtisi varsa bağımsız bir servis sağlayıcıdan inceleme isteyin.",
    },
  ],
  dont: [
    "Priz kapağını açmayın, vidaları sıkmaya ya da kabloları çekmeye çalışmayın.",
    "Isınmış, kararmış ya da yanık kokulu prizi kullanmaya devam etmeyin.",
    "Çalışmayan prize çivi, tel ya da metal bir nesne sokmayın.",
    "Islak elle ya da nemli zeminde prizle ilgilenmeyin.",
    "Priz çalışmadığı için yüksek güçlü cihazı uzatma kablosuyla başka prize bağlayıp yükü artırmayın.",
  ],
  call: [
    "Priz sıcaksa, kararmışsa ya da yanık kokusu geliyorsa kullanmayı bırakın ve servis çağırın.",
    "Birkaç priz aynı anda çalışmıyor ve panoda atan bir sigorta yoksa.",
    "Sigorta ya da röle priz hattında tekrar tekrar atıyorsa.",
    "Prizden kıvılcım ya da çıtırtı geliyor, fiş gevşek oturuyorsa.",
    "Priz bazen çalışıp bazen çalışmıyorsa; aralıklı arıza gevşek bağlantı belirtisi olabilir.",
  ],
  faq: [
    {
      q: "Tek bir priz çalışmıyorsa sigorta mı atmıştır?",
      a: "Genellikle hayır. Sigorta atınca aynı hattaki bütün prizler birlikte gider. Tek priz çalışmıyorsa priz, fiş ya da bağlı cihaz şüphelidir. Yine de panoya bakmakta zarar yoktur. Başka cihazla deneyip sonucu not etmeniz, servis sağlayıcının nedeni daha hızlı daraltmasına yardım eder.",
    },
    {
      q: "Prizi kendim açıp kontrol edebilir miyim?",
      a: "Önermiyoruz. Sigorta kapalı olsa bile hat bilgisi yanlış olabilir ve prize başka bir devre bağlı kalabilir. İçeride gevşek ya da yanmış bir kontak varsa müdahale yaralanma ve yangın riski taşır. Priz kapağını açmak ve bağlantıyı onarmak yetkin bir servis sağlayıcının işidir.",
    },
    {
      q: "Priz çalışırken ısınıyor, bu normal mi?",
      a: "Hafif ılıklık bazı yüklerde görülebilir, ancak elle tutulamayacak sıcaklık, kararma ya da koku normal değildir. Bu, kontakta gevşeklik ya da aşırı yük belirtisidir. Cihazı çıkarın, prizi kullanmayın ve servis talebi oluşturun. Duman ya da alev varsa 112'yi arayın.",
    },
    {
      q: "Priz sadece bazen çalışıyorsa sorun nedir?",
      a: "Aralıklı çalışma çoğunlukla gevşek bağlantıya ya da aşınmış kontağa işaret eder. Fişi oynatınca çalışıp duruyorsa prizin iç yapısı bozulmuş olabilir. Bu arıza zamanla ısınmaya yol açabilir, o yüzden ertelemek doğru değildir. Prizi kullanmayı bırakıp inceleme isteyin.",
    },
    {
      q: "Çalışmayan prizi değiştirmek için ne yapmalıyım?",
      a: "Kendiniz değiştirmeye çalışmayın. Önce sorunu daraltın: başka cihaz deneyin, diğer prizlere ve panoya bakın, bulgularınızı not edin. Ardından bağımsız bir servis sağlayıcıdan inceleme isteyin. Gerekirse priz değişimi ya da hat kontrolü yetkin kişilerce yapılır.",
    },
  ],
  problems: ["sigorta-neden-atar", "salter-atiyor", "yanik-kokusu", "kivilcim-olusuyor"],
  services: ["priz-anahtar-ariza", "elektrik-ariza", "sigorta-salter", "acil-elektrikci"],
};

export default doc;