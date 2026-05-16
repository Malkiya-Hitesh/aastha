import Main from '@/components/result/Main'
import { getResults } from '@/lib/queries'
import React from 'react'

async function page() {
   const results = await getResults()
  return (
   <Main results={results} />
  )
}

export default page
