import type { ProblemDoc } from "./types";

const doc: ProblemDoc = {
  slug: "salter-atiyor",
  meta: {
    title: "Şalter Atıyor: Nedenleri ve İlk Adımlar | Eskişehir Elektrik",
    description:
      "Ana şalter sürekli atıyorsa nedeni ne olabilir? Eskişehir'de evde güvenle yapabileceğiniz kontroller ve bağımsız servise başvuru ölçütlerini öğrenin.",
  },
  severity: "dikkat",
  h1: "Şalter Sürekli Atıyor: Önce Neye Bakmalısınız?",
  lead: "Şalter atması, tesisatın sizi ve cihazlarınızı korumak için devreyi kesmesidir. Bütün dairenin elektriği birden gidiyorsa sorun tek bir hatta değil, ana beslemeye yakın bir noktada olabilir. Aşağıda atma biçimini nasıl okuyacağınızı ve ne zaman profesyonel destek almanız gerektiğini bulacaksınız.",
  sections: [
    {
      h: "Şalter ile sigorta arasındaki fark",
      p: [
        "Günlük dilde sigorta, şalter ve röle sık sık birbirine karıştırılır. Panodaki küçük, tek hatlı koruma elemanlarına genellikle otomatik sigorta denir. Daire girişindeki, tüm tesisatı birlikte kesen daha büyük kola ise çoğunlukla ana şalter ya da kompakt şalter denir. Bunun yanında kaçak akım rölesi ayrı bir görev yapar.",
        "Ayrımı bilmek önemlidir; çünkü hangisinin attığı sorunun nerede olduğunu gösterir. Tek bir odanın elektriği gidiyorsa genellikle o hattın sigortası devrededir. Bütün daire karanlıkta kalıyorsa ana şalter, kaçak akım rölesi ya da şebekenin kendisi söz konusu olabilir. Önce panoya bakıp hangi kolun aşağı indiğini görmek, sonraki tüm adımları belirler.",
      ],
    },
    {
      h: "Atma biçimi size ne söyler?",
      p: [
        "Şalterin hemen mi, bir süre sonra mı attığı çok şey anlatır. Belirli bir cihaz çalıştırılınca ya da akşam yüklenme saatlerinde atıyorsa aşırı yük öne çıkar. Hiçbir şey çalıştırmadığınız halde, özellikle yağmurlu ve nemli havalarda atıyorsa yalıtım ya da nem sorunu akla gelir. Kaldırdığınız anda yeniden atan şalter ise ciddi bir kısa devre ihtimalini düşündürür.",
        "Atma sırasında ses, koku ya da ışık varsa durum farklıdır. Bir pat sesi, yanık kokusu veya panoda sıcaklık hissi, arızanın daha ileri bir aşamada olduğunu gösterebilir. Bu belirtiler varsa şalteri tekrar tekrar kaldırmak yerine kullanmayı bırakmak ve ilgili bölümü kapalı tutmak gerekir.",
        "Atmanın zamanını ve yanında çalışan cihazları bir kâğıda not etmek, servis talebinde çok işe yarar. Aynı hatta aynı cihazla tekrarlayan bir örüntü bulmak, saatler sürebilecek aramayı kısaltabilir.",
      ],
    },
    {
      h: "Eskişehir'deki konutlarda sık görülen durumlar",
      p: [
        "Kış boyunca elektrikli ısıtıcıların ve ek ısıtma cihazlarının gün boyu çalışması, tüm dairenin toplam yükünü yükseltir. Öğrenci evlerinde birkaç kişinin aynı anda su ısıtıcısı, ısıtıcı ve bilgisayar kullanması bu yükü hızla artırabilir. Şalterin atması bu gibi dönemlerde çoğu zaman cihazların birlikte çalışmasından kaynaklanır.",
        "Odunpazarı'ndaki eski yapılarda sonradan eklenen hatlar ve yıllara yayılan onarımlar, tesisatı karmaşık hale getirebilir. Böyle evlerde atma nedeni tek bir noktada değil, birden fazla eski bağlantıda saklı olabilir. Tepebaşı'ndaki yeni sitelerde tesisat daha düzenli olsa da inşaat sonrası yapılan ek hatlar ve ev içi uzatmalar sorun yaratabilir. İlçelerdeki müstakil evlerde ise garaj, bahçe ya da dış ünite hatları nem nedeniyle atmanın kaynağı olabilir.",
      ],
    },
    {
      h: "Kendi başınıza yapabilecekleriniz ve sınırlar",
      p: [
        "Yapabileceğiniz şeyler basittir: şalterin hangi hatta atığını belirlemek, cihazların fişini çekmek, şalteri bir kez kaldırmak ve cihazları sırayla takmak. Bu denemeler yalnızca kuru zeminde, kapalı pano kapağı ve dokunulabilir kollarla yapılmalıdır. Amaç, sorunu bulmak değil, kabaca nerede olduğunu daraltmaktır.",
        "Bunun ötesi uzmanlık ister. Pano içini açmak, bağlantıları sıkmak, kablo ya da şalter değiştirmek tehlikelidir ve yalnızca yetkin kişilerce yapılmalıdır. Platformumuz bu hizmeti kendisi vermez; talebinizi inceleyip sizi anlaşmalı bağımsız servis sağlayıcılara yönlendirir. Servis çağırırken edindiğiniz notları paylaşmak, doğru ekibin doğru ekipmanla gelmesine yardım eder.",
      ],
    },
  ],
  causes: [
    {
      t: "Toplam yükün aşılması",
      d: "Isıtıcı, fırın, çamaşır makinesi gibi cihazlar birlikte çalışınca dairenin toplam akımı şalterin sınırını geçer.",
    },
    {
      t: "Hat üzerinde kısa devre",
      d: "Yıpranmış ya da hasar görmüş bir kablo veya bağlantı kısa devre yapar; şalter kaldırılır kaldırılmaz yeniden atar.",
    },
    {
      t: "Arızalı bir cihaz",
      d: "İç yalıtımı bozulan bir cihaz şalterin atmasına yol açabilir; cihaz çıkarılınca sorun genellikle kaybolur.",
    },
    {
      t: "Nemli ortam veya su teması",
      d: "Banyo, balkon ya da bahçe hattındaki nem yalıtımı geçer; özellikle yağışlı günlerde atma sıklaşır.",
    },
    {
      t: "Gevşek pano bağlantısı",
      d: "Şalter terminallerindeki gevşek bağlantı ısınmaya neden olur ve zamanla şalterin düzensiz atmasına yol açabilir.",
    },
    {
      t: "Eskimiş şalter",
      d: "Yıllarca çalışmış bir şalter mekanik ve ısıl olarak yıpranır; nominal değerinin altında bile atabilir.",
    },
  ],
  steps: [
    {
      t: "Panodaki durumu kontrol edin",
      d: "Hangi kolun indiğini görün: ana şalter mi, tek hat sigortası mı, kaçak akım rölesi mi. Ellerinizin kuru olduğundan emin olun.",
    },
    {
      t: "Yüksek güçlü cihazları kapatın",
      d: "Isıtıcı, fırın, su ısıtıcısı ve benzeri cihazların fişini çekin. Böylece yük kaynaklı atmayı ayırt edebilirsiniz.",
    },
    {
      t: "Şalteri bir kez kaldırın",
      d: "Kolu yavaşça yukarı alın. Hemen atıyorsa tekrar denemeyin ve kullanmayı bırakıp not alın.",
    },
    {
      t: "Cihazları sırayla takın",
      d: "Şalter tutuyorsa cihazları tek tek takın ve her birinin ardından bir süre bekleyin. Atmaya neden olan cihazı ayırın.",
    },
    {
      t: "Atma anını kaydedin",
      d: "Saat, çalışan cihazlar, hava durumu ve varsa ses ya da koku gibi bilgileri yazın.",
    },
    {
      t: "Servis talebi oluşturun",
      d: "Sorun devam ediyorsa notlarınızı paylaşarak bağımsız bir servis sağlayıcıdan yerinde inceleme isteyin.",
    },
  ],
  dont: [
    "Şalteri tekrar tekrar zorlayarak kaldırmayın; ısınmış bir hattı daha da zorlamış olursunuz.",
    "Şalteri daha yüksek değerli bir modelle değiştirmeye çalışmayın; kablo koruması bozulur ve yangın riski artar.",
    "Pano kapağını açmayın, bağlantıları sıkmaya veya kablo çekmeye girişmeyin.",
    "Islak zeminde, banyoda ya da ellerinizi kurulamadan panoya dokunmayın.",
    "Atan şalteri bir şeyle sıkıştırarak ya da bantlayarak açık tutmayın.",
  ],
  call: [
    "Şalter kaldırılır kaldırılmaz atıyor ve bütün cihazlar çıkarıldığında da aynı sorun sürüyorsa.",
    "Panoda yanık kokusu, ısınma, kararma, çıtırtı ya da ses fark ediyorsanız.",
    "Atmadan önce kıvılcım, patlama sesi ya da çarpılma hissi yaşandıysa.",
    "Şalter günlerdir birkaç kez atıyor ve nedenini cihaz ya da yükle ilişkilendiremiyorsanız.",
    "Şalter eski ya da yıpranmışsa ve değişim gerekebileceğini düşünüyorsanız.",
  ],
  faq: [
    {
      q: "Şalter atınca hemen yeniden kaldırmak güvenli midir?",
      a: "Bir kez, hattaki cihazları çıkardıktan sonra denenebilir. Şalter anında yeniden atıyorsa durmak gerekir; çünkü sorun kısa devre olabilir. Tekrar tekrar zorlamak hat ve cihaz için risklidir. Bu aşamada bağımsız bir servis sağlayıcının incelemesi, evde yapılabilecek denemelerden çok daha güvenilirdir.",
    },
    {
      q: "Şalter yalnızca yağmurlu havalarda atıyorsa neden olabilir?",
      a: "Nem ya da su sızıntısı olasılığını düşündürür. Dış hatlarda, balkonda, bahçede veya banyoda bir bağlantı su alıyor olabilir. Nemli ortamda tesisata dokunmayın ve su görünen yerlere yaklaşmayın. Atmanın yağışla ilişkisini not edin ve servis talebinde bu bilgiyi mutlaka paylaşın.",
    },
    {
      q: "Şalter eski olduğu için mi atıyor, nasıl anlarım?",
      a: "Yıpranmış bir şalter bazen normal yükte bile atabilir, ancak bunu evde kesin olarak anlamak mümkün değildir. Cihazlar çıkarıldığında ve yük azken de atıyorsa, ya da kol gevşek ve ısınıyorsa şalterin kendisi şüpheli olabilir. Teşhis ve değişim yetkin bir servis sağlayıcıya bırakılmalıdır.",
    },
    {
      q: "Şalter atınca tüm daire karanlıkta kalıyor, ama komşuda elektrik var. Ne yapmalıyım?",
      a: "Bu durumda sorun muhtemelen sizin dairenizdedir. Panoda hangi kolun aşağı indiğine bakın ve cihazları çıkarıp bir kez kaldırmayı deneyin. Atan bir şey yoksa ya da şalter hemen atıyorsa devam etmeyin ve bağımsız bir servis sağlayıcıdan destek isteyin.",
    },
    {
      q: "Servis talebi verirken hangi bilgileri paylaşmalıyım?",
      a: "Hangi şalterin ya da sigortanın attığını, atma sırasında çalışan cihazları, atmanın ne kadar sürede olduğunu ve yanık kokusu veya ses gibi ek belirtileri yazın. Bina tipi ve tesisatın yaklaşık yaşı da faydalıdır. Bu bilgiler doğru uzmanın yönlendirilmesini ve sürecin daha verimli ilerlemesini sağlar.",
    },
  ],
  problems: ["sigorta-neden-atar", "kacak-akim-rolesi-atiyor", "elektrik-kesildi", "elektrik-kacagi"],
  services: ["sigorta-salter", "elektrik-ariza", "acil-elektrikci", "elektrik-tesisati"],
};

export default doc;