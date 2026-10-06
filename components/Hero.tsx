import { ArcCanvas } from "@/components/ArcCanvas";

/** Ana sayfa girişi: tam ekran, canvas elektrik arkı arka planı. İçerik sunucuda render edilir. */
export function Hero({
  children,
  meter,
}: {
  children: React.ReactNode;
  meter?: React.ReactNode;
}) {
  return (
    <section className="relative -mt-[var(--header-h)] flex min-h-[100svh] flex-col justify-end overflow-hidden px-6 pb-14 pt-[calc(var(--header-h)+3rem)] md:px-10 md:pb-16 lg:px-14">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(#ffffff08_1px,transparent_1px),linear-gradient(90deg,#ffffff08_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_60%_40%,#000_10%,transparent_75%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/4 h-[40rem] w-[40rem] rounded-full bg-accent/[.07] blur-[120px]"
      />
      <ArcCanvas />
      <div className="relative w-full">{children}</div>
      {meter && <div className="relative mt-12 md:mt-16">{meter}</div>}
    </section>
  );
}
