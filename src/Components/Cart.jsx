import React, { useState } from 'react'
import { useCartContext } from '../context/CartContext'
import { RxCross1 } from "react-icons/rx";
import CartProduct from './CartProduct';

function Cart({setShowCart}) {
   let {products,setProducts} = useCartContext();

    
    
    //remove
    const removeProducts = (name) =>{
        const filterProducts = products.filter((x)=> x.name !== name)
      setProducts(filterProducts)
      
    }

  return (
    <div className='bg-[#0000007d] w-full h-screen fixed left-0 top-0 z-20 ' 
    onClick={()=>setShowCart(false)}>

<div className='bg-white max-w-[400px] w-full h-full absolute  right-0 top-0 p-6' 
    onClick={(e)=>e.stopPropagation()}>

<RxCross1
className='absolute right-0 top-0  m-6 text-[24px] cursor-pointer '
onClick={()=>setShowCart(false)}
/>

<h3 className='pt-6 text-lg font-medium text-gray-600 uppercase'>
  Your Cart
  </h3>
  <div>
    {products?.map((el)=>
    <CartProduct
    key={el.name}
    img={el.img}
    name={el.name} 
    price={el.price}
    onRemove = {removeProducts}
    />
    )}
  </div>

  <button className='bg-accent text-white text-center w-full rounded-3xl py-2 hover:bg-accentDark mt-4 mb-2'>
    View Cart
    </button>
    <button className='bg-accent text-white text-center w-full rounded-3xl py-2 hover:bg-accentDark '>
      CheckOut
    </button>
        </div>
        
    </div>
  )
}

export default Cart