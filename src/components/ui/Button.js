// ui/Button.js
// ─────────────────────────────────────────────────────────────
// Usage:
//   <Button>Enroll Now</Button>                   → primary (red CTA)
//   <Button variant="secondary">Learn More</Button>
//   <Button variant="outline">Learn More</Button>
//   <Button variant="ghost">Cancel</Button>
//   <Button variant="dark">Contact Us</Button>
//   <Button size="sm">Small</Button>
//   <Button size="lg">Large</Button>
//   <Button disabled>Disabled</Button>
//   <Button as="a" href="/admissions">Link Button</Button>
// ─────────────────────────────────────────────────────────────

const base = `
  inline-flex items-center justify-center gap-2 font-[var(--font-body)] font-semibold rounded-[var(--radius-md)] transition-all duration-200 ease-in-out  cursor-pointer select-nonefocus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-border-brand)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.97]
`;

const variants = {
  primary: `
    bg-[var(--color-cta)] text-[var(--color-text-inverse)] hover:bg-[var(--color-cta-hover)] border border-transparent
  `,
  secondary: `
    bg-[var(--color-bg-brand)] text-[var(--color-text-inverse)]  hover:bg-[var(--color-link-hover)]  border border-transparent
  `,
  outline: `bg-transparent text-[var(--color-text-brand)] border border-[var(--color-border-brand)] hover:bg-[var(--color-bg-accent)]
  `,
  ghost: `
    bg-transparent text-[var(--color-text-muted)]
    border border-transparent
    hover:bg-[var(--color-bg-muted)] hover:text-[var(--color-text)]
  `,
  dark: `
    bg-[var(--color-bg-dark)] text-[var(--color-text-inverse)]
    border border-transparent
    hover:opacity-80
  `,
  white: `
    bg-[var(--color-bg-card)] text-[var(--color-text-brand)]
    border border-transparent
    hover:bg-[var(--color-bg-accent)]
  `,
};

const sizes = {
  sm: "text-xs px-3 py-2 tracking-wide",
  md: "text-sm px-5 py-2.5 tracking-wide",
  lg: "text-base px-7 py-3 tracking-wide",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  as: Tag = "button",
  type = "button",
  ...props
}) {
  return (
    <Tag
      type={Tag === "button" ? type : undefined}
      className={`
        ${base}
        ${variants[variant] ?? variants.primary}
        ${sizes[size] ?? sizes.md}
        ${className}
      `.trim().replace(/\s+/g, " ")}
      {...props}
    >
      {children}
    </Tag>
  );
}