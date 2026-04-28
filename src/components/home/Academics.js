'use client'

import { FaBook, FaBuilding, FaTrophy } from "react-icons/fa"
import { Button, H2, H3, P, Section, Tag } from "../ui"
import { RiTeamFill } from "react-icons/ri"





// ── Highlight row inside left card ───────────────────────────
function Highlight({ icon, iconBg, iconColor, title, subtitle }) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-[10px] bg-white/[0.08] border border-white/10">
      <div
        className="w-13 h-13 rounded-[8px] flex items-center justify-center flex-shrink-0"
        style={{ background: iconBg, color: iconColor }}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-0.5">
        <P size="md" color="inverse" className="!text-white !opacity-90 font-semibold">{title}</P>
        <P size="sm" color="inverse" className="!opacity-50">{subtitle}</P>
      </div>
    </div>
  )
}

// ── Stat card on right side ──────────────────────────────────
function StatCard({ number, label  }) {
  return (
    <div className="bg-[var(--color-bg-card)] rounded-[16px] p-6 flex flex-col justify-center items-center gap-2 border border-black/[0.05]">
     
      <span
        className="font-[var(--font-heading)] font-extrabold leading-none"
        style={{
          fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
          color: 'var(--color-text-brand)',
        }}
      >
        {number}
      </span>
      <P size="lg" color="default">{label}</P>
    </div>
  )
}

// ── Main Section ─────────────────────────────────────────────
export default function Academics() {
  return (
    <Section id="academics" variant="default" className="flex flex-col gap-8">

     
     
        <H2  className=" text-center " color="default">Academics Overview</H2>
      

      {/* Two column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8 items-stretch">

    
        <div className="rounded-[16px] p-6 flex flex-col gap-8"   style={{ background: 'var(--color-bg-brand)' }}
        >
        
            <div className="flex items-center  flex-wrap gap-4">
             <span className="  font-[500] text-[15px] px-7 py-1.5  rounded-4xl bg-[var(--color-bg-success)]  "> GSEB  </span>
                        <span className="  font-[500] text-[15px] px-7 py-1.5  rounded-4xl bg-[var(--color-bg-success)]  ">  CBSE </span>
                        <span className="  font-[500] text-[15px] px-7 py-1.5  rounded-4xl bg-[var(--color-bg-success)]  ">  Gujarati Medium </span>
                        <span className="  font-[500] text-[15px] px-7 py-1.5  rounded-4xl bg-[var(--color-bg-success)]  "> English Medium  </span>
                        <span className="  font-[500] text-[15px] px-7 py-1.5  rounded-4xl bg-[var(--color-bg-success)]  ">  Std 1 – 12 </span>
                        <span className="  font-[500] text-[15px] px-7 py-1.5  rounded-4xl bg-[var(--color-bg-success)]  ">  Science </span>
                        <span className="  font-[500] text-[15px] px-7 py-1.5  rounded-4xl bg-[var(--color-bg-success)]  ">  Commerce </span>
          </div>

        
          <H3 style={{fontSize: 'clamp(2rem, 2.5vw, 3rem)'}} color="inverse">Academics Overview</H3>

      
          <P size="md" color="inverse">
            AEK School has been shaping young minds since 1998. We offer GSEB
            and CBSE curriculum in both Gujarati and English medium — from
            Std 1 to 12, giving every student the right environment to grow,
            learn, and excel.
          </P>

          {/* Highlights */}
          <div className="flex flex-col gap-3 mt-auto">
            <Highlight
              icon={<FaBuilding />}
              iconBg="rgba(152,235,107,0.18)"
              iconColor="#98EB6B"
              title="Modern Infrastructure"
              subtitle="Smart classrooms & fully equipped science labs"
            />
            <Highlight
              icon={<RiTeamFill />}
              iconBg="rgba(255,255,255,0.1)"
              iconColor="rgba(255,255,255,0.85)"
              title="Qualified Staff"
              subtitle=" Trained & certified educators"
            />
            <Highlight
              icon={<FaTrophy />}
              iconBg="rgba(255,91,91,0.2)"
              iconColor="#FF5B5B"
              title="Top Results Every Year "
              subtitle="District topper students "
            />
          </div>

          {/* CTA */}
          <Button
            variant="white"
            size="md"
            as="a"
            href="/academics"
            className="w-fit mt-1"
          >
            Explore Academics →
          </Button>
        </div>

        {/* ── RIGHT — Stats grid ── */}
        <div className="grid grid-cols-2 gap-4 lg:gap-5  ">  
          <StatCard
            number="25+"
            label="Years of Experience"
          />
        
          <StatCard
            number="60+"
            label="Expert Teachers"
           
          />
          <StatCard
            number="1200+"
            label="Students Enrolled"
            
          />
          <StatCard
            number="100%"
            label="Board Pass Rate"
           
          />
        </div>

      </div>
    </Section>
  )
}