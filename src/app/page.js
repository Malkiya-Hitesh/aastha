// src/app/page.js — Home page with SEO metadata

import Academics from "@/components/home/Academics";
import Achivment from "@/components/home/Achivment";
import ContactSection from "@/components/home/Contact";
import CtaSection from "@/components/home/Cta";
import FacitiesC from "@/components/home/FacitiesC";
import FaqServer from "@/components/home/FaqServer";
import Gallery from "@/components/home/Gallry";
import Heroaboute from "@/components/home/Heroaboute";
import HeroServer from "@/components/home/HeroServer";
import Notis from "@/components/home/Notis";
import Reviws from "@/components/home/Reviws";
import WhyChoose from "@/components/home/WhyChoose";
import TeamAasthaAd from "@/components/layout/Custon";

// ── Page-specific SEO metadata ────────────────────────────────
export const metadata = {
  title: "Shree Aastha school jasdan | Best School in Jasdan, Gujarat",
  description:
    "Shree Aastha school jasdan — GSEB & CBSE school in Jasdan, Gujarat. LKG to Std 12 | Gujarati & English medium | Science, Commerce, Arts | Admissions open 2025–26. Call: +91 63547 71871.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shree Aastha school jasdan | Jasdan Public School | Yashoda Girls School",
    description:
      "Top-ranked school in Jasdan offering GSEB & CBSE curriculum from LKG to Std 12 in Gujarati & English medium. Science, Commerce, and Arts streams available.",
    url: "https://www.aasthaschool.com",
  },
};

function page() {
  return (
    <main>
      <HeroServer />
      <TeamAasthaAd />
      <Heroaboute />
      <Notis />
      <FacitiesC />
      <Academics />
      <WhyChoose />
      <Achivment />
      <Gallery />
      <Reviws />
      <FaqServer />
      <CtaSection />
      <ContactSection />
    </main>
  );
}

export default page;