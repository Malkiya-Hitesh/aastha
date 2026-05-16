
import { getGalleryImages } from "@/lib/queries"
import GalleryClient from "./GalleryClient"


async function Gallery() {
  const images = await getGalleryImages()
  return <GalleryClient images={images} />
}

export default Gallery