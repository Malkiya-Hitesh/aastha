'use client'


import React from 'react'
import { H2, P, Section, Tag } from '../ui'


import { useState } from 'react'




// ── Tag color map ─────────────────────────────────────────────
const tagVariantMap = {

  Admissions : 'blue',

  General:    'ghost',

  ACTIVITIES: 'green',

  ACTIVITIES: 'green',

  SAFETY:     'red',
}

// ── Single FAQ Item ───────────────────────────────────────────
function FaqItem({ answer , question , tag ,isOpen, onToggle }) {
  return (
    <div
      className={`
        w-full rounded-[14px] border overflow-hidden
        transition-all duration-200
        ${isOpen
          ? 'border-[var(--color-border-brand)] bg-[var(--color-bg-card)]'
          : 'border-[var(--color-border-muted)] bg-[var(--color-bg-card)] hover:border-[var(--color-border-brand)]'
        }
      `}
    >
      {/* ── Header (always visible) ── */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
        aria-expanded={isOpen}
      >
        {/* Left — tag + question */}
        <div className="flex flex-col gap-2 flex-1 min-w-0">
          <Tag variant={tagVariantMap[tag] ?? 'ghost'} className="w-fit">
            {tag}
          </Tag>
          <P
            size="md"
            color="dark"
            className={`font-semibold transition-colors duration-150 ${isOpen ? '!text-[var(--color-text-brand)]' : ''}`}
          >
            {question}
          </P>
        </div>

        {/* Right — +/- toggle button */}
        <div
          className={`
            w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center
            transition-all duration-200
            ${isOpen
              ? 'bg-[var(--color-bg-brand)] rotate-45'
              : 'bg-[var(--color-bg-muted)] rotate-0'
            }
          `}
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          <svg
            width="14" height="14" viewBox="0 0 14 14"
            fill={isOpen ? 'white' : 'var(--color-text-brand)'}
          >
            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              fill="none" />
          </svg>
        </div>
      </button>

      {/* ── Answer (visible when open) ── */}
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="px-5 pb-5">
          <div className="border-t border-[var(--color-border-muted)] pt-4">
            <P size="md" color="default" className="leading-relaxed">
              {answer}
            </P>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Main Component ────────────────────────────────────────────
export default function Faq({ faqs = [] }) {
  const [openId, setOpenId] = useState(1)

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <Section id="faq" variant="default" className="flex flex-col gap-8">

      {/* Header */}
      <div className="flex flex-col items-center gap-2 text-center">
        <p
          className="font-[var(--font-body)] font-semibold text-[0.6875rem] tracking-[0.12em] uppercase"
          style={{ color: 'var(--color-text-brand)' }}
        >
          FAQ
        </p>
        <H2 color="default">Frequently Asked Questions</H2>
        <P size="lg" color="default" className="max-w-lg">
          Everything you need to know about AEK School — admissions, timings, activities, and more.
        </P>
      </div>

      {/* FAQ list */}
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-3">
        {faqs.map((faq) => (
          <FaqItem
            key={faq._id}
            answer={faq.answer}
            question={faq.question}
            tag={faq.tag}
            isOpen={openId === faq._id}
            onToggle={() => toggle(faq._id)}
          />
        ))}
      </div>

    </Section>
  )
}