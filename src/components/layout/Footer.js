import Link from 'next/link'
import { Tag } from '../ui'

// ── Footer data ───────────────────────────────────────────────
const quickLinks = [
  { label: 'Home',       href: '/'          },
  { label: 'About Us',   href: '/about'      },
  { label: 'Academics',  href: '/academics'  },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Faculty',    href: '/faculty'    },
  { label: 'Gallery',    href: '/gallery'    },
  { label: 'Reviews',    href: '/reviews'    },
  { label: 'Contact',    href: '/contact'    },
]

const academics = [
  { label: 'LKG & HKG',               href: '/academics#lkg'       },
  { label: 'Std 1 – 10 (GSEB & CBSE)', href: '/academics#primary'   },
  { label: 'Std 11–12 Science',        href: '/academics#science'   },
  { label: 'Std 11–12 Commerce',       href: '/academics#commerce'  },
  { label: 'Std 11–12 Arts',           href: '/academics#arts'      },
]

const phones = [
  { number: '+91 63547 71871', label: 'Main'       },
  { number: '+91 99252 00182', label: 'Office'     },
  { number: '+91 98242 21798', label: 'Admissions' },
  { number: '+91 98259 74040', label: 'WhatsApp'   },
  { number: '+91 99245 30733', label: 'Principal'  },
]

// ── Footer Link ───────────────────────────────────────────────
function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="font-[var(--font-body)] text-sm transition-colors duration-150 hover:text-white"
      style={{ color: 'rgba(255,255,255,0.55)' }}
    >
      {children}
    </Link>
  )
}

// ── Column heading ────────────────────────────────────────────
function ColHeading({ children }) {
  return (
    <p
      className="font-[var(--font-body)] font-semibold text-[10px] tracking-[0.12em] uppercase mb-4"
      style={{ color: 'rgba(255,255,255,0.35)' }}
    >
      {children}
    </p>
  )
}

// ── Main Footer ───────────────────────────────────────────────
export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-bg-dark)' }}>

      {/* ── Main footer grid ── */}
      <div
        className="mx-auto w-full max-w-[1200px] px-6 md:px-10 lg:px-16 pt-14 pb-10
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
      >

        {/* ── Col 1 — School info ── */}
        <div className="flex flex-col gap-4 lg:col-span-1">
          {/* Logo */}
          <div>
            <p
              className="font-[var(--font-heading)] font-extrabold text-xl leading-tight"
              style={{ color: '#fff' }}
            >
              Shree Aastha
            </p>
            <p
              className="font-[var(--font-body)] text-[11px] font-medium tracking-wider uppercase mt-0.5"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              Shaikshanik Sankul
            </p>
          </div>

          <p
            className="font-[var(--font-body)] text-sm leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            Gujarati Medium school offering GSEB & CBSE curriculum from LKG to Std 12 — Science, Commerce & Arts.
          </p>

          {/* Tags */}
         
        </div>

        {/* ── Col 2 — Quick Links ── */}
        <div>
          <ColHeading>Quick Links</ColHeading>
          <div className="flex flex-col gap-2.5">
            {quickLinks.map(({ label, href }) => (
              <FooterLink key={href} href={href}>{label}</FooterLink>
            ))}
          </div>
        </div>

        {/* ── Col 3 — Academics ── */}
        <div>
          <ColHeading>Academics</ColHeading>
          <div className="flex flex-col gap-2.5">
            {academics.map(({ label, href }) => (
              <FooterLink key={href} href={href}>{label}</FooterLink>
            ))}
          </div>
        </div>

        {/* ── Col 4 — Contact ── */}
        <div className="flex flex-col gap-5">
          <div>
            <ColHeading>Contact Us</ColHeading>
            <div className="flex flex-col gap-3">
              {phones.map(({ number, label }) => (
                <a
                  key={number}
                  href={`tel:${number.replace(/\s/g, '')}`}
                  className="flex items-center justify-between gap-3 group"
                >
                  <div className="flex items-center gap-2">
                    <svg width="12" height="12" viewBox="0 0 20 20" fill="rgba(255,255,255,0.35)">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    <span
                      className="font-[var(--font-body)] text-sm group-hover:text-white transition-colors duration-150"
                      style={{ color: 'rgba(255,255,255,0.6)' }}
                    >
                      {number}
                    </span>
                  </div>
                  <span
                    className="font-[var(--font-body)] text-[9.5px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded"
                    style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.35)' }}
                  >
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Address */}
          <div
            className="flex items-start gap-2 pt-3 border-t"
            style={{ borderColor: 'rgba(255,255,255,0.08)' }}
          >
            <svg width="13" height="13" viewBox="0 0 20 20" fill="rgba(255,255,255,0.35)" className="mt-0.5 flex-shrink-0">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            <p
              className="font-[var(--font-body)] text-sm leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.45)' }}
            >
              Shree Aastha Shaikshanik Sankul,<br />
              Rajkot, Gujarat — 360001
            </p>
          </div>

          {/* Email */}
          <a
            href="mailto:info@aastha.school"
            className="flex items-center gap-2 group"
          >
            <svg width="13" height="13" viewBox="0 0 20 20" fill="rgba(255,255,255,0.35)">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            <span
              className="font-[var(--font-body)] text-sm group-hover:text-white transition-colors"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              info@aastha.school
            </span>
          </a>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      

    </footer>
  )
}