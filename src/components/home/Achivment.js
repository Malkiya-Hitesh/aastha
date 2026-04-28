import { H2, H3, P, Section, Tag } from "../ui"

function Achivment() {

 const achievements = [
    {
        id: 1,
        title: "Academic Excellence",
        description: "Consistently ranked among the top schools in the region for academic performance, with a high percentage of students achieving excellent results in board exams and competitive tests.",
        year: "2023",
        img: "academic-excellence.jpg"
    },
    {
        id: 2,
        title: "Sports Excellence",
        description: "Outstanding performance in various sports activities, with students winning accolades at regional and national levels.",
        year: "2023",
        img: "sports-excellence.jpg"
    },
    {
        id: 3,
        title: "Cultural Achievements",
        description: "Active participation and recognition in cultural events, including music, dance, drama, and art competitions.",
        year: "2023",
        img: "cultural-achievements.jpg"
    },
    {
        id: 4,
        title: "Community Service",
        description: "Engagement in community service projects, with students contributing to social causes and receiving awards for their efforts.",
        year: "2023",
        img: "community-service.jpg"
    },{
        id: 5,
        title: "Innovation and Technology",
        description: "Recognition for innovative projects and participation in technology fairs, showcasing students' creativity and problem-solving skills.",
        year: "2023",
        img: "innovation-technology.jpg"
    },{
        id: 6,
        title: "Environmental Initiatives",
        description: "Awards for environmental conservation efforts, including tree planting drives, waste management projects, and awareness campaigns.",
        year: "2023",
        img: "environmental-initiatives.jpg"
    },{
        id: 7,
        title: "Alumni Success",
        description: "Notable achievements of alumni in various fields, including higher education, entrepreneurship, and public service.",
        year: "2023",
        img: "alumni-success.jpg"
    },{
        id: 8,
        title: "Extracurricular Excellence",
        description: "Recognition for excellence in extracurricular activities such as debate, quiz competitions, and leadership roles in student organizations.",
        year: "2023",
        img: "extracurricular-excellence.jpg"
    }
 ]

  return (
   <Section  className="  flex flex-col   gap-6 lg:gap-10"  >
    <H2 className='text-center '  color="brand">Our Achievements</H2>

    <div className=" overflow-x-auto overflow-y-hidden flex gap-5 lg:gap-10  py-5">
        {achievements.map((achievement) => (
            <div key={achievement.id} className="flex-shrink-0  w-80 bg-blue-500/10 border border-white/15 backdrop-blur-sm rounded-lg p-4">
                <img src={achievement.img} alt={achievement.title} className="w-full h-40 object-cover rounded-md mb-4" />
                <H3   color="brand"  className="py-4">{achievement.title}</H3>
                 <Tag variant="red" className="mb-2">{achievement.year}</Tag>
                <P size="md">{achievement.description}</P>
            </div>
        ))}

    </div>

   </Section>
  )
}

export default Achivment
