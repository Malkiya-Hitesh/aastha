'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button, Tag } from '../ui'

// ── Nav links ─────────────────────────────────────────────────
const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Academics', href: '/academic' },
  { label: 'Result', href: '/result' },
  { label: 'Gallery', href: '/gallerys' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact', href: '/contact' },
]

// ── Menu icon ─────────────────────────────────────────────────
function MenuIcon({ open }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      {open
        ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
        : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
      }
    </svg>
  )
}

// ── Main Navbar ───────────────────────────────────────────────
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="w-full sticky top-0 z-50 ">



      {/* ── Main nav bar ── */}
      <nav
        className="w-full h-[5rem] sm:h-[5.25rem] md:h-[5.75rem] lg:h-[6rem] xl:h-[6.5rem] grid grid-cols-[1fr_1fr_1fr]   md:grid-cols-[1fr_2fr_] lg:grid-cols-[1fr_3fr_1fr] items-center  border-b overflow-hidden border-b     px-2 sm:px-2  md:px-4  lg:px-6   xl:px-8 "
        style={{
          background: 'var(--color-bg-card)',
          borderColor: 'var(--color-border-muted)',
        }}
      >

        <div className=" ">


          <img src='https://cdn.jsdelivr.net/gh/Malkiya-Hitesh/Aastha-image@main/image/logo.png' alt='hsie' className="h-[4.5rem] sm:h-[4.55rem] md:h-[5.25rem] lg:h-[5.5rem] xl:h-[6rem]   " />


        </div>
        <div className="hidden md:flex items-center lg:justify-center md:justify-end  gap-1">
          {links.map(({ label, href }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`
                  px-3  rounded-[7px]
                  font-[var(--font-body)] text-[16px] font-medium
                  transition-all duration-150
                  ${active
                    ? 'bg-[var(--color-bg-accent)] text-[var(--color-text-brand)] font-semibold'
                    : 'text-[var(--color-text-muted)] hover:bg-[var(--color-bg-muted)] hover:text-[var(--color-text)]'
                  }
                `}
              >
                {label}
              </Link>
            )
          })}


          {/* Desktop CTA */}

        </div>
        <div className="   flex md:hidden lg:flex items-center justify-end gap-2">
          <Link href='/academic#admission' >
          <Tag className="hidden xl:inline-flex">Admissions Open</Tag>
          </Link>
        </div>
 <div className='md:hidden flex items-center justify-center md:'>
  <Button variant="ghost" onClick={() => setOpen(!open)} className="absolute top-4 right-4">
    <MenuIcon open={open} />
  </Button>
 </div>
      </nav>


      <div
        className={` md:hidden overflow-hidden transition-all duration-300  border-b border-[var(--color-border-muted)]  ${open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}
        `} style={{ background: 'var(--color-bg-card)' }}
      >




        <div className="flex flex-col gap-1 p-4">
          {links.map(({ label, href }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`
                  px-4 py-2.5 rounded-[9px]
                  font-[var(--font-body)] text-sm font-medium
                  transition-colors duration-150
                  ${active
                    ? 'bg-[var(--color-bg-accent)] text-[var(--color-text-brand)] font-semibold'
                    : 'text-[var(--color-text-muted)] hover:bg-[var(--color-bg-muted)]'
                  }
                `}
              >
                {label}
              </Link>
            )
          })}

          {/* Mobile CTA */}
          <div className="pt-3 border-t border-[var(--color-border-muted)] mt-2 flex flex-col gap-2">
          
            <Button as="a" href="/academic#admission" variant="primary" size="md" className="w-full justify-center">
              Apply for Admission →
            </Button>
           
            <a
              href="tel:+916354771871"
              className="flex items-center justify-center gap-2 py-2.5 rounded-[9px] font-[var(--font-body)] text-sm font-semibold border border-[var(--color-border-muted)]"
              style={{ color: 'var(--color-text-brand)' }}
            >
              <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Us Now
            </a>
          </div>
        </div>
      </div>

    </header>
  )
}