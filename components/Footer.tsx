import Link from "next/link";
import { services } from "@/data/services";
import { externalProps, telLink, waLink } from "@/lib/contact";
const PAD = "px-6 md:px-10 lg:px-14";
const link = "text-mute transition-colors duration-300 hover:text-paper";
export function Footer() {
  return (
    <footer
      className={`border-t border-line pb-[calc(8rem+env(safe-area-inset-bottom))] pt-28 md:pb-16 md:pt-44 ${PAD}`}
    >
      <h2 className="text-[clamp(3.25rem,15vw,6rem)] font-semibold leading-[.92] tracking-[-.045em] md:text-[clamp(4rem,9vw,11rem)]">
        BİR
        <br className="md:hidden" /> ELEKTRİK
        <br className="hidden md:block" />
        SORUNUNUZ
        <br className="md:hidden" /> MU
        <br className="hidden md:block" /> VAR?
      </h2>
      <p className="type-body mt-10 md:mt-14">
        Arızanızı belirleyin veya doğrudan elektrikçi desteği için bize ulaşın.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <a
          href={telLink()}
          className="inline-flex rounded-full bg-paper px-7 py-3.5 font-medium text-ink transition-colors duration-300 hover:bg-accent-soft"
        >
          Hemen Ara
        </a>
        <a
          href={waLink()}
          {...externalProps}
          className="inline-flex rounded-full border border-white/25 px-7 py-3.5 font-medium transition-colors duration-300 hover:border-accent hover:text-accent-soft"
        >
          WhatsApp&apos;tan Yaz
        </a>
      </div>

      <div className="mt-28 grid gap-14 border-t border-line pt-14 md:mt-44 md:grid-cols-[1fr_1fr_2fr] md:gap-10">
        <nav aria-label="Alt menü">
          <p className="text-sm text-mute/70">Site</p>
          <ul className="mt-5 space-y-3 text-lg">
            <li>
              <Link href="/hizmetler" className={link}>
                Hizmetler
              </Link>
            </li>
            <li>
              <Link href="/ariza-merkezi" className={link}>
                Arıza Merkezi
              </Link>
            </li>
            <li>
              <Link href="/eskisehir" className={link}>
                Eskişehir
              </Link>
            </li>
            <li>
              <Link href="/gizlilik" className={link}>
                Aydınlatma Metni
              </Link>
            </li>
          </ul>
        </nav>
        <nav aria-label="Hizmet bağlantıları">
          <p className="text-sm text-mute/70">Hizmetler</p>
          <ul className="mt-5 space-y-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className={link}>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="max-w-xl text-lg leading-relaxed text-paper/70 md:text-xl">
          Bu platform, Eskişehir&apos;de elektrik hizmeti arayan kullanıcıları
          anlaşmalı servis sağlayıcılarla buluşturur. Elektrik hizmeti,
          yönlendirilen bağımsız servis sağlayıcı tarafından gerçekleştirilir.
        </p>
      </div>
    </footer>
  );
}
