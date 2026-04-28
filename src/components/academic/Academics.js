import React from 'react'
import { H2, H3, P, Section, Tag } from '../ui'
import { FaMapMarkerAlt } from 'react-icons/fa'

function Academics() {
    return (
        <Section className=' flex flex-col gap-8'>
            <H2 className=' text-center ' >Academics</H2>
            <div className='flex flex-col gap-3 '>
                <div className='grid grid-cols-2 gap-5'>
                    <div
                        className="flex flex-col gap-2 rounded-lg border border-[var(--color-border-muted)] p-4">

                        <div className=' flex flex-col gap-3'>
                            <div className=' grid grid-cols-[auto_1fr]  bg-[#E8F0FC] gap-5'>
                                <div className=" p-5  rounded-[10px] flex items-center justify-center text-2xl flex-shrink-0" style={{ background: '#E8F0FC', color: '#1061D2' }} ><FaMapMarkerAlt className='text-4xl' /> </div>
                                <div>
                                    <H3 color='brand'   > Board</H3>
                                    <div className=' flex gap-3 '>
                                        <Tag variant='blue' >CBSE</Tag>
                                        <Tag variant='blue' >ICSE</Tag>
                                        <Tag variant='blue' >State</Tag>
                                    </div>
                                </div>

                            </div>
                            <div className=' grid grid-cols-[auto_1fr]  bg-[#E8F0FC]    gap-5'>
                                <div className=" p-5  rounded-[10px] flex items-center justify-center text-2xl flex-shrink-0" style={{ background: '#E8F0FC', color: '#1061D2' }} ><FaMapMarkerAlt className='text-4xl' /> </div>
                                <div>
                                    <H3 color='brand'   > Board</H3>
                                    <div className=' flex gap-3 '>
                                        <Tag variant='blue' >CBSE</Tag>
                                        <Tag variant='blue' >ICSE</Tag>
                                        <Tag variant='blue' >State</Tag>
                                    </div>
                                </div>

                            </div>
                            <div className=' grid grid-cols-[auto_1fr] bg-[#E8F0FC]   gap-5'>
                                <div className=" p-5  rounded-[10px] flex items-center justify-center text-2xl flex-shrink-0" style={{ background: '#E8F0FC', color: '#1061D2' }} ><FaMapMarkerAlt className='text-4xl' /> </div>
                                <div>
                                    <H3 color='brand'   > Board</H3>
                                    <div className=' flex gap-3 '>
                                        <Tag variant='blue' >CBSE</Tag>
                                        <Tag variant='blue' >ICSE</Tag>
                                        <Tag variant='blue' >State</Tag>
                                    </div>
                                </div>

                            </div>
                            <div className=' grid grid-cols-[auto_1fr]  bg-[#E8F0FC]    gap-5'>
                                <div className=" p-5  rounded-[10px] flex items-center justify-center text-2xl flex-shrink-0" style={{ background: '#E8F0FC', color: '#1061D2' }} ><FaMapMarkerAlt className='text-4xl' /> </div>
                                <div>
                                    <H3 color='brand'   > Board</H3>
                                    <div className=' flex gap-3 '>
                                        <Tag variant='blue' >CBSE</Tag>
                                        <Tag variant='blue' >ICSE</Tag>
                                        <Tag variant='blue' >State</Tag>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className=' flex flex-col gap-8 '>
                        <div className='flex flex-col gap-5   border border-[var(--color-border-muted)] rounded-lg p-4'>
                            <div className='grid grid-cols-[auto_1fr] gap-4  items-center   '>
                                <div className=" p-5  rounded-[10px] flex items-center justify-center text-2xl flex-shrink-0" style={{ background: '#E8F0FC', color: '#1061D2' }} ><FaMapMarkerAlt className='text-2xl' /> </div>
                                <H3 color='brand'   >  science </H3>

                            </div>
                          <P size='lg' >
                            The school follows the curriculum prescribed by the Council for the Indian School Certificate Examinations (CISCE). The curriculum is designed t 
                          </P>
                          <div className=' flex gap-3 '>
                            <Tag variant='blue' >biology</Tag>
                            <Tag variant='blue' >chemistry</Tag>
                            <Tag variant='blue' >physics</Tag>
                            <Tag variant='blue' >mathematics</Tag>
                            <Tag variant='blue' >english</Tag>
                          </div>
                        </div>
                        <div className='flex flex-col gap-5   border border-[var(--color-border-muted)] rounded-lg p-4'>
                            <div className='grid grid-cols-[auto_1fr] gap-4  items-center   '>
                                <div className=" p-5  rounded-[10px] flex items-center justify-center text-2xl flex-shrink-0" style={{ background: '#E8F0FC', color: '#1061D2' }} ><FaMapMarkerAlt className='text-2xl' /> </div>
                                <H3 color='brand'   >  commerce </H3>

                            </div>
                          <P size='lg' >
                            The school follows the curriculum prescribed by the Council for the Indian School Certificate Examinations (CISCE). The curriculum is designed t 
                          </P>
                          <div className=' flex gap-3 '>
                            <Tag variant='blue' >business studies</Tag>
                            <Tag variant='blue' >accountancy</Tag>
                            <Tag variant='blue' >economics</Tag>
                            <Tag variant='blue' >mathematics</Tag>
                            <Tag variant='blue' >english</Tag>
                          </div>
                        </div>
                    </div>
                </div>
                <div >
                         
                </div>
            </div>
        </Section>
    )
}

export default Academics
