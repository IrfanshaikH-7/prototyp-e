import React from 'react'
import ImageOverlay from '../components/shared/ImageOverlay'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from 'lucide-react'
import DashboardForm from '@/components/home/DashboardForm'
import OtherSection from '@/components/home/OtherSection'
import WhyUs from '@/components/home/WhyUs'
import Services from '@/components/home/Services'
import PlansCTA from '@/components/home/PlansCTA'
import Testimonials from '@/components/home/Testimonials'
import FAQs from '@/components/home/FAQs'
import Pricing from '@/components/home/Pricing'
import EasyInstallment from '@/components/home/EasyInstallment'

const mts = 'mt-52 min-[390px]:mt-[220px] min-[415px]:mt-[240px] min-[445px]:mt-[260px] min-[485px]:mt-[280px] min-[525px]:mt-[300px] min-[565px]:mt-[320px] min-[600px]:mt-[370px] min-[689px]:mt-[420px] md:mt-0'
const mts2 = '-mt-14 md:mt-0'
const Home = () => {
  return (
    <main  className="relative w-full pl-2 pr-2 ">
      {/* First Section - Hero */}
      <section className="relative h-fit md:h-[67.5vh]  w-full rounded-2xl overflow-hidden  mt-[100px]">
        {/* Image Overlay Container */}
        <div className="absolute inset-0 z-0 w-full aspect-video md:aspect-auto rounded-[14px] overflow-hidden">
          <ImageOverlay />
        </div>
        
        {/* Hero Content */}
        <div className={`relative z-10 h-full  flex items-end justify-start md:items-end pb-20 ${mts}`}>
          <div className="container md:px-4">
            <h1 className='sm:text-7xl text-5xl font-bold md:text-white text-neutral-900  '>
              High-Speed Internet & Premium Cable TV at Your Fingertips
            </h1>
            <p className='text-neutral-400 text-sm mr-9 md:mr-0 md:text-lg font-semibold ml-1 max-w-4xl'>
            Experience reliable, fast internet and the best entertainment with our cable TV packages. Tailored for your needs, delivered with exceptional customer service.
            </p>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section 
      className={`min-h-32 flex flex-col md:flex-row items-center justify-between h-full py-0 min-[362px]:py-4   md:px-0 px-0 mx-auto gap-12 md:gap-6 ${mts2}`}>
        <div className='flex  flex-col gap-3 h-full w-full group text-white rounded-full overflow-hidden bg-blue-200 max-w-[712px]'>
        <div className=' bg-blue-300 text-3xl w-2/3 group-hover:w-full transition-all duration-300 rounded-full font-bold h-full '>
          <div className='bg-bluvy w-1/2 whitespace-nowrap rounded-full delay-100 group-hover:tracking-widest uppercase group-hover:w-full duration-300 h-full p-6'>

          Get Started Todays
          </div>
        </div>
        </div>

      </section> 

      <section >
      <WhyUs/>
      <Services/>
      <PlansCTA/>
      <Testimonials/>
      <FAQs/>
      <Pricing/>
      <EasyInstallment />
      </section>
      
    
      
    </main>
  )
}

export default Home
