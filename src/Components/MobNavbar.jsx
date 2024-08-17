import React from 'react'
import { BsSearch } from "react-icons/bs";
import { LuShoppingCart, LuUser2 } from "react-icons/lu";
import { IoIosMenu } from "react-icons/io";
import CartCountBadge from './CartCountBadge';

function MobNavbar({setShowCart}) {
  return (
    <div className='sticky top-0  z-10 bg-white'>
    <div className='container p-8  lg:hidden'>
        <div className='flex justify-between items-center'>
           
          <h1 className='text-4xl font-medium'>BUY<span className='text-accent'>FOOD</span></h1>


<div className=" relative cursor-pointer text-[30px]" onClick={()=>setShowCart(true)}>
<LuShoppingCart />
<CartCountBadge size=" w-[25px] h-[25px]"/>
</div>



        </div>
    </div>
    </div>
  )
}

export default MobNavbar