import React, { useEffect } from 'react';
import { setLenisPaused } from './LenisScroll'; // adjust the path as needed
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { grain_1, grain_3, why_us_0 } from '@/assets';

const DiscountModal = ({ onClose }) => {
  useEffect(() => {
    // Pause Lenis scrolling when modal is open
    setLenisPaused(true);

    return () => {
      // Resume Lenis scrolling when modal closes
      setLenisPaused(false);
    };
  }, []);

  return (
    <Dialog open={true} onOpenChange={onClose} modal={true}>
      <DialogContent className='-mt-12 p-0 bg-transparent gap-2'
        onInteractOutside={(e) => {
          e.preventDefault();
        }}>
        <div className='h-full w-full relative z-40 '>
          <img src={grain_1} className='h-24 w-24 rounded-2xl absolute -top-[56px] -left-[65px]' />
          <img src={grain_1} className='h-14 w-14 rounded-2xl absolute -top-[80px] left-[40px]' />
        </div>
        <p className='absolute z-40 top-11 text-4xl right-3 min-[420px]:right-8 md:right-14 rotate-[270deg]'>🎉</p>
        <div className='p-0.5 relative '>
          <img src={grain_3} className='h-full z-10 object-cover w-full rounded-[25px] absolute top-0 left-0' />

          <div className='rounded-3xl bg-white border py-8 px-4 md:py-8 md:px-8 relative z-30'>
            <DialogHeader>
              <DialogTitle>
                <p className='-rotate-12 bg-bluvy rounded-full text-white p-2 w-fit text-sm'>Special Offer</p>
                <h3 className='text-2xl font-bold text-center'>Get 30% Off Your First Month!</h3>
              </DialogTitle>
              <DialogDescription className='text-center'>
                A limited-time discount on your services for new customers.
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>


        <div className='flex gap-4'>
          <a
            href="/signup"
            className="bg-bluvy relative flex-1 text-white px-4 py-2 rounded-full hover:bg-bluvy-dark text-center transition duration-300"
          >
            <p className='text-lg font-semibold relative z-20'>Sign Up Now</p>
            <img src={grain_3} className='h-full z-10 object-cover w-full rounded-2xl absolute top-0 left-0' />
          </a>

          <button className='bg-white flex-1 border text-black px-4 py-2 rounded-full hover:bg-bluvy-dark transition duration-300'>
            cancel
          </button>

        </div>

      </DialogContent>

    </Dialog>
  );
};

export default DiscountModal;
