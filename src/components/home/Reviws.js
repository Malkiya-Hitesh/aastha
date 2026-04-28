
'use client'


import Link from 'next/link'
import { H2, H4, Section, Tag, P, Button } from '../ui'


const STAR_PATH = "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"

// ── Stars row ─────────────────────────────────────────────────
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

function RatingOverview({ reviews }) {
    const total = reviews.length
    const avg = (reviews.reduce((s, r) => s + r.rating, 0) / total).toFixed(1)
    const counts = [5, 4, 3, 2, 1].map((star) => ({
        star,
        count: reviews.filter((r) => r.rating === star).length,
    }))

    return (
        <div className="flex flex-col sm:flex-row gap-6 p-6 rounded-[16px] bg-[var(--color-bg-card)] border border-[var(--color-border-muted)]">

            {/* Left — overall score */}
            <div className="flex flex-col items-center justify-center gap-2 sm:min-w-[140px] sm:border-r sm:border-[var(--color-border-muted)] sm:pr-6">
                <span
                    className="font-[var(--font-heading)] font-extrabold leading-none"
                    style={{ fontSize: '3.5rem', color: 'var(--color-text-brand)' }}
                >
                    {avg}
                </span>
                <Stars rating={Math.round(avg)} size={16} />
                <P size="xs" color="default" className="!opacity-50 text-center">
                    Based on {total} reviews
                </P>
            </div>

            {/* Right — 5→1 bar breakdown */}
            <div className="flex flex-col gap-3 flex-1 justify-center">
                {counts.map(({ star, count }) => {
                    const pct = total > 0 ? Math.round((count / total) * 100) : 0
                    const barColor = pct > 60 ? 'var(--color-bg-brand)' : pct > 20 ? '#F59E0B' : '#FF5B5B'

                    return (
                        <div key={star} className="flex items-center gap-3">

                            {/* "5 ★" label */}
                            <div className="flex items-center gap-1 min-w-[34px]">
                                <span className="font-[var(--font-body)] font-semibold text-xs"
                                    style={{ color: 'var(--color-text)' }}>
                                    {star}
                                </span>
                                <svg width="11" height="11" viewBox="0 0 20 20" fill="#F59E0B">
                                    <path d={STAR_PATH} />
                                </svg>
                            </div>

                            {/* Bar */}
                            <div className="flex-1 h-2 rounded-full bg-[var(--color-border-muted)] overflow-hidden">
                                <div
                                    className="h-full rounded-full transition-all duration-500"
                                    style={{ width: `${pct}%`, background: barColor }}
                                />
                            </div>

                            {/* Count (%) */}
                            <div className="flex items-center gap-1 min-w-[64px]">
                                <span className="font-[var(--font-body)] font-semibold text-xs"
                                    style={{ color: 'var(--color-text)' }}>
                                    {count}
                                </span>
                                <span className="font-[var(--font-body)] text-xs"
                                    style={{ color: 'var(--color-text-muted)' }}>
                                    ({pct}%)
                                </span>
                            </div>

                        </div>
                    )
                })}
            </div>

        </div>
    )
}

// ── Avatar ────────────────────────────────────────────────────
const roleColors = {
    Student: { bg: 'var(--color-bg-brand)', text: 'var(--color-text-inverse)' },
    Parent: { bg: '#7c3aed', text: '#fff' },
    Alumni: { bg: 'var(--color-bg-dark)', text: 'var(--color-text-inverse)' },
    Teacher: { bg: '#059669', text: '#fff' },
}
const roleTagVariant = {
    Student: 'blue', Parent: 'ghost', Alumni: 'dark', Teacher: 'green',
}

function Avatar({ name, role }) {
    const { bg, text } = roleColors[role] ?? roleColors.Student
    return (
        <div
            className="w-10 h-10 rounded-full flex items-center justify-center font-[var(--font-heading)] font-bold text-sm flex-shrink-0"
            style={{ background: bg, color: text }}
        >
            {name.charAt(0)}
        </div>
    )
}

