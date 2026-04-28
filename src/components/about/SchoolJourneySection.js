'use client'

import Image from 'next/image'
import { H2, H4, P, Section, Tag } from '../ui'

// ── Timeline Data ─────────────────────────────────────────────
const milestones = [
  {
    id: 1,
    year: '1998',
    color: '#1061D2',
    tag: 'Founded',
    title: 'AEK School Established',
    desc: 'AEK School opened its doors with just 3 classrooms, 12 teachers, and 200 students in the heart of Rajkot. The vision was simple — quality education for every child.',
  },
  {
    id: 2,
    year: '2005',
    color: '#98EB6B',
    tag: 'Growth',
    title: 'CBSE Affiliation & New Campus',
    desc: 'Received CBSE affiliation alongside existing GSEB board. A new campus wing was inaugurated with modern science labs, a library, and a computer center.',
  },
  {
    id: 3,
    year: '2012',
    color: '#F59E0B',
    tag: 'Excellence',
    title: 'State Best School Award',
    desc: 'Recognized by the Gujarat State Government as one of the top 10 schools in the state. Student strength crossed 800 with a 100% board pass rate for the 7th consecutive year.',
  },
  {
    id: 4,
    year: '2018',
    color: '#a78bfa',
    tag: 'Digital',
    title: 'Smart Classrooms & Digital Learning',
    desc: 'Introduced smart classrooms with interactive boards across all grades. Launched the AEK digital learning portal for students and parents to track progress online.',
  },
  {
    id: 5,
    year: '2024',
    color: '#FF5B5B',
    tag: 'Today',
    title: '1200+ Students & Counting',
    desc: 'Today AEK School stands as Rajkot\'s most trusted institution with 1200+ students, 60+ faculty members, and alumni making their mark across India and abroad.',
  },
]

// ── Timeline Item ─────────────────────────────────────────────
function TimelineItem({ milestone, isLast }) {
  const { year, color, tag, title, desc } = milestone
  return (
    <div className="grid grid-cols-[28px_1fr] gap-4">

      {/* Left — dot + line */}
      <div className="flex flex-col items-center">
        {/* Dot */}
        <div
          className="w-[14px] h-[14px] rounded-full flex-shrink-0 mt-1 ring-4 ring-[var(--color-bg-muted)]"
          style={{ background: color }}
        />
        {/* Vertical line */}
        {!isLast && (
          <div
            className="w-[2px] flex-1 mt-2 rounded-full"
            style={{ background: `${color}30`, minHeight: '40px' }}
          />
        )}
      </div>

      {/* Right — content */}
      <div className={`flex flex-col gap-2 ${isLast ? '' : 'pb-8'}`}>
        {/* Year + tag */}
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className="font-[var(--font-heading)] font-extrabold text-base leading-none"
            style={{ color }} >
            {year}
          </span>
          <span
            className="font-[var(--font-body)] font-semibold text-[9.5px] tracking-[0.08em] uppercase px-2 py-0.5 rounded-[4px]"
            style={{ background: `${color}18`, color }}
          >
            {tag}
          </span>
        </div>

        {/* Title */}
        <H4 color="default">{title}</H4>

        {/* Description */}
        <P size="md" color="default" className="leading-relaxed ">
          {desc}
        </P>
      </div>

    </div>
  )
}

// ── Main Section ──────────────────────────────────────────────
export default function SchoolJourneySection() {
  return (
    <Section id="history" variant="default" className="flex flex-col gap-10">

      {/* Header */}
      
        <H2  className=' text-center ' color="brand">School Story</H2>
      

      {/* Two column */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-start">

       
        <div className="flex flex-col">
          {milestones.map((m, i) => (
            <TimelineItem
              key={m.id}
              milestone={m}
              isLast={i === milestones.length - 1}
            />
          ))}
        </div>

        {/* ── RIGHT — Sticky photo + stats ── */}
        <div className="flex flex-col gap-5 lg:sticky lg:top-8">

         
          <div
            className="w-full aspect-[4/3] rounded-[16px] overflow-hidden border border-[var(--color-border-muted)] relative flex items-center justify-center"
            style={{ background: 'var(--color-bg-muted)' }}
          >
            {/* Replace with real <Image> */}
            {/* <Image src="/images/school-journey.jpg" alt="School Journey" fill className="object-cover" /> */}

            {/* Placeholder */}
            <div className="flex flex-col items-center gap-3">
              <svg width="36" height="36" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="4" width="16" height="12" rx="2" stroke="var(--color-text-brand)" strokeWidth="1.5" opacity="0.3"/>
                <circle cx="7" cy="8" r="1.5" fill="var(--color-text-brand)" opacity="0.3"/>
                <path d="M2 13l4-3 3 2.5 3-4 4 4.5" stroke="var(--color-text-brand)" strokeWidth="1.5" opacity="0.3" strokeLinecap="round"/>
              </svg>
              <P size="xs" color="default" className="!opacity-30">
                school journey photo
              </P>
            </div>

            {/* Year badge overlay */}
            <div className="absolute bottom-4 left-4">
              <div
                className="px-3 py-1.5 rounded-[8px] flex items-center gap-2"
                style={{ background: 'rgba(25,27,28,0.75)', backdropFilter: 'blur(8px)' }}
              >
                <svg width="12" height="12" viewBox="0 0 20 20" fill="#98EB6B">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
                <span className="font-[var(--font-body)] text-xs font-semibold text-white">
                  Est. 1998 · 25+ Years
                </span>
              </div>
            </div>
          </div>

         

        </div>

      </div>
    </Section>
  )
}