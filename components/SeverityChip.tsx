export type Severity = "acil" | "dikkat" | "bilgi";

const SEV: Record<Severity, { label: string; color: string }> = {
  acil: { label: "Acil", color: "#ff5a36" },
  dikkat: { label: "Dikkat", color: "#ffb020" },
  bilgi: { label: "Bilgi", color: "#d7ff1f" },
};

type Props = {
  /** Önem seviyesi: ProblemLinks bu prop'u `s` adıyla gönderiyor. */
  s?: Severity;
  /** İstenirse `severity` adıyla da kullanılabilir. */
  severity?: Severity;
  className?: string;
};

/** Arıza rehberlerinde önem derecesini gösteren küçük etiket (server component). */
export function SeverityChip({ s, severity, className = "" }: Props) {
  const level = s ?? severity ?? "bilgi";
  const { label, color } = SEV[level] ?? SEV.bilgi;

  return (
    <span
      className={`mono relative inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 ${className}`}
      style={{
        color,
        borderColor: `${color}66`,
        background: `${color}14`,
      }}
    >
      <span
        aria-hidden
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: color }}
      />
      {label}
    </span>
  );
}

export default SeverityChip;
