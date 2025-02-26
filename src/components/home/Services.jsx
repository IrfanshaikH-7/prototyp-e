import { broadband, grain_1, grain_2, grain_3, internet, satelite, why_us_0, why_us_1 } from '@/assets'
import React from 'react'
import { motion } from 'framer-motion'

export default function Services() {
  return (
    <section className='mt-16'>
        <div className='text-center max-w-3xl mx-auto pb-20'>

        <h4 className='font-extrabold text-4xl '>Internet & TV Plans to Fit Your Lifestyle</h4>
        <p className=''>Choose from a range of high-speed internet options and diverse cable TV packages, perfectly designed to meet all your entertainment and connectivity needs.</p>
        </div>
      <div className='relative'>
        <div className='h-0.5 w-full max-w-7xl mx-auto bg-black rounded-full' />
        <div className='absolute px-14 py-2 text-2xl text-white left-1/2 -translate-x-1/2 -top-6 -rotate-[10deg] shadow-md bg-black rounded-3xl '>
            Services
        </div>
      </div>

      <div className='flex flex-wrap justify-center gap-4 md:gap-8 max-w-7xl mx-auto mt-20'>
        {[
          {
            icon: broadband,
            grain: grain_1,
            title: "Broadband Services",
            description: "Get Unlimited, Reliable and High Speed Broadband Plans for your entire family"
          },
          {
            icon: satelite,
            grain: grain_2,
            title: "Digital Cable TV",
            description: "Redefine your Cable TV experience with uninterrupted and seamless service from us"
          },
          {
            icon: internet,
            grain: grain_3,
            title: "Internet Leased Line (ILL)",
            description: "Our high performance and dedicated Internet Leased Lines will offer you a complete connectivity solution"
          }
        ].map((service, idx) => (
          <div 
            key={idx} 
            className='flex-1 min-w-[300px] max-w-[380px]  border md:border-none p-8 bg-white rounded-2xl hover:shadow-md transition-all duration-300  group relative overflow-hidden'
      
          >
      
            <div 
          className={`w-16 h-16 mb-6 relative p-2 overflow-hidden rounded-[14px] z-10 group-hover:scale-110 transition-transform duration-300 `}
            >
              <img 
                src={service.icon} 
                alt={service.title}
                className='w-full h-full object-contain z-20 relative'
              />
              <img 
                src={service.grain}
                alt={service.title}
                className='w-full h-full opacity-70 object-contain absolute top-0 left-0 z-10'
              />
            </div>
            <h3 className='text-xl font-bold mb-3'>{service.title}</h3>
            <p className='text-gray-600 leading-relaxed'>{service.description}</p>
          </div>
        ))}
      </div>


        <section className='mt-8'>
        <h3 className='font-extrabold py-4 text-center max-w-lg mx-auto text-2xl'>Experience the Fiber Advantage with 5Ghz Dual Band Router</h3>
           <div className=' flex flex-wrap justify-center gap-2 md:gap-8 max-w-7xl mx-auto '>
       
      {[
          {
            icon: why_us_1,
            title: "Max Gaming",
            description: "Take your gaming to the next level with the 5GHz Dual Band Router that automatically switches to the best frequency for seamless speeds!"
          },
          {
            icon: why_us_1,
            title: "Max Binging",
            description: "With higher power, greater coverage, and better streaming on multiple devices, the 5GHz Dual Band Router is a flawless entertainer that ensures you binge seamlessly"
          },
          {
            icon:why_us_0,
            title: "Max WFH and Learning",
            description: "Supporting fiber technology, 5GHz Dual Band Router brings exceedingly high speeds so you can pursue advanced learning or work from home without any hassles"
          }
        ].map((service,idx) => (
          <div 
            key={idx} 
            className='flex-1 min-w-[300px] max-w-[380px] p-4 bg-white   transition-all duration-300  group relative overflow-hidden space-y-3'
      
          >
            <motion.div className='h-60 w-full bg-slate-200 rounded-2xl overflow-hidden'
             onMouseMove={(e) => {
              const { currentTarget, clientX, clientY } = e;
              const { left, top, width, height } = currentTarget.getBoundingClientRect();
              
              const x = clientX - left;
              const y = clientY - top;
              
              const rotateX = 20 * ((y - height / 2) / height);
              const rotateY = -20 * ((x - width / 2) / width);
              
              currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            }}
            style={{
              transition: 'transform 0.1s ease-out'
            }}
            >
              <img 
                src={service.icon} 
                alt={service.title} 
                className='h-full w-full object-cover'
               
              />
            </motion.div>
            <div className='group-hover:shadow-md px-4 pt-3 pb-3 rounded-2xl transition-all duration-300'>
              
            <h3 className='text-xl font-bold mb-3'>{service.title}</h3>
            <p className='text-gray-600 leading-relaxed'>{service.description}</p>
            </div>
          </div>
        ))

      }
        

      </div>
        </section>
     
    </section>
  )
}
