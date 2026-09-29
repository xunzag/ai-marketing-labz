import Image, { type ImageProps } from "next/image";

// next/image with SVG placeholders served as-is. Swap files in public/images for the
// real Figma exports; raster files go through the optimizer automatically.
export function Photo(props: ImageProps) {
  const unoptimized = typeof props.src === "string" && props.src.endsWith(".svg");
  return <Image unoptimized={unoptimized} {...props} alt={props.alt} />;
}
