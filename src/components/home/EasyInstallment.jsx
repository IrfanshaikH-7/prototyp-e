import { grain_1 } from '@/assets'
import React from 'react'
import { Link } from 'react-router-dom'

export default function EasyInstallment() {
  return (
    <section className="max-w-7xl py-14 mx-auto">
      <h1 className="text-3xl font-extrabold text-center">Quick and Easy Installation</h1>
      <h2 className="text-lg font-semibold text-center text-neutral-600">Get connected fast with our seamless installation service.</h2>
        <section className='flex md:flex-row flex-col gap-5 md:gap-8 h-full mt-8 md:h-[375px] '>
        <div className=' w-full rounded-3xl overflow-hidden h-60 md:h-full  relative'>
            <img src={grain_1} alt="grain" className='h-full w-full object-cover' />
        </div>
        <div className="flex  flex-col max-w-full md:max-w-lg justify-center items-center w-full gap-5 lg:gap-8 ">
        <div className="border h-fit min-w-full rounded-3xl p-4 ">
            <span className='font-semibold text-lg'>Choose Your Plan</span>
            <p>Select the best internet and TV bundle for your needs.</p>
             
        </div>
        <div className="border h-fit min-w-full rounded-3xl p-4 ">
            <span className='font-semibold text-lg'>Schedule Installation</span> 
            <p>
                Book a convenient time for our technician to set up your service.
                </p>
                </div>
        <div className="border min-w-full h-fit rounded-3xl p-4 ">
            <span className='font-semibold text-lg'>Enjoy the Service</span>
            <p>Enjoy high-speed internet and your favorite TV channels without delays.</p> </div>
      </div>
        </section>
        <div className='mt-8 w-full max-w-full md:max-w-sm '>
      <Link to="/schedule" className="rounded-full transition-all duration-300 bg-bluvy hover:-rotate-2 text-white font-bold mt-8 p-4 w-full flex justify-center items-center">Schedule Your Installation</Link>                                                                                     

        </div>
    </section>
  )
}
