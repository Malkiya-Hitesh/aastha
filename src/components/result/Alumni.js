import React from 'react'
import { H2 } from '../ui'
import Astudent from './Astudent'

function Alumni({ sItem, eitem }) {

 const alumniData = [
  { id: 1, name: "Aastha Aastha ", post: " IIT kanpur", img: "/image/1.webp" },
  { id: 2, name: "Rohit", post: " ias officer", img: "/image/1.webp" },
  { id: 3, name: "Sneha", post: " IIT Delhi", img: "/image/1.webp" },
  { id: 4, name: "Vikram", post: " IIT Madras", img: "/image/1.webp" },
  { id: 5, name: "Priya", post: " IIT Bombay", img: "/image/1.webp" },
  { id: 6, name: "Arjun", post: " IIT Kanpur", img: "/image/1.webp" },
  { id: 7, name: "Neha", post: " IIT Indore", img: "/image/1.webp" },
  { id: 8, name: "Karan", post: " IIT Guwahati", img: "/image/1.webp" },
  { id: 9, name: "Anjali", post: " IIT Roorkee", img: "/image/1.webp" },
  { id: 10, name: "Riya", post: " IIT Mandi", img: "/image/1.webp" },
  {
    id: 11,
    name: "Siddharth",
    post: " IIT Hyderabad", img: "/image/1.webp"
  },
  { id: 12, name: "Amit", post: " IIT Varanasi", img: "/image/1.webp"
  },{
    id: 13,
    name: "Sanya",
    post: " IIT Gandhinagar", img: "/image/1.webp"
  },{
    id: 14,
    name: "Rahul",
    post: " IIT Patna", img: "/image/1.webp"
  },{
    id: 15,
    name: "Meera",
    post: " IIT Ropar", img: "/image/1.webp"
  },{
    id: 16,
    name: "Aditya",
    post: " IIT Bhubaneswar", img: "/image/1.webp"
  },{
    id: 17,
    name: "Pooja",
    post: " IIT Jodhpur", img: "/image/1.webp"
  },{
    id: 18,
    name: "Suresh",
    post: " IIT Palakkad", img: "/image/1.webp"
  },{
    id: 19, name: "Ananya", post: " IIT Tirupati", img: "/image/1.webp"
  },{
    id: 20,
    name: "Vishal",
    post: " IIT Goa", img: "/image/1.webp"
  }
 ]

  return (
   <div className=' flex flex-col gap-6'>
    <H2 className='text-center'>Alumni</H2>
 < div className=' flex overflow-x-auto  gap-8 px-4 py-2 flex-shrink-0 '>
        {alumniData.slice(sItem - 1, eitem).map((alumni) => (
            <div key={alumni.id} className='  flex-shrink-0'>
          <Astudent
            key={alumni.id}
            name={alumni.name}
            post={alumni.post}
            img={alumni.img}
          />
            </div>
        ))}
  </div>
   </div>
  )
}

export default Alumni
