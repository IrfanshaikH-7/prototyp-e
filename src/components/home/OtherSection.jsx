import React, { useState } from 'react'
import { Button } from '../ui/button'
import StrategiesDialog from './StrategiesDialog'

export default function OtherSection() {
  const [isStrategiesOpen, setIsStrategiesOpen] = useState(false)

  return (
   <section className='flex gap-40 mt-24 w-full flex-col'>
    <div className='flex md:gap-40 gap-12 w-full justify-center items-center flex-col md:flex-row  mx-auto'>
        <Button  className=' py-5 px-10'>
           Webhook URL
        </Button>
        <Button className='scale-[2] md:ml-4 ml-0 py-5 px-10'>
            Alert Message
        </Button>
    </div>
    <div className='flex md:gap-40 gap-8 w-full justify-center flex-col md:flex-row items-center mx-auto'>
        <Button onClick={() => setIsStrategiesOpen(true)} className='py-5 px-10'>
           List of Strategies
        </Button>
        <Button className=' py-5 px-10'>
            Create New
        </Button>
    </div>
    <StrategiesDialog 
      isOpen={isStrategiesOpen} 
      close={() => setIsStrategiesOpen(false)} 
    />
   </section>
  )
}
