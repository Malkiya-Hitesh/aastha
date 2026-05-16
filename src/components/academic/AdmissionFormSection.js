'use client'

import { useState, useRef } from 'react'
import { H2, H3, P, Section } from '../ui'

// ─────────────────────────────────────────────
// Validation helpers
// ─────────────────────────────────────────────
const ONLY_LETTERS = /^[a-zA-Z\s]*$/
const ONLY_NUMBERS = /^[0-9]*$/
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function calcAge(dob) {
    if (!dob) return null
    const today = new Date()
    const birth = new Date(dob)
    let age = today.getFullYear() - birth.getFullYear()
    const m = today.getMonth() - birth.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--
    return age
}

function validate(data) {
    const e = {}

    // ── Basic ──
    if (!data.std.trim()) e.std = 'STD is required'
    if (data.phR && data.phR.length !== 10) e.phR = 'Must be 10 digits'
    if (data.phM && data.phM.length !== 10) e.phM = 'Must be 10 digits'
    if (!data.whatsapp.trim()) e.whatsapp = 'WhatsApp No. is required'
    else if (data.whatsapp.length !== 10) e.whatsapp = 'Must be 10 digits'

    if (!data.medium) e.medium = 'Please select Medium'

    // ── Student ──
    if (!data.surname.trim()) e.surname = 'Surname is required'
    else if (!ONLY_LETTERS.test(data.surname)) e.surname = 'Letters only'
    if (!data.studentName.trim()) e.studentName = 'Name is required'
    else if (!ONLY_LETTERS.test(data.studentName)) e.studentName = 'Letters only'
    if (!data.fatherName.trim()) e.fatherName = 'Father\'s name is required'
    else if (!ONLY_LETTERS.test(data.fatherName)) e.fatherName = 'Letters only'
    if (data.motherName && !ONLY_LETTERS.test(data.motherName)) e.motherName = 'Letters only'
    if (data.religion && !ONLY_LETTERS.test(data.religion)) e.religion = 'Letters only'

    // ── DOB / age ──
    if (!data.dob) e.dob = 'Date of Birth is required'
    else {
        const age = calcAge(data.dob)
        if (age < 3) e.dob = 'Age must be at least 3 years'
        if (age > 20) e.dob = 'Age must be 20 years or below'
    }

    // ── Last Result ──
    if (data.lastResult !== '') {
        const n = Number(data.lastResult)
        if (isNaN(n) || n < 0 || n > 100) e.lastResult = '0–100 only'
    }

    // ── Parent ──
    if (data.parentPhone && data.parentPhone.length !== 10) e.parentPhone = 'Must be 10 digits'
    if (data.email && !EMAIL_REGEX.test(data.email)) e.email = 'Invalid email format'
    if (!data.income.trim()) e.income = 'Monthly income is required'

    // ── Misc ──
    if (!data.transport) e.transport = 'Please select Yes or No'

    return e
}

// ─────────────────────────────────────────────
// UI sub-components
// ─────────────────────────────────────────────

// Char counter badge
function Counter({ current, max }) {
    const over = current > max
    return (
        <span className="text-[10px] font-medium tabular-nums"
            style={{ color: over ? 'var(--color-red)' : 'var(--color-text-hint)' }}>
            {current}/{max}
        </span>
    )
}

// Field wrapper
function Field({ label, required, error, counter, children, className = '' }) {
    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            {label && (
                <div className="flex items-center justify-between">
                    <label className="font-[var(--font-body)] text-[11px] font-semibold uppercase tracking-wider flex items-center gap-1"
                        style={{ color: 'var(--color-text-muted)' }}>
                        {label}{required && <span style={{ color: 'var(--color-red)' }}>*</span>}
                    </label>
                    {counter}
                </div>
            )}
            {children}
            {error && (
                <p className="text-[11px] font-medium flex items-center gap-1" style={{ color: 'var(--color-red)' }}>
                    <svg width="11" height="11" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {error}
                </p>
            )}
        </div>
    )
}

