import React from 'react'
import { useCartContrext } from '../context/CartContext'

function Cart({showCart}) {
    const {product} = useCartContrext();

  return (
    <div className='bg-accent w-full h-screen fixed left-0 top-0 z-20 ' 
    onClick={()=>showCart(false)}>

<div className='bg-white max-w-[400px] w-full h-full absolute   right-0 top-0 p-6' 
    onClick={()=>showCart(false)}>
        /</div>
        
    </div>
  )
}

export default Cart