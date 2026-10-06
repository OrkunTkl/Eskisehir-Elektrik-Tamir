import Link from "next/link";
import { services } from "@/data/services";
import { problems } from "@/data/problems";
import { externalProps, telLink, waLink } from "@/lib/contact";
import { Bolt } from "@/components/Bolt";

const PAD = "px-6 md:px-10 lg:px-14";
const link = "text-mute transition-colors duration-300 hover:text-accent";

export function Footer() {
  return (
    <footer
      className={`relative overflow-hidden border-t border-line pb-[calc(8rem+env(safe-area-inset-bottom))] pt-24 md:pb-14 md:pt-40 ${PAD}`}
    >
      <p className="mono mb-8 flex items-center gap-3 text-mute">
        <span className="live-dot h-2 w-2 rounded-full bg-accent" /> İletişim
      </p>
      <h2 className="display text-[clamp(3.4rem,15vw,15rem)]">
        Karanlıkta
        <br />
        <span className="serif font-normal text-accent">kalmayın.</span>
      </h2>
      <div className="mt-12 flex flex-wrap gap-3">
        <a href={telLink()} className="btn btn-volt">
          Hemen Ara
        </a>
        <a href={waLink()} {...externalProps} className="btn btn-ghost">
          WhatsApp&apos;tan Yaz
        </a>
      </div>

      <div className="mt-28 grid gap-14 border-t border-line pt-14 md:mt-40 md:grid-cols-[1fr_1.2fr_1.2fr_1.6fr] md:gap-10">
        <nav aria-label="Alt menü">
          <p className="mono text-mute/70">Site</p>
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
          <p className="mono text-mute/70">Hizmetler</p>
          <ul className="mt-5 space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className={link}>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Arıza rehberleri">
          <p className="mono text-mute/70">Arıza rehberleri</p>
          <ul className="mt-5 space-y-2.5">
            {problems.map((p) => (
              <li key={p.slug}>
                <Link href={`/ariza-merkezi/${p.slug}`} className={link}>
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="max-w-xl text-lg leading-relaxed text-paper/70">
          Bu platform, Eskişehir&apos;de elektrik hizmeti arayan kullanıcıları
          anlaşmalı servis sağlayıcılarla buluşturur. Elektrik hizmeti,
          yönlendirilen bağımsız servis sağlayıcı tarafından gerçekleştirilir;
          platform işi kendisi yapmaz, fiyat belirlemez.
        </p>
      </div>
      <p className="mono mt-16 flex items-center gap-2 text-mute/60">
        <Bolt size={12} /> Eskişehir Elektrik · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
