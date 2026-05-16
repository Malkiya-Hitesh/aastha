// ui/H2.js
// ─────────────────────────────────────────────────────────────
// Section-level heading. Responsive sizes across all devices.
// Usage:
//   <H2>Our Programs</H2>                       → default dark
//   <H2 color="brand">Our Programs</H2>         → blue
//   <H2 color="inverse">On dark bg</H2>         → white
// ─────────────────────────────────────────────────────────────

const colorMap = {
  default: "text-[var(--color-text)]",
  brand:   "text-[var(--color-text-brand)]",
  inverse: "text-[var(--color-text-inverse)]",
  muted:   "text-[var(--color-text-muted)]",
};

export default function H2({
  children,
  color = "default",
  className = "",
  ...props
}) {
  return (
    <h2
      className={`
        font-[var(--font-heading)] font-extrabold leading-[1.1] tracking-tight  text-[1.375rem] max-[360px]:text-[1.25rem]  sm:text-[1.75rem] md:text-[2.25rem] lg:text-[2.625rem] xl:text-[3rem]
        ${colorMap[color] ?? colorMap.default}
        ${className}
      `.trim().replace(/\s+/g, " ")}
      {...props}
    >
      {children}
    </h2>
  );
}