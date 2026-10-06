import type { ProblemDoc } from "./types";

const doc: ProblemDoc = {
  slug: "sigorta-neden-atar",
  meta: {
    title: "Sigorta Neden Atar? Eskişehir Elektrik Arıza Rehberi",
    description:
      "Sigorta neden atar, aşırı yük mü kısa devre mi? Eskişehir'de evde yapabileceğiniz güvenli kontroller ve bağımsız servise başvurma ölçütleri bu rehberde.",
  },
  severity: "dikkat",
  h1: "Sigorta Neden Atar ve Ne Yapmalısınız?",
  lead: "Sigorta atması, tesisatın kendini korumak için devreyi kesmesidir; yani çoğu zaman bir arızanın değil bir uyarının işaretidir. Bu rehberde atmanın nedenini nasıl daraltacağınızı, evde nelerin güvenle denenebileceğini ve hangi durumda bağımsız bir servis sağlayıcıya başvurmanız gerektiğini bulacaksınız.",
  sections: [
    {
      h: "Sigorta atma mekanizması nasıl çalışır?",
      p: [
        "Evlerdeki otomatik sigortalar iki şeye karşı koruma sağlar. Birincisi uzun süre fazla akım çekilmesidir; bu durumda sigortanın içindeki ısıya duyarlı parça yavaşça ısınır ve devreyi keser. İkincisi kısa devredir; akım bir anda çok yükselir ve sigortanın manyetik kısmı saniyenin kesirlerinde devreyi açar.",
        "Bu ayrım size ipucu verir. Sigorta birkaç dakika çalıştıktan sonra atıyorsa genellikle hat aşırı yüklenmiştir. Anahtarı kapatır kapatmaz ya da bir cihazı fişe takar takmaz anında atıyorsa kısa devre veya cihaz kaynaklı bir arıza olasılığı yükselir. Sigorta bir kablonun ya da cihazın zarar görmesini önlemek için feda edilen parçadır; onu suçlamak yerine neden devreye girdiğini anlamak gerekir.",
      ],
    },
    {
      h: "Tek bir cihaz mı, bütün hat mı sorunlu?",
      p: [
        "Arızayı daraltmanın en pratik yolu, atan sigortanın hangi hatta ait olduğunu bulmaktır. Çoğu panoda sigortaların üstünde mutfak, salon, yatak odası gibi etiketler bulunur. Etiket yoksa sigorta atınca hangi odaların ya da hangi prizlerin elektriksiz kaldığına bakarak hattı belirleyebilirsiniz. Bu bilgiyi not etmek servis talebinde zaman kazandırır.",
        "Ardından o hattaki tüm cihazların fişini çekin ve sigortayı bir kez kaldırın. Sigorta tutuyorsa cihazları teker teker takın. Hangisini taktığınızda atıyorsa sorun büyük olasılıkla o cihazdadır. Cihazlar çıkarıldığı halde sigorta yine atıyorsa sorun hattın kendisindedir; bu durumda kablo, priz veya bağlantı arızası olabilir ve evde daha fazla deneme yapmak doğru değildir.",
        "Aynı hatta aynı anda çalışan cihazlar da önemlidir. Su ısıtıcısı, fırın, ütü ve elektrikli ısıtıcı gibi yüksek güçlü cihazlar tek başına makul olsa bile bir araya geldiğinde hattın taşıyabileceği akımı aşabilir.",
      ],
    },
    {
      h: "Eskişehir'de kış aylarında neden daha sık yaşanır?",
      p: [
        "Sert geçen Eskişehir kışlarında elektrikli ısıtıcılar ve ek ısıtma ürünleri gün boyu devrede kalabiliyor. Bu cihazların çoğu yüksek güçte çalışır ve aynı prizden ya da aynı hattan beslendiğinde sigortayı zorlar. Akşam saatlerinde mutfak ve ısıtıcı birlikte çalışınca atma şikâyetleri doğal olarak artar.",
        "Odunpazarı'ndaki eski yapılarda tesisat bazen bugünkü cihaz yüküne göre kurulmamıştır; ince kesitli kablolar ve yıpranmış bağlantılar bu yüke dayanmakta zorlanabilir. Tepebaşı'ndaki yeni sitelerde ise sorun daha çok uzatma kablosu ve çoklu priz kullanımından doğar. Öğrenci evlerinde birkaç kişinin aynı hattı paylaşması, ilçelerdeki müstakil evlerde ise dış ünite ve bahçe hattı gibi ek yükler tabloya eklenir.",
      ],
    },
    {
      h: "Sigorta atınca neleri bilmelisiniz?",
      p: [
        "Sigorta atması her zaman ciddi bir arıza değildir. Yoğun yük altında bir kez atıp cihaz azaltılınca bir daha atmıyorsa genellikle yükün dağıtılması yeterli olur. Buna karşılık sürekli aynı hatta tekrar ediyorsa, yanık kokusu, ısınma veya ses eşlik ediyorsa ya da sigorta kalkar kalkmaz yeniden atıyorsa nedenin bir uzman tarafından incelenmesi gerekir.",
        "Önemli bir uyarı: sigortanın sürekli atması onu daha büyük amperli bir parçayla değiştirmek için sebep değildir. Sigorta, kabloyu korumak için o kablonun taşıyabileceği akıma göre seçilir. Daha büyüğünü takmak kabloyu aşırı ısıtır ve yangın riskini artırır. Pano içindeki her türlü değişiklik, yetkin ve bağımsız bir servis sağlayıcıya bırakılmalıdır. Platformumuz hizmeti kendisi vermez, sizi anlaşmalı bağımsız servis sağlayıcılara yönlendirir.",
      ],
    },
  ],
  causes: [
    {
      t: "Aşırı yük",
      d: "Aynı hatta birden fazla yüksek güçlü cihaz çalışınca hattın taşıyabileceği akım aşılır ve sigorta ısıl koruma ile devreyi keser.",
    },
    {
      t: "Kısa devre",
      d: "Faz ve nötr ya da faz ve toprak arasında istenmeyen bir temas oluşur; akım ani yükselir ve sigorta anında atar.",
    },
    {
      t: "Arızalı cihaz",
      d: "Isıtıcı, çamaşır makinesi, fırın gibi bir cihazın iç yalıtımı bozulmuş olabilir; sigorta yalnızca o cihaz çalışınca atar.",
    },
    {
      t: "Gevşek veya yanmış bağlantı",
      d: "Priz, anahtar ya da klemens bağlantısındaki gevşeklik ısınmaya neden olur ve sigortanın beklenmedik zamanlarda atmasına yol açabilir.",
    },
    {
      t: "Yıpranmış kablo yalıtımı",
      d: "Eski binalarda yıllar içinde sertleşen ya da kemirgenlerin zarar verdiği kablolar kısa devreye açık hale gelir.",
    },
    {
      t: "Nem ve su teması",
      d: "Banyo, balkon ve bahçe hatlarında sızan su yalıtımı aşar; sigorta ya da kaçak akım rölesi devreyi keser.",
    },
  ],
  steps: [
    {
      t: "Sakin olun ve hattı belirleyin",
      d: "Hangi odanın veya hattın elektriksiz kaldığını not edin. Elleriniz ıslaksa ya da zemin nemliyse panoya yaklaşmayın.",
    },
    {
      t: "Hattaki cihazların fişini çekin",
      d: "Şüpheli hattaki tüm cihazları ve uzatma kablolarını prizden çıkarın. Isıtıcıyı ve su ısıtıcısını da çıkarın.",
    },
    {
      t: "Sigortayı bir kez kaldırın",
      d: "Pano kapağı kapalıyken yalnızca sigortanın kolunu kullanın. Sigorta tutuyorsa sorun cihaz kaynaklı olabilir; anında atıyorsa tekrar denemeyin.",
    },
    {
      t: "Cihazları tek tek takın",
      d: "Cihazları sırayla takıp çalıştırın. Hangi cihazda sigorta atıyorsa onu kullanmayı bırakın ve not edin.",
    },
    {
      t: "Yükü dağıtın",
      d: "Sigorta cihazlar çıkarıldığında tutuyor ve yük arttıkça atıyorsa yüksek güçlü cihazları aynı anda çalıştırmayın.",
    },
    {
      t: "Gerekirse servis talebi oluşturun",
      d: "Atma tekrar ediyorsa hat, cihaz ve atma anına dair notlarınızla bağımsız bir servis sağlayıcıdan inceleme isteyin.",
    },
  ],
  dont: [
    "Sigortayı arka arkaya zorlayarak kaldırmayın; kısa devre varsa her deneme kabloyu ve cihazı daha fazla zorlar.",
    "Sigortanın amperini büyütmeyin ve sigortayı tel veya benzeri bir malzemeyle köprülemeyin.",
    "Pano kapağını, priz veya kablo içini açmayın; tesisat içine müdahale yetkin kişilere aittir.",
    "Elleriniz ıslakken ya da nemli zeminde sigortaya dokunmayın.",
    "Atan hattı uzatma kablosu ve çoklu prizlerle büyütüp yükü artırmayın.",
  ],
  call: [
    "Sigorta kaldırılır kaldırılmaz tekrar atıyorsa ve cihazlar çıkarıldığı halde sorun sürüyorsa.",
    "Aynı hatta günlerdir tekrar tekrar atıyorsa ve yükü azalttığınız halde düzelmiyorsa.",
    "Panoda, priz veya anahtarda ısınma, yanık kokusu, kararma ya da çıtırtı varsa.",
    "Sigorta atarken kıvılcım veya patlama sesi duyulduysa ya da çarpılma hissi yaşandıysa.",
    "Eski tesisatta artan cihaz yükü nedeniyle sigorta sık atıyorsa ve hat kapasitesinin kontrolünü istiyorsanız.",
  ],
  faq: [
    {
      q: "Sigorta attığında hemen tekrar kaldırabilir miyim?",
      a: "Önce hattaki cihazların fişini çekin, ardından sigortayı yalnızca bir kez kaldırın. Sigorta hemen yeniden atarsa tekrar denemeyin; bu durum kısa devreye ya da hat arızasına işaret edebilir. Zorlamak kabloyu ve cihazı zarar görme riskine sokar. Bu noktada bağımsız bir servis sağlayıcıdan inceleme istemek daha doğru olur.",
    },
    {
      q: "Sigorta ile kaçak akım rölesi aynı şey midir?",
      a: "Hayır. Sigorta aşırı akım ve kısa devreye karşı kabloyu ve cihazı korur. Kaçak akım rölesi ise akımın toprağa ya da insan vücuduna kaçtığını algılar ve can güvenliğini hedefler. Tipik bir röle 30 mA civarında kaçakta devreyi keser ve üzerinde test butonu bulunur. İkisi birbirinin yerine geçmez; ikisi de birlikte kullanılır.",
    },
    {
      q: "Isıtıcı çalışınca sigortanın atması normal mi?",
      a: "Isıtıcı yüksek güçte çalıştığı için hattı zorlayabilir, ancak sürekli atma normal sayılmaz. Isıtıcıyı tek başına bir prize takıp yalnızca o cihazı çalıştırmayı deneyin. Yine atıyorsa cihaz arızalı ya da hat yetersiz olabilir. Isıtıcıyı uzatma kablosuyla değil doğrudan prize bağlamak önemlidir; ısınan fiş veya kablo görürseniz kullanmayı bırakın.",
    },
    {
      q: "Eski evlerde sigorta daha sık mı atar?",
      a: "Yıpranmış kablolar, eskiyen bağlantılar ve bugünkü cihaz yüküne göre kurulmamış tesisat nedeniyle eski yapılarda atma görülebilir. Bu bir kural değildir; yeni binalarda da aşırı yük ya da arızalı cihaz yüzünden atma yaşanır. Tesisatın durumunu anlamanın yolu, bağımsız bir servis sağlayıcının yerinde yapacağı incelemedir.",
    },
    {
      q: "Sigorta atınca hangi bilgileri not etmeliyim?",
      a: "Hangi sigortanın attığını, atma anında hangi cihazların çalıştığını, atmanın saniyeler içinde mi yoksa dakikalar sonra mı olduğunu ve daha önce benzer atmaların olup olmadığını yazın. Yanık kokusu, ses ya da ısınma gibi ek belirtileri de ekleyin. Bu notlar servis sağlayıcının sorunu hızlıca anlamasına yardımcı olur.",
    },
  ],
  problems: ["salter-atiyor", "kacak-akim-rolesi-atiyor", "priz-calismiyor", "yanik-kokusu"],
  services: ["sigorta-salter", "elektrik-ariza", "elektrik-tesisati", "acil-elektrikci"],
};

export default doc;