import { getNotices } from '@/lib/queries';
import { H2, P, Section } from '../ui'
import { FaFilePdf } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

async function Notis() {
  const notices = await getNotices()

  return (
    <Section id="notis" variant='white' className="flex flex-col gap-6 lg:gap-10">

      <H2 className='text-center' color="brand">
        Notices & Updates
      </H2>

      <div className='max-w-3xl mx-auto w-full'>
        <div className='flex flex-col border border-[var(--color-border-muted)] rounded-2xl overflow-hidden bg-[var(--color-bg-card)]'>

          {notices.map((notice, index) => (
            <a key={notice._id}
  href={notice.pdfUrl}
  download
  target='_blank'
  className={`
    flex items-center gap-3 sm:gap-4
    px-4 sm:px-5 py-3 sm:py-3.5
    transition-colors duration-150
    hover:bg-[var(--color-bg-muted)]
    ${index !== notices.length - 1 ? 'border-b border-[var(--color-border-muted)]' : ''}
  `}
>
  {/* PDF Icon */}
  <div className=' shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[var(--color-bg-danger)]   flex items-center justify-center
  '>
    <FaFilePdf className='text-sm sm:text-base text-[var(--color-text-danger)]' />
  </div>

  {/* Title + Description + mobile date/download */}
  <div className='flex flex-col gap-0.5 flex-1 min-w-0'>
    <P 
    size="sm"
    className='    font-semibold    line-clamp-1
    '>
      {notice.title}
    </P>
    <P 
    size="xs"
    className='
      line-clamp-1
    '>
      {notice.description}
    </P>

    {/* Mobile only — date + download niche */}
    <div className='flex items-center justify-between mt-1 sm:hidden'>
      <span className='text-[0.625rem] text-[var(--color-text-hint)]'>
        {notice.date}
      </span>
      <span className='
        flex items-center gap-1
        text-[0.625rem] font-semibold
        text-[var(--color-text-brand)]
        bg-[var(--color-bg-accent)]
        px-2 py-0.5 rounded-full
      '>
        <HiDownload className='text-xs' /> Download
      </span>
    </div>
  </div>

  {/* Desktop only — right side */}
  <div className='shrink-0 hidden sm:flex flex-col items-end gap-1.5'>
    <span className='text-[0.6875rem] text-[var(--color-text-hint)] whitespace-nowrap'>
      {notice.date}
    </span>
    <span className='
      flex items-center gap-1
      text-[0.6875rem] font-semibold
      text-[var(--color-text-brand)]
      bg-[var(--color-bg-accent)]
      px-2.5 py-1 rounded-full whitespace-nowrap
    '>
      <HiDownload className='text-xs' /> Download
    </span>
  </div>

</a>
         
          ))}

        </div>
      </div>

    </Section>
  )
}

export default Notis