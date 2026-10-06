"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { externalProps, waLink } from "@/lib/contact";
import { track } from "@/lib/analytics";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export type PanelItem = {
  slug: string;
  label: string;
  title: string;
  severity: "acil" | "dikkat" | "bilgi";
  lead: string;
  causes: string[];
  step: string;
};

const SEV = {
  acil: { t: "Acil değerlendirin", c: "#ff5a36" },
  dikkat: { t: "Dikkat gerektirir", c: "#ffb020" },
  bilgi: { t: "Önce bilgi toplayın", c: "#d7ff1f" },
} as const;

/** Etkileşimli sigorta panosu: bir şalteri indir, belirtinin özetini ve güvenli ilk adımı gör. */
export function BreakerPanel({ items }: { items: PanelItem[] }) {
  const [i, setI] = useState(0);
  const cur = items[i];
  const sev = SEV[cur.severity];

  return (
    <div className="grid gap-5 lg:grid-cols-[1.25fr_1fr]">
      <div className="rounded-[2rem] border border-line bg-ink-2 p-5 md:p-8">
        <div className="mono flex items-center justify-between text-mute">
          <span>Daire panosu · 230 V</span>
          <span className="flex items-center gap-2">
            <span
              className="live-dot h-1.5 w-1.5 rounded-full"
              style={{ background: sev.c }}
            />{" "}
            {items.length} hat
          </span>
        </div>
        <div className="mt-6 h-1.5 rounded-full bg-[#ffffff10]" aria-hidden />
        <ul
          role="list"
          className="-mt-1 grid grid-cols-3 gap-x-3 gap-y-6 sm:grid-cols-5 md:gap-x-4"
        >
          {items.map((p, n) => {
            const on = n === i;
            const col = SEV[p.severity].c;
            return (
              <li key={p.slug}>
                <button
                  type="button"
                  aria-pressed={on}
                  onClick={() => {
                    setI(n);
                    track("problem_selected", { problem: p.title });
                  }}
                  className="group flex w-full flex-col items-center gap-3 text-center"
                >
                  <span
                    className="relative flex h-[7.5rem] w-full max-w-[5.5rem] items-center justify-center rounded-2xl border bg-[#1b1b1e] transition-[border-color,box-shadow] duration-500"
                    style={{
                      borderColor: on ? col : "#ffffff1a",
                      boxShadow: on
                        ? `0 0 0 1px ${col}, 0 0 38px -6px ${col}`
                        : "none",
                    }}
                  >
                    <span
                      aria-hidden
                      className="absolute inset-x-3 inset-y-3 rounded-xl bg-[#0d0d0f]"
                    />
                    <span
                      aria-hidden
                      className="toggle absolute left-1/2 h-12 w-8 -translate-x-1/2 rounded-lg"
                      style={{
                        top: on ? "3.9rem" : "1rem",
                        background: on ? col : "#3a3a40",
                      }}
                    />
                    <span
                      aria-hidden
                      className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full"
                      style={{ background: on ? col : "#444" }}
                    />
                  </span>
                  <span
                    className={`mono !text-[.62rem] !tracking-[.1em] transition-colors ${on ? "text-paper" : "text-mute group-hover:text-paper"}`}
                  >
                    {String(n + 1).padStart(2, "0")}
                    <span className="mt-1 block !normal-case !tracking-normal text-[.8rem] leading-tight font-sans font-medium">
                      {p.label}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className="flex flex-col rounded-[2rem] border border-line p-6 md:p-9"
        aria-live="polite"
      >
        <span
          className="mono inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1.5"
          style={{ borderColor: sev.c, color: sev.c }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: sev.c }}
          />{" "}
          {sev.t}
        </span>
        <h3 className="serif mt-6 text-[clamp(2.2rem,4vw,3.4rem)] leading-[1]">
          {cur.title}
        </h3>
        <p className="mt-5 text-mute">{cur.lead}</p>
        <p className="mono mt-8 text-mute/80">Olası nedenler</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {cur.causes.map((c) => (
            <li
              key={c}
              className="rounded-full border border-line px-3.5 py-1.5 text-sm"
            >
              {c}
            </li>
          ))}
        </ul>
        <p className="mono mt-8 text-mute/80">Güvenli ilk adım</p>
        <p className="mt-2">{cur.step}</p>
        <div className="mt-auto flex flex-wrap gap-3 pt-9">
          <Link href={`/ariza-merkezi/${cur.slug}`} className="btn btn-volt">
            Rehberi oku <ArrowUpRight size={18} aria-hidden />
          </Link>
          <a
            href={waLink(cur.title)}
            {...externalProps}
            onClick={() => track("whatsapp_click", { problem: cur.title })}
            className="btn btn-ghost"
          >
            <WhatsAppIcon size={17} /> Destek iste
          </a>
        </div>
      </div>
    </div>
  );
}
