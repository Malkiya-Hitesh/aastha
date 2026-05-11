import React from 'react'
import { H2, H3, P, Section, Tag } from '../ui'
import Image from 'next/image'
import { getTeachers } from '@/lib/queries'

async  function Teacher() {
 const teachers = await getTeachers()


  return (
   <Section  className=' flex flex-col gap-10'>
   <H2 color='brand' className=' text-center ' >Teachers</H2>
   <div className='flex overflow-x-auto gap-6 py-4 '>
    {
        teachers.map(teacher => (
            <div key={teacher._id} className=' min-w-[250px] bg-white rounded-lg shadow-md p-4 flex-shrink-0 gap-3 flex flex-col '>
                <img src={teacher.imageUrl} alt={teacher.tname} width={200} height={200} className=' w-full h-48 object-cover rounded-md mb-4 border-2' />
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
