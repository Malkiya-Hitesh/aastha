// ui/Section.js
// ─────────────────────────────────────────────────────────────
// Wrapper for every page section. Handles consistent padding,
// max-width centering, and optional background variants.
// Usage:
//   <Section>...</Section>                    → grey bg (default)
//   <Section variant="white">...</Section>    → white card feel
//   <Section variant="brand">...</Section>    → blue bg
//   <Section variant="dark">...</Section>     → dark/footer bg
//   <Section variant="none">...</Section>     → no bg (transparent)
// ─────────────────────────────────────────────────────────────

const bgMap = {
  default: "bg-[var(--color-bg-muted)]",
  white:   "bg-[var(--color-bg-card)]",
  brand:   "bg-[var(--color-bg-brand)]",
  dark:    "bg-[var(--color-bg-dark)]",
  none:    "bg-transparent",
};

export default function Section({
  children,
  variant = "default",
  className = "",
  id,
  as: Tag = "section",
}) {
  return (
    <Tag
      id={id}
      className={` py-14 md:py-20 lg:py-24 xl:py-30    px-4 md:px-6 lg:px-8 xl:px-10 ${bgMap[variant] ?? bgMap.default}
        ${className}
      `.trim().replace(/\s+/g, " ")}
    >
        {children}
      
    </Tag>
  );
}