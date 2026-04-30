import React from 'react'
import { Button, H2, P, Section } from '../ui'

function Hero() {
    return (
        <Section className=' flex justify-center items-center'  >
            <div className='  flex  flex-col  justify-center items-center min-h-[80vh] gap-6 max-w-[80vw]  '>
                <H2> aboute ashtha school</H2>
                <P  className=' text-center ' size='xl' >
                    Integrity, innovation, and customer satisfaction are at the core of everything we do. We strive to create a positive impact through our work and are committed to continuous improvement and growth.
                </P>
                <div className=' flex   gap-8  '>
                    <Button variant='primary' >  read more</Button>
                    <Button variant='secondary' >  read more</Button>
                </div>
            </div>

        </Section>
    )
}

export default Hero
