import { getAchievements } from "@/lib/queries"
import { H2, H3, P, Section, Tag } from "../ui"

async function Achivment() {


    const achievements = await getAchievements()
 

  return (
   <Section  variant={'white'} className="  flex flex-col   gap-6 lg:gap-10"  >
    <H2 className='text-center '  color="brand">Our Achievements</H2>

    <div className=" overflow-x-auto overflow-y-hidden flex gap-5 lg:gap-10  py-5">
        {achievements.map((achievement) => (
            <div key={achievement._id} className="flex-shrink-0  w-80 bg-blue-500/10 border border-white/15 backdrop-blur-sm rounded-lg p-4">
                <img src={achievement.imageUrl} alt={achievement.title} className="w-full h-40 object-cover border-2   rounded-md mb-4 " />
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
