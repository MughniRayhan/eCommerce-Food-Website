import React from 'react'
import { useCartContext } from '../context/CartContext'

function CartCountBadge({size}) {

  const {products} = useCartContext()
  return (
    <div className={`absolute bg-red-600 text-white text-[14px]  ${size} -right-3 -top-1 rounded-full grid place-items-center`}>
      {products.length}
      </div>
  )
}

export default CartCountBadge 

