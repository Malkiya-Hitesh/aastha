'use client'


import React from 'react'
import { H2, P, Section, Tag } from '../ui'


import { useState } from 'react'


// ── FAQ Data ──────────────────────────────────────────────────
const faqs = [
  {
    id: 1,
    tag: "Admissions",
    question: "What is the admission process for AEK School?",
    answer: "The admission process involves filling out an application form, submitting necessary documents, and attending a brief interview. Please visit our Admissions page for detailed steps and deadlines.",
  },
  {
    id: 2,
    tag: "General",
    question: "What are the school timings?",
    answer: "School operates from 8:00 AM to 3:00 PM, Monday to Friday. After-school programs and extracurricular activities run until 5:00 PM.",
  },
  {
    id: 3,
    tag: "Activities",
    question: "What extracurricular activities are available?",
    answer: "We offer sports, music, drama, art, and clubs including debate, robotics, and environmental club — something for every student's interest.",
  },
  {
    id: 4,
    tag: "Academics",
    question: "What is the student-teacher ratio?",
    answer: "We maintain a low student-teacher ratio of 15:1 to ensure personalized attention and support for every student in every class.",
  },
  {
    id: 5,
    tag: "Safety",
    question: "What safety measures are in place?",
    answer: "We have secure entry points, CCTV surveillance throughout campus, regular safety drills, and a dedicated security team available at all times.",
  },
  {
    id: 6,
    tag: "Academics",
    question: "What is the school's policy on homework?",
    answer: "We follow a balanced approach — homework reinforces classroom learning while keeping time free for rest and activities. Amount varies by grade level.",
  },
  {
    id: 7,
    tag: "General",
    question: "Does the school provide transportation?",
    answer: "Yes, we offer safe and reliable transport for students within the school zone. Contact our admissions office for route details and schedules.",
  },
]

// ── Tag color map ─────────────────────────────────────────────
const tagVariantMap = {
  Admissions: 'blue',
  General:    'ghost',
  Activities: 'green',
  Academics:  'accent',
  Safety:     'red',
}

// ── Single FAQ Item ───────────────────────────────────────────
function FaqItem({ faq, isOpen, onToggle }) {
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
          <Tag variant={tagVariantMap[faq.tag] ?? 'ghost'} className="w-fit">
            {faq.tag}
          </Tag>
          <P
            size="md"
            color="dark"
            className={`font-semibold transition-colors duration-150 ${isOpen ? '!text-[var(--color-text-brand)]' : ''}`}
          >
            {faq.question}
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
              {faq.answer}
            </P>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Main Component ────────────────────────────────────────────
export default function Faq() {
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
            key={faq.id}
            faq={faq}
            isOpen={openId === faq.id}
            onToggle={() => toggle(faq.id)}
          />
        ))}
      </div>

    </Section>
  )
}