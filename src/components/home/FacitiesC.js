
import { H2, H3, P, Section } from '../ui'

function FacitiesC() {


  const facilitie = [  {
    id: 1,
    name: "Library",
    description: "A well-stocked library with a wide range of books, journals, and digital resources to support academic research and learning.",
    image: "library.jpg"
  },
  {  
    id: 2,
    name: "Science Labs",
    description: "State-of-the-art science laboratories equipped with modern instruments and safety measures for hands-on experiments in physics, chemistry, and biology.", 
    image: "science-labs.jpg"
  }
  ,
  {
    id: 3,
    name: "Sports Complex",
    description: "A modern sports complex with facilities for various indoor and outdoor activities, promoting physical fitness and teamwork.",
    image: "sports-complex.jpg"
  }
    ,   
    {
    id: 4,
    name: "Computer Labs",
    description: "Advanced computer labs with high-speed internet and the latest software to enhance digital literacy and coding skills.",
    image: "computer-labs.jpg"
  }
    ,{
    id: 5,
    name: "Auditorium",
    description: "A spacious auditorium with excellent acoustics, used for school events, performances, and guest lectures.",   
    image: "auditorium.jpg"
  },
    {
    id: 6,
    name: "Cafeteria",
    description: "A hygienic and comfortable cafeteria offering a variety of nutritious meals and snacks for students and staff.",
    image: "cafeteria.jpg"
  }
    
   
];



  return (
  <Section id="facilities" className="  flex flex-col   gap-6 lg:gap-10">
    <H2 className='text-center '  color="brand">Facilities</H2>

<div>
    <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10  overflow-hidden'>
        {facilitie.map((facility) => (
            <div key={facility.id} className='flex flex-col items-start gap-3  pl-4 pr-8 py-3 rounded-lg bg-blue-500/10 border border-white/15 backdrop-blur-sm  '>
                <img src={facility.image} alt={facility.name} className='w-full h-40 object-cover rounded-md' />
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
