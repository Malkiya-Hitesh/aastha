import React from 'react'
import { H2, H3, P, Section, Tag } from '../ui'
import { getTeachers } from '@/lib/queries'

async function Teacher() {
  const teachers = await getTeachers()

  return (
    <Section className='flex flex-col gap-6 lg:gap-10'>
      <H2 color='brand' className='text-center'>Teachers</H2>

      <div className='
        flex gap-4 sm:gap-5
        overflow-x-auto overflow-y-hidden
        pb-4 snap-x snap-mandatory
        scrollbar-hide
        px-1
      '>
        {teachers.map(teacher => (
          <div
            key={teacher._id}
            className='
              snap-start flex-shrink-0
              w-50 max-[360px]:w-45 sm:w-56 md:w-60
              bg-[var(--color-bg-card)]
              rounded-xl
              border border-[var(--color-border-muted)]
              p-3 sm:p-4
              flex flex-col gap-2 sm:gap-3
            '
          >
            {/* Image */}
            <img
              src={teacher.imageUrl}
              alt={teacher.tname}
              className='w-full h-40 sm:h-44 object-cover rounded-lg border-2'
            />

            {/* Name */}
            <H3>{teacher.tname}</H3>

            {/* Subject tag */}
            <Tag variant='green' className=''>
              {teacher.subject}
            </Tag>

            {/* Experience + Qualification */}
            <P size='md' color='muted'>{teacher.experience}</P>
            <P size='md' color='muted'>{teacher.qualification}</P>
          </div>
        ))}
      </div>

      

    </Section>
  )
}

export default Teacher