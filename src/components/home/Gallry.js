

import { getGalleryImages } from "@/lib/queries";
import { H2, Section } from "../ui"



export default async function Gallery() {
  
  const img = await getGalleryImages()



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