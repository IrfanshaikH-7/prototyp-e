import { section } from 'framer-motion/client'
import React from 'react'
import { logo } from '../../assets'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <footer className='p-2  shapedividers_com-6866'>


    <main className='border-t-2 mt-8 h-full md:h-60 py-8 flex-col md:flex-row flex items-start md:items-center justify-around px-4 '>
      {/* logo */}
     <div className='md:w-fit w-full flex items-center justify-center'>
      <h3 className='font-extrabold text-4xl'>SAVI</h3>
     </div>
        {/* quicklinks */}
     <article className='flex flex-col w-full md:w-fit items-start mt-8 md:mt-0 justify-start'>
      <h2 className='font-semibold text-lg'>Quicklinks</h2>
      <div className='flex justify-between w-full   md:gap-16 mt-1'>
      <ul className='space-y-1'>
        <li><Link to='/' className="hover:underline hover:text-black text-base">Home</Link></li>
        <li><Link to='/' className="hover:underline hover:text-black text-base">Pricing</Link></li>
        <li><Link to='/' className="hover:underline hover:text-black text-base">Support</Link></li>
      </ul>
      <ul className='space-y-1'>

        <li><Link to='/' className="hover:underline hover:text-black text-base">Why us</Link></li>
        <li><Link to='/' className="hover:underline hover:text-black text-base">installation</Link></li>
        <li><Link to='/' className="hover:underline hover:text-black text-base">FAQs</Link></li>
      </ul>
      </div>
     
     </article>
{/* contact */}
     <article className='flex flex-col items-start mt-8 md:mt-0 justify-start'>
      <h2 className='font-semibold text-lg'>Contact info</h2>
      <div className='flex flex-col gap-1 mt-1'>
        <p><span className='font-semibold'>Email:</span> xxx78xxx@gmail.com</p>
        <p><span className='font-semibold'>Phone:</span> x89xxx56xx</p>
        <p><span className='font-semibold'>Address:</span> antix,xx-8x-x9/x, india</p>
      </div>
     
     </article>
     

   
    </main>
    </footer>
  )
}
