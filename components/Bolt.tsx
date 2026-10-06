export function Bolt({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M13.2 1.5 4.5 13.4h6.1L9.4 22.5l9.1-12.4h-6.2z" />
    </svg>
  );
}
