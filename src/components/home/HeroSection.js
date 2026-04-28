import Button from "../ui/Button";
import H2 from "../ui/H2";
import P from "../ui/P";
import Section from "../ui/Section";
import SectionLabel from "../ui/SectionLabel";
import Tag from "../ui/Tag";
import { FaInstagram, FaLinkedin, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";


// ─── Stat card — small inline component ───────────────────────
function StatCard({children }) {
  return (
    <div className="flex flex-col items-center  px-3 py-3 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm ">
     {children}
     
      
    </div>
  );
}

// ─── Floating badge ────────────────────────────────────────────
function FloatingBadge({ emoji, text, className = "" }) {
  return (
    <div
      className={`
        absolute flex items-center gap-2
        px-3 py-2 rounded-[var(--radius-lg)]
        bg-[var(--color-bg-card)] border border-[var(--color-border-muted)]
        shadow-lg
        font-[var(--font-body)] text-xs font-semibold text-[var(--color-text)]
        ${className}
      `}
    >
      <span className="text-base leading-none">{emoji}</span>
      {text}
    </div>
  );
}

// ─── Main Hero ─────────────────────────────────────────────────
export default function HeroSection() {
  return (
    <Section variant="brand"id="hero" className=" grid lg:grid-cols-[2fr_1fr] gap-10 lg:gap-20  overflow-hidden">
    

      {/* ── Background geometric shapes ── */}
      {/* <div
        aria-hidden="true"
        className="pointer-events-none  inset-0 overflow-hidden"
      >
        {/* Large circle top-right */}
        {/* <div
          className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full opacity-[0.07]"
          style={{ background: "var(--color-white)" }}
        />
        {/* Small circle bottom-left */}
        {/* <div
          className="absolute -bottom-16 -left-16 w-[260px] h-[260px] rounded-full opacity-[0.05]"
          style={{ background: "var(--color-green)" }}
        />
        {/* Diagonal accent strip */}
        {/* <div
          className="absolute top-0 right-[18%] w-[2px] h-full opacity-[0.08]"
          style={{ background: "var(--color-white)" }}
        />
        <div
          className="absolute top-0 right-[38%] w-[1px] h-full opacity-[0.05]"
          style={{ background: "var(--color-white)" }}
        />  */} 
      {/* </div> */} 

      {/* ── Two-column layout ── */}
      

        {/* ── LEFT — Content ── */}
        <div className="flex flex-col gap-6">

          {/* Top label + tag row */}
         <div className="flex items-center gap-4">
          <span className="  font-[500] text-[15px] px-7 py-1.5  rounded-4xl bg-[var(--color-bg-success)]  "> Admisstion open  </span>
          <span className="  font-[500] text-[15px] px-7 py-1.5  rounded-4xl bg-[var(--color-bg-danger)]  "> 2026-27 </span>

         </div>

          {/* Main heading */}
          <div className="flex flex-col gap-3">
            <h1 className="text-[2rem] md:text-[2.6rem]  lg:text-[3.7rem]  xl:text-[4.5rem] font-[var(--font-heading)] font-extrabold  leading-[1.1] tracking-tight text-[var(--color-text-inverse)]"
            >
              Where Every Student
              <span
                className="block"
                style={{ color: "var(--color-green)" }}
              >
                Discovers Excellence.
              </span>
            </h1>

          </div>

         
          <P
            color="inverse"
            size="lg"
          
          >
            AEK School provides world-class education from Std 1 to 12 with
            experienced faculty, modern labs, and a nurturing environment
            that helps every child grow academically and personally. experienced faculty, modern labs, and a nurturing environment
            that helps every child grow academically and personally.
          </P>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 pt-1">
            <Button variant="primary" size="lg">
             Admission 
            </Button>
            <Button variant="white" size="lg">
              View result 
            </Button>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-3 pt-2">
            
            <StatCard > <FaInstagram  className="font-[var(--font-heading)] font-extrabold text-2xl md:text-3xl leading-none text-[var(--color-text-danger)]  hover:text-[var(--color-red)] "/>
            </StatCard>
            <StatCard >
              <FaWhatsapp className="font-[var(--font-heading)] font-extrabold text-2xl md:text-3xl leading-none text-[var(--color-text-danger)]  hover:text-[var(--color-red)] " />

            </StatCard>
            <StatCard >
              <FaLinkedin className="font-[var(--font-heading)] font-extrabold text-2xl md:text-3xl leading-none text-[var(--color-text-danger)]  hover:text-[var(--color-red)]" />

            </StatCard>
            <StatCard >
              <FaMapMarkerAlt className="font-[var(--font-heading)] font-extrabold text-2xl md:text-3xl leading-none text-[var(--color-text-danger)]  hover:text-[var(--color-red)] " />

            </StatCard>
          </div>
        </div>

        {/* ── RIGHT — Visual card ── */}
        <div className="hidden lg:flex justify-center items-center">

          {/* Main image / illustration card */}
       </div>
     

      

    </Section>
  );
}