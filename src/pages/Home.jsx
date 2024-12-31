import React from 'react'
import ImageOverlay from '../components/shared/ImageOverlay'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from 'lucide-react'
import DashboardForm from '@/components/home/dashboardForm'

const mts = 'mt-52 min-[390px]:mt-[220px] min-[415px]:mt-[240px] min-[445px]:mt-[260px] min-[485px]:mt-[280px] min-[525px]:mt-[300px] min-[565px]:mt-[320px] min-[600px]:mt-[370px] min-[689px]:mt-[420px] md:mt-0'
const mts2 = '-mt-14 md:mt-0'
const Home = () => {
  return (
    <main  className="relative w-full pl-2 pr-2">
      {/* First Section - Hero */}
      <section className="relative h-fit md:h-[67.5vh]  w-full rounded-2xl overflow-hidden  mt-[100px]">
        {/* Image Overlay Container */}
        <div className="absolute inset-0 z-0 w-full aspect-video md:aspect-auto rounded-lg overflow-hidden">
          <ImageOverlay />
        </div>
        
        {/* Hero Content */}
        <div className={`relative z-10 h-full  flex items-end justify-start md:items-end pb-20 ${mts}`}>
          <div className="container md:px-4">
            <h1 className='sm:text-7xl text-5xl font-bold md:text-white text-neutral-900  max-w-[600px]'>
              <span className='text-neutral-500 md:text-green-500'>Complete <br className='min-[400px]:hidden' /></span>Trade Automation
            </h1>
            <p className='text-neutral-400 text-sm mr-9 md:mr-0 md:text-lg font-semibold ml-1 max-w-[500px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam possimus unde totam consequuntur, excepturi blanditiis repudiandae.</p>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section 
      className={`min-h-32 flex flex-col md:flex-row items-center justify-between h-full py-0 min-[362px]:py-4   md:px-4 px-0 mx-auto gap-12 md:gap-6 ${mts2}`}>
        <div className='flex flex-col gap-3 w-full max-w-[712px]'>
          <h2 className='text-3xl font-bold text-neutral-900 uppercase mr-4  min-[400px]:mr-0'>We can Connect Your Strategy<br className='min-[400px]:hidden' /> to Broker</h2>
          <div className='flex w-full md:flex-row flex-col gap-4 md:gap-0'>
            <div className='flex gap-1 w-full items-center peer-hover:ml-4 transition-all duration-300'>
              <div className='w-full h-1.5 bg-neutral-900 rounded-full ' />
             <p className='text-neutral-900 whitespace-nowrap w-fit max-w-full font-semibold'> Click To See How</p>
             <ArrowRightIcon className='w-6 h-6 font-semibold text-neutral-900 hidden md:block' />
             <div className='w-full h-1.5 bg-neutral-900 rounded-full md:hidden' />
            </div>
          <Button className='rounded-full peer md:ml-4 hover:-rotate-1 hover:scale-110 transition-all duration-300'>
            <span className=''>Get Started</span>
          </Button>
          </div>
      
        </div>
        <div className='flex md:text-5xl text-4xl justify-between gap-12 mt-8  w-fit'>
          <div className= 'flex flex-col items-center  font-bold text-neutral-900'>
            <span className=''>700+</span>
            <p className='text-xs text-neutral-500'>Clients</p>
            
          </div>
          <div className= 'flex flex-col items-center font-bold text-neutral-900'>
            <span className=''>300+</span>
            <p className='text-xs text-neutral-500'>Projects</p>
            
          </div>
          <div className= 'flex flex-col items-center font-bold text-neutral-900'>
            <span className=''>78+</span>
            <p className='text-xs text-neutral-500'>Countries</p>
            
          </div>
         </div>
      </section> 
      




      {/* Third Section */}
      <section className='h-full lg:h-screen w-full'>
        <DashboardForm />
      </section>
    </main>
  )
}

export default Home
