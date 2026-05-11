

import Image from 'next/image'
import { H2, H4, P, Section, Tag } from '../ui'
import { getMilestones } from '@/lib/queries'

// ── Timeline Data ─────────────────────────────────────────────


// ── Timeline Item ─────────────────────────────────────────────
function TimelineItem({ milestone, isLast }) {
  const { year, color = 'var(--color-text-brand)', tag, title, desc } = milestone
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
            style={{ background: `${color}`, minHeight: '40px' }}
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
export default  async function SchoolJourneySection() {
 
   const milestones = await getMilestones()
 
  return (
    <Section id="history" variant="default" className="flex flex-col gap-10">

      {/* Header */}
      
        <H2  className=' text-center ' color="brand">School Story</H2>
      

      {/* Two column */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-start">

       
        <div className="flex flex-col">
          {milestones.map((m, i) => (
            <TimelineItem
              key={m._id}
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
           
          <img src="https://cdn.jsdelivr.net/gh/Malkiya-Hitesh/Aastha-image@main/image/4.webp" alt="no" className=" w-full h-full object-cover" />
          
          </div>

         

        </div>

      </div>
    </Section>
  )
}