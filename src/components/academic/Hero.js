import React from 'react'
import { Button, H2, P, Section } from '../ui'

function Hero() {
    return (
        <Section variant='white' className=' flex justify-center items-center'  >
            <div className='  flex  flex-col  justify-center items-center min-h-[100vh] gap-6 max-w-[80vw]  '>
                <H2 className=' text-center  '>Shaping Futures, Building Tomorrow's Leaders</H2>
                <P className=' text-center ' size='xl' >
                    Welcome to Team Aastha — where quality education meets character building.
                    From Kindergarten to Grade 12, we offer Science, Commerce, and Arts streams
                    in both Gujarati and English medium, nurturing every student to reach their highest potential.
                </P>
                <div className=' flex   gap-8  '>
                    <Button variant='primary' >Explore Admissions</Button>
                    <Button variant='secondary' >Learn More</Button>
                </div>
            </div>

        </Section>
    )
}

export default Hero