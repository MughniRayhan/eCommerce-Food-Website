import React from 'react'
import { FaStar,FaRegStar } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { useCartContext } from '../context/CartContext';

function ProductCard({img,name,price}) {

const {addToCart} = useCartContext();

const addProductToCart = () =>{
addToCart({img,name,price});

}


  return (
    <div className='border border-gray-200 hover:border-x-gray-300 hover:scale-105  rounded-lg transition-transform relative'>
        <img className='h-[300px]'  src={img} alt={name} />
        <div className='space-y-2 relative p-4'>
            <div className='text-yellow-400 flex gap-[2px] text-[20px]'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
            </div>
            <h3 className='font-medium'>{name}</h3>
            <h3 className='font-medium text-2xl text-red-600'>{price}</h3>
<button 
className='absolute top-0 right-2 bg-accent hover:bg-accentDark text-white text-[28px] w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer'
onClick={addProductToCart}
>
    <AiOutlineShopping  />
    </button>

        </div>
            

        </div>
  )
}

export default ProductCard