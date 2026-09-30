import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";
import { FloatingContact } from "@/components/FloatingContact";
import { JsonLd } from "@/components/JsonLd";
import { organization, website, SITE_NAME } from "@/lib/seo";
import { SITE } from "@/lib/contact";
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover", // env(safe-area-inset-*) değerlerinin çalışması için
  themeColor: "#08090b",
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
    <html lang="tr" className={inter.variable}>
      <body className="font-sans antialiased">
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
      </body>
    </html>
  );
}
