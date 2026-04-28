import React from 'react'
import { H2, H3, P, Section } from '../ui'
import Image from 'next/image'

function Leadership() {
  return (
    <Section className=' flex flex-col gap-8  '>
        <H2 className=' text-center ' >Leadership</H2>
        <div className=' grid grid-cols-1 gap-8 '>

            <div className=' grid grid-cols-[1fr_2fr] gap-8  border-t border-[var(--color-border-brand)] pt-8  items-start'>
               <div className='w-full '>
 <Image src='/image/1.webp' alt='Leadership' width={200} height={200} className=' w-full  rounded-3xl ' />
               </div>
               <div>
           <H2 color='brand' >John Doe</H2>
           <span className=' bg-[var(--color-bg-success)]
    text-[var(--color-text-success)] inline-flex items-center   font-[var(--font-body)] font-semibold  text-[1rem] tracking-[0.08em] uppercase  px-2.5 py-1    rounded-[var(--radius-sm)]   whitespace-nowrap' >Founder & CEO</span>
           <P  size='xl' className=' mt-2 ' >John has over 20 years of experience in the sports industry, leading teams to success and fostering a culture of excellence.John has over 20 years of experience in the sports industry, leading teams to success and fostering a culture of excellence.

           </P>
           <P size='xl' className=' mt-4 ' >John has over 20 years of experience in the sports industry, leading teams to success and fostering a culture of excellence.John has over 20 years of experience in the sports industry, leading teams to success and fostering a culture of excellence.</P>
            
               </div>
            </div>
           <div className=' grid grid-cols-[2fr_1fr] gap-8   border-t border-[var(--color-border-brand)] pt-8  items-end '>
               
               <div>
           <H2 color='brand' >John Doe</H2>
           <span className=' bg-[var(--color-bg-success)]
    text-[var(--color-text-success)] inline-flex items-center   font-[var(--font-body)] font-semibold  text-[1rem] tracking-[0.08em] uppercase  px-2.5 py-1    rounded-[var(--radius-sm)]   whitespace-nowrap' >Founder & CEO</span>
           <P  size='xl' className=' mt-2 ' >John has over 20 years of experience in the sports industry, leading teams to success and fostering a culture of excellence.John has over 20 years of experience in the sports industry, leading teams to success and fostering a culture of excellence.

           </P>
           <P size='xl' className=' mt-4 ' >John has over 20 years of experience in the sports industry, leading teams to success and fostering a culture of excellence.John has over 20 years of experience in the sports industry, leading teams to success and fostering a culture of excellence.</P>
            
               </div>
               <div className='w-full '>
 <Image src='/image/1.webp' alt='Leadership' width={200} height={200} className=' w-full  rounded-3xl ' />
               </div>
            </div>
          
        </div>
    </Section> 
  )
}

export default Leadership
