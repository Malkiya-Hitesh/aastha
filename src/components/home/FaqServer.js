import React from 'react'
import Faq from './Faq'
import { getFaqs } from '@/lib/queries'

 async  function FaqServer() { 
    const faqs  = await getFaqs()

    
  return (
    <Faq  faqs={faqs} /> 
  )
}

export default FaqServer