// Base input classes
const inputBase = (error) => `
  w-full h-10 px-3 rounded-[8px]
  font-[var(--font-body)] text-sm
  bg-[var(--color-bg-muted)]
  border transition-all duration-150
  placeholder:text-[var(--color-text-hint)]
  text-[var(--color-text)]
  focus:outline-none focus:bg-white
  focus:border-[var(--color-border-brand)]
  ${error
        ? 'border-[var(--color-red)] bg-red-50'
        : 'border-[var(--color-border-muted)] hover:border-[var(--color-border)]'
    }
`

// Text input
function Input({ value, onChange, placeholder, type = 'text', error, maxLength,
    onlyLetters, onlyNumbers, uppercase, className = '' }) {

    const handleChange = (e) => {
        let v = e.target.value
        if (uppercase) v = v.toUpperCase()
        if (onlyLetters) v = v.replace(/[^a-zA-Z\s]/g, '')
        if (onlyNumbers) v = v.replace(/[^0-9]/g, '')
        if (maxLength) v = v.slice(0, maxLength)
        onChange({ target: { value: v } })
    }

    return (
        <input
            type={type}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            maxLength={maxLength}
            className={`${inputBase(error)} ${className}`}
        />
    )
}

// Number input (marks 0–100)
function MarksInput({ value, onChange, placeholder, error }) {
    const handleChange = (e) => {
        let v = e.target.value.replace(/[^0-9]/g, '').slice(0, 3)
        if (Number(v) > 100) v = '100'
        onChange({ target: { value: v } })
    }
    return (
        <input
            type="text"
            inputMode="numeric"
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            maxLength={3}
            className={inputBase(error)}
        />
    )
}

// Phone input — 10 digits only
function PhoneInput({ value, onChange, placeholder, error }) {
    const handleChange = (e) => {
        const v = e.target.value.replace(/[^0-9]/g, '').slice(0, 10)
        onChange({ target: { value: v } })
    }
    return (
        <div className="relative">
            <input
                type="tel"
                inputMode="numeric"
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                maxLength={10}
                className={`${inputBase(error)} pr-14`}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-semibold tabular-nums"
                style={{ color: value.length === 10 ? '#4a9e1a' : 'var(--color-text-hint)' }}>
                {value.length}/10
            </span>
        </div>
    )
}

// Textarea
function Textarea({ value, onChange, placeholder, rows = 3, maxLength, error }) {
    const handleChange = (e) => {
        let v = e.target.value
        if (maxLength) v = v.slice(0, maxLength)
        onChange({ target: { value: v } })
    }
    return (
        <textarea
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            rows={rows}
            maxLength={maxLength}
            className={`
        w-full px-3 py-2 rounded-[8px] resize-none
        font-[var(--font-body)] text-sm
        bg-[var(--color-bg-muted)]
        border transition-all duration-150
        placeholder:text-[var(--color-text-hint)]
        text-[var(--color-text)]
        focus:outline-none focus:bg-white
        focus:border-[var(--color-border-brand)]
        ${error ? 'border-[var(--color-red)] bg-red-50' : 'border-[var(--color-border-muted)]'}
      `}
        />
    )
}

// Section heading
function FormSection({ title, children }) {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
                <div className="h-px flex-1" style={{ background: 'var(--color-border-muted)' }} />
                <span className="px-4 py-1 rounded-full font-[var(--font-body)] font-bold text-[11px] uppercase tracking-widest text-white"
                    style={{ background: 'var(--color-bg-brand)' }}>
                    {title}
                </span>
                <div className="h-px flex-1" style={{ background: 'var(--color-border-muted)' }} />
            </div>
            {children}
        </div>
    )
}

