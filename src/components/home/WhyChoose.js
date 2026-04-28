import React from 'react'
import { H2, H3, P, Section } from '../ui'
import { GiTeacher } from 'react-icons/gi'
import { FaChalkboardTeacher, FaTrophy, FaUserShield } from 'react-icons/fa'
import { MdOutlineSchool } from 'react-icons/md'

function WhyChoose() {
 
 const reasons = [
    {
      id: 1,
        title: "Experienced Faculty",
        description: "Trained, certified, and experienced teachers who guide students properly",
        icon:<FaChalkboardTeacher />

    },
    {
      id: 2,
      title: "Modern Infrastructure",
      description: "We provide state-of-the-art facilities to create an optimal learning environment for our students.",
      icon: <MdOutlineSchool />
    },
    {
        id: 3,
        title: "Safe & Supportive Campus",
        description: "Student safety, discipline, caring staff, positive atmosphere. ",
        icon: <FaUserShield />
    },{
        id: 4,
        title: "Proven Academic Excellence",
        description: "Consistent top results, strong performance, bright student future.",
        icon: <FaTrophy />

    }
  ]
  return (
    <Section id="why-choose" className="  flex flex-col items-center  gap-6 lg:gap-10">
        <H2 className='text-center' color="brand">
            Why Choose Us
        </H2>
        <div>

            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5  overflow-hidden'>
                {reasons.map((reason) => (
                 <div key={reason.id} className='flex flex-col items-center  gap-3  py-10 px-4 rounded-lg  bg-blue-500/10 border border-white/15 backdrop-blur-sm      '>
                        <span className='text-xl p-5 bg-blue-500/10 border border-white/15 backdrop-blur-sm rounded-2xl  '>{reason.icon}</span>
                        <H3 className='text-xl font-bold'>{reason.title}</H3>
                        <P size='md' className='text-center'>
                            {reason.description}
                        </P>
                    </div>
                  
                ))
                }
           
            </div>

        </div>
    </Section>
  )
}

export default WhyChoose
