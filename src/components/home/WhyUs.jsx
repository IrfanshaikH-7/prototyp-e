import { cheap, easy, fast, no_hidden, support, why_us_0, why_us_1 } from '@/assets'
import { BellElectric, Headset, Zap } from 'lucide-react'
import React from 'react'

export default function WhyUs() {
  return (
    <>
       <section className='py-4  mt-16 flex flex-col lg:flex-row gap-6 lg:gap-8 h-fit w-full max-w-7xl mx-auto'>
        <div className='h-48 lg:h-[364px] shadow-md   lg:aspect-square border rounded-xl overflow-hidden'>
          <img src={why_us_0} alt='whyus_0' />
        </div>
        <div className='relative flex-1 p-4 sm:p-6 z-20  h-full sm:max-h-[440px] shadow-md border rounded-xl overflow-hidden'>
  <div className='relative hidden md:block opacity-60 xl:opacity-100 md:absolute h-[120%] aspect-square bg-blue-200 -right-[18%] top-1/2 -translate-y-1/2 z-0 rounded-full '>
    <div className='absolute h-[93%] aspect-square bg-blue-300 overflow-hidden  object-contain right-1/2 translate-x-1/2 top-1/2  -translate-y-1/2 z-10 rounded-full '>
    <img src={why_us_1} alt='whyus_1' className='h-full w-full' />
    </div>
  </div>
  <div className='relative z-50 space-y-2'>
    <h3 className='font-bold text-3xl md:text-4xl z-50'>Why We're the Best Choice for <br className='md:block hidden'/> Your Home</h3>
    <p className='text-neutral-800 font-medium max-w-md '>
      Experience the best with our fast, reliable internet offering download speeds up to X Mbps and seamless streaming for all your devices. Enjoy affordable cable TV packages featuring hundreds of channels, including HD, sports, and exclusive content.
    </p>
    <p className='text-neutral-800 font-medium max-w-md '>
    Our 24/7 customer support team is always ready to assist, and our transparent pricing ensures no hidden fees. With our easy setup and hassle-free installation, we make sure you're connected and entertained in no time.    </p>

  </div>
</div>


    </section>
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto'>
    {
      [
        {
          title: "Fast, Reliable Internet",
          icon:fast,
          description: "Download speeds up to X Mbps and seamless streaming for all your devices"
        },
        {
          title: "Clear, Affordable Cable TV",
          icon:cheap,

          description: "Enjoy hundreds of channels, including HD, sports, and exclusive content"
        },
        {
          title: "24/7 Customer Support",
          icon:support,

          description: "Our friendly customer service team is always here to help"
        },
        {
          title: "No Hidden Fees",
          icon:no_hidden,

          description: "Transparent pricing with no surprises"
        },
        {
          title: "Easy Setup",
          icon:easy,

          description: "Hassle-free installation and setup, at a time that works for you"
        }
      ].map((point, idx) => (
        <div key={idx} className='w-full h-auto border rounded-xl p-4'>
          <div className='flex gap-2 items-start'>
            <span className='bg-green-400 p-1 rounded-[8px]'>

            <img src={point.icon} alt={point.title} className='h-5 w-5 max-w-5 max-h-5' />
            </span>
          <h4 className='font-semibold text-lg mb-2'>{point.title}</h4>
          </div>
          <p className='text-neutral-600 text-sm'>{point.description}</p>
        </div>
      ))
    }
    </section>
    </>
 
  )
}
