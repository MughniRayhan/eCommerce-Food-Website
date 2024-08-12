import React from 'react'
import { BsSearch } from "react-icons/bs";
import { LuShoppingCart, LuUser2 } from "react-icons/lu";
import { IoIosMenu } from "react-icons/io";
import CartCountBadge from './CartCountBadge';

function MobNavbar() {
  return (
    <div className='sticky top-0  z-10 bg-white'>
    <div className='container p-8  lg:hidden'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-6'>
            <IoIosMenu size={30}/>
            <BsSearch size={24}/>
            </div>

          <h1 className='text-4xl font-medium'>Logo</h1>
<div className='flex gap-4 text-[30px]'>

<LuUser2 />
<div className=" relative cursor-pointer">
<LuShoppingCart />
<CartCountBadge size=" w-[25px] h-[25px]"/>
</div>

</div>

        </div>
    </div>
    </div>
  )
}

export default MobNavbar