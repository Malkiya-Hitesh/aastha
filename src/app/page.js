



import Academics from "@/components/home/Academics"
import Achivment from "@/components/home/Achivment"
import ContactSection from "@/components/home/Contact"
import CtaSection from "@/components/home/Cta"
import FacitiesC from "@/components/home/FacitiesC"

import FaqServer from "@/components/home/FaqServer"
import Gallery from "@/components/home/Gallry"
import Heroaboute from "@/components/home/Heroaboute"

import HeroServer from "@/components/home/HeroServer"
import Notis from "@/components/home/Notis"
import Reviws from "@/components/home/Reviws"
import WhyChoose from "@/components/home/WhyChoose"
import TeamAasthaAd from "@/components/layout/Custon"

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
  )
}

export default page
