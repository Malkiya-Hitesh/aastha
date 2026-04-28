'use client'

import Image from "next/image"
import { H3, P, Tag } from "../ui"

export default function Student({ name, pr, img, isTopper = false }) {
  return (
    <div className={`flex flex-col items-center rounded-xl p-4 gap-2 text-center border border-[var(--color-border-brand)] `}>

     

      <div className="relative">
        <Image
          src={img}
          width={isTopper ? 250 : 150}
          height={isTopper ? 250 : 150}
          alt={name}
          className={`rounded-full object-cover w-full h-full aspect-square
            `}
        />
      </div>

      <H3 > {name} </H3>

    <P size={isTopper ? "xl" : 'md'}> PR: {pr}% </P>

      {isTopper && (
        <Tag variant="accent" className="mt-2">
          Topper
        </Tag>
      )}
    </div>
  )
}