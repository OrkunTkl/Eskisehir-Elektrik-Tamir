# Eskişehir Elektrik

Google → Site → WhatsApp / Telefon akışına odaklı, backend'siz Next.js sitesi.

```bash
cp .env.example .env.local   # gerçek telefon / WhatsApp / site adresini yazın
npm install
npm run dev
```

- İletişim bilgileri yalnızca ortam değişkenlerinden okunur (`lib/contact.ts`).
- `npm run build` öncesi `scripts/check-env.mjs` çalışır; Vercel production'da eksik/geçersiz değer build'i durdurur.
- Talep formu sunucuya veri göndermez; bilgileri hazır WhatsApp mesajına dönüştürür.
- Yorum, admin, CRM, lead veritabanı yoktur.
