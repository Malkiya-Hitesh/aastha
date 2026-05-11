
import { getFacilities } from '@/lib/queries';
import { H2, H3, P, Section } from '../ui'

async function FacitiesC() {

const facilitie = await getFacilities()



  return (
  <Section id="facilities" className="  flex flex-col   gap-6 lg:gap-10">
    <H2 className='text-center '  color="brand">Facilities</H2>

<div>
    <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10  overflow-hidden'>
        {facilitie.map((facility) => (
            <div key={facility._id} className='flex flex-col items-start gap-3  pl-4 pr-8 py-3 rounded-lg bg-blue-500/10 border border-white/15 backdrop-blur-sm  '>
                <img src={facility.imageUrl} alt={facility.alt} className='w-full h-40 object-cover border-2 rounded-md' />
                <H3  color='brand' className="text-center  ">{facility.name}</H3>
                <P color="muted" size="md">{facility.description}</P>
            </div>
        ))}
    </div>
</div>

  </Section>
  )
}

export default FacitiesC
