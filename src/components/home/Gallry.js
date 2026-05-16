

import { getGalleryImages } from "@/lib/queries";
import { H2, Section } from "../ui"

// import React, { useLayoutEffect, useRef } from 'react'
// import Image from 'next/image'
// import Section from '@/app/ui/Section'
// import { H2 } from '@/app/ui/H2'
// import { P } from '@/app/ui/P'
// import gsap from 'gsap'
// import { SplitText } from 'gsap/SplitText'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// import { usePathname } from 'next/navigation'
// gsap.registerPlugin(SplitText, ScrollTrigger)



export default async function Gallery() {
    // let pathname = usePathname()
    // const containerRef = useRef(null)
    // const subRef = useRef(null)
  const img = await getGalleryImages()


//    useLayoutEffect(() => {
//         let ctx
// let split
       
//             ctx = gsap.context(() => {
//          split = new SplitText(subRef.current, {
//                     type: 'words',
//                     linesClass: 'line',
//                 })

                
//                 gsap.from(split.words, {
//                     opacity: 0,
//                     y: 28,
//                     duration: 0.6,
//                     ease: 'power3.out',
//                     stagger: 0.04,
//                     scrollTrigger: {
//                         trigger: subRef.current,
//                         start: 'top 85%',
//                     },
//                 })


//                 const cards = containerRef.current.querySelectorAll('.gallery-card')
//                 gsap.set(cards, { opacity: 0, scale: 0.95, filter: 'blur(10px)' })




//                 ScrollTrigger.batch(cards, {
//                     start: 'top 85%',
                   
//                     onEnter: (batch) => {
//                         gsap.to(batch, {
//                             opacity: 1,
//                             scale: 1,
//                             filter: 'blur(0px)',
//                             stagger: 0.15,
//                             duration: 0.7,
//                             ease: 'power3.out',
//                         })
//                     },
//                 })
//             }, containerRef)

//             setTimeout(() => ScrollTrigger.refresh(), 500)
       

//           return () => {
     
//         ctx?.revert()
//         split?.revert()
//     }
//     }, [pathname])

    const renderCard = ({ src, originalIndex }) => (
        <div key={originalIndex} className="gallery-card mb-4 sm:mb-5" 
            >
            <div className="relative group overflow-hidden rounded-xl">
                <img
                    src={src}
                    alt={`Gallery image ${originalIndex + 1}`}
                    width={500}
                    height={500}
                    className="w-full rounded-xl transition-transform duration-300 group-hover:scale-105"
                
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 opacity-100 transition duration-300 flex items-end">
                    <span className="m-3 bg-white text-black px-3 py-1 text-xs sm:text-sm rounded-md opacity-0 opacity-100 transition">
                     
                    </span>
                </div>
            </div>
        </div>
    )

    return (
        <Section className="flex flex-col gap-8 " >
            <H2  color="brand" className="text-center ">Gallery</H2>

        



            <div className=" columns-1  sm:columns-2 md:columns-3  lg:columns-4 gap-4">
                {img.map((src, index) => (
                    renderCard({ src: src.imageUrl, originalIndex: index })
                ))}
            </div>
        </Section>
    )
}