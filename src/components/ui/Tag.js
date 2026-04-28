// ui/Tag.js
// ─────────────────────────────────────────────────────────────
// Badge / label / pill for categories, status, announcements.
// Usage:
//   <Tag>New Batch</Tag>                        → blue (default)
//   <Tag variant="red">Admissions Open</Tag>    → red
//   <Tag variant="green">Top Ranked</Tag>       → green
//   <Tag variant="dark">Est. 1998</Tag>         → dark
//   <Tag variant="outline">Free Demo</Tag>      → outline
//   <Tag variant="ghost">Info</Tag>             → subtle grey
// ─────────────────────────────────────────────────────────────

const variantMap = {
  blue: `
    bg-[var(--color-bg-brand)]
    text-[var(--color-text-inverse)]
  `,
  red: `
    bg-[var(--color-bg-danger)]
    text-[var(--color-text-danger)]
  `,
  green: `
    bg-[var(--color-bg-success)]
    text-[var(--color-text-success)]
  `,
  dark: `
    bg-[var(--color-bg-dark)]
    text-[var(--color-text-inverse)]
  `,
  outline: `
    bg-transparent
    text-[var(--color-text-brand)]
    border border-[var(--color-border-brand)]
  `,
  ghost: `
    bg-[var(--color-bg-muted)]
    text-[var(--color-text-muted)]
    border border-[var(--color-border-muted)]
  `,
  accent: `
    bg-[var(--color-bg-accent)]
    text-[var(--color-text-brand)]
  `,
};

export default function Tag({
  children,
  variant = "blue",
  className = "",
  ...props
}) {
  return (
    <span
      className={`
        inline-flex items-center
        font-[var(--font-body)] font-semibold
        text-[0.875rem] tracking-[0.08em] uppercase
        px-2.5 py-1
        rounded-[var(--radius-sm)]
        whitespace-nowrap
        ${variantMap[variant] ?? variantMap.blue}
        ${className}
      `.trim().replace(/\s+/g, " ")}
      {...props}
    >
      {children}
    </span>
  );
}