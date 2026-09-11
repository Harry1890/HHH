interface LogoMarkProps {
  /** Rendered size in px (the artwork is a 64×64 grid). */
  size?: number;
  className?: string;
}

/**
 * Company mark: an orb with a satellite on its orbit — the "O" of Orbion.
 * Shared by the logo lockup and the social card; keep `app/icon.svg` in sync.
 * To use a real logo file instead, replace the SVG here and in icon.svg.
 */
export function LogoMark({ size = 28, className }: LogoMarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" className={className}>
      <rect width="64" height="64" rx="14" fill="#111111" />
      <circle cx="32" cy="33" r="13" fill="none" stroke="#FFFFFF" strokeWidth="5.5" />
      <circle cx="42" cy="22" r="5.5" fill="#5C7CFF" stroke="#111111" strokeWidth="3" />
    </svg>
  );
}
