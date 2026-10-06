"use client";
import { track } from "@/lib/analytics";

/** 14 ilçe: tıklayınca talep formunda ilçe seçilir ve forma kaydırılır. */
export function Districts({ list }: { list: string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-1 md:gap-x-8">
      {list.map((d, i) => (
        <li key={d}>
          <button
            type="button"
            onClick={() => {
              window.dispatchEvent(
                new CustomEvent("set-district", { detail: d }),
              );
              track("district_selected", { district: d });
              document
                .getElementById("talep")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group display relative inline-flex items-start gap-1.5 text-[clamp(2.4rem,7.5vw,7.5rem)] text-paper/90 transition-colors duration-300 hover:text-accent"
          >
            {d}
            <sup className="mono mt-3 !text-[.6rem] text-mute transition-colors group-hover:text-accent md:mt-5">
              {String(i + 1).padStart(2, "0")}
            </sup>
          </button>
        </li>
      ))}
    </ul>
  );
}
