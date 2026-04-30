import React from 'react'
import { H2, H3, P, Section, Tag } from '../ui'
import Image from 'next/image'

function Teacher() {

  const teachers = [
    {
      id: 1,
        tname: 'John Doe',
        subject: 'Mathematics',
        experience: '10 years',
          qualification: 'M.Sc. in Mathematics',
        image:"https://cdn.jsdelivr.net/gh/Malkiya-Hitesh/Aastha-image@main/image/1.webp"

    },
    {
        id: 2,
        tname: 'Jane Smith',
        subject: 'Physics',
        experience: '8 years',
        qualification: 'Ph.D. in Physics',
        image: "https://cdn.jsdelivr.net/gh/Malkiya-Hitesh/Aastha-image@main/image/1.webp"
    },
    {
        id: 3,
        tname: 'Emily Johnson',
        subject: 'Chemistry',
        experience: '6 years',
        qualification: 'M.Sc. in Chemistry',
        image: "https://cdn.jsdelivr.net/gh/Malkiya-Hitesh/Aastha-image@main/image/1.webp"
    },
    {
        id: 4,
        tname: 'Michael Brown',
        subject: 'Biology',
        experience: '5 years',
        qualification: 'M.Sc. in Biology',
        image: "https://cdn.jsdelivr.net/gh/Malkiya-Hitesh/Aastha-image@main/image/1.webp"
    },
    {
        id: 5,
        tname: 'Sarah Davis',
        subject: 'English',
        experience: '7 years',
        qualification: 'M.A. in English',
        image: 'https://cdn.jsdelivr.net/gh/Malkiya-Hitesh/Aastha-image@main/image/1.webp',
    },{
        id: 6,
        tname: 'David Wilson',
        subject: 'History',
        experience: '9 years',
        qualification: 'M.A. in History',
        image: "https://cdn.jsdelivr.net/gh/Malkiya-Hitesh/Aastha-image@main/image/1.webp"
    },{
        id: 7,
        tname: 'Laura Martinez',
        subject: 'Geography',
        experience: '6 years',
        qualification: 'M.A. in Geography',
        image: "https://cdn.jsdelivr.net/gh/Malkiya-Hitesh/Aastha-image@main/image/1.webp"
    },{
        id: 8,
        tname: 'James Anderson',
        subject: 'Computer Science',
        experience: '10 years',
        qualification: 'M.Sc. in Computer Science',
        image: "https://cdn.jsdelivr.net/gh/Malkiya-Hitesh/Aastha-image@main/image/1.webp"
    }]

  return (
   <Section  className=' flex flex-col gap-10'>
   <H2 color='brand' className=' text-center ' >Teachers</H2>
   <div className='flex overflow-x-auto gap-6 py-4 '>
    {
        teachers.map(teacher => (
            <div key={teacher.id} className=' min-w-[250px] bg-white rounded-lg shadow-md p-4 flex-shrink-0 gap-3 flex flex-col '>
                <Image src={teacher.image} alt={teacher.tname} width={200} height={200} className=' w-full h-48 object-cover rounded-md mb-4 border-2' />
                <H3 className=' text-lg font-bold  '>{teacher.tname}</H3>
                <div>
              <Tag variant='green' >{teacher.subject}</Tag>
              </div>
                <P className=' text-gray-600  '>{teacher.experience}</P>
                <P className=' text-gray-600  '>{teacher.qualification}</P>
            </div>
        ))
    }

   </div>
   </Section>
   
  )
}

export default Teacher
