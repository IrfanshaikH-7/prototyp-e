import { grain_1, grain_2, grain_3 } from '@/assets'
import React from 'react'

export default function Pricing() {
  const pricingData = [
    {
      name: "Basic Bundle",
      speed: "100 Mbps",
      channels: "100+ Channels",
      price: 49.99,
      icon: grain_1,
      color: "#6b46c1", 
    },
    {
      name: "Premium Bundle",
      speed: "500 Mbps",
      channels: "150+ Channels",
      price: 79.99,
      icon: grain_2,
      color: "#00cccc", 
      popular: true,
    },
    {
      name: "Ultimate Bundle",
      speed: "1 Gbps",
      channels: "200+ Channels",
      price: 109.99,
      icon: grain_3,
      color: "#5e7af2",
    },
  ]

  return (
    <div id='pricing' className="py-12 px-4 ">
      <div className='pb-8'>
      <h3 className='text-3xl font-extrabold text-center '>Affordable Plans for Every Budget</h3>
      <p className='text-lg font-semibold text-neutral-700 text-center '>Choose a plan that works for you and start enjoying fast internet and TV today!</p>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className="relative space-y-4 rounded-lg overflow-hidden  bg-white"
            >
              {/* Price Header */}
              <div 
                className=" h-20 relative text-white border rounded-full overflow-hidden"
              >
                <span className="text-3xl font-bold relative z-10 flex items-center justify-center h-full">{plan.name}</span>
                <img src={plan.icon} alt={plan.name} className="w-full h-full object-cover absolute top-0 left-0 z-0" />
              </div>

              {/* Features */}
              <div className="p-6 border rounded-3xl">
              <div className="text-center">
                <div className="flex items-center justify-center pb-4">
                <div className="flex items-start justify-center tracking-widest">
                <span className="text-5xl font-extrabold ">${plan.price.toString().split('.')[0]}</span>
                  <span className='text-lg mt-1 leading-tight font-extrabold tracking-widest '>{" "} .${plan.price.toString().split('.')[1]}</span>
               
                  </div>
                  <div className='h-10 w-0.5 mx-2 bg-black/70 rounded-full tracking-widest'/>
                  <div className='flex flex-col items-start justify-start font-bold'>
                    <span className='leading-tight tracking-widest'>PER</span>
                    <span className='leading-tight tracking-widest'>MONTH</span>
                    

                  </div>
                  </div>
                </div>
                <ul className="space-y-2 mt-2 font-bold">
                  <li className="flex items-center justify-center">
                    {plan.channels}
                  </li>

                  <li className="flex items-center justify-center">
                    Internet Speed: {plan.speed}
                  </li>
               
                </ul>
              </div>

              {/* Button */}
              <div className="p-6 pt-0">
                <button
                  style={{ backgroundColor: plan.color }}
                  className="w-full py-3 px-4 rounded-3xl text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  ORDER NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
