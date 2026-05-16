// ui/P.js
// ─────────────────────────────────────────────────────────────
// Body paragraph. Handles all text sizes and colors.
// Usage:
//   <P>Normal paragraph text</P>
//   <P size="lg">Larger lead text</P>
//   <P size="sm">Smaller caption</P>
//   <P color="inverse">White text on dark bg</P>
//   <P color="muted">Secondary grey text</P>
// ─────────────────────────────────────────────────────────────

const sizeMap = {
  xs: "text-[0.625rem] max-[360px]:text-[0.6rem]   sm:text-xs             leading-relaxed",
  sm: "text-[0.75rem]  max-[360px]:text-[0.7rem]   sm:text-sm             leading-relaxed",
  md: "text-[0.8125rem] max-[360px]:text-[0.75rem] sm:text-sm md:text-base leading-[1.7]",
  lg: "text-sm         max-[360px]:text-[0.8125rem] sm:text-base md:text-lg leading-[1.7]",
  xl: "text-[0.9375rem] max-[360px]:text-sm        sm:text-lg  md:text-xl  leading-[1.65]",
};

const colorMap = {
  default: "text-[var(--color-text-muted)]",
  dark: "text-[var(--color-text)]",
  brand: "text-[var(--color-text-brand)]",
  inverse: "text-[var(--color-text-inverse)] opacity-80",
  hint: "text-[var(--color-text-hint)]",
};

export default function P({
  children,
  size = "md",
  color = "default",
  className = "",
  as: Tag = "p",
  ...props
}) {
  return (
    <Tag
      className={`
        font-[var(--font-body)] font-normal 
        ${sizeMap[size] ?? sizeMap.md}
        ${colorMap[color] ?? colorMap.default}
        ${className}
      `.trim().replace(/\s+/g, " ")}
      {...props}
    >
      {children}
    </Tag>
  );
}