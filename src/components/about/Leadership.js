import React from 'react'
import { H2, H3, P, Section } from '../ui'
import Image from 'next/image'

function Leadership() {
    return (
        <Section className=' flex flex-col gap-8  '>
            <H2 className=' text-center ' >Leadership</H2>
            <div className=' grid grid-cols-1 gap-8 '>

                <div className=' grid grid-cols-[1fr_2fr] gap-8  border-t border-[var(--color-border-brand)] pt-8  items-start'>
                    <div className='w-90 h-100  rounded-3xl'>
                        <img src="/image/4.webp" alt="no" className=" w-full h-full object-cover" />
                    </div>
                    <div>
                        <H2 color='brand' className='my-3' >Kalpesh sir</H2>
                        <span className=' bg-[var(--color-bg-success)] text-[var(--color-text-success)] inline-flex items-center   font-[var(--font-body)] font-semibold  text-[0.8rem] tracking-[0.08em] uppercase  px-2.5 py-1    rounded-[var(--radius-sm)]   whitespace-nowrap' >Founder & CEO</span>
                        <P size='md' className=' mt-2 ' >John has over 20 years of experience in the sports industry, leading teams to success and fostering a culture of excellence.John has over 20 years of experience in the sports industry, leading teams to success and fostering a culture of excellence.

                        </P>
                        <P size='md' className=' mt-4 ' >John has over 20 years of experience in the sports industry, leading teams to success and fostering a culture of excellence.John has over 20 years of experience in the sports industry, leading teams to success and fostering a culture of excellence.</P>
                        <P size='md' className=' mt-4 ' >John has over 20 years of experience in the sports industry, leading teams to success and fostering a culture of excellence.John has over 20 years of experience in the sports industry, leading teams to success and fostering a culture of excellence.</P>

                    </div>
                </div>
                <div className=' grid grid-cols-[2fr_1fr] gap-8  border-t border-[var(--color-border-brand)] pt-8  items-start'>

                    <div>
                        <H2 color='brand' className='my-3' > Kalpesh sir</H2>
                        <span className=' bg-[var(--color-bg-success)]  text-[var(--color-text-success)] inline-flex items-center   font-[var(--font-body)] font-semibold  text-[0.8rem] tracking-[0.08em] uppercase  px-2.5 py-1    rounded-[var(--radius-sm)]   whitespace-nowrap' > principal</span>
                        <P size='md' className=' mt-2 ' >John has over 20 years of experience in the sports industry, leading teams to success and fostering a culture of excellence.John has over 20 years of experience in the sports industry, leading teams to success and fostering a culture of excellence.

                        </P>
                        <P size='md' className=' mt-4 ' >John has over 20 years of experience in the sports industry, leading teams to success and fostering a culture of excellence.John has over 20 years of experience in the sports industry, leading teams to success and fostering a culture of excellence.</P>
                        <P size='md' className=' mt-4 ' >John has over 20 years of experience in the sports industry, leading teams to success and fostering a culture of excellence.John has over 20 years of experience in the sports industry, leading teams to success and fostering a culture of excellence.</P>

                    </div>

                    <div className='w-90 h-100  rounded-3xl'>
                        <img src="/image/4.webp" alt="no" className=" w-full h-full object-cover" />
                    </div>
                </div>


            </div>
        </Section>
    )
}

export default Leadership
