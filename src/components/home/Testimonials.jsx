import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { why_us_0, why_us_1 } from '@/assets';

const testimonials = [
  {
    name: "Himanshu Sharma",
    image: why_us_0,
    testimony:
      "We switched to this service after struggling with unreliable providers, and it’s been a game-changer. Our family is loving it!",
  },
  {
    name: "John D.",
    image: why_us_0,
    testimony:
      "I’ve never had the internet this fast, and the TV channels are great. The installation was quick, and the tech support is always responsive. Highly recommend it!",
  },
  {
    name: "Samantha L",
    image: why_us_0,
    testimony:
      "We switched to this service after struggling with unreliable providers, and it’s been a game-changer. Our family is loving it!",
  },

];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(3);

  // Update slides per view based on window width
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setActiveIndex((current) => 
          (current + 1) % (testimonials.length - (slidesPerView - 1))
        );
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPaused, slidesPerView]);

  return (
    <section className='mt-8 md:mt-16'>

   <h2 className='font-extrabold text-center text-3xl'>What Our Customers Are Saying</h2>

    <div 
      className="relative overflow-hidden w-full max-w-7xl mx-auto pt-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className="flex transition-transform duration-500"
        style={{ 
          transform: `translateX(-${activeIndex * (100 / slidesPerView)}%)`
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className={`flex-shrink-0 sm:px-2.5 ${
              slidesPerView === 1 ? 'w-full' : 
              slidesPerView === 2 ? 'w-1/2' : 
              'w-1/3'
            }`}
          >
            <div className="bg-white rounded-3xl p-4 relative  group-hover:shadow-md transition-all duration-300 border overflow-hidden">
              <Quote className="h-28 w-28 text-neutral-400 opacity-15 rotate-180 absolute -bottom-0 -right-0" />
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <h3 className="font-semibold">{testimonial.name}</h3>
              </div>
              <quote className="text-gray-600 text-sm italic">{`"${testimonial.testimony}"`}</quote>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {[...Array(testimonials.length - (slidesPerView - 1))].map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              activeIndex === index ? 'bg-blue-500 w-4' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
    </section>
  );
}
