import React from 'react'
import { Button, H2, P, Section, } from '../ui'

function Heroaboute() {
    return (
        <Section id="about" className="  flex flex-col items-center  gap-6 lg:gap-10">

            <H2 color="brand">
                About Us
            </H2>


            <div className='grid   md:grid-cols-[1fr_2fr] gap-10 lg:gap-20  overflow-hidden'>


                <div className=' border-2 rounded-md mb-4 '>
                   <img src="https://cdn.jsdelivr.net/gh/Malkiya-Hitesh/Aastha-image@main/image/4.webp" alt="no" className=" w-full h-full object-cover" />
                </div>


                <div className='flex flex-col items-start gap-6 lg:gap-10'>

                    <div className='flex  gap-3 flex-col '>
                        <div className='flex gap-3 items-center'>
                            <div className='w-3 h-3 rounded-full bg-[var(--color-green)]' />
                            <P color="muted" size="sm" style={{ fontWeight: 'bold' }}>Who we are</P>
                        </div>
                        <P size="lg">
                            We are a team of passionate professionals dedicated to providing the best services to our customers. We believe in delivering excellence and building long-lasting relationships with our clients. Our mission is to exceed expectations and create value for every project we undertake.
                        </P>

                    </div>
                    <div className='flex  gap-3 flex-col'>
                        <div className='flex gap-3 items-center '>
                            <div className='w-3 h-3 rounded-full bg-[var(--color-green)]' />
                            <P color="muted" size="sm" style={{ fontWeight: 'bold' }}>Our Values</P>
                        </div>
                        <P size="lg">
                            Integrity, innovation, and customer satisfaction are at the core of everything we do. We strive to create a positive impact through our work and are committed to continuous improvement and growth.
                        </P>

                    </div>
                    <div className='flex  gap-3 flex-col'>

                        <div className='flex gap-3 items-center '>
                            <div className='w-3 h-3 rounded-full bg-[var(--color-green)]' />
                            <P color="muted" size="sm" style={{ fontWeight: 'bold' }}>Our Vision</P>

                        </div>
                        <P size="lg">
                            Our vision is to be a leading company in our industry, known for our exceptional service and innovative solutions. We aim to empower our clients and contribute to their success through our expertise and dedication.
                        </P>
                    </div>



                    <Button className='mt-4' variant="primary" size="md">Learn More</Button>
                </div>
            </div>
        </Section>
    )
}

export default Heroaboute
