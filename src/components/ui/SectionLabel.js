// ui/SectionLabel.js
// ─────────────────────────────────────────────────────────────
// Small uppercase label shown above section headings.
// Commonly used before H2 to set context.
// Usage:
//   <SectionLabel>Our Programs</SectionLabel>
//   <SectionLabel color="green">Top Ranked</SectionLabel>
// ─────────────────────────────────────────────────────────────

const colorMap = {
  default: "text-[var(--color-text-brand)]",
  green:   "text-[var(--color-text-success)] bg-[var(--color-bg-success)] px-2.5 py-0.5 rounded-[var(--radius-sm)]",
  inverse: "text-[var(--color-bg-success)]",
  muted:   "text-[var(--color-text-muted)]",
};

export default function SectionLabel({
  children,
  color = "default",
  className = "",
  ...props
}) {
  return (
    <p
      className={`
        font-[var(--font-body)] font-semibold
        text-[0.6875rem] tracking-[0.1em] uppercase
        mb-3
        ${colorMap[color] ?? colorMap.default}
        ${className}
      `.trim().replace(/\s+/g, " ")}
      {...props}
    >
      {children}
    </p>
  );
}