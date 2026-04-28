'use client'

import Link from 'next/link'
import { Button, H2, P, Section, Tag } from '../ui'

export default function CtaSection() {
  return (
    <Section
      id="cta"
      variant="none"
      className="!px-0 !py-0"
    >
      <div
        className="relative overflow-hidden rounded-[20px] mx-[var(--section-px)] md:mx-[var(--section-px-md)] lg:mx-[var(--section-px-lg)] my-[var(--section-py)] md:my-[var(--section-py-md)] lg:my-[var(--section-py-lg)]"
        style={{ background: 'var(--color-green)' }}
      >

        {/* ── Background shapes ── */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-16 -right-16 w-[280px] h-[280px] rounded-full opacity-20"
            style={{ background: 'var(--color-blue)' }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-[220px] h-[220px] rounded-full opacity-10"
            style={{ background: 'var(--color-black)' }}
          />
          <div
            className="absolute top-0 left-[40%] w-[1px] h-full opacity-10"
            style={{ background: 'var(--color-black)' }}
          />
        </div>

        {/* ── Content ── */}
        <div className="relative z-10 flex flex-col items-center text-center gap-6 px-6 py-16 md:py-20 max-w-2xl mx-auto">

          {/* Top tag */}
          <Tag variant="dark">Admissions Open 2025 – 26</Tag>

          {/* Heading */}
          <H2
            color="default"
            className="!text-[var(--color-black)] !text-[1.75rem] sm:!text-[2.25rem] md:!text-[2.75rem]"
          >
            Give Your Child the Best Start in Life
          </H2>

          {/* Subtext */}
          <P
            size="lg"
            className="max-w-lg !text-[var(--color-black)] !opacity-70"
          >
            Join 1200+ students at AEK School — where every child is guided,
            supported, and inspired to reach their full potential.
          </P>

          {/* Stats strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 py-2">
            {[
              { n: '25+',   l: 'Years of Excellence' },
              { n: '100%',  l: 'Pass Rate'           },
              { n: '60+',   l: 'Expert Teachers'     },
            ].map(({ n, l }) => (
              <div key={l} className="flex flex-col items-center gap-0.5">
                <span
                  className="font-[var(--font-heading)] font-extrabold text-2xl leading-none"
                  style={{ color: 'var(--color-black)' }}
                >
                  {n}
                </span>
                <span
                  className="font-[var(--font-body)] text-[0.65rem] font-500 uppercase tracking-wide"
                  style={{ color: 'rgba(25,27,28,0.6)' }}
                >
                  {l}
                </span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <Button
              as={Link}
              href="/admissions"
              variant="secondary"
              size="lg"
            >
              Apply for Admission →
            </Button>
            <Button
              as={Link}
              href="/contact"
              variant="dark"
              size="lg"
            >
              Contact Us
            </Button>
          </div>

          {/* Fine print */}
          <P size="xs" className="!opacity-50 !text-[var(--color-black)]">
            No registration fee for early applicants · Limited seats available
          </P>

        </div>
      </div>
    </Section>
  )
}