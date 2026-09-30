import Link from "next/link";
export const metadata = {
  title: "Sayfa bulunamadı",
  robots: { index: false, follow: true },
};
export default function NotFound() {
  return (
    <div className="px-6 py-32 md:px-10 md:py-44 lg:px-14">
      <h1 className="type-page">Sayfa bulunamadı</h1>
      <p className="mt-8 max-w-xl text-lg text-mute">
        Aradığınız sayfa taşınmış ya da kaldırılmış olabilir. Aşağıdaki
        sayfalardan devam edebilirsiniz.
      </p>
      <ul className="mt-8 space-y-2 text-lg">
        <li>
          <Link
            className="text-accent-soft underline underline-offset-4"
            href="/"
          >
            Ana sayfa
          </Link>
        </li>
        <li>
          <Link
            className="text-accent-soft underline underline-offset-4"
            href="/ariza-merkezi"
          >
            Arıza merkezi
          </Link>
        </li>
        <li>
          <Link
            className="text-accent-soft underline underline-offset-4"
            href="/hizmetler"
          >
            Hizmetler
          </Link>
        </li>
      </ul>
    </div>
  );
}
