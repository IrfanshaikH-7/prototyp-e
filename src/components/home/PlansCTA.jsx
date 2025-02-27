import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { grain_1, why_us_0 } from '@/assets'

const internetPlans = [
  {
    name: "Basic Internet",
    speed: "50",
    description: "Ideal for browsing and light streaming.",
  },
  {
    name: "Premium Internet",
    speed: "200",
    description: "Perfect for heavy streaming and gaming.",
  },
  {
    name: "Gigabit Internet",
    speed: "1000",
    description: "Ultra-fast speeds for houses with multiple users.",
  },
]

const tvPackages = [
  {
    name: "Essential TV Package",
    channels: "100+",
    description: "Including local networks and news.",
  },
  {
    name: "Entmt TV Package",
    channels: "150+",
    description: "With popular networks and sports channels.",
  },
  {
    name: "Premium TV Package",
    channels: "200+",
    description: "High Definition and premium networks.",
  },
]

export default function PlansCTA() {
  return (
    <div className="py-12">
      <h3 className='font-bold text-3xl text-center max-w-xl mx-auto mb-8'>
        Explore our flexible plans and choose the one that's perfect for you!
      </h3>

      <Tabs defaultValue="internet" className="max-w-7xl mx-auto">
        <TabsList className=" w-full  bg-slate-white flex gap-8 " >
          <TabsTrigger value="internet" className="bg-white text-black w-56 text-lg data-[state=active]:bg-bluvy px-4 py-3 data-[state=active]:font-semibold font-semibold data-[state=active]:text-white data-[state=active]:shadow-xl border-2 border-neutral-200 data-[state=active]:border-neutral-200 rounded-full transition-all duration-300">Internet Plans</TabsTrigger>
          <TabsTrigger value="tv" className="bg-white text-black w-56 text-lg data-[state=active]:bg-bluvy px-4 py-3 data-[state=active]:font-semibold font-semibold data-[state=active]:text-white data-[state=active]:shadow-xl border-2 border-neutral-200 data-[state=active]:border-neutral-200 rounded-full transition-all duration-300">Cable TV Packages</TabsTrigger>
        </TabsList>
        <TabsContent value="internet" className="mt-12" >
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {internetPlans.map((plan) => (
              <div key={plan.name} className="space-y-4 flex flex-col items-center group">
                <div className='border rounded-2xl p-6 text-center group-hover:shadow-xl min-w-full'>

                <h4 className="font-extrabold text-xl mb-2">{plan.name}</h4>
                <p className="text-base font-bold mb-2">Up to {plan.speed} Mbps</p>
                <p className="text-gray-600 mb-2">{plan.description}</p>
                <p className='text-bluvy cursor-pointer hover:underline transition-all duration-300'>More Details</p>
                </div>
                <button className="bg-bluvy relative overflow-hidden w-[80%] text-lg text-white px-6 py-2 rounded-full hover:bg-bluvy hover:-rotate-2 group-hover:shadow-xl transition-all duration-300">
                  <p className='z-20 relative'>Choose Package</p>
                  <img src={why_us_0} alt='grain' className='h-full z-10 w-full object-cover absolute top-0 left-0' />
                </button>
                
               
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="tv" className="mt-12" >
          <div className="grid md:grid-cols-3 gap-5 mt-6">
            {tvPackages.map((package_) => (
                <div key={package_.name} className="space-y-4 flex flex-col items-center group min-w-full">
                <div className='border rounded-2xl p-6 text-center group-hover:shadow-xl min-w-full'>

                <h4 className="font-extrabold text-xl mb-2">{package_.name}</h4>
                <p className="text-base font-semibold mb-2">{package_.channels} Channels</p>
                <p className="text-gray-600 mb-2">{package_.description}</p>
                <p className='text-bluvy cursor-pointer hover:underline transition-all duration-300'>More Details</p>

                
                </div>
                <button className="bg-bluvy relative overflow-hidden w-[80%] text-lg text-white px-6 py-2 rounded-full hover:bg-bluvy hover:-rotate-2 group-hover:shadow-xl transition-all duration-300">
                  <p className='z-20 relative'>Choose Package</p>
                  <img src={why_us_0} alt='grain' className='h-full z-10 w-full object-cover absolute top-0 left-0' />
                </button>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
