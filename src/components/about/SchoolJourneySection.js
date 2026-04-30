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
        <div className="flex flex-col gap-5 lg:sticky lg:top-35">

         
          <div
            className="w-full aspect-[4/3] rounded-[16px] overflow-hidden border border-[var(--color-border-muted)] relative flex items-center justify-center"
            style={{ background: 'var(--color-bg-brand)' }}
          >
           
          <img src="/image/4.webp" alt="no" className=" w-full h-full object-cover" />
          
          </div>

         

        </div>

      </div>
    </Section>
  )
}