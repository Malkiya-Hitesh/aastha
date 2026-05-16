'use client'

import React, { useState } from 'react'
import { H2, H3, H4, P, Section } from '../ui'
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import { IoCall } from 'react-icons/io5'
import { IoIosMail } from 'react-icons/io'

// ── Form Field ────────────────────────────────────────────────
function FormField({ label, type = 'text', placeholder, value, onChange, rows }) {
  const base = `
    w-full px-3 sm:px-4
    font-[var(--font-body)] text-sm text-white
    bg-white/[0.07] border border-white/10
    rounded-[9px]
    placeholder:text-white/30
    focus:outline-none focus:border-[var(--color-blue)] focus:bg-white/10
    transition-all duration-150
  `
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-[var(--font-body)] text-[0.65rem] sm:text-xs font-semibold uppercase tracking-wider"
        style={{ color: 'rgba(255,255,255,0.5)' }}>
        {label}
      </label>
      {rows ? (
        <textarea
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${base} py-2.5 sm:py-3 resize-none`}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${base} h-10 sm:h-11`}
        />
      )}
    </div>
  )
}

// ── Contact Info Card ─────────────────────────────────────────
function InfoCard({ icon, iconBg, iconColor, label, value }) {
  return (
    <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border-muted)]">
      <div
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-[10px] flex items-center justify-center flex-shrink-0"
        style={{ background: iconBg, color: iconColor }}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-0.5 min-w-0">
        <p className="font-[var(--font-body)] text-[0.6rem] sm:text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--color-text-hint)]">
          {label}
        </p>
        <p className="font-[var(--font-body)] text-[0.8125rem] sm:text-sm font-medium text-[var(--color-text)] truncate">
          {value}
        </p>
      </div>
    </div>
  )
}

// ── Main ──────────────────────────────────────────────────────
function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const set = (field) => (e) => setForm((p) => ({ ...p, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <Section className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
      <H2 className="text-center">Contact Us</H2>

      <div className="max-w-6xl mx-auto w-full flex flex-col gap-6 sm:gap-8">

        {/* Top — Info cards + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

          {/* LEFT — Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            <InfoCard
              icon={<FaMapMarkerAlt className="text-base sm:text-xl" />}
              iconBg="#E8F0FC" iconColor="#1061D2"
              label="Address"
              value="123 Main Street, City, Country"
            />
            <InfoCard
              icon={<IoCall className="text-base sm:text-xl" />}
              iconBg="#f0fbe8" iconColor="#4a9e1a"
              label="Phone"
              value="+1 (123) 456-7890"
            />
            <InfoCard
              icon={<IoIosMail className="text-base sm:text-xl" />}
              iconBg="#f0fbe8" iconColor="#4a9e1a"
              label="Email"
              value="info@example.com"
            />
            <InfoCard
              icon={<FaClock className="text-base sm:text-xl" />}
              iconBg="#fff0f0" iconColor="#FF5B5B"
              label="Hours"
              value="Mon–Fri: 9AM – 5PM"
            />
          </div>

          {/* RIGHT — Form */}
          <div
            className="rounded-2xl p-4 sm:p-6 flex flex-col gap-4 sm:gap-5"
            style={{ background: 'var(--color-bg-dark)' }}
          >
            <div className="flex flex-col gap-1">
              <H3 color="inverse">Send us a Message</H3>
              <P size="sm" color="inverse">We'll get back to you within 24 hours.</P>
            </div>

            {sent ? (
              <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 py-8 sm:py-10 text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(152,235,107,0.15)' }}>
                  <svg width="22" height="22" viewBox="0 0 20 20" fill="#98EB6B">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <H4 color="inverse">Message Sent!</H4>
                <P size="sm" color="inverse">
                  Thank you for reaching out. Our team will contact you soon.
                </P>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', phone: '', email: '', message: '' }) }}
                  className="font-[var(--font-body)] text-xs font-semibold underline"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <FormField label="Full Name" placeholder="Your name" value={form.name} onChange={set('name')} />
                  <FormField label="Phone" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={set('phone')} />
                </div>
                <FormField label="Email" type="email" placeholder="you@example.com" value={form.email} onChange={set('email')} />
                <FormField label="Message" placeholder="Any questions about admissions, timings, or facilities..." value={form.message} onChange={set('message')} rows={4} />

                <button
                  type="submit"
                  className="
                    w-full h-10 sm:h-12 mt-1
                    rounded-[9px]
                    font-[var(--font-body)] font-semibold
                    text-xs sm:text-sm text-white
                    bg-[var(--color-blue)]
                    hover:opacity-90
                    transition-opacity duration-150
                    focus:outline-none
                  "
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="w-full h-[280px] sm:h-[380px] md:h-[450px] rounded-2xl overflow-hidden border border-[var(--color-border-muted)]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.2921777420484!2d71.18931817347021!3d22.038416152340364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395858786faa34c1%3A0x396951dae20abc64!2sAstha%20School!5e0!3m2!1sen!2sin!4v1777378763991!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </Section>
  )
}

export default ContactSection