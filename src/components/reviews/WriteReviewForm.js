'use client'

import { useState } from 'react'
import { H3, H4, P, Section, Tag, Button } from '../ui'

// ── Star path ─────────────────────────────────────────────────
const STAR_PATH = "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"

// ── Role options ──────────────────────────────────────────────
const roles = ['Student', 'Parent', 'Alumni', 'Teacher']

const roleColors = {
  Student: 'blue',
  Parent:  'ghost',
  Alumni:  'dark',
  Teacher: 'green',
}

// ── Star labels ───────────────────────────────────────────────
const starLabels = {
  1: 'Poor',
  2: 'Fair',
  3: 'Good',
  4: 'Very Good',
  5: 'Excellent',
}

// ── Form field wrapper ────────────────────────────────────────
function Field({ label, required, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="flex items-center gap-1 font-[var(--font-body)] text-xs font-semibold uppercase tracking-wider"
        style={{ color: 'var(--color-text-muted)' }}>
        {label}
        {required && <span style={{ color: 'var(--color-red)' }}>*</span>}
      </label>
      {children}
      {error && (
        <p className="font-[var(--font-body)] text-xs font-medium"
          style={{ color: 'var(--color-red)' }}>
          {error}
        </p>
      )}
    </div>
  )
}

// ── Text input ────────────────────────────────────────────────
function Input({ value, onChange, placeholder, type = 'text', error }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`
        w-full h-11 px-4 rounded-[9px]
        font-[var(--font-body)] text-sm
        bg-[var(--color-bg-muted)]
        border transition-all duration-150
        placeholder:text-[var(--color-text-hint)]
        text-[var(--color-text)]
        focus:outline-none focus:bg-[var(--color-bg-card)]
        focus:border-[var(--color-border-brand)]
        ${error
          ? 'border-[var(--color-red)]'
          : 'border-[var(--color-border-muted)] hover:border-[var(--color-border-brand)]'
        }
      `}
    />
  )
}

// ── Interactive star rater ────────────────────────────────────
function StarRater({ value, onChange }) {
  const [hovered, setHovered] = useState(0)
  const active = hovered || value

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(0)}
            className="transition-transform duration-100 hover:scale-110 focus:outline-none"
            aria-label={`Rate ${star} stars`}
          >
            <svg width="32" height="32" viewBox="0 0 20 20"
              fill={star <= active ? '#F59E0B' : 'none'}
              stroke={star <= active ? '#F59E0B' : '#d1d5db'}
              strokeWidth="1.2"
              className="transition-all duration-100"
            >
              <path d={STAR_PATH} />
            </svg>
          </button>
        ))}

        {/* Label */}
        {active > 0 && (
          <span
            className="ml-2 font-[var(--font-body)] text-sm font-semibold transition-all duration-150"
            style={{ color: '#F59E0B' }}
          >
            {starLabels[active]}
          </span>
        )}
      </div>
    </div>
  )
}

