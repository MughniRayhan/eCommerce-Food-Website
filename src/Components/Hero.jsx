import React from 'react'
import { BsArrowRight } from "react-icons/bs";
function Hero() {
  return (
    <div className='container'>
        <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
            <div className='xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative'>
                 <img 
                 className='w-full h-[300px]  sm:h-full object-cover rounded-lg '
                 src='/images/hero_1.png'alt="" />

                 <div className='absolute max-w-[470px]  sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4  '>
                    <p className='text-2xl hidden lg:block'>100% Original Dry Fruits</p>
                    <h2 className='text-2xl sm:text-4xl lg:text-6xl font-bold'>Dried Fruits Best Healthy</h2>
                    <p className="text-xl  text-gray-500 pt-4 md:pt-8 ">Starting At</p>
                    <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-8">
                        $18.36
                    </div>
                    <div className='bg-accentDark hover:bg-accent text-white rounded-full
                     w-fit flex items-center gap-4 px-4 py-2 text-[14px] md:px-6 md:py-3 cursor-pointer'>
                     Shop Now <BsArrowRight />
                    </div>
                 </div>
        </div>


        <div className=' relative'>
                 <img 
                 className='w-full h-full object-cover rounded-lg'
                 src='/images/hero_2.png'alt="" />

                 
<div className='absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2 '>
                    <h2 className='text-2xl sm:text-3xl font-bold'> Best Yummy pizza</h2>
                    <p className="text-xl text-gray-500 pt-4  ">Starting At</p>
                    <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-8">
                        $25
                    </div>
                    <div className='bg-accent hover:bg-accentDark text-white rounded-full
                     w-fit flex items-center gap-4 px-4 py-2 text-[14px]  cursor-pointer'>
                     Shop Now <BsArrowRight />
                    </div>
                 </div>

            </div>
            <div className=' relative'>
                 <img 
                 className='w-full h-full object-cover rounded-lg'
                 src='/images/hero_3.png'alt="" />
<div className='absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2 '>
                    <h2 className='text-2xl sm:text-3xl font-bold'> Best Yummy Chips</h2>
                    <p className="text-xl text-gray-500 pt-4  ">Starting At</p>
                    <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-8">
                        $10
                    </div>
                    <div className='bg-accent hover:bg-accentDark text-white rounded-full
                     w-fit flex items-center gap-4 px-4 py-2 text-[14px]  cursor-pointer'>
                     Shop Now <BsArrowRight />
                    </div>
                 </div>

            </div>
            </div>
    </div>
    
  )
}

export default Hero