import React from 'react'
import { H2, P, Section } from '../ui'
import { FaFilePdf } from 'react-icons/fa';

function RequiredDoc() {


    const requiredDocs = [
        {
            id: 1,
            title: "Required Document 1",
            description: "This is the first required document.",
            src: "pdf-link-1.pdf",
            date: "2024-06-01"
        },
        {
            id: 2,
            title: "Required Document 2",
            description: "This is the second required document.",
            src: "pdf-link-2.pdf",
            date: "2024-06-01"
        },
        {
            id: 3,
            title: "Required Document 3",
            description: "This is the third required document.",
            src: "pdf-link-3.pdf",
            date: "2024-06-01"

        },
        {
            id: 4,
            title: "Required Document 4",
            description: "This is the fourth required document.",
            src: "pdf-link-4.pdf",
            date: "2024-06-01"

        },
        {
            id: 5,
            title: "Required Document 5",
            description: "This is the fifth required document.",
            src: "pdf-link-5.pdf",
            date: "2024-06-01"
        },
        {
            id: 6,
            title: "Required Document 6",
            description: "This is the sixth required document.",
            src: "pdf-link-6.pdf",
            date: "2024-06-01"
        },
        {
            id: 7,
            title: "Required Document 7",
            description: "This is the seventh required document.",
            src: "pdf-link-7.pdf",
            date: "2024-06-01"
        },
    {
            id: 8,
            title: "Required Document 8",
            description: "This is the eighth required document.",
            src: "pdf-link-8.pdf",
            date: "2024-06-01"
        },
    ];


    return (
        <Section id="notis" variant='white' className="  flex flex-col   gap-6 lg:gap-10 ">
            <H2 className='text-center' color="brand">
                Required Documents
            </H2>

            <div className='grid  grid-cols-1 md:grid-cols-2  gap-5 lg:gap-10  overflow-hidden'>
                {requiredDocs.map((doc) => (
                    <div key={doc.id} className=' grid grid-cols-[auto_1fr] gap-3  items-center  pl-4 pr-8 py-3 rounded-full bg-blue-500/10 border border-white/15 backdrop-blur-sm  '>
                        <div className=' bg-[var(--color-bg-danger)]  rounded-full w-13 h-13 flex items-center justify-center'>
                            <FaFilePdf  className=' text-3xl text-[var(--color-text-danger)] ' />
                        </div>



                        <div className='flex flex-col items-start gap-1'>
                            <div className=' '>
                                <P className='line-clamp-1' size="xl" style={{ fontWeight: 'bold' }}>{doc.title}</P>

                                
                            </div>

                            <P className='line-clamp-1' color="muted" size="md">{doc.description}</P>
                        </div>



                    </div>
                ))}
            </div>
        </Section>
    )
}

export default RequiredDoc
