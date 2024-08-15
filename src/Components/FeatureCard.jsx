import React from 'react'

function FeatureCard({title,icon}) {
  return (
    <div className='flex gap-4 items-center'>
        <div className="grid place-items-center bg-gray-300 w-[50px] h-[50px] text-accentDark text-[24px] rounded-full">
            {icon}
        </div>
        <div>
            <h3 className='font-medium text-accent text-xl'>{title}</h3>
            <p className='text-gray-500 text-[14px]'>Lorem, ipsum dolor </p>
        </div>
    </div>
  )
}

export default FeatureCard