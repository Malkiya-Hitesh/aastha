import Academics from '@/components/academic/Academics'
import Achivment from '@/components/academic/Achivment'
import Aprocess from '@/components/academic/Aprocess'
import Hero from '@/components/academic/Hero'
import RequiredDoc from '@/components/academic/RequiredDoc'
import Teacher from '@/components/academic/Teacher'
import React from 'react'

function page() {
  return (
    <main>
      <Hero />
      <Academics />
      <Achivment />
      <Teacher />
      <RequiredDoc />
      <Aprocess />
    </main>
  )
}

export default page
