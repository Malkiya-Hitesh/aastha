import { getAcademicInfo } from '@/lib/queries'
import { H2, H3, H4, P, Section, Tag } from '../ui'

// ── Inline SVG Icons ──────────────────────────────────────────
function IconBoard() {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M4 4h12v2H4zm0 4h8v2H4zm0 4h10v2H4z" />
        </svg>
    )
}
function IconMedium() {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
        </svg>
    )
}
function IconStd() {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
            <path d="M3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zm5.99 7.176A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
    )
}
function IconTiming() {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
    )
}
function IconStream() {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
    )
}

// ── Info Row (icon + title + tags) ────────────────────────────
function InfoRow({ icon, iconBg, iconColor, title, tags, tagVariant = 'blue' }) {
    return (
        <div className="grid grid-cols-[48px_1fr] gap-4 items-start">
            {/* Icon */}
            <div
                className="w-12 h-12 rounded-[10px] flex items-center justify-center flex-shrink-0"
                style={{ background: iconBg, color: iconColor }}
            >
                {icon}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2 pt-1">
                <H4 color="brand">{title}</H4>
                <div className="flex flex-wrap gap-2">
                    {tags.map((t) => (
                        <Tag key={t} variant={tagVariant}>{t}</Tag>
                    ))}
                </div>
            </div>
        </div>
    )
}

// ── Stream Card (Science / Commerce / Arts) ───────────────────
function StreamCard({ icon, iconBg, iconColor, title, desc, subjects }) {
    return (
        <div className="flex flex-col gap-4 p-5 rounded-[14px] border border-[var(--color-border-muted)] bg-[var(--color-bg-card)]">
            {/* Header */}
            <div className="grid grid-cols-[48px_1fr] gap-3 items-center">
                <div
                    className="w-12 h-12 rounded-[10px] flex items-center justify-center flex-shrink-0"
                    style={{ background: iconBg, color: iconColor }}
                >
                    {icon}
                </div>
                <H3 color="brand">{title}</H3>
            </div>

            {/* Description */}
            <P size="md" color="default" className="leading-relaxed">{desc}</P>

            {/* Subject tags */}
            <div className="flex flex-wrap gap-2">
                {subjects.map((s) => (
                    <Tag key={s} variant="ghost">{s}</Tag>
                ))}
            </div>
        </div>
    )
}

// ── Main Section ──────────────────────────────────────────────
export default async function AcademicsDetail() {

  const academicInfo = await getAcademicInfo()
   
   
    return (
        <Section id="academics-detail" variant="default" className="flex flex-col gap-8">

            {/* Header */}

            <H2 color="default" className=' text-center '>Academic Overview</H2>


            {/* ── Two column layout ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">

                {/* ── LEFT — School info card ── */}
                <div className="flex flex-col gap-4 p-6 rounded-[16px] border border-[var(--color-border-muted)] bg-[var(--color-bg-card)]">

                    <InfoRow
                        icon={<IconBoard />}
                        iconBg="#E8F0FC"
                        iconColor="#1061D2"
                        title="Board"
                        tags={academicInfo.board}
                    />

                    <div className="border-t border-[var(--color-border-muted)]" />

                    <InfoRow
                        icon={<IconMedium />}
                        iconBg="#f0fbe8"
                        iconColor="#4a9e1a"
                        title="Medium of Instruction"
                        tags={academicInfo.medium}
                    />

                    <div className="border-t border-[var(--color-border-muted)]" />

                    <InfoRow
                        icon={<IconStd />}
                        iconBg="#fff7ed"
                        iconColor="#d97706"
                        title="Classes Offered"
                        tags={academicInfo.classes}
                    />

                    <div className="border-t border-[var(--color-border-muted)]" />

                    <InfoRow
                        icon={<IconTiming />}
                        iconBg="#fff0f0"
                        iconColor="#FF5B5B"
                        title="School Timings"
                        tags={academicInfo.timings}
                    />

                </div>

                {/* ── RIGHT — Stream cards ── */}
                <div className="flex flex-col gap-4">

                    <StreamCard
                        icon={<IconStream />}
                        iconBg="#E8F0FC"
                        iconColor="#1061D2"
                    
                        title={ Object.keys(academicInfo.streams)[0]}
                        subjects={ Object.values(academicInfo.streams)[0].subjects}
                       
                    />

                    <StreamCard
                        icon={<IconStream />}
                        iconBg="#f0fbe8"
                        iconColor="#4a9e1a"
                       title={ Object.keys(academicInfo.streams)[1]}
                        subjects={ Object.values(academicInfo.streams)[1].subjects}
                    />
                    <StreamCard
                        icon={<IconStream />}
                        iconBg="#fff7ed"
                        iconColor="#d97706"
                       title={ Object.keys(academicInfo.streams)[2]}
                        subjects={ Object.values(academicInfo.streams)[2].subjects}
                    />

                </div>

            </div>
        </Section>
    )
}