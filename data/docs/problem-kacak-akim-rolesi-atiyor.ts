import type { ProblemDoc } from "./types";

const doc: ProblemDoc = {
  slug: "kacak-akim-rolesi-atiyor",
  meta: {
    title: "Kaçak Akım Rölesi Atıyor: Ne Yapmalı? | Eskişehir Elektrik",
    description:
      "Kaçak akım rölesi neden atar, test butonu ne işe yarar? Eskişehir'de evde güvenle yapabileceğiniz kontroller ve servise başvuru ölçütlerini öğrenin.",
  },
  severity: "dikkat",
  h1: "Kaçak Akım Rölesi Atıyor: Nedenini Nasıl Bulursunuz?",
  lead: "Kaçak akım rölesi, akımın istenmeyen bir yola gittiğini algıladığında devreyi keser; asıl görevi can güvenliğini korumaktır. Bu yüzden atmasını geçici bir sıkıntı değil, ciddiye alınması gereken bir uyarı olarak görmek gerekir. Rehberde atma nedenini nasıl daraltacağınızı ve ne zaman uzman desteği alacağınızı bulacaksınız.",
  sections: [
    {
      h: "Kaçak akım rölesi ne yapar ve neden atar?",
      p: [
        "Normal çalışmada bir cihaza giden akım ile geri dönen akım birbirine eşittir. Yalıtım bozulduğunda ya da su teması olduğunda akımın bir kısmı toprağa ya da bir insanın vücuduna kaçar. Röle bu farkı ölçer ve konutlarda tipik olarak 30 mA düzeyinde bir kaçak algıladığında devreyi çok kısa sürede keser. Bu değer, çarpılma riskini azaltmak için seçilmiş bir koruma seviyesidir.",
        "Rölenin atması arıza değil, korumanın çalıştığının göstergesidir. Sigorta kabloyu ve cihazı aşırı akıma karşı korur; röle ise insanı korur. Bu yüzden rölenin atmasını önlemek için ayarını değiştirmek ya da devre dışı bırakmak asla çözüm değildir. Amaç, kaçağın nereden geldiğini bulup gidermektir.",
      ],
    },
    {
      h: "Kaçağın kaynağını nasıl daraltırsınız?",
      p: [
        "Röle atınca hangi hattın ya da cihazın kaçak yaptığı bilinmez, ama basit bir eleme yöntemiyle yaklaşabilirsiniz. Önce evdeki cihazların mümkün olduğunca çoğunun fişini çekin; özellikle çamaşır makinesi, bulaşık makinesi, su ısıtıcısı, elektrikli ısıtıcı ve fırın gibi cihazlar kaçak yapmaya daha yatkındır. Ardından röleyi bir kez kaldırın.",
        "Röle tutuyorsa cihazları teker teker takın. Hangi cihazı taktığınızda atıyorsa kaçak büyük ihtimalle o cihazdadır; onu kullanmayı bırakın. Tüm cihazlar çıkarıldığı halde röle atıyorsa kaçak tesisatın kendisindedir. Bu durumda evde ilerlemeye çalışmak yerine kullanımı kısıtlayıp uzman desteği istemek gerekir.",
        "Rölenin test butonu da bilinmesi gereken bir parçadır. Düğmeye basıldığında röle atmalıdır; atmıyorsa rölenin kendisi bozulmuş olabilir. Test düzenli aralıklarla yapılmalıdır, ancak ürünün kılavuzundaki talimata uyulmalıdır.",
      ],
    },
    {
      h: "Nem, mevsim ve yapı etkisi",
      p: [
        "Nem kaçak akımın en sık nedenlerinden biridir. Yağışlı ve karlı günlerde balkon, bahçe, garaj ve dış aydınlatma hatları su alabilir; kar erime döneminde bu sorun artabilir. Banyoda, mutfakta ve çamaşır odasında buharlaşma ve sızıntılar da benzer etki yapar. Bu yüzden rölenin yalnızca belirli havalarda ya da belirli saatlerde atması önemli bir ipucudur.",
        "Odunpazarı'ndaki eski yapılarda yıpranmış yalıtım ve topraksız hatlar kaçak riskini artırabilir. Tepebaşı'ndaki yeni sitelerde ise bahçe aydınlatması, havuz ya da dış mekân prizleri kaçağın kaynağı olabilir. İlçelerdeki müstakil evlerde kümes, ahır, depo gibi ek yapılara uzanan hatlar, öğrenci evlerinde ise defalarca eklenen uzatma kabloları ve eski cihazlar röleyi sık atıran sebepler arasında yer alır.",
      ],
    },
    {
      h: "Röle atarken dikkat edilecek güvenlik noktaları",
      p: [
        "Röle atıyorsa evde bir noktada kaçak var demektir ve bu kaçak bir insan üzerinden de geçebilir. Metal yüzeylerde hafif bir çarpılma hissi, ıslak zeminde dokunulan cihazlarda karıncalanma ya da cihaz gövdesinde elektrik hissi duyuyorsanız o cihazı hemen bırakın. Bu belirtiler ciddi bir kaçak göstergesidir.",
        "Servis sağlayıcıyı çağırana kadar rölenin sürekli kaldırılıp denenmesinden kaçının. Her deneme kaçak devre üzerinde insanı tehlikeye atabilir. Eğer ev içinde yangın belirtisi, duman ya da bir kişide çarpılma varsa 112'yi arayın. Platformumuz hizmeti kendisi vermez; sizi anlaşmalı bağımsız servis sağlayıcılara yönlendirir.",
      ],
    },
  ],
  causes: [
    {
      t: "Nem veya su teması",
      d: "Banyo, balkon, bahçe ya da dış hatlarda yalıtımı aşan su, akımın toprağa kaçmasına yol açar.",
    },
    {
      t: "Arızalı bir cihaz",
      d: "Çamaşır makinesi, ısıtıcı, su ısıtıcısı gibi cihazların iç yalıtımı bozulabilir; röle yalnızca o cihaz çalışınca atar.",
    },
    {
      t: "Yıpranmış kablo yalıtımı",
      d: "Eski ya da hasar görmüş kablo yalıtımı akımın toprağa sızmasına izin verir.",
    },
    {
      t: "Nötr-toprak karışması",
      d: "Hatta nötr ve toprak iletkenlerinin yanlış temas etmesi röleyi gereksiz yere attırabilir.",
    },
    {
      t: "Birikmiş küçük kaçaklar",
      d: "Birçok cihazın küçük kaçaklarının toplamı rölenin eşiğini aşabilir; özellikle eski cihazlarda görülür.",
    },
    {
      t: "Rölenin kendisinin arızası",
      d: "Eskimiş ya da hasar görmüş bir röle yanlış atabilir; test butonu atmıyorsa da değişim gerekebilir.",
    },
  ],
  steps: [
    {
      t: "Çarpılma belirtisi var mı bakın",
      d: "Cihazlara dokunduğunuzda hafif bir çarpılma hissi varsa o cihazı bırakın. Islak zeminde hiçbir cihaza dokunmayın.",
    },
    {
      t: "Cihazların fişini çekin",
      d: "Özellikle çamaşır makinesi, ısıtıcı, su ısıtıcısı ve fırın gibi cihazları prizden çıkarın.",
    },
    {
      t: "Röleyi bir kez kaldırın",
      d: "Kuru ellerle ve kapalı pano kapağıyla kolu yukarı alın. Hemen atıyorsa tekrar denemeyin.",
    },
    {
      t: "Cihazları tek tek takın",
      d: "Röle tutuyorsa cihazları sırayla takın. Atmaya neden olanı ayırın ve kullanmayın.",
    },
    {
      t: "Atma koşullarını not alın",
      d: "Yağmurlu havada mı, belirli bir cihazla mı, belirli saatlerde mi atıyor? Bu bilgiler kaynağı bulmaya yardımcı olur.",
    },
    {
      t: "Servis talebi oluşturun",
      d: "Cihazlar çıkarılınca da atıyorsa ya da kaynağı bulamadıysanız bağımsız bir servis sağlayıcıdan yerinde ölçüm ve inceleme isteyin.",
    },
  ],
  dont: [
    "Röleyi devre dışı bırakmayın, köprülemeyin ya da yerine sıradan bir sigorta takmayın.",
    "Röle atıyor diye ısrarla kaldırıp denemeyin; kaçak varsa her deneme riskli olabilir.",
    "Islak ellerle ya da nemli zeminde pano ve cihazlara dokunmayın.",
    "Test butonuna basınca röle atmıyorsa rölenin içini açıp bakmayın; değişim için servis çağırın.",
    "Çarpılma hissettiğiniz cihazı kullanmaya devam etmeyin.",
  ],
  call: [
    "Cihazların hepsi çıkarıldığında da röle atıyorsa; kaçak tesisatta olabilir.",
    "Röle kaldırılır kaldırılmaz yeniden atıyorsa.",
    "Herhangi bir cihaza ya da metal yüzeye dokunduğunuzda çarpılma hissi yaşadıysanız.",
    "Test butonuna basınca röle atmıyorsa ya da röle bozuk görünüyorsa.",
    "Yağmur ya da nemli havada sık atıyor ve su alan bir hattan şüpheleniyorsanız.",
  ],
  faq: [
    {
      q: "Kaçak akım rölesi neden 30 mA değerindedir?",
      a: "Konutlarda yaygın olarak 30 mA kullanılır; bu değer, vücuttan geçen akımın ciddi zarar vermeden önce devrenin kesilmesini hedefler. Rölenin görevi can güvenliğini korumaktır. Hassasiyet değeri ürünün üzerinde yazar. Değeri değiştirmeye çalışmayın; ihtiyaç duyulursa yetkin bir servis sağlayıcı değerlendirir.",
    },
    {
      q: "Test butonuna ne sıklıkla basmalıyım?",
      a: "Üreticilerin kılavuzlarında genellikle düzenli aralıklarla test önerilir. Düğmeye bastığınızda röle atmalıdır. Atmıyorsa koruma işlevi tehlikede olabilir ve rölenin değişmesi gerekebilir. Testi kuru ellerle yapın, rölenin içini açmayın. Kendi ürününüz için kılavuzdaki talimata uymak en doğrusudur.",
    },
    {
      q: "Röle yalnızca yağmurda atıyorsa ne anlama gelir?",
      a: "Büyük olasılıkla dış hatlarda, balkonda, bahçede ya da bir bağlantı kutusunda su girişi vardır. Nem yalıtımı aşıp kaçağa yol açar. Bu bölgelere dokunmayın ve su görünen alanlardan uzak durun. Atma zamanlarını not edip bağımsız bir servis sağlayıcıdan inceleme isteyin.",
    },
    {
      q: "Röle atınca elektrik gidiyor, geçici olarak devre dışı bırakabilir miyim?",
      a: "Hayır. Röleyi devre dışı bırakmak koruma işlevini ortadan kaldırır ve çarpılma riskini artırır. Elektrik gidiyorsa nedenini bulmak gerekir. Cihazları çıkarıp bir kez deneyin; hâlâ atıyorsa kullanmayı sınırlayın ve bağımsız bir servis sağlayıcıdan destek isteyin.",
    },
    {
      q: "Sigorta ile kaçak akım rölesi arasındaki fark nedir?",
      a: "Sigorta aşırı akım ve kısa devreye karşı kabloyu ve cihazı korur. Röle ise toprağa ya da insana kaçan küçük akımları algılar ve can güvenliğini hedefler. İkisi birlikte çalışır; biri diğerinin yerine geçmez. Panoda iki farklı eleman olarak bulunurlar ve atma nedenleri farklıdır.",
    },
  ],
  problems: ["elektrik-kacagi", "sigorta-neden-atar", "salter-atiyor", "elektrik-kesildi"],
  services: ["kacak-akim-roles", "elektrik-kacagi", "sigorta-salter", "acil-elektrikci"],
};

export default doc;