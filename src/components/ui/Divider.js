// ui/Divider.js
// ─────────────────────────────────────────────────────────────
// Horizontal rule / section divider.
// Usage:
//   <Divider />                    → default subtle border
//   <Divider variant="brand" />    → blue line
//   <Divider spacing="lg" />       → more vertical space
// ─────────────────────────────────────────────────────────────

const variantMap = {
  default: "border-[var(--color-border-muted)]",
  brand:   "border-[var(--color-border-brand)]",
  dark:    "border-[var(--color-bg-dark)] opacity-20",
  inverse: "border-white opacity-20",
};

const spacingMap = {
  sm: "my-4",
  md: "my-8",
  lg: "my-12",
};

export default function Divider({
  variant = "default",
  spacing = "md",
  className = "",
  ...props
}) {
  return (
    <hr
      className={`
        w-full border-t
        ${variantMap[variant] ?? variantMap.default}
        ${spacingMap[spacing] ?? spacingMap.md}
        ${className}
      `.trim().replace(/\s+/g, " ")}
      {...props}
    />
  );
}