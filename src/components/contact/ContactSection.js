'use client'

import React, { useState } from 'react'
import { H2, H3, H4, P, Section } from '../ui'
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import { IoCall } from 'react-icons/io5'
import { IoIosMail } from 'react-icons/io'



function FormField({ label, type = 'text', placeholder, value, onChange, rows }) {
    const base = ` w-full px-4 font-[var(--font-body)] text-sm text-white bg-white/[0.07] border border-white/10 rounded-[9px]  placeholder:text-white/30  focus:outline-none focus:border-[var(--color-blue)] focus:bg-white/10   transition-all duration-150
  `
    return (
        <div className="flex flex-col gap-1.5">
            <label
                className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-wider"
                style={{ color: 'rgba(255,255,255,0.5)' }}
            >
                {label}
            </label>
            {rows ? (
                <textarea
                    rows={rows}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={`${base} py-3 resize-none`}
                />
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={`${base} h-11`}
                />
            )}
        </div>
    )
}
function ContactSection() {


    const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
    const [sent, setSent] = useState(false)

    const set = (field) => (e) => setForm((p) => ({ ...p, [field]: e.target.value }))

    const handleSubmit = (e) => {
        e.preventDefault()

        setSent(true)
    }
    return (
        <Section className=' flex flex-col gap-8'>
            <H2 className=' text-center ' >Contact Us</H2>
            <div className=' grid grid-cols-2 gap-8'>
                <div className=' flex flex-col gap-3 '>
                    <div className=' flex items-start gap-4 p-4 rounded-[12px] bg-[var(--color-bg-card)] border border-[var(--color-border-muted)]   ' >

                        <div className=" p-5  rounded-[10px] flex items-center justify-center text-2xl  flex-shrink-0" style={{ background: '#E8F0FC', color: '#1061D2' }} ><FaMapMarkerAlt className='text-3xl' /> </div>
                        <div className=' flex flex-col gap-0.5 min-w-0  items-start justify-center'  >
                            <H4 size="xs" color="default" className="!opacity-50 uppercase tracking-wider font-semibold"> Address</H4>
                            <P size="xl" color="dark" className="font-medium break-words"> 123 Main Street, City, Country</P>
                        </div>
                    </div>
                    <div className=' flex items-start gap-4 p-4 rounded-[12px] bg-[var(--color-bg-card)] border border-[var(--color-border-muted)]   ' >

                        <div className=" p-5  rounded-[10px] flex items-center justify-center text-2xl  flex-shrink-0" style={{ background: '#f0fbe8', color: '#4a9e1a' }} ><IoCall className='text-3xl' /> </div>
                        <div className=' flex flex-col gap-0.5 min-w-0  items-start justify-center'  >
                            <H4 size="xs" color="default" className="!opacity-50 uppercase tracking-wider font-semibold"> Phone</H4>
                            <P size="xl" color="dark" className="font-medium break-words"> +1 (123) 456-7890</P>
                        </div>
                    </div> <div className=' flex items-start gap-4 p-4 rounded-[12px] bg-[var(--color-bg-card)] border border-[var(--color-border-muted)]   ' >

                        <div className=" p-5  rounded-[10px] flex items-center justify-center text-2xl  flex-shrink-0" style={{ background: '#f0fbe8', color: '#4a9e1a' }} ><IoIosMail className='text-3xl' /> </div>
                        <div className=' flex flex-col gap-0.5 min-w-0  items-start justify-center'  >
                            <H4 size="xs" color="default" className="!opacity-50 uppercase tracking-wider font-semibold"> Email</H4>
                            <P size="xl" color="dark" className="font-medium break-words"> info@example.com</P>
                        </div>
                    </div> <div className=' flex items-start gap-4 p-4 rounded-[12px] bg-[var(--color-bg-card)] border border-[var(--color-border-muted)]   ' >

                        <div className=" p-5  rounded-[10px] flex items-center justify-center text-2xl  flex-shrink-0" style={{ background: '#fff0f0', color: '#FF5B5B' }} ><FaClock className='text-3xl' /> </div>
                        <div className=' flex flex-col gap-0.5 min-w-0  items-start justify-center'  >
                            <H4 size="xs" color="default" className="!opacity-50 uppercase tracking-wider font-semibold"> Hours</H4>
                            <P size="xl" color="dark" className="font-medium break-words"> Mon-Fri: 9AM - 5PM</P>
                        </div>
                    </div>
                </div>
                <div
                    className="rounded-[16px] p-6 flex flex-col gap-5"
                    style={{ background: 'var(--color-bg-dark)' }}
                >
                    {/* Form header */}
                    <div className="flex flex-col gap-1">
                        <H3 color="inverse">Send us a Message</H3>
                        <P size="sm" color="inverse">
                            We'll get back to you within 24 hours.
                        </P>
                    </div>

                    {sent ? (
                        /* ── Success state ── */
                        <div className="flex flex-col items-center justify-center gap-4 py-10">
                            <div
                                className="w-14 h-14 rounded-full flex items-center justify-center"
                                style={{ background: 'rgba(152,235,107,0.15)' }}
                            >
                                <svg width="24" height="24" viewBox="0 0 20 20" fill="#98EB6B">
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
                        /* ── Form fields ── */
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            {/* Name + Phone row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <FormField
                                    label="Full Name"
                                    placeholder="Your name"
                                    value={form.name}
                                    onChange={set('name')}
                                />
                                <FormField
                                    label="Phone"
                                    type="tel"
                                    placeholder="+91 XXXXX XXXXX"
                                    value={form.phone}
                                    onChange={set('phone')}
                                />
                            </div>

                            <FormField
                                label="Email"
                                type="email"
                                placeholder="you@example.com"
                                value={form.email}
                                onChange={set('email')}
                            />

                            <FormField
                                label="Message"
                                placeholder="Any questions about admissions, timings, or facilities..."
                                value={form.message}
                                onChange={set('message')}
                                rows={4}
                            />

                            {/* Submit */}
                            <button
                                type="submit"
                                className="  w-full h-12 rounded-[9px] mt-1 font-[var(--font-body)] font-semibold text-sm text-white   bg-[var(--color-blue)] hover:opacity-90   transition-opacity duration-150  focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)] focus:ring-offset-2 "  >
                                Send Message →
                            </button>
                        </form>
                    )}
                </div>
            </div>

            <div className=' w-full flex justify-center items-center '>
                <div className="rounded-2xl overflow-hidden border w-[80vw] h-[90vh] border-[#0f172a]/10 h-44 relative
              flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg,#e2e8f0,#cbd5e1)" }}>
                    <div className="w-[80vw] h-[90vh] rounded-2xl overflow-hidden border border-[#0f172a]/10 shadow-md">
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
                </div>
        </Section>
    )
}

export default ContactSection
