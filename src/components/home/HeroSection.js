
import Button from "../ui/Button";

import P from "../ui/P";
import Section from "../ui/Section";

import { FaInstagram, FaLinkedin, FaMapMarkerAlt, FaWhatsapp, FaYoutube } from "react-icons/fa";
import Link from "next/link";


// ─── Stat card — small inline component ───────────────────────
function StatCard({ link, children }) {
  return (
    <div className="flex flex-col items-center  px-3 py-3 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm ">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {children}

      </a>
    </div>
  );
}

// ─── Floating badge ────────────────────────────────────────────


// ─── Main Hero ─────────────────────────────────────────────────
export default function HeroSection({ socialLinks }) {
  return (
    <Section variant="bg-gradient-to-br from-[#1061d2] to-[#60a5fa]" id="hero" className="bg-gradient-to-br from-[#59c1ed] via-[#2d78df] to-[#114dbc]    overflow-hidden  relative " style={{ marginTop: '1px', paddingPop: '1px' }} >



      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
        <div className="inline-flex items-center gap-2.5 bg-white/15 border border-white/30 backdrop-blur-sm rounded-full px-5 py-2">
          <span style={{ color: "var(--color-green)" }} className="text-[13px] sm:text-[17px] font-[500] tracking-wide whitespace-nowrap">
            Every Child is Special
          </span>
        </div>
      </div>



      <div className=" grid lg:grid-cols-[2fr_1.5fr] gap-10 lg:gap-10 ">
        <div className="flex flex-col gap-6">

          {/* Top label + tag row */}
          <div className="flex items-center  max-[360px]:gap-2 gap-4">

            <span className="font-[500] text-[13px] max-[360px]:text-[11px] sm:text-[15px] px-4 max-[360px]:px-3 sm:px-7 py-1 sm:py-1.5 rounded-4xl bg-[var(--color-bg-success)]">

              Admisstion open
            </span>


            <span className="font-[500] text-[13px] max-[360px]:text-[11px] sm:text-[15px] px-4 max-[360px]:px-3 sm:px-7 py-1 sm:py-1.5 rounded-4xl bg-[var(--color-bg-danger)]">
              2026-27
            </span>


          </div>

          {/* Main heading */}
          <div className="flex flex-col gap-3">
            <h1 className=" max-[360px]:text-[1.8rem]  text-[clamp(2.3rem,5.5vw,4rem)]  font-[var(--font-heading)] font-extrabold  leading-[1.1] tracking-tight text-[var(--color-text-inverse)]"
            >
              Gujarat Group
              <span
                className="block"
                style={{ color: "var(--color-green)" }}
              >
                Where Learning Meets Excellence
              </span>
            </h1>

          </div>


          <P
            color="inverse"
            size="xl"

          >
            AEK School provides world-class education from Std 1 to 12 with
            experienced faculty, modern labs, and a nurturing environment
            that helps every child grow academically and personally. experienced faculty, modern labs, and a nurturing environment
            that helps every child grow academically and personally.
          </P>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 pt-1">
            <Link href="/academic#admission">
              <Button variant="primary" size="lg">
                Admission
              </Button>
            </Link>
            <Link href="/result">
              <Button variant="white" size="lg">
                View result
              </Button>
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-3 pt-2">

            <StatCard link={socialLinks.facebook} > <FaInstagram className="font-[var(--font-heading)] font-extrabold text-2xl md:text-3xl leading-none text-[var(--color-text-danger)]  hover:text-[var(--color-red)] " />
            </StatCard>
            <StatCard link={`https://wa.me/${socialLinks.whatsapp}?text=I+want+to+take+admission`} >
              <FaWhatsapp className="font-[var(--font-heading)] font-extrabold text-2xl md:text-3xl leading-none text-[var(--color-text-danger)]  hover:text-[var(--color-red)] " />

            </StatCard>
            <StatCard link={socialLinks.instagram} >
              <FaInstagram className="font-[var(--font-heading)] font-extrabold text-2xl md:text-3xl leading-none text-[var(--color-text-danger)]  hover:text-[var(--color-red)]" />

            </StatCard>
            <StatCard link={socialLinks.youtube} >
              <FaYoutube className="font-[var(--font-heading)] font-extrabold text-2xl md:text-3xl leading-none text-[var(--color-text-danger)]  hover:text-[var(--color-red)] " />

            </StatCard>
          </div>
        </div>

        {/* ── RIGHT — Visual card ── */}
        <div className="hidden lg:flex justify-center items-center   rounded-md mb-4">

          <img src="https://cdn.jsdelivr.net/gh/Malkiya-Hitesh/Aastha-image@main/image/4.webp" alt="no" className=" w-full h-full object-cover" />
        </div>


      </div>
    </Section >
  );
}