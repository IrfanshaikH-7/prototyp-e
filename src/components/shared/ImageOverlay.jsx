'use client'  
import React, { useState, useEffect } from 'react';  
import { img_1, img_2, img_3 } from '../../assets';

import { motion } from 'framer-motion';  

const ImageOverlay = () => {  
  const [currentImage, setCurrentImage] = useState(0);  
  const images = [  
    img_1,  
    img_2,  
    img_3,  
  ];  

 
  useEffect(() => {  
    const intervalId = setInterval(() => {  
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);  
    }, 5000); 

    return () => clearInterval(intervalId);  
  }, [images.length]);  

  return (  
    <div className="absolute inset-0 w-full h-full">  
   
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
      
      {/* Images */}
      {images.map((image, index) => (  
        <motion.div
          key={index}  
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{  
            opacity: index === currentImage ? 1 : 0,
            transition: { duration: 3.5 }, 
          }}  
        >
          <img
            src={image}  
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}  
    </div>  
  );  
};  

export default ImageOverlay; 