import React from 'react'
import { H2, H3, P, Section } from '../ui'
import { getLeaders } from '@/lib/queries'


 async function Leadership() {

    const leaders = await getLeaders()

    return (
        <Section className=' flex flex-col gap-8  '>
            <H2 className=' text-center ' >Leadership</H2>
            <div className=' grid grid-cols-1 gap-8 '>



                {leaders.map((leader, index) => (
                    <div key={index} className= {` grid  ${index % 2 === 0 ? '  grid-cols-[1fr_2fr]': 'grid-cols-[2fr_1fr]'} gap-8  border-t border-[var(--color-border-brand)] pt-8  items-start    ` } >
                        <div className={    `w-90 h-100  rounded-3xl overflow-hidden  ${index % 2 === 0 ? 'order-first' : 'order-last'} `} >
                            <img src={leader.imageUrl} alt={leader.name} className=" w-full h-full object-cover" />
                        </div>
                        <div>
                            <H2 color='brand' className='my-3' >{leader.name}</H2>
                            <span className=' bg-[var(--color-bg-success)] text-[var(--color-text-success)] inline-flex items-center   font-[var(--font-body)] font-semibold  text-[0.8rem] tracking-[0.08em] uppercase  px-2.5 py-1    rounded-[var(--radius-sm)]   whitespace-nowrap' >{leader.role}</span>
                            <P size='md' className=' mt-2 ' >
                                {leader.description}
                            </P>

                        </div>
                    </div>
                )
                )}


            

            </div>
        </Section>
    )
}

export default Leadership
