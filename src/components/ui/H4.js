// ui/H4.js
// ─────────────────────────────────────────────────────────────
// Sub-card / label heading. Smallest heading level.
// Usage:
//   <H4>Faculty Name</H4>
//   <H4 color="brand">Blue Sub-heading</H4>
// ─────────────────────────────────────────────────────────────

const colorMap = {
  default: "text-[var(--color-text)]",
  brand:   "text-[var(--color-text-brand)]",
  inverse: "text-[var(--color-text-inverse)]",
  muted:   "text-[var(--color-text-muted)]",
};

export default function H4({
  children,
  color = "default",
  className = "",
  ...props
}) {
  return (
    <h4
      className={`
        font-[var(--font-heading)] font-bold leading-[1.25] tracking-tight
        text-[1rem] sm:text-[1.0625rem] md:text-[1.125rem] lg:text-[1.25rem]
        ${colorMap[color] ?? colorMap.default}
        ${className}
      `.trim().replace(/\s+/g, " ")}
      {...props}
    >
      {children}
    </h4>
  );
}