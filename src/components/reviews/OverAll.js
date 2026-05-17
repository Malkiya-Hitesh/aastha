'use client'

import { Button, H2, H4, P, Section, Tag } from '../ui'

// ── Star path ─────────────────────────────────────────────────
const STAR_PATH = "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"

// ── Role colors ───────────────────────────────────────────────
const roleColors = {
  Student: { bg: 'var(--color-bg-brand)',  text: 'var(--color-text-inverse)' },
  Parent:  { bg: '#7c3aed',               text: '#fff' },
  Alumni:  { bg: 'var(--color-bg-dark)',   text: 'var(--color-text-inverse)' },
  Teacher: { bg: '#059669',               text: '#fff' },
}
const roleTagVariant = {
  Student: 'blue', Parent: 'ghost', Alumni: 'dark', Teacher: 'green',
}

// ── Sub-components ────────────────────────────────────────────
function Stars({ rating, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 20 20"
          fill={i < rating ? '#F59E0B' : 'none'}
          stroke={i < rating ? '#F59E0B' : '#d1d5db'}
          strokeWidth="1.5">
          <path d={STAR_PATH} />
        </svg>
      ))}
    </div>
  )
}

function Avatar({ name, role }) {
  const { bg, text } = roleColors[role] ?? roleColors.Student
  return (
    <div className="w-10 h-10 rounded-full flex items-center justify-center font-[var(--font-heading)] font-bold text-sm flex-shrink-0"
      style={{ background: bg, color: text }}>
      {name.charAt(0).toUpperCase()}
    </div>
  )
}

function ReviewCard({ name, role, content, rating }) {
  return (
    <div className="  relative break-inside-avoid mb-4 group flex-shrink-0 w-[300px] sm:w-[340px] flex flex-col gap-4 rounded-[14px] p-5 border border-[var(--color-border-muted)] bg-[var(--color-bg-card)]">
      <P size="md" color="default" className="flex-1 leading-relaxed">{content}</P>
      <Stars rating={Number(rating)} />
      <div className="border-t border-[var(--color-border-muted)]" />
      <div className="flex items-center gap-3">
        <Avatar name={name} role={role} />
        <div className="flex items-center justify-between gap-2 flex-1 min-w-0">
          <H4 color="default" className="truncate">{name}</H4>
          <Tag variant={roleTagVariant[role] ?? 'blue'}>{role}</Tag>
        </div>
      </div>
    </div>
  )
}

// ── Main Component — receives reviews as props from Server ────
export default function OverAll({ reviews = [] }) {
  const total  = reviews.length
  const avg    = total > 0
    ? (reviews.reduce((s, r) => s + Number(r.rating), 0) / total).toFixed(1)
    : '0.0'
  const counts = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => Number(r.rating) === star).length,
  }))

  return (
    <Section className="flex flex-col gap-8">

      {/* ── Rating summary card ── */}
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-8 p-6 rounded-[16px] bg-[var(--color-bg-card)] border border-[var(--color-border-muted)]">

        <div className="flex flex-col items-center justify-center gap-5 sm:border-r sm:border-[var(--color-border-muted)] sm:pr-8">
          <span className="font-[var(--font-heading)] font-extrabold leading-none"
            style={{ fontSize: '6rem', color: 'var(--color-text-brand)' }}>
            {avg}
          </span>
          <Stars rating={Math.round(Number(avg))} size={22} />
          <P size="md" color="default">Total reviews {total}</P>
          <Button variant="outline" size="xl">write a review</Button>
        </div>

        <div className="flex flex-col gap-3 justify-center">
          {counts.map(({ star, count }) => {
            const pct      = total > 0 ? Math.round((count / total) * 100) : 0
            const barColor = pct > 60 ? 'var(--color-bg-brand)' : pct > 20 ? '#F59E0B' : '#FF5B5B'
            return (
              <div key={star} className="flex items-center gap-5">
                <div className="flex items-center gap-1 min-w-[34px]">
                  <span className="font-[var(--font-body)] font-semibold text-xl"
                    style={{ color: 'var(--color-text)' }}>{star}</span>
                  <svg width="19" height="19" viewBox="0 0 20 20" fill="#F59E0B">
                    <path d={STAR_PATH} />
                  </svg>
                </div>
                <div className="flex-1 h-4 rounded-full bg-[var(--color-border-muted)] overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${pct}%`, background: barColor }} />
                </div>
                <div className="flex items-center gap-2 min-w-[64px]">
                  <span className="font-[var(--font-body)] font-semibold text-xl"
                    style={{ color: 'var(--color-text)' }}>{count}</span>
                  <span className="font-[var(--font-body)] text-lg"
                    style={{ color: 'var(--color-text-muted)' }}>({pct}%)</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Reviews grid ── */}
      <div className="flex flex-col gap-8 justify-center items-center">
        <H2 className="text-center">Reviews</H2>

        <div className="columns-1 sm:columns-2 md:columns-2 lg:columns-3 gap-4">
          {reviews.length === 0 ? (
            <p className="font-[var(--font-body)] text-sm py-10"
              style={{ color: 'var(--color-text-muted)' }}>
              No reviews yet. Be the first to write one!
            </p>
          ) : (
            reviews.map((r) => <ReviewCard key={r.id} {...r} />)
          )}
        </div>
      </div>

    </Section>
  )
}