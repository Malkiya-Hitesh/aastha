
"use client"
import { useState } from "react"
import { H2, Section, Tag } from "../ui"


const categories = [
  { id: 0, name: "all" },
  { id: 1, name: "event" },
  { id: 2, name: "sports" },
  { id: 3, name: "culture" },
  { id: 4, name: "trip" },
  { id: 5, name: "other" },
]

function GalleryClient({ images }) {
  const [active, setActive] = useState("all")

  const filtered = active === "all"
    ? images
    : images.filter((img) =>
        img.categories?.map(c => c.toLowerCase()).includes(active.toLowerCase())
      )

  return (
    <Section className="flex flex-col gap-6">
      <H2 className="text-center">Gallery</H2>

      <div className="flex flex-col gap-8">

        {/* Filter Buttons */}
        <div className="flex gap-3 items-center justify-center flex-wrap">
          {categories.map((cat) => (
            <Tag
              key={cat.id}
              variant={active === cat.name ? "blue" : "gray"}
              className="cursor-pointer capitalize"
              onClick={() => setActive(cat.name)}
            >
              {cat.name}
            </Tag>
          ))}
        </div>

        {/* Image Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {filtered.map((img) => (
            <div key={img._id} className="relative break-inside-avoid mb-4 group">
              <img
                src={img.imageUrl}
                alt={img.alt}
                width={740}
                height={370}
                className="w-full h-auto object-cover rounded-lg"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end rounded-lg">
                <span className="m-3 bg-white text-black px-3 py-1 text-xs sm:text-sm rounded-md capitalize">
                  {img.categories?.join(", ")}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* No Images */}
        {filtered.length === 0 && (
          <p className="text-center text-gray-400">No images found!</p>
        )}

      </div>
    </Section>
  )
}

export default GalleryClient