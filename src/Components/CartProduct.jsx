import React from 'react'
import { RxCross1 } from "react-icons/rx";

function CartProduct({img,name,price,onRemove}) {
    
    

    const handleDelete=(name)=>{
       onRemove(name);
     }
  return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center gap-4'>
            <img 
            className='h-[100px]'
            src={img} alt={name} />
            <div>
            <h3 className='font-medium'>{name}</h3>
            <p className='text-gray-600'>1 x {price}</p>
            </div>
        </div>

        <RxCross1 className='hover:text-gray-500'
        onClick={()=>{
            handleDelete(name)
        }}/>
    </div>
  )
}

export default CartProduct