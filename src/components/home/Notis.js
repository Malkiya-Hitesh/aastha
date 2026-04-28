import React from 'react'
import { H2, P, Section } from '../ui'
import { FaFilePdf } from 'react-icons/fa';

function Notis() {


    const notices = [
        {
            id: 1,
            title: "Notice 1",
            description: "This is the first noticThis is the first noticThis is the first noticThis is the first noticThis is the first notice.",
            src: "pdf-link-1.pdf",
            date: "2024-06-01"
        },
        {
            id: 2,
            title: "Notice 2",
            description: "his is the first noticThis is the first noticThis is the first noticThis is the first noticThis is the first noticehis is the first noticThis is the first noticThis is the first noticThis is the first noticThis is the first notice.",
            src: "pdf-link-2.pdf",
            date: "2024-06-01"
        },
        {
            id: 3,
            title: "Notice 3",
            description: "This is the first noticThis is the first noticThis is the first noticThis is the first noticThis is the first noticehis is the first noticThis is the first noticThis is the first noticThis is the first noticThis is the first noticece.",
            src: "pdf-link-3.pdf",
            date: "2024-06-01"

        },
        {
            id: 4,
            title: "Notice 4",
            description: "Thhis is the first noticThis is the first noticThis is the first noticThis is the first noticThis is the first noticehis is the first noticThis is the first noticThis is the first noticThis is the first noticThis is the first noticeotice.",
            src: "pdf-link-4.pdf",
            date: "2024-06-01"

        },
        {
            id: 5,
            title: "Notice 5",
            description: "This ishis is the first noticThis is the first noticThis is the first noticThis is the first noticThis is the first notice the fifth notice.",
            src: "pdf-link-5.pdf",
            date: "2024-06-01"
        },
        {
            id: 6,
            title: "Notice 6",
            description: "This ihis is the first noticThis is the first noticThis is the first noticThis is the first noticThis is the first notices the sixth notice.",
            src: "pdf-link-6.pdf",
            date: "2024-06-01"
        },
        {
            id: 7,
            title: "Notice 7",
            description: "This is the first noticThis is the first noticThis is the first noticThis is the first noticThis is the first noticehis is the first noticThis is the first noticThis is the first noticThis is the first noticThis is the first noticece.",
            src: "pdf-link-7.pdf",
            date: "2024-06-01"
        },
    {
            id: 8,
            title: "Notice 8",
            description: "This is the first noticThis is the first noticThis is the first noticThis is the first noticThis is the first noticehis is the first noticThis is the first noticThis is the first noticThis is the first noticThis is the first noticece.",
            src: "pdf-link-8.pdf",
            date: "2024-06-01"
        },
    ];


    return (
        <Section id="notis" variant='white' className="  flex flex-col   gap-6 lg:gap-10 ">
            <H2 className='text-center' color="brand">
                Notices & updates
            </H2>

            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10  overflow-hidden'>
                {notices.map((notice) => (
                    <div key={notice.id} className=' grid grid-cols-[auto_1fr] gap-3  items-center  pl-4 pr-8 py-3 rounded-full bg-blue-500/10 border border-white/15 backdrop-blur-sm  '>
                        <div className=' bg-[var(--color-bg-danger)]  rounded-full w-13 h-13 flex items-center justify-center'>
                            <FaFilePdf  className=' text-3xl text-[var(--color-text-danger)] ' />
                        </div>



                        <div className='flex flex-col items-start gap-1'>
                            <div className=' flex flex-row justify-between items-center w-full'>
                                <P className='line-clamp-1' size="xl" style={{ fontWeight: 'bold' }}>{notice.title}</P>

                                <P color="muted" size="md">{notice.date}</P>
                            </div>

                            <P className='line-clamp-1' color="muted" size="md">{notice.description}</P>
                        </div>



                    </div>
                ))}
            </div>
        </Section>
    )
}

export default Notis
