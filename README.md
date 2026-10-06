# Eskişehir Elektrik

Google → Site → WhatsApp / Telefon akışına odaklı, backend'siz bir Next.js (App Router) sitesi.
Eskişehir'de elektrik arızaları için bilgilendirme rehberleri sunar ve ziyaretçiyi WhatsApp veya telefona yönlendirir.

## Hızlı başlangıç

```bash
cp .env.example .env.local   # gerçek telefon / WhatsApp / site adresini yazın
npm install
npm run dev                  # http://localhost:3000
```

Windows PowerShell için: `Copy-Item .env.example .env.local`

## Komutlar

| Komut               | Açıklama                                                     |
| ------------------- | ------------------------------------------------------------ |
| `npm run dev`       | Geliştirme sunucusu                                          |
| `npm run build`     | Production build (öncesinde `scripts/check-env.mjs` çalışır) |
| `npm run start`     | Build edilmiş siteyi çalıştırır                              |
| `npm run typecheck` | `tsc --noEmit` ile tip kontrolü                              |
| `npm run lint`      | ESLint                                                       |

Push etmeden önce `npm run typecheck && npm run build` çalıştırmak Vercel'de sürpriz hataları önler.

## Ortam değişkenleri

Tümü `NEXT_PUBLIC_` önekidir, yani tarayıcıya gider. **Gizli anahtar koymayın.**
Tam liste ve açıklamalar için `.env.example` dosyasına bakın.

- `NEXT_PUBLIC_SITE_URL` ve `NEXT_PUBLIC_PHONE` zorunludur. Vercel production'da eksik veya geçersizse build bilerek durur.
- İletişim bilgileri yalnızca ortam değişkenlerinden okunur (`lib/contact.ts`).
- Kişisel/yerel değerler için `.env.local` kullanın (Git'e girmez). Repodaki `.env` ortak varsayılanları taşır.
- Vercel'de değerleri Project → Settings → Environment Variables altına da girin.

## Proje yapısı

```
app/               Sayfalar (App Router)
  [service]/       Hizmet sayfaları
  ariza-merkezi/   Arıza rehberleri (+ [slug])
components/        Arayüz bileşenleri
data/
  services.ts      Hizmet listesi
  problems.ts      Arıza listesi (içerik data/docs'tan okunur)
  docs/            Sayfa içerikleri: service-*.ts ve problem-*.ts
lib/               İletişim, SEO, analitik yardımcıları
public/services/   Hizmet görselleri (<slug>.svg)
scripts/           Build öncesi kontroller
types/             Ortak tipler
```

### İçerik eklemek

1. `data/docs/` altına `problem-<slug>.ts` veya `service-<slug>.ts` ekleyin (şema: `data/docs/types.ts`).
2. Dosyayı `data/docs/index.ts` içine ekleyin.
3. Arıza için `data/problems.ts` içindeki `meta` listesine `[slug, başlık, kısa etiket]` satırı ekleyin.
4. Hizmet için `data/services.ts` listesine ekleyin ve `public/services/<slug>.svg` görselini koyun.

## Mevcut durum

- Talep formu sunucuya veri göndermez; bilgileri hazır WhatsApp mesajına dönüştürür.
- Lead ve yorum formları hazır ama **kapalıdır** (`NEXT_PUBLIC_LEADS_ENABLED` / `NEXT_PUBLIC_REVIEWS_ENABLED`, varsayılan `false`).
  `lib/leads.ts` ve `lib/reviews.ts` içindeki `submitLead` / `submitReview` yer tutucudur; bir backend bağlanmadan bayrakları açmayın.
- Admin paneli, CRM ve veritabanı yoktur.

## Dağıtım (Vercel)

1. Repoyu Vercel'e bağlayın (framework: Next.js, otomatik algılanır).
2. Ortam değişkenlerini girin (özellikle `NEXT_PUBLIC_SITE_URL` ve `NEXT_PUBLIC_PHONE`).
3. `main` dalına push eden her değişiklik otomatik deploy edilir.

Build hatası alırsanız önce yerelde `npm run typecheck` çalıştırın. Vercel Linux'ta çalıştığı için dosya adlarındaki
büyük/küçük harf farkları (ör. `SeverityChip.tsx` ≠ `severityChip.tsx`) yerelde Windows'ta fark edilmeyip orada hata verir.
