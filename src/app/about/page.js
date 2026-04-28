import Hero from '@/components/about/Hero'
import LeadershipSection from '@/components/about/Leadership'
import SchoolJourneySection from '@/components/about/SchoolJourneySection'
import Valu from '@/components/about/Valu'
import React from 'react'

function Page() {
  return (
    <main>
      <Hero />

      <Valu />
      <LeadershipSection />
      <SchoolJourneySection />
    </main>
  )
}

export default Page
