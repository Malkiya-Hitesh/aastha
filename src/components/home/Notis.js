

import { getNotices } from '@/lib/queries';
import { H2, P, Section } from '../ui'
import { FaFilePdf } from 'react-icons/fa';


  async function Notis() {


     const notices = await getNotices()

    return (
        <Section id="notis" variant='white' className="  flex flex-col   gap-6 lg:gap-10 ">
            <H2 className='text-center' color="brand">
                Notices & updates
            </H2>

            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10  overflow-hidden'>
                {notices.map((notice) => (
                    <div key={notice._id} className='   '>

                        <a href={notice.pdfUrl} download  target='_blank' className='grid grid-cols-[auto_1fr] gap-3  items-center  pl-4 pr-8 py-3 rounded-full bg-blue-500/10 border border-white/15 backdrop-blur-sm' >
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

</a>

                    </div>
                ))}
            </div>
        </Section>
    )
}

export default Notis
