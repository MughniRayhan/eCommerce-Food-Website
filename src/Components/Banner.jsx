import React from 'react'

function Banner() {
  return (
    <div className='container pt-16'>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
           <div className='overflow-hidden rounded-lg h-[400px]'>
            <img className='hover:scale-105 transition-transform'
            src="/images/banner_1.png" alt="" />
           </div>
           <div className='overflow-hidden rounded-lg h-[400px]'>
            <img className='hover:scale-105 transition-transform'
            src="/images/banner_2.png" alt="" />
           </div>
        </div>
    </div>
  )
}

export default Banner