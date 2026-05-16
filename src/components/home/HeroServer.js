import React from 'react'
import HeroSection from './HeroSection'
import { getSocialMedia } from '@/lib/queries'

 async function HeroServer() {


    const socialLinks = await getSocialMedia()

    
  return (
  <HeroSection socialLinks={socialLinks} />
  )
}

export default HeroServer
