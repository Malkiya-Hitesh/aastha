import { H2, P, Section } from "../ui"
import Alumni from "./Alumni"
import Second from "./Second"


function Main() {
  return (
    <main className='xl:mt-[7rem] lg:mt-[6.7rem] sm:mt-[6.2rem] mt-[4.2rem] '>


      <Section className=' flex flex-col gap-10'>
        <H2 className='text-center'>Results</H2>
       
        <Second year="2023 - 2024" />
        <Alumni sItem={1} eitem={10} />
        <Second year="2022 - 2023" />
      </Section>
    </main>
  )
}

export default Main
