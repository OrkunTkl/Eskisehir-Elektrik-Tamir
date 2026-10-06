import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";
import { FloatingContact } from "@/components/FloatingContact";
import { JsonLd } from "@/components/JsonLd";
import { Motion } from "@/components/Motion";
import { organization, website, SITE_NAME } from "@/lib/seo";
import { SITE } from "@/lib/contact";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0a0b",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: "Eskişehir Elektrik", template: "%s" },
  applicationName: SITE_NAME,
  robots: { index: true, follow: true },
  // Search Console "HTML etiketi" doğrulaması için NEXT_PUBLIC_GSC_VERIFICATION ortam değişkenini doldurun.
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="grain">
        <a href="#main" className="skip">
          İçeriğe geç
        </a>
        <JsonLd data={organization} />
        <JsonLd data={website} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyCta />
        <FloatingContact />
        <Motion />
      </body>
    </html>
  );
}
