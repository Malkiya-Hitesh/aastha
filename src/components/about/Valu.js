import React from 'react'
import { H2, H3, P, Section } from '../ui'
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import { IoCall } from 'react-icons/io5'



function InfoCard({ label, value, iconBg, iconColor, icon }) {
    return (
        <div className=' p-4 flex flex-col gap-4 rounded-[12px] bg-[var(--color-bg-card)] border border-[var(--color-border-muted)]'  style={{ background: iconBg, color: iconColor }} >

            <div className="flex items-center gap-5  ">
                <div
                    className=" p-5  rounded-[10px] flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: iconBg, color: iconColor }}
                >
                    {icon}
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                    <H3 color="default" >
                        {label}
                    </H3>

                </div>
            </div>
             <P size="lg" color="dark" >
                    {value}
                </P>
        </div>
    )
}
function Valu() {
    const val = [
        {
            id: 1,
            label: 'Our Values',
            value: 'Integrity, innovation, and customer satisfaction are at the core of everything we do. We strive to create a positive impact through our work and are committed to continuous improvement and growth.',
            iconBg: '#E8F0FC',
            iconColor: '#1061D2',
            icon: (<FaMapMarkerAlt className='text-2xl'/>)

        },
        {
            id: 2,
            label: 'Our Vision',
            value: '  Our vision is to be a leading company in our industry, known for our exceptional service and innovative solutions. We aim to empower our clients and contribute to their success through our expertise and dedication.',
            iconBg: '#f0fbe8',
            iconColor: '#4a9e1a',
            icon: (<IoCall  className='text-2xl'/>

            ),
        },
        {
            id: 4,
            label: 'Who we are',
            value: ' We are a team of passionate professionals dedicated to providing the best services to our customers. We believe in delivering excellence and building long-lasting relationships with our clients. Our mission is to exceed expectations and create value for every project we undertake.',
            iconBg: '#fff0f0',
            iconColor: '#FF5B5B',
            icon: (<FaClock className='text-2xl' />
            ),
        },
    ]
    return (
        <Section  variant='white' className='flex flex-col gap-8   ' >
            <div className='grid grid-cols-3 gap-8 justify-center'>

                {val.map((item) => (
                    <InfoCard key={item.id} {...item} />
                ))

                }
            </div>
        </Section>
    )
}

export default Valu
