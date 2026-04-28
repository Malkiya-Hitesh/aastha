'use client'

import Image from "next/image"
import {  H3, P, Tag } from "../ui"

export default function Astudent({  key,  name , post , img }) {
  return (
    <div key={key} className={` flex flex-col items-center rounded-xl p-4 gap-2 text-center border border-[var(--color-border-brand)] `}>

     

      <div className="relative">
        <Image
          src={img}
          width={193}
          height= {193}
          alt={name}
          className={`rounded-full object-cover w-full h-full aspect-square `}
        />
      </div>

      <H3 > {name} </H3>
 
    <Tag  variant="blue" >  {post} </Tag>

    </div>
  )
}