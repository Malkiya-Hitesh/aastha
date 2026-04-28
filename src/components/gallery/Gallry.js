import { H2, Section, Tag } from "../ui";


function Gallery() {

     const categories = [
        { id: 1, name: "event" },
        { id: 2, name: "sports" },
        { id: 3, name: "culture" },
        { id: 4, name: "trip" },
        { id: 5, name: "other" },
      ];


 const images = [
    { id: 1, src: "/image/1.webp", categories: ['event'], alt: "Image 1" },
    { id: 2, src: "/image/2.webp", categories: ['sports'], alt: "Image 2" },
    { id: 3, src: "/image/3.webp", categories: ['culture'], alt: "Image 3" },
    { id: 4, src: "/image/4.webp", categories: ['trip'], alt: "Image 4" },
    { id: 5, src: "/image/5.webp", categories: ['other'], alt: "Image 5" },
    { id: 6, src: "/image/6.webp", categories: ['event'], alt: "Image 6" },
    { id: 7, src: "/image/7.webp", categories: ['event'], alt: "Image 7" },
    { id: 8, src: "/image/8.webp", categories: ['sports'], alt: "Image 8" },
    { id: 9, src: "/image/9.webp", categories: ['culture'], alt: "Image 9" },
    { id: 10, src: "/image/1.webp", categories: ['trip'], alt: "Image 10" },
    {
        id: 11,
        src: "/image/2.webp",
        categories: ['other'],
        alt: "Image 11"
    },{
        id: 12,
        src: "/image/3.webp",
        categories: ['event'],
        alt: "Image 12"
    },{
        id: 13,
        src: "/image/4.webp",
        categories: ['sports'],
        alt: "Image 13"
    },{
        id: 14,
        src: "/image/5.webp",
        categories: ['culture'],
        alt: "Image 14" 
    },
     { id: 15, src: "/image/6.webp", categories: ['event'], alt: "Image 15" },
    { id: 16, src: "/image/7.webp", categories: ['sports'], alt: "Image 16" },
    { id: 17, src: "/image/8.webp", categories: ['culture'], alt: "Image 17" },
    { id: 18, src: "/image/9.webp", categories: ['trip'], alt: "Image 18" },
    { id: 19, src: "/image/1.webp", categories: ['other'], alt: "Image 19" },
    { id: 20, src: "/image/2.webp", categories: ['event'], alt: "Image 20" },
    { id: 21, src: "/image/3.webp", categories: ['event'], alt: "Image 21" },
    { id: 22, src: "/image/4.webp", categories: ['sports'], alt: "Image 22" },
    { id: 23, src: "/image/5.webp", categories: ['culture'], alt: "Image 23" },
    { id: 24, src: "/image/6.webp", categories: ['trip'], alt: "Image 24" },
    {
        id: 25,
        src: "/image/7.webp",
        categories: ['other'],
        alt: "Image 25"
    },{
        id: 26,
        src: "/image/8.webp",
        categories: ['event'],
        alt: "Image 26"
    },{
        id: 27,
        src: "/image/9.webp",
        categories: ['sports'],
        alt: "Image 27"
    }
  ];

  return (
   <Section className=' flex flex-col gap-6'>
    <H2 className='text-center'>Gallery</H2>

    <div className='flex flex-col gap-8 '>
        <div  className=' flex gap-3 items-center justify-center  '>
             {categories.map((cat) => (
                <Tag key={cat.id} variant="blue" className=' cursor-pointer '>
                  {cat.name}
                </Tag>
             ))}
        </div>

        {/* Image grid */}
        <div className=' columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 '>
            {images.map((img) => (
                <div key={img.id} className='break-inside-avoid mb-4 '>
                    <img src={img.src} alt={img.alt} className='w-full h-auto object-cover rounded-lg' />
                </div>
            ))}
        </div>
    </div>
   </Section>
  )
}

export default Gallery
