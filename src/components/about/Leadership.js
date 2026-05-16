import React from 'react'
import { H2, H3, P, Section } from '../ui'
import { getLeaders } from '@/lib/queries'


async function Leadership() {

    const leaders = await getLeaders()


    return (
        <Section className='flex flex-col gap-6 lg:gap-8'>
            <H2 className='text-center'>Leadership</H2>

            <div className='grid grid-cols-1 gap-8 w-full'>
                {leaders.map((leader, index) => (
                    <div
                        key={index}
                        className={`  grid  grid-cols-1  ${index % 2 === 0 ? ' lg:grid-cols-[1fr_2fr]' : 'lg:grid-cols-[2fr_1fr]'}  gap-5 md:gap-8 border-t border-[var(--color-border-brand)]  pt-6 md:pt-8  items-start  `}
                    >
                        {/* Image */}
                        <div className={` w-full   h-56 sm:h-64 md:h-80   rounded-2xl overflow-hidden   ${index % 2 === 0 ? 'lg:order-first' : 'lg:order-last'}   `}>
                            <img
                                src={leader.imageUrl}
                                alt={leader.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className='flex flex-col gap-2 sm:gap-3'>
                            <H3 color='brand'>{leader.name}</H3>
                            <span className='
                bg-[var(--color-bg-success)] text-[var(--color-text-success)]
                inline-flex items-center
                font-[var(--font-body)] font-semibold
                text-[0.7rem] sm:text-[0.8rem]
                tracking-[0.08em] uppercase
                px-2.5 py-1 rounded-[var(--radius-sm)]
                whitespace-nowrap w-fit
              '>
                                {leader.position}
                            </span>
                            <P size='sm' className=''>{leader.description}</P>
                        </div>

                    </div>
                ))}
            </div>
        </Section>
    )
}

export default Leadership
