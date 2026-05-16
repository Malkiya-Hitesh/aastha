import React from 'react'
import { H2, H4, P, Section } from '../ui'



function StepItem({ steps, isLast }) {
  const { color, tag, title, desc } = steps
  return (
    <div className="grid grid-cols-[28px_1fr] gap-4">

     
      <div className="flex flex-col items-center">
     
        <div
          className="w-[14px] h-[14px] rounded-full flex-shrink-0 mt-1 ring-4 ring-[var(--color-bg-muted)]"
          style={{ background: color }}
        />
        {/* Vertical line */}
        {!isLast && (
          <div
            className="w-[2px] flex-1 mt-2 rounded-full"
            style={{ background: `${color}30`, minHeight: '40px' }} 
                />
        )}
      </div>

     
      <div className={`flex flex-col gap-2 ${isLast ? '' : 'pb-8'}`}>
        {/* Year + tag */}
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className="font-[var(--font-heading)] font-extrabold text-base leading-none"
            style={{ color }} >
            {tag}
          </span>
          
        </div>

        {/* Title */}
        <H4 color="default">{title}</H4>

        {/* Description */}
        <P size="md" color="default" className="leading-relaxed ">
          {desc}
        </P>
      </div>

    </div>
  )
}
function Aprocess() {

const processSteps = [
  {
    id: 1,

    color: '#1061D2',

    tag: 'Step 1',
  
    title: 'apply online',
    desc: 'Submit the online application form with necessary details and documents.',
  },
  {
    id: 2,

    color: '#F59E0B',
    tag: 'Step 2',
    title: 'Personal Interview',
    desc: 'Shortlisted candidates will be invited for a personal interview with the admissions committee.',
  },
  {
    id: 3,

    color: '#a78bfa',
    tag: 'Step 3',  
    title: 'Document Verification',
    desc: 'Candidates will need to provide original documents for verification during the admission process.',
  },
  {
    id: 4,
    
    color: '#FF5B5B',
    tag: 'Step 4',
    title: 'Admission Decision',
    desc: 'The admissions committee will review applications and make decisions based on various criteria.',
  },
  {
    id: 5,
    color: '#1061D2',
    tag: 'Step 5',
    title: 'Joining Instructions',
    desc: 'Successful candidates will receive joining instructions and details about the orientation program.',
  },
]
  return (
   <Section variant='white'  className=' flex flex-col gap-10 '  >
 <H2 className=' text-center ' >Admission Process</H2>
  <div className=' flex flex-col gap-5  items-center'>
     <div className="flex flex-col">
          {processSteps.map((step, i) => (
            <StepItem
              key={step.id}
              steps={step}
              isLast={i === processSteps.length - 1}
            />
          ))}
        </div>
  </div>
   </Section>
  )
}

export default Aprocess
