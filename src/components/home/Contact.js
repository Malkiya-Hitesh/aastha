
import { H2, H3, H4, P, Section } from '../ui'
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import { IoCall } from 'react-icons/io5'
import { IoIosMail } from 'react-icons/io'
import { getContactInfo } from '@/lib/queries'

// ── Contact info data   ─────────────────────────────────────────


// ── Info Card ─────────────────────────────────────────────────
function InfoCard({ label, value, iconBg, iconColor, icon }) {




  return (
    <div className="flex items-start gap-4 p-4 rounded-[12px] bg-[var(--color-bg-card)] border border-[var(--color-border-muted)]">
      <div
        className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0"
        style={{ background: iconBg, color: iconColor }}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-0.5 min-w-0">
        <P size="xs" color="default" className="!opacity-50 uppercase tracking-wider font-semibold">
          {label}
        </P>
        <P size="md" color="dark" className="font-medium break-words">
          {value}
        </P>
      </div>
    </div>
  )
}

// ── Form Input ────────────────────────────────────────────────
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

// ── Main Section ──────────────────────────────────────────────
export default async function ContactSection() {

  const contactInfo = await getContactInfo()
 


  const contactItems = [
    {
      id: 1,
      label: 'Address',
      value: contactInfo.address || '123 Main St, Anytown, USA',
      iconBg: '#E8F0FC',
      iconColor: '#1061D2',
      icon: (<FaMapMarkerAlt />)

    },
    {
      id: 2,
      label: 'Phone',
      value: contactInfo.phone[0] || '+91 98765 43210',
      iconBg: '#f0fbe8',
      iconColor: '#4a9e1a',
      icon: (<IoCall />

      ),
    },
    {
      id: 3,
      label: 'Email',
      value: contactInfo.email || 'info@aekschool.edu.in',
      iconBg: '#fff7ed',
      iconColor: '#d97706',
      icon: (<IoIosMail />

      ),
    },
    {
      id: 4,
      label: 'School Timings',
      value: contactInfo.timings || 'Mon-Fri: 8am - 3pm',
      iconBg: '#fff0f0',
      iconColor: '#FF5B5B',
      icon: (<FaClock />
      ),
    },
  ]
  return (
    <Section id="contact" variant="default" className="flex flex-col gap-8">


      <H2 color="default" className="text-center">
        Get in Touch
      </H2>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">


        <div className="flex flex-col gap-3">
          {contactItems.map((item) => (
            <InfoCard key={item.id} {...item} />
          ))}



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

          {/* {sent ? (
         
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
           
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
   
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

      
              <button
                type="submit"
                className="  w-full h-12 rounded-[9px] mt-1 font-[var(--font-body)] font-semibold text-sm text-white   bg-[var(--color-blue)] hover:opacity-90   transition-opacity duration-150  focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)] focus:ring-offset-2 "  >
                Send Message →
              </button>
            </form>
          )} */}
        </div>

      </div>
    </Section>
  )
}