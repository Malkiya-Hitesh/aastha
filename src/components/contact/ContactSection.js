
import { H2, P, Section } from '../ui'
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import { IoCall } from 'react-icons/io5'
import { IoIosMail } from 'react-icons/io'
import ContactForm from './ContactForm'
import { getContactInfo } from '@/lib/queries'

// ── Form Field ────────────────────────────────────────────────


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
        <P size="md" className="  font-semibold uppercase tracking-wider text-[var(--color-text-hint)]">
          {label}
        </P>
        <P size='sm' className="font-medium text-[var(--color-text)] truncate">
          {value}
        </P>
      </div>
    </div>
  )
}

// ── Main ──────────────────────────────────────────────────────
 async function ContactSection() {
   const contactInfo = await getContactInfo()
console.log(contactInfo);

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
              value={contactInfo.address}
            />
            <InfoCard
              icon={<IoCall className="text-base sm:text-xl" />}
              iconBg="#f0fbe8" iconColor="#4a9e1a"
              label="Phone"
              value={contactInfo.phone[0]}
            />
            <InfoCard
              icon={<IoIosMail className="text-base sm:text-xl" />}
              iconBg="#f0fbe8" iconColor="#4a9e1a"
              label="Email"
              value={contactInfo.email}
            />
            <InfoCard
              icon={<FaClock className="text-base sm:text-xl" />}
              iconBg="#fff0f0" iconColor="#FF5B5B"
              label="timings"
              value={contactInfo.timings}
            />
          </div>

         <ContactForm />
          
        </div>

        {/* Map */}
        <div className="w-full h-[280px] sm:h-[380px] md:h-[450px] rounded-2xl overflow-hidden border border-[var(--color-border-muted)]">
          <iframe
            src={contactInfo.mapLink}
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