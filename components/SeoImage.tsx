import Image, { type ImageProps } from "next/image";
// Hero görseli/videosu eklenince kullanılacak: alt, width, height ve sizes zorunludur.
// Süs amaçlı görsellerde decorative kullanın (alt="" + aria-hidden).
type Props = Omit<ImageProps, "alt" | "width" | "height" | "sizes"> & {
  width: number;
  height: number;
  sizes?: string;
} & ({ decorative: true; alt?: never } | { decorative?: false; alt: string });
export function SeoImage({
  decorative,
  alt,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  ...rest
}: Props) {
  return (
    <Image
      {...rest}
      alt={decorative ? "" : (alt as string)}
      aria-hidden={decorative || undefined}
      sizes={sizes}
    />
  );
}
