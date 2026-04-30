'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button, Tag } from '../ui'

// ── Nav links ─────────────────────────────────────────────────
const links = [
  { label: 'Home',        href: '/'           },
  { label: 'About',       href: '/about'       },
  { label: 'Academics',   href: '/academic'   },
  { label: 'Gallery',     href: '/gallerys'     },
  { label: 'Reviews',     href: '/reviews'     },
  { label: 'Contact',     href: '/contact'     },
]

// ── Menu icon ─────────────────────────────────────────────────
function MenuIcon({ open }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      {open
        ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
        : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
      }
    </svg>
  )
}

// ── Main Navbar ───────────────────────────────────────────────
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname        = usePathname()

  return (
    <header className="w-full sticky top-0 z-50">

    

      {/* ── Main nav bar ── */}
      <nav
        className="w-full max-h-[8rem] grid grid-cols-[1fr_3fr_1fr]   items-center justify-center px-6 lg:px-12 py-3 border-b"
        style={{
          background: 'var(--color-bg-card)',
          borderColor: 'var(--color-border-muted)',
        }}
      >
   
       
         <img src='/image/logo.png' alt='hsie' className="  h-[7rem] rounded-md mb-4 " />
       

  
        <div className="hidden lg:flex items-center justify-center   gap-1">
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
         <div className="flex justify-center  items-center ">
          <Tag  className="hidden xl:inline-flex">Admissions Open</Tag>
          
        </div>
      </nav>


      {/* <div
        className={`
          lg:hidden overflow-hidden transition-all duration-300
          border-b border-[var(--color-border-muted)]
          ${open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}
        `}
        style={{ background: 'var(--color-bg-card)' }}
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
          {/* <div className="pt-3 border-t border-[var(--color-border-muted)] mt-2 flex flex-col gap-2">
            <Tag variant="green" className="w-fit">Admissions Open 2025–26</Tag>
            <Button as={Link} href="/admissions" variant="primary" size="md" className="w-full justify-center">
              Apply for Admission →
            </Button>
            <a
              href="tel:+916354771871"
              className="flex items-center justify-center gap-2 py-2.5 rounded-[9px] font-[var(--font-body)] text-sm font-semibold border border-[var(--color-border-muted)]"
              style={{ color: 'var(--color-text-brand)' }}
            >
              <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Call Us Now
            </a>
          </div>
        </div>
      </div> */} 

    </header>
  )
}