// ─────────────────────────────────────────────
// Print view
// ─────────────────────────────────────────────
function PrintView({ data, photo, onBack }) {
    const handlePrint = () => {
        const win = window.open('', '_blank')
        win.document.write(`<!DOCTYPE html><html><head>
      <title>Admission Form — ${data.surname} ${data.studentName}</title>
      <style>
        *{box-sizing:border-box;margin:0;padding:0;font-family:Arial,sans-serif}
        body{padding:20px;font-size:12px;color:#000}
        .wrap{max-width:800px;margin:0 auto;border:2px solid #000;padding:16px}
        .header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;border-bottom:2px solid #1061D2;padding-bottom:10px}
        .school-name{font-size:18px;font-weight:800;color:#1061D2}
        .school-sub{font-size:11px;color:#555;margin-top:2px}
        .photo-box{width:90px;height:110px;border:2px dashed #999;display:flex;align-items:center;justify-content:center;font-size:10px;color:#999;text-align:center;overflow:hidden;flex-shrink:0}
        .photo-box img{width:100%;height:100%;object-fit:cover}
        .form-title{text-align:center;font-size:16px;font-weight:800;color:#1061D2;margin:10px 0;letter-spacing:1px;text-transform:uppercase}
        .sec-title{background:#1061D2;color:white;text-align:center;padding:4px 12px;font-weight:700;font-size:11px;letter-spacing:1px;text-transform:uppercase;margin:14px 0 8px}
        .g2{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px}
        .g3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:8px}
        .g4{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px;margin-bottom:8px}
        .f{display:flex;flex-direction:column;gap:2px}
        .fl{font-size:9px;font-weight:700;text-transform:uppercase;color:#555;letter-spacing:.5px}
        .fv{border-bottom:1.5px solid #333;padding:3px 2px;font-size:12px;font-weight:500;min-height:22px}
        .cbrow{display:flex;gap:16px;align-items:center;margin:6px 0}
        .cbi{display:flex;align-items:center;gap:4px;font-size:11px;font-weight:600}
        .cb{width:14px;height:14px;border:1.5px solid #333;display:flex;align-items:center;justify-content:center;font-size:10px}
        .trow{display:flex;align-items:center;gap:12px;padding:8px 0;border-top:1px solid #ddd;margin-top:8px}
        .sigs{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:20px;padding-top:10px;border-top:1px solid #333}
        .sig{border-top:1.5px solid #333;padding-top:4px;font-size:10px;font-weight:700;text-align:center}
        .terms{font-size:9px;color:#444;line-height:1.6;margin-top:10px;padding:8px;border:1px solid #ddd;background:#f9f9f9}
        @media print{body{padding:0}}
      </style>
    </head><body><div class="wrap">
      <div class="header">
        <div>
          <div class="school-name">Shree Aastha Shaikshanik Sankul</div>
          <div class="school-sub">Jasdan Public School · Yashoda Girls School</div>
          <div class="school-sub">Chitaliya Road, Jasdan | Mo. 95120 28511 / 93130 24124 / 97371 87102</div>
        </div>
        <div class="photo-box">${photo ? `<img src="${photo}"/>` : 'Passport<br/>Size<br/>Photo'}</div>
      </div>
      <div class="form-title">Admission Form — TO BE FILLED IN CAPITAL LETTERS</div>
      <div class="g4">
        <div class="f"><div class="fl">STD</div><div class="fv">${data.std}</div></div>
        <div class="f"><div class="fl">PH (R)</div><div class="fv">${data.phR}</div></div>
        <div class="f"><div class="fl">PH (M)</div><div class="fv">${data.phM}</div></div>
        <div class="f"><div class="fl">WhatsApp No.</div><div class="fv">${data.whatsapp}</div></div>
      </div>
    <div class="f"><div class="fl">Medium</div><div class="fv">${data.medium}</div></div>
      <div class="g3">
        <div class="f"><div class="fl">Surname</div><div class="fv">${data.surname}</div></div>
        <div class="f"><div class="fl">Student's Name</div><div class="fv">${data.studentName}</div></div>
        <div class="f"><div class="fl">Father's Name</div><div class="fv">${data.fatherName}</div></div>
      </div>
      <div class="g2">
        <div class="f"><div class="fl">Mother's Name</div><div class="fv">${data.motherName}</div></div>
        <div class="f"><div class="fl">Religion</div><div class="fv">${data.religion}</div></div>
      </div>
      <div class="g2">
        <div class="f"><div class="fl">Sub Caste</div><div class="fv">${data.subCast}</div></div>
        <div>
          <div class="fl" style="margin-bottom:4px">Category</div>
          <div class="cbrow">
            ${['SC', 'ST', 'OBC', 'OPEN'].map(c => `<div class="cbi"><div class="cb">${data.category === c ? '✓' : ''}</div>${c}</div>`).join('')}
          </div>
        </div>
      </div>
      <div class="sec-title">Student's Details</div>
      <div class="g2">
        <div class="f"><div class="fl">Address</div><div class="fv" style="min-height:50px">${data.address}</div></div>
        <div>
          <div class="f"><div class="fl">Medical History</div><div class="fv">${data.medicalHistory}</div></div>
          <div class="f" style="margin-top:8px"><div class="fl">Skill / Talent</div><div class="fv">${data.skill}</div></div>
        </div>
      </div>
      <div class="g2">
        <div class="f"><div class="fl">Date of Birth</div><div class="fv">${data.dob ? new Date(data.dob).toLocaleDateString('en-IN') : ''}</div></div>
        <div class="f"><div class="fl">Last Result (%)</div><div class="fv">${data.lastResult}</div></div>
      </div>
      <div class="g2">
        <div class="f"><div class="fl">Place of Birth</div><div class="fv">${data.pob}</div></div>
        <div class="f"><div class="fl">Name of Last School</div><div class="fv">${data.lastSchool}</div></div>
      </div>
      <div class="sec-title">Parent's Details</div>
      <div class="g2">
        <div class="f"><div class="fl">Father's Qualification</div><div class="fv">${data.fatherQual}</div></div>
        <div class="f"><div class="fl">Occupation</div><div class="fv">${data.fatherOcc}</div></div>
      </div>
      <div class="g2">
        <div class="f"><div class="fl">Office Name</div><div class="fv">${data.officeName}</div></div>
        <div class="f"><div class="fl">Phone</div><div class="fv">${data.parentPhone}</div></div>
      </div>
      <div class="g2">
        <div class="f"><div class="fl">Mother's Qualification</div><div class="fv">${data.motherQual}</div></div>
        <div class="f"><div class="fl">Occupation</div><div class="fv">${data.motherOcc}</div></div>
      </div>
      <div class="g2">
        <div class="f"><div class="fl">Monthly Family Income</div><div class="fv">${data.income}</div></div>
        <div class="f"><div class="fl">Email</div><div class="fv">${data.email}</div></div>
      </div>
      <div class="trow">
        <span style="font-weight:700">Join Transportation Facility:</span>
        <div class="cbi"><div class="cb">${data.transport === 'Yes' ? '✓' : ''}</div>Yes</div>
        <div class="cbi"><div class="cb">${data.transport === 'No' ? '✓' : ''}</div>No</div>
      </div>
      <div class="terms">
        <strong>નિયમો / Terms:</strong><br/>
        (1) I agree to abide by all rules and regulations of the school.<br/>
        (2) Fees will be paid on time as per school schedule.<br/>
        (3) Transportation fees are charged separately.<br/>
        (4) The school is not responsible for items lost on school premises.
      </div>
      <div class="sigs">
        <div class="sig">Director's Signature</div>
        <div class="sig">Parent's Signature</div>
      </div>
      <div style="text-align:right;margin-top:8px;font-size:11px">Date: ${new Date().toLocaleDateString('en-IN')}</div>
    </div>
    <script>window.onload=()=>{window.print()}</script>
    </body></html>`)
        win.document.close()
    }

    return (
        <Section variant="default" className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <p className="font-[var(--font-body)] font-semibold text-[11px] tracking-[0.12em] uppercase" style={{ color: 'var(--color-text-brand)' }}>Submitted</p>
                    <H3 color="default">Form Ready to Print!</H3>
                    <P size="md" color="default">Review details and click Print.</P>
                </div>
                <div className="flex gap-3 flex-wrap">
                    <button onClick={onBack} className="px-5 h-10 rounded-[8px] border font-[var(--font-body)] text-sm font-semibold"
                        style={{ borderColor: 'var(--color-border-brand)', color: 'var(--color-text-brand)' }}>
                        ← Edit
                    </button>
                    <button onClick={handlePrint} className="px-6 h-10 rounded-[8px] font-[var(--font-body)] text-sm font-semibold text-white flex items-center gap-2"
                        style={{ background: 'var(--color-bg-brand)' }}>
                        <svg width="15" height="15" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v5a2 2 0 002 2h1v2a1 1 0 001 1h8a1 1 0 001-1v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a1 1 0 00-1-1H6a1 1 0 00-1 1zm2 0h6v3H7V4zm-1 9H5v-2h1v2zm2 0v2h4v-2H8zm6 0h1v-2h-1v2z" clipRule="evenodd" />
                        </svg>
                        Print Form
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                    ['Student', `${data.surname} ${data.studentName}`],
                    ['STD', data.std], ['Father', data.fatherName],
                    ['Mother', data.motherName], ['DOB', data.dob ? new Date(data.dob).toLocaleDateString('en-IN') : ''],
                    ['WhatsApp', data.whatsapp], ['Category', data.category],
                    ['Last School', data.lastSchool], ['Transport', data.transport],
                ].map(([label, value]) => (
                    <div key={label} className="flex gap-3 p-3 rounded-[10px] bg-[var(--color-bg-card)] border border-[var(--color-border-muted)]">
                        <P size="sm" color="default" className="font-semibold min-w-[90px]">{label}:</P>
                        <P size="sm" color="dark">{value || '—'}</P>
                    </div>
                ))}
            </div>
        </Section>
    )
}

