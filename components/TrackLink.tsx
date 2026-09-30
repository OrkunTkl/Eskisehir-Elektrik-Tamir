"use client";
import { track, type EventName, type EventParams } from "@/lib/analytics";
type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: EventName;
  params?: EventParams;
};
export function TrackLink({ event, params, onClick, ...rest }: Props) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        track(event, params);
        // Bu sayfada talep formu yoksa ana sayfadaki forma git.
        if (rest.href === "#talep" && !document.getElementById("talep")) {
          e.preventDefault();
          window.location.href = "/#talep";
        }
        onClick?.(e);
      }}
    />
  );
}
