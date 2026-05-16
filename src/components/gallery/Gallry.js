import { getGalleryImages } from "@/lib/queries";
import { H2, Section, Tag } from "../ui";


async function Gallery() {

    const categories = [
        { id: 1, name: "event" },
        { id: 2, name: "sports" },
        { id: 3, name: "culture" },
        { id: 4, name: "trip" },
        { id: 5, name: "other" },
    ];

const images = await getGalleryImages()

    return (
        <Section className=' flex flex-col gap-6'>
            <H2 className='text-center'>Gallery</H2>

            <div className='flex flex-col gap-8 '>
                <div className=' flex gap-3 items-center justify-center  flex-wrap '>
                    {categories.map((cat) => (
                        <Tag key={cat.id} variant="blue" className=' cursor-pointer '>
                            {cat.name}
                        </Tag>
                    ))}
                </div>

                {/* Image grid */}
                <div className=' columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 '>
                    {images.map((img) => (
                        <div key={img._id} className=' relative break-inside-avoid mb-4 '>
                            <img src={img.imageUrl} alt={img.alt} className='w-full h-auto object-cover rounded-lg' />
                             <div className="absolute inset-0 bg-black/40 opacity-0 opacity-100 transition duration-300 flex items-end">
                    <span className="m-3 bg-white text-black px-3 py-1 text-xs sm:text-sm rounded-md opacity-0 opacity-100 transition">
                     
                    </span>
                </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default Gallery