// ─────────────────────────────────────────────
// Main Form
// ─────────────────────────────────────────────
const INIT = {
    std: '', phR: '', phM: '', whatsapp: '', medium: '',
    surname: '', studentName: '', fatherName: '', motherName: '',
    religion: '', subCast: '', category: '',
    address: '', medicalHistory: '', skill: '',
    dob: '', pob: '', lastResult: '', lastSchool: '',
    fatherQual: '', fatherOcc: '', officeName: '', parentPhone: '',
    motherQual: '', motherOcc: '', income: '', email: '',
    transport: '',
}

export default function AdmissionForm() {
    const [data, setData] = useState(INIT)
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const [photo, setPhoto] = useState(null)

    const set = (f) => (e) => setData((p) => ({ ...p, [f]: e.target.value }))
    const setVal = (f, v) => setData((p) => ({ ...p, [f]: v }))

    const handlePhoto = (e) => {
        const file = e.target.files?.[0]; if (!file) return
        const reader = new FileReader()
        reader.onload = (ev) => setPhoto(ev.target.result)
        reader.readAsDataURL(file)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const errs = validate(data)
        if (Object.keys(errs).length > 0) {
            setErrors(errs)
            // scroll to first error
            const first = document.querySelector('[data-error="true"]')
            first?.scrollIntoView({ behavior: 'smooth', block: 'center' })
            return
        }
        setErrors({})
        setSubmitted(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    if (submitted) return <PrintView data={data} photo={photo} onBack={() => setSubmitted(false)} />

    return (
        <Section id="admission" variant="default" className="flex flex-col gap-8">

            <div className="flex flex-col gap-2">
                <p className="font-[var(--font-body)] font-semibold text-[11px] tracking-[0.12em] uppercase"
                    style={{ color: 'var(--color-text-brand)' }}>Admissions 2025–26</p>
                <H2 color="default">Admission Form</H2>
                <P size="md" color="default">Fields marked <span style={{ color: 'var(--color-red)' }}>*</span> are required. Please fill in CAPITAL LETTERS.</P>
            </div>

            {/* Error summary */}
            {Object.keys(errors).length > 0 && (
                <div className="p-4 rounded-[10px] border flex items-start gap-3"
                    style={{ background: '#fff5f5', borderColor: 'var(--color-red)' }}>
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="var(--color-red)" className="flex-shrink-0 mt-0.5">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <div>
                        <P size="sm" color="dark" className="font-semibold">Please fix {Object.keys(errors).length} error(s) before submitting.</P>
                        <P size="xs" color="default" className="mt-0.5 !opacity-60">Scroll down to see highlighted fields.</P>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">

                {/* ── BASIC INFO ── */}
                <FormSection title="Basic Information">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        <Field label="STD" required error={errors.std} data-error={!!errors.std}>
                            <Input value={data.std} onChange={set('std')} placeholder="e.g. 5"
                                maxLength={2} error={errors.std}
                                counter={<Counter current={data.std.length} max={2} />} />
                        </Field>
                        <Field label="PH (R)" error={errors.phR}>
                            <PhoneInput value={data.phR} onChange={set('phR')} placeholder="Residence Ph." error={errors.phR} />
                        </Field>
                        <Field label="PH (M)" error={errors.phM}>
                            <PhoneInput value={data.phM} onChange={set('phM')} placeholder="Mobile" error={errors.phM} />
                        </Field>
                        <Field label="WhatsApp No." required error={errors.whatsapp}>
                            <PhoneInput value={data.whatsapp} onChange={set('whatsapp')} placeholder="WhatsApp" error={errors.whatsapp} />
                        </Field>
                        <Field label="Medium" required error={errors.medium}>
                            <div className="flex gap-3">
                                {['Gujarati Medium', 'English Medium'].map((opt) => (
                                    <button key={opt} type="button"
                                        onClick={() => setVal('medium', opt)}
                                        className={`px-4 py-2 rounded-[8px] border font-[var(--font-body)] text-sm font-semibold transition-all duration-150
          ${data.medium === opt
                                                ? 'bg-[var(--color-bg-brand)] text-white border-[var(--color-bg-brand)]'
                                                : 'bg-[var(--color-bg-muted)] text-[var(--color-text-muted)] border-[var(--color-border-muted)] hover:border-[var(--color-border-brand)]'
                                            }`}>
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </Field>
                    </div>
                </FormSection>

                {/* ── STUDENT INFO ── */}
                <FormSection title="Student Information">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <Field label="Surname" required error={errors.surname}
                            counter={<Counter current={data.surname.length} max={30} />}>
                            <Input value={data.surname} onChange={set('surname')} placeholder="SURNAME"
                                onlyLetters uppercase maxLength={30} error={errors.surname} />
                        </Field>
                        <Field label="Student's Name" required error={errors.studentName}
                            counter={<Counter current={data.studentName.length} max={50} />}>
                            <Input value={data.studentName} onChange={set('studentName')} placeholder="STUDENT NAME"
                                onlyLetters uppercase maxLength={50} error={errors.studentName} />
                        </Field>
                        <Field label="Father's Name" required error={errors.fatherName}
                            counter={<Counter current={data.fatherName.length} max={50} />}>
                            <Input value={data.fatherName} onChange={set('fatherName')} placeholder="FATHER NAME"
                                onlyLetters uppercase maxLength={50} error={errors.fatherName} />
                        </Field>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <Field label="Mother's Name" error={errors.motherName}
                            counter={<Counter current={data.motherName.length} max={50} />}>
                            <Input value={data.motherName} onChange={set('motherName')} placeholder="MOTHER NAME"
                                onlyLetters uppercase maxLength={50} error={errors.motherName} />
                        </Field>
                        <Field label="Religion" error={errors.religion}
                            counter={<Counter current={data.religion.length} max={30} />}>
                            <Input value={data.religion} onChange={set('religion')} placeholder="e.g. HINDU"
                                onlyLetters uppercase maxLength={30} error={errors.religion} />
                        </Field>
                        <Field label="Sub Caste"
                            counter={<Counter current={data.subCast.length} max={30} />}>
                            <Input value={data.subCast} onChange={set('subCast')} placeholder="SUB CASTE"
                                uppercase maxLength={30} />
                        </Field>
                    </div>

                    {/* Category */}
                    <Field label="Category">
                        <div className="flex flex-wrap gap-2">
                            {['SC', 'ST', 'OBC', 'OPEN'].map((cat) => (
                                <button key={cat} type="button"
                                    onClick={() => setVal('category', data.category === cat ? '' : cat)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-[8px] border
                    font-[var(--font-body)] text-sm font-semibold transition-all duration-150
                    ${data.category === cat
                                            ? 'bg-[var(--color-bg-brand)] text-white border-[var(--color-bg-brand)]'
                                            : 'bg-[var(--color-bg-muted)] text-[var(--color-text-muted)] border-[var(--color-border-muted)] hover:border-[var(--color-border-brand)]'
                                        }`}>
                                    <span className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0
                    ${data.category === cat ? 'border-white' : 'border-current'}`}>
                                        {data.category === cat && (
                                            <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                                                <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        )}
                                    </span>
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </Field>

                    {/* Photo */}
                    <Field label="Student Passport Photo">
                        <div className="flex items-start gap-4 flex-wrap">
                            <div className="w-24 h-28 border-2 border-dashed rounded-[8px] flex items-center justify-center overflow-hidden flex-shrink-0"
                                style={{ borderColor: 'var(--color-border-brand)', background: 'var(--color-bg-accent)' }}>
                                {photo
                                    ? <img src={photo} alt="Student" className="w-full h-full object-cover" />
                                    : <div className="flex flex-col items-center gap-1 p-2 text-center">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="var(--color-text-brand)" opacity="0.4">
                                            <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                                        </svg>
                                        <p className="text-[9px] leading-tight" style={{ color: 'var(--color-text-muted)' }}>Passport Size Photo</p>
                                    </div>
                                }
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="cursor-pointer px-4 py-2 rounded-[8px] border font-[var(--font-body)] text-sm font-semibold"
                                    style={{ borderColor: 'var(--color-border-brand)', color: 'var(--color-text-brand)' }}>
                                    Upload Photo
                                    <input type="file" accept="image/*" onChange={handlePhoto} className="hidden" />
                                </label>
                                <P size="xs" color="default" className="!opacity-50">JPG or PNG · Max 2MB</P>
                            </div>
                        </div>
                    </Field>
                </FormSection>

                {/* ── STUDENT DETAILS ── */}
                <FormSection title="Student's Details">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Field label="Address"
                            counter={<Counter current={data.address.length} max={200} />}>
                            <Textarea value={data.address} onChange={set('address')}
                                placeholder="Full residential address" rows={3} maxLength={200} />
                        </Field>
                        <div className="flex flex-col gap-4">
                            <Field label="Medical History"
                                counter={<Counter current={data.medicalHistory.length} max={100} />}>
                                <Input value={data.medicalHistory} onChange={set('medicalHistory')}
                                    placeholder="Any medical condition" maxLength={100} />
                            </Field>
                            <Field label="Skill / Talent"
                                counter={<Counter current={data.skill.length} max={100} />}>
                                <Input value={data.skill} onChange={set('skill')}
                                    placeholder="e.g. Drawing, Cricket" maxLength={100} />
                            </Field>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Field label="Date of Birth" required error={errors.dob}>
                            <input type="date" value={data.dob} onChange={set('dob')}
                                max={new Date().toISOString().split('T')[0]}
                                className={inputBase(errors.dob)} />
                            {data.dob && !errors.dob && (
                                <p className="text-[11px]" style={{ color: '#4a9e1a' }}>
                                    Age: {calcAge(data.dob)} years
                                </p>
                            )}
                        </Field>
                        <Field label="Place of Birth"
                            counter={<Counter current={data.pob.length} max={50} />}>
                            <Input value={data.pob} onChange={set('pob')} placeholder="City / Village"
                                uppercase maxLength={50} />
                        </Field>
                        <Field label="Last Result (%)" error={errors.lastResult}
                            counter={<Counter current={data.lastResult.length} max={3} />}>
                            <MarksInput value={data.lastResult} onChange={set('lastResult')}
                                placeholder="0–100" error={errors.lastResult} />
                        </Field>
                        <Field label="Name of Last School"
                            counter={<Counter current={data.lastSchool.length} max={80} />}>
                            <Input value={data.lastSchool} onChange={set('lastSchool')}
                                placeholder="Previous school" uppercase maxLength={80} />
                        </Field>
                    </div>
                </FormSection>

                {/* ── PARENT DETAILS ── */}
                <FormSection title="Parent's Details">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Field label="Father's Qualification"
                            counter={<Counter current={data.fatherQual.length} max={50} />}>
                            <Input value={data.fatherQual} onChange={set('fatherQual')}
                                placeholder="e.g. B.COM, M.A." uppercase maxLength={50} />
                        </Field>
                        <Field label="Father's Occupation"
                            counter={<Counter current={data.fatherOcc.length} max={50} />}>
                            <Input value={data.fatherOcc} onChange={set('fatherOcc')}
                                placeholder="e.g. BUSINESS, SERVICE" uppercase maxLength={50} />
                        </Field>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Field label="Office / Business Name"
                            counter={<Counter current={data.officeName.length} max={80} />}>
                            <Input value={data.officeName} onChange={set('officeName')}
                                placeholder="Office or business name" uppercase maxLength={80} />
                        </Field>
                        <Field label="Father's Phone" error={errors.parentPhone}>
                            <PhoneInput value={data.parentPhone} onChange={set('parentPhone')}
                                placeholder="Contact number" error={errors.parentPhone} />
                        </Field>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Field label="Mother's Qualification"
                            counter={<Counter current={data.motherQual.length} max={50} />}>
                            <Input value={data.motherQual} onChange={set('motherQual')}
                                placeholder="e.g. B.ED, HSC" uppercase maxLength={50} />
                        </Field>
                        <Field label="Mother's Occupation"
                            counter={<Counter current={data.motherOcc.length} max={50} />}>
                            <Input value={data.motherOcc} onChange={set('motherOcc')}
                                placeholder="e.g. HOUSEWIFE, TEACHER" uppercase maxLength={50} />
                        </Field>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Field label="Monthly Family Income" required error={errors.income}
                            counter={<Counter current={data.income.length} max={15} />}>
                            <Input value={data.income} onChange={set('income')}
                                placeholder="e.g. 25000" onlyNumbers maxLength={15} error={errors.income} />
                        </Field>
                        <Field label="Email" error={errors.email}>
                            <input type="email" value={data.email} onChange={set('email')}
                                placeholder="parent@email.com"
                                className={inputBase(errors.email)} />
                        </Field>
                    </div>
                </FormSection>

                {/* ── MISC ── */}
                <FormSection title="Miscellaneous">
                    <Field label="Join Transportation Facility" required error={errors.transport}>
                        <div className="flex gap-3">
                            {['Yes', 'No'].map((opt) => (
                                <button key={opt} type="button"
                                    onClick={() => setVal('transport', opt)}
                                    className={`px-6 py-2 rounded-[8px] border font-[var(--font-body)] text-sm font-semibold transition-all duration-150
                    ${data.transport === opt
                                            ? 'bg-[var(--color-bg-brand)] text-white border-[var(--color-bg-brand)]'
                                            : 'bg-[var(--color-bg-muted)] text-[var(--color-text-muted)] border-[var(--color-border-muted)] hover:border-[var(--color-border-brand)]'
                                        }`}>
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </Field>
                </FormSection>

                {/* Declaration */}
                <div className="p-4 rounded-[10px] border" style={{ borderColor: 'var(--color-border-muted)', background: 'var(--color-bg-muted)' }}>
                    <P size="xs" color="default" className="font-semibold mb-1">Declaration / નિયમો:</P>
                    <P size="xs" color="default" className="!opacity-60 leading-relaxed">
                        I/We agree to abide by all rules and regulations of the school. Fees will be paid on time as per school schedule. Transportation fees are charged separately.
                    </P>
                </div>

                {/* Submit */}
                <div className="flex flex-col sm:flex-row gap-3 items-start">
                    <button type="submit"
                        className="w-full sm:w-auto px-8 h-12 rounded-[9px] font-[var(--font-body)] font-semibold text-sm text-white flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                        style={{ background: 'var(--color-bg-brand)' }}>
                        Submit & Preview Form →
                    </button>
                    <P size="xs" color="default" className="!opacity-40 self-center">
                        You can review and print after submitting.
                    </P>
                </div>

            </form>
        </Section>
    )
}