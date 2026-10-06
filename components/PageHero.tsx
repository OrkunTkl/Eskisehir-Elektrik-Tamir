export function PageHero({
  kicker,
  title,
  lead,
  aside,
  children,
}: {
  kicker: string;
  title: string;
  lead: string;
  aside?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <header className="relative overflow-hidden px-6 pb-16 pt-12 md:px-10 md:pb-28 md:pt-24 lg:px-14">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-accent/[.08] blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(#ffffff07_1px,transparent_1px),linear-gradient(90deg,#ffffff07_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_80%_0%,#000,transparent_70%)]"
      />
      <div className="relative">
        <p className="mono rise mb-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-mute">
          <span aria-hidden className="h-px w-8 bg-accent" /> {kicker}
          {aside && <span className="ml-2">{aside}</span>}
        </p>
        <h1
          className="type-page rise max-w-6xl"
          style={{ ["--d" as string]: "120ms" }}
        >
          {title}
        </h1>
        <p
          className="rise mt-8 max-w-2xl text-lg text-mute md:mt-12 md:text-2xl md:leading-snug"
          style={{ ["--d" as string]: "260ms" }}
        >
          {lead}
        </p>
        {children && (
          <div className="rise mt-10" style={{ ["--d" as string]: "380ms" }}>
            {children}
          </div>
        )}
      </div>
    </header>
  );
}
