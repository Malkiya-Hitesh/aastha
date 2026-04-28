import { Button, H2, H4, P, Section, Tag } from '../ui'
import WriteReviewForm from './WriteReviewForm'

// ── STAR_PATH — clean ASCII only, no corrupted chars ──────────
const STAR_PATH = "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"

// ── Stars — defined ONCE outside component ────────────────────
function Stars({ rating, size = 14 }) {
    return (
        <div className="flex items-center gap-5">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    width={size}
                    height={size}
                    viewBox="0 0 20 20"
                    fill={i < rating ? '#F59E0B' : 'none'}
                    stroke={i < rating ? '#F59E0B' : '#d1d5db'}
                    strokeWidth="1.5"
                >
                    <path d={STAR_PATH} />
                </svg>
            ))}
        </div>
    )
}
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
    { id: 11, name: "Aarav Patel", role: "Student", rating: 5, content: "The teachers are always ready to help and make learning enjoyable. AEK School has truly shaped my confidence." },
    { id: 12, name: "Meera Shah", role: "Parent", rating: 5, content: "My daughter has grown so much here. The faculty is caring and the school keeps parents well informed at every step." },
    { id: 13, name: "Riya Desai", role: "Student", rating: 4, content: "The curriculum is well-structured and I love the science labs. Extracurricular activities make school so much fun." },
    { id: 14, name: "Kiran Mehta", role: "Alumni", rating: 5, content: "AEK School gave me the foundation I needed for engineering college. I am proud to be an alumnus of this institution." },
    { id: 15, name: "Priya Joshi", role: "Teacher", rating: 5, content: "Teaching here is a joy. The school provides all the resources we need and truly values each teacher's contribution." },
    { id: 16, name: "Rohan Trivedi", role: "Student", rating: 4, content: "The smart classrooms and modern labs make learning so interactive. I look forward to school every single day." },
    { id: 17, name: "Sunita Verma", role: "Parent", rating: 5, content: "We switched from another school and the difference is remarkable. The attention given to each child is exceptional." },
    { id: 18, name: "Nikhil Kapoor", role: "Alumni", rating: 3, content: "The values and discipline I learned at AEK School still guide me in my professional life every day." },
    { id: 19, name: "Ananya Gupta", role: "Student", rating: 5, content: "I scored district topper in my boards and my teachers made it possible. Forever grateful to AEK School." },
    { id: 20, name: "Harish Solanki", role: "Teacher", rating: 4, content: "The school culture promotes innovation in teaching. Students here are curious, motivated and a pleasure to teach." },
]
function ReviewCard({ name, role, content, rating }) {
    return (
        <div className="flex-shrink-0 w-[300px] sm:w-[340px] flex flex-col gap-4 rounded-[14px] p-5 border border-[var(--color-border-muted)] bg-[var(--color-bg-card)]">

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
// ── Main Component ────────────────────────────────────────────
export default function OverAll() {
    const total = reviews.length
    const avg = (reviews.reduce((s, r) => s + r.rating, 0) / total).toFixed(1)
    const counts = [5, 4, 3, 2, 1].map((star) => ({
        star,
        count: reviews.filter((r) => r.rating === star).length,
    }))

    return (
        <Section className="flex flex-col gap-8">

            <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-8 p-6 rounded-[16px] bg-[var(--color-bg-card)] border border-[var(--color-border-muted)]">

                <div className="flex flex-col items-center justify-center gap-5 sm:border-r sm:border-[var(--color-border-muted)] sm:pr-8">
                    {/* Big number */}
                    <span
                        className="font-[var(--font-heading)] font-extrabold leading-none"
                        style={{ fontSize: '6rem', color: 'var(--color-text-brand)' }}
                    >
                        {avg}
                    </span>

                    {/* Stars */}
                    <Stars rating={Math.round(avg)} size={22} />

                    {/* Based on N reviews */}
                    <P size="md" color="default"  >
                        total reviews  {total}
                    </P>

                    {/* out of 5 */}
                    <Button variant="outline" size='xl' className="">
                        write a review
                    </Button>
                </div>


                <div className="flex flex-col gap-3 justify-center">
                    {counts.map(({ star, count }) => {
                        const pct = total > 0 ? Math.round((count / total) * 100) : 0
                        const barColor =
                            pct > 60 ? 'var(--color-bg-brand)' :
                                pct > 20 ? '#F59E0B' : '#FF5B5B'

                        return (
                            <div key={star} className="flex items-center gap-5">

                                <div className="flex items-center gap-1 min-w-[34px]">
                                    <span
                                        className="font-[var(--font-body)] font-semibold text-xl"
                                        style={{ color: 'var(--color-text)' }}
                                    >
                                        {star}
                                    </span>
                                    <svg width="19" height="19" viewBox="0 0 20 20" fill="#F59E0B">
                                        <path d={STAR_PATH} />
                                    </svg>
                                </div>

                                {/* Progress bar */}
                                <div className="flex-1 h-4 rounded-full bg-[var(--color-border-muted)] overflow-hidden">
                                    <div
                                        className="h-full rounded-full transition-all duration-500"
                                        style={{ width: `${pct}%`, background: barColor }}
                                    />
                                </div>

                                {/* Count + % */}
                                <div className="flex items-center gap-2 min-w-[64px]">
                                    <span
                                        className="font-[var(--font-body)] font-semibold text-xl"
                                        style={{ color: 'var(--color-text)' }}
                                    >
                                        {count}
                                    </span>
                                    <span
                                        className="font-[var(--font-body)] text-lg "
                                        style={{ color: 'var(--color-text-muted)' }}
                                    >
                                        ({pct}%)
                                    </span>
                                </div>

                            </div>
                        )
                    })}
                </div>

            </div>
            <div className=' flex flex-col  gap-8  justify-center items-center'>
                <H2 className=' text-center ' >Reviews</H2>

                <div className='flex gap-4 flex-wrap  items-center justify-center'>
                    {reviews.map((r) => (
                        <ReviewCard key={r.id} {...r} />
                    ))}
                </div>

            </div>
            <WriteReviewForm />
        </Section>
    )
}