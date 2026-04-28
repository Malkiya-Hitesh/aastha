// ui/H3.js
// ─────────────────────────────────────────────────────────────
// Card-level heading. Slightly smaller than H2.
// Usage:
//   <H3>Primary Classes</H3>
//   <H3 color="brand">Blue Heading</H3>
// ─────────────────────────────────────────────────────────────

const colorMap = {
  default: "text-[var(--color-text)]",
  brand:   "text-[var(--color-text-brand)]",
  inverse: "text-[var(--color-text-inverse)]",
  muted:   "text-[var(--color-text-muted)]",
};

export default function H3({
  children,
  color = "default",
  className = "",
  ...props
}) {
  return (
    <h3
      className={`
        font-[var(--font-heading)] font-bold leading-[1.2] tracking-tight
        text-[1.125rem] sm:text-[1.25rem] md:text-[1.375rem] lg:text-[1.5rem]
        ${colorMap[color] ?? colorMap.default}
        ${className}
      `.trim().replace(/\s+/g, " ")}
      {...props}
    >
      {children}
    </h3>
  );
}