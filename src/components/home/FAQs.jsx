import React, { useRef } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { why_us_0 } from '@/assets';

const faqData = [
  {
    question: "How fast is your internet?",
    answer: "We offer speeds ranging from 100 Mbps to 1 Gbps, depending on the plan you choose. Perfect for light browsing to heavy streaming and gaming."
  },
  {
    question: "Can I bundle internet and cable TV?",
    answer: "Yes! You can save more when you bundle both internet and cable TV into one plan."
  },
  {
    question: "Is there a contract?",
    answer: "We offer both contract and no-contract plans. Choose the option that works best for you."
  },
  {
    question: "Do you provide installation services?",
    answer: "Yes! Our team will handle everything from installation to setup, ensuring you're up and running quickly."
  }
];

export default function FAQs() {
  const triggerRefs = useRef([]);

  const handleTriggerClick = (index) => {
    if (triggerRefs.current[index]) {
      triggerRefs.current[index].click();
    }
  };

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <h1 className='font-extrabold text-3xl text-center'>Frequently Asked Questions</h1>
      <h2 className='font-semibold text-neutral-500 text-center pb-8'>Got Questions? We Have Answers!</h2> 
      <Accordion type="single"  collapsible >
        {faqData.map((faq, index) => ( 
          <AccordionItem key={index}   value={`item-${index + 1}`} onClick={() => handleTriggerClick(index)} className="rounded-2xl cursor-pointer border-2 p-4 my-2"> {/* Added unique value for each item */}
            <AccordionTrigger className='' ref={el => triggerRefs.current[index] = el}>{faq.question}</AccordionTrigger>
            <AccordionContent>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className='flex gap-1 font-bold pt-2 pb-4 items-end w-fit ml-auto'>
      Still Have Questions?

      <button className='px-8 py-2 text-white bg-bluvy rounded-full'>
            Connect
      </button>
      </div>
      <div className='h-40 w-full rounded-xl border overflow-hidden'>
            <img src={why_us_0} alt='img' className='object-cover h-full w-full'/>
      </div>
    </div>
  )
}