// ── Review Card ───────────────────────────────────────────────
function ReviewCard({ name, role, content, rating }) {
    return (
        <div className="flex-shrink-0 w-[300px] sm:w-[340px] flex flex-col gap-4 rounded-[14px] p-5 border border-[var(--color-border-muted)] bg-[var(--color-bg-card)]">
            {/* <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                <path d="M0 18V10.8C0 7.2 1.2 4.2 3.6 1.8L6 4.2C4.8 5.4 4.1 6.9 3.9 8.7H7.2V18H0ZM13.8 18V10.8C13.8 7.2 15 4.2 17.4 1.8L19.8 4.2C18.6 5.4 17.9 6.9 17.7 8.7H21V18H13.8Z"
                    fill="var(--color-bg-brand)" opacity="0.2" />
            </svg> */}
            <P size="md" color="default" className="flex-1 leading-relaxed">{content}</P>
            <Stars rating={rating} />
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

// ── Reviews Data ──────────────────────────────────────────────
const reviews = [
    { id: 1, name: "Aarav Patel", role: "Student", rating: 5, content: "The teachers are always ready to help and make learning enjoyable. AEK School has truly shaped my confidence." },
    { id: 2, name: "Meera Shah", role: "Parent", rating: 5, content: "My daughter has grown so much here. The faculty is caring and the school keeps parents well informed at every step." },
    { id: 3, name: "Riya Desai", role: "Student", rating: 4, content: "The curriculum is well-structured and I love the science labs. Extracurricular activities make school so much fun." },
    { id: 4, name: "Kiran Mehta", role: "Alumni", rating: 5, content: "AEK School gave me the foundation I needed for engineering college. I am proud to be an alumnus of this institution." },
    { id: 5, name: "Priya Joshi", role: "Teacher", rating: 5, content: "Teaching here is a joy. The school provides all the resources we need and truly values each teacher's contribution." },
    { id: 6, name: "Rohan Trivedi", role: "Student", rating: 4, content: "The smart classrooms and modern labs make learning so interactive. I look forward to school every single day." },
    { id: 7, name: "Sunita Verma", role: "Parent", rating: 5, content: "We switched from another school and the difference is remarkable. The attention given to each child is exceptional." },
    { id: 8, name: "Nikhil Kapoor", role: "Alumni", rating: 3, content: "The values and discipline I learned at AEK School still guide me in my professional life every day." },
    { id: 9, name: "Ananya Gupta", role: "Student", rating: 5, content: "I scored district topper in my boards and my teachers made it possible. Forever grateful to AEK School." },
    { id: 10, name: "Harish Solanki", role: "Teacher", rating: 4, content: "The school culture promotes innovation in teaching. Students here are curious, motivated and a pleasure to teach." },
]


export default function Reviews() {




    return (
        <Section id="reviews" variant="default" className="flex flex-col gap-8">



            <H2 className=" text-center " color="default">What Our Community Says</H2>



            <RatingOverview reviews={reviews} />





            <div

                className="flex gap-4 overflow-x-auto pb-3 select-none"


            >
                {reviews.map((r) => (
                    <ReviewCard key={r.id} {...r} />
                ))}

                
                <div className="flex-shrink-0 w-[200px] sm:w-[220px] flex flex-col items-center justify-center gap-4 rounded-[14px] p-6 border border-[var(--color-border-brand)] bg-[var(--color-bg-accent)]">
  
  {/* Arrow circle */}
  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[var(--color-bg-brand)]">
    <svg width="18" height="18" viewBox="0 0 20 20" fill="white">
      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  </div>
 
  {/* Text */}
  <div className="flex flex-col items-center gap-1 text-center">
    <span
      className="font-[var(--font-heading)] font-bold text-base leading-tight"
      style={{ color: 'var(--color-text-brand)' }}
    >
      View All Reviews
    </span>
    <span
      className="font-[var(--font-body)] text-xs"
      style={{ color: 'var(--color-text-muted)' }}
    >
      See what everyone says
    </span>
  </div>
 
  {/* Link */}
  <Link
    href="/reviews"
    className="
      inline-flex items-center gap-1.5
      font-[var(--font-body)] text-xs font-semibold
      px-4 py-2 rounded-[7px]
      bg-[var(--color-bg-brand)] text-[var(--color-text-inverse)]
      hover:opacity-85 transition-opacity duration-150
    "
  >
    Read More
    <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  </Link>
 
</div>

            </div>



        </Section>
    )
}