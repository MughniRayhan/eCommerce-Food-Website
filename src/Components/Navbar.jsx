import React from 'react'
import { BsSearch } from "react-icons/bs";
import { LuShoppingCart, LuUser2 } from "react-icons/lu";
import CartCountBadge from './CartCountBadge';

function Navbar({setShowCart}) {
  return (
    <div className='sticky top-0  z-10 bg-white'>
        <div className='container hidden lg:block'>
            <div className='flex justify-between items-center p-8'>
              <h1 className='text-4xl font-medium'>BUY<span className='text-accent'>FOOD</span></h1>

              <div className='relative w-full max-w-[500px]'>
                <input className='bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full'  type="text" placeholder='Search Product...' />
                <BsSearch className='absolute top-0 right-0 mt-4 mr-5 text-gray-500'/>
              </div>

<div className='flex gap-4'>
    <div className="icon_wrapper">
    <LuUser2 />
    </div>
    <div className="icon_wrapper relative cursor-pointer" onClick={()=>setShowCart(true)}>
    <LuShoppingCart />
    <CartCountBadge size=' w-[25px] h-[25px] '   />
    </div>
</div>
      </div>
        </div>
        </div>
  )
}

export default Navbar