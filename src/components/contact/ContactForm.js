'use client'

import React, { useState } from 'react'
import { H2, H3, H4, P, Section } from '../ui'


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



function ContactForm() {
      const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
      const [sent, setSent] = useState(false)
    
      const set = (field) => (e) => setForm((p) => ({ ...p, [field]: e.target.value }))
    
      const handleSubmit = (e) => {
        e.preventDefault()
        setSent(true)
      }
  return (
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
  )
}

export default ContactForm