// ── Main Form Component ───────────────────────────────────────
export default function WriteReviewForm() {
  const [form, setForm] = useState({
    name:    '',
    role:    '',
    email:   '',
    rating:  0,
    title:   '',
    content: '',
  })
  const [errors, setErrors]   = useState({})
  const [submitted, setSubmitted] = useState(false)

  const set = (field) => (e) =>
    setForm((p) => ({ ...p, [field]: e.target.value }))

  const setField = (field, value) =>
    setForm((p) => ({ ...p, [field]: value }))

  // ── Validation ──────────────────────────────────────────────
  const validate = () => {
    const e = {}
    if (!form.name.trim())           e.name    = 'Name is required'
    if (!form.role)                  e.role    = 'Please select your role'
    if (!form.email.trim())          e.email   = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (form.rating === 0)           e.rating  = 'Please select a rating'
    if (!form.title.trim())          e.title   = 'Review title is required'
    if (form.content.trim().length < 20) e.content = 'Write at least 20 characters'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    // TODO: POST form data to your API here
    console.log('Review submitted:', form)
    setSubmitted(true)
  }

  // ── Success state ────────────────────────────────────────────
  if (submitted) {
    return (
      <Section id="write-review" variant="default">
        <div className="max-w-xl mx-auto flex flex-col items-center gap-5 py-10 text-center">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(152,235,107,0.15)' }}
          >
            <svg width="28" height="28" viewBox="0 0 20 20" fill="#4a9e1a">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>

          <div className="flex flex-col gap-2">
            <H3 color="default">Thank You, {form.name.split(' ')[0]}!</H3>
            <P size="md" color="default">
              Your review has been submitted and is pending approval. We appreciate your feedback!
            </P>
          </div>

          {/* Preview card */}
          <div className="w-full text-left p-5 rounded-[14px] bg-[var(--color-bg-card)] border border-[var(--color-border-muted)] flex flex-col gap-3">
            <div className="flex items-center gap-0.5">
              {[1,2,3,4,5].map((s) => (
                <svg key={s} width="14" height="14" viewBox="0 0 20 20"
                  fill={s <= form.rating ? '#F59E0B' : 'none'}
                  stroke={s <= form.rating ? '#F59E0B' : '#d1d5db'}
                  strokeWidth="1.5">
                  <path d={STAR_PATH} />
                </svg>
              ))}
              <span className="ml-2 font-[var(--font-body)] text-xs font-semibold" style={{ color: '#F59E0B' }}>
                {starLabels[form.rating]}
              </span>
            </div>
            <H4 color="default">{form.title}</H4>
            <P size="sm" color="default">{form.content}</P>
            <div className="flex items-center gap-2 pt-1 border-t border-[var(--color-border-muted)]">
              <div className="w-7 h-7 rounded-full flex items-center justify-center font-[var(--font-heading)] font-bold text-xs text-white"
                style={{ background: 'var(--color-bg-brand)' }}>
                {form.name.charAt(0)}
              </div>
              <P size="xs" color="default" className="font-semibold">{form.name}</P>
              <Tag variant={roleColors[form.role] ?? 'ghost'}>{form.role}</Tag>
            </div>
          </div>

          <button
            onClick={() => { setSubmitted(false); setForm({ name: '', role: '', email: '', rating: 0, title: '', content: '' }) }}
            className="font-[var(--font-body)] text-sm font-semibold underline"
            style={{ color: 'var(--color-text-brand)' }}
          >
            Write another review
          </button>
        </div>
      </Section>
    )
  }

  // ── Form ─────────────────────────────────────────────────────
  return (
    <Section id="write-review" variant="default" className="flex flex-col gap-8">

      {/* Header */}
      <div className="flex flex-col gap-2">
        <p className="font-[var(--font-body)] font-semibold text-[0.6875rem] tracking-[0.12em] uppercase"
          style={{ color: 'var(--color-text-brand)' }}>
          Share Your Experience
        </p>
        <H3 color="default">Write a Review</H3>
        <P size="md" color="default">
          Your feedback helps other families make the right choice for their child.
        </P>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="max-w-2xl flex flex-col gap-6"
      >

        {/* Name + Role row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Full Name" required error={errors.name}>
            <Input
              value={form.name}
              onChange={set('name')}
              placeholder="Your full name"
              error={errors.name}
            />
          </Field>

          <Field label="Email" required error={errors.email}>
            <Input
              type="email"
              value={form.email}
              onChange={set('email')}
              placeholder="you@example.com"
              error={errors.email}
            />
          </Field>
        </div>

        {/* Role selector */}
        <Field label="You are a" required error={errors.role}>
          <div className="flex flex-wrap gap-2">
            {roles.map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setField('role', r)}
                className={`
                  px-4 py-2 rounded-[8px] border font-[var(--font-body)] text-sm font-semibold
                  transition-all duration-150 focus:outline-none
                  ${form.role === r
                    ? 'bg-[var(--color-bg-brand)] text-white border-[var(--color-bg-brand)]'
                    : 'bg-[var(--color-bg-muted)] text-[var(--color-text-muted)] border-[var(--color-border-muted)] hover:border-[var(--color-border-brand)] hover:text-[var(--color-text-brand)]'
                  }
                `}
              >
                {r}
              </button>
            ))}
          </div>
          {errors.role && (
            <p className="font-[var(--font-body)] text-xs font-medium mt-1"
              style={{ color: 'var(--color-red)' }}>
              {errors.role}
            </p>
          )}
        </Field>

        {/* Star rating */}
        <Field label="Your Rating" required error={errors.rating}>
          <StarRater
            value={form.rating}
            onChange={(v) => setField('rating', v)}
          />
          {errors.rating && (
            <p className="font-[var(--font-body)] text-xs font-medium mt-1"
              style={{ color: 'var(--color-red)' }}>
              {errors.rating}
            </p>
          )}
        </Field>

        {/* Review title */}
        <Field label="Review Title" required error={errors.title}>
          <Input
            value={form.title}
            onChange={set('title')}
            placeholder="Summarize your experience in one line"
            error={errors.title}
          />
        </Field>

        {/* Review content */}
        <Field label="Your Review" required error={errors.content}>
          <div className="relative">
            <textarea
              rows={5}
              value={form.content}
              onChange={set('content')}
              placeholder="Share your experience at AEK School — what did you like most? How has it helped you or your child?"
              className={`
                w-full px-4 py-3 rounded-[9px] resize-none
                font-[var(--font-body)] text-sm
                bg-[var(--color-bg-muted)]
                border transition-all duration-150
                placeholder:text-[var(--color-text-hint)]
                text-[var(--color-text)]
                focus:outline-none focus:bg-[var(--color-bg-card)]
                focus:border-[var(--color-border-brand)]
                ${errors.content
                  ? 'border-[var(--color-red)]'
                  : 'border-[var(--color-border-muted)] hover:border-[var(--color-border-brand)]'
                }
              `}
            />
            {/* Char count */}
            <span
              className="absolute bottom-3 right-4 font-[var(--font-body)] text-xs"
              style={{ color: form.content.length < 20 ? 'var(--color-red)' : 'var(--color-text-hint)' }}
            >
              {form.content.length} / 20 min
            </span>
          </div>
        </Field>

        {/* Disclaimer */}
        <P size="xs" color="default" className="!opacity-40">
          Your email will not be published. Reviews are moderated before going live.
        </P>

        {/* Submit */}
        <button
          type="submit"
          className="
            w-full sm:w-fit px-8 h-12 rounded-[9px]
            font-[var(--font-body)] font-semibold text-sm text-white
            bg-[var(--color-bg-brand)] hover:opacity-90
            transition-opacity duration-150
            focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)] focus:ring-offset-2
          "
        >
          Submit Review →
        </button>

      </form>
    </Section>
  )
}