import { sanityFetch } from "./sanityFetch"


// NOTICES
export const getNotices = () =>
  sanityFetch(`*[_type == "notice"] | order(date desc) {
    _id, title, description, date,
    "pdfUrl": file.asset->url
  }`)

// FACILITIES
export const getFacilities = () =>
  sanityFetch(`*[_type == "facility"] {
    _id, name, description,
    "imageUrl": image.asset->url,
    "alt": image.alt
  }`)

// ACADEMIC INFO
export const getAcademicInfo = () =>
  sanityFetch(`*[_type == "academicInfo"][0]`)

// ACHIEVEMENTS
export const getAchievements = () =>
  sanityFetch(`*[_type == "achievement"] | order(year desc) {
    _id, title, description, year,
    "imageUrl": img.asset->url,
    "alt": img.alt
  }`)

// GALLERY
export const getGalleryImages = () =>
  sanityFetch(`*[_type == "galleryImage"] {
    _id, categories,
    "imageUrl": src.asset->url,
    "alt": src.alt
  }`)

// FAQS
export const getFaqs = () =>
  sanityFetch(`*[_type == "faq"]`)

// CONTACT INFO
export const getContactInfo = () =>
  sanityFetch(`*[_type == "contactInfo"][0]`)

// LEADERS
export const getLeaders = () =>
  sanityFetch(`*[_type == "leader"] {
    _id, name, position, qualification, description,
    "imageUrl": img.asset->url,
    "alt": img.alt
  }`)

// MILESTONES
export const getMilestones = () =>
  sanityFetch(`*[_type == "milestone"] | order(year asc)`)

// TEACHERS
export const getTeachers = () =>
  sanityFetch(`*[_type == "teacher"] {
    _id, tname, subject, experience, qualification,
    "imageUrl": image.asset->url,
    "alt": image.alt
  }`)


  export const getSocialMedia = () =>
  sanityFetch(`*[_type == "socialMedia"][0]`)









  // Badha results — year wise group
export const getResults = () =>
  sanityFetch(`*[_type == "result"] | order(year desc, class asc) {
    _id, year, class,
    totalStudents, passStudents, passRate,
    distinction, firstClass,
    "posterUrl": poster.asset->url,
    "posterAlt": poster.alt,
    topStudents[] {
      rank, name, percentage,
      "photoUrl": photo.asset->url
    }
  }`)