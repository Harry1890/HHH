import Image from "next/image";
import { cn } from "@/lib/utils";
import mark from "../../../public/brand/orbion-mark.png";

interface LogoMarkProps {
  /** Rendered size in px. */
  size?: number;
  /** Preload — set on the above-the-fold instance (navbar). */
  priority?: boolean;
  className?: string;
}

/**
 * Company mark: the Orbion orb on its black tile.
 * Source artwork: docs/brand/orbion-logo.png; the tile is exported to public/brand/orbion-mark.png
 * (also src/app/icon.png and apple-icon.png). Replace those files to change the mark.
 */
export function LogoMark({ size = 28, priority = false, className }: LogoMarkProps) {
  return (
    <Image
      src={mark}
      alt=""
      width={size}
      height={size}
      priority={priority}
      className={cn("rounded-lg", className)}
    />
  );
}
