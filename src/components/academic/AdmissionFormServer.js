
import { getRules } from '@/lib/queries'
import AdmissionForm from './AdmissionFormSection'

  async function AdmissionFormServer() {

     const RULE = await getRules()
     
     
  return (
    <AdmissionForm RULES={RULE} />
  )
}

export default AdmissionFormServer
