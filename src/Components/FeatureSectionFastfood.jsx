import React from 'react'
import ProductCard from './ProductCard';

const data = [
  {id: 0, img: "/images/product_5.png", name: "Fresh Tomato",  price: "$500"},
  {id: 1, img: "/images/product_2.png", name: "Crunchy Crisps", price: "$300"},
  {id: 2, img: "/images/product_3.png", name: "Jewel Cranberries", price: "$200"},
  {id: 3, img: "/images/product_4.png", name: "Almond Organic",  price: "$100"},
];



function FeatureSectionFastfood() {
  return (
    <div className='container  pt-16'>
        <div className='lg:flex justify-between items-center '>
          <div>
          <h3 className='font-medium text-2xl'>Breakfast & Dairy  </h3>
          <p className='text-gray-600 mt-2'>Buy best quality breakfast online from big-basket shop</p>
          </div>
          <div className='space-x-4 mt-8 lg:mt-0'>
            <button className='feature_btn'>Fruits</button>
            <button className='text-gray-600 hover:text-accent'>Vegetables</button>
            <button className='text-gray-600 hover:text-accent'>Bread & Bakery</button>
          </div>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2'>
          <div >
                 <img className='w-full h-full object-cover'
                 src="/images/feature_2.png" alt="" />
          </div>

{data.map((product)=>
<ProductCard
   key={product.id} 
   img={product.img}
   name={product.name}
   price={product.price}
   />)}

        </div>
    </div>
  )
}

export default FeatureSectionFastfood