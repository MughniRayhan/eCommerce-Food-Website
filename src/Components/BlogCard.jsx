import React from 'react'

function BlogCard({img,title,date,comment}) {
  return (
    <div className='space-y-4'>

        <img 
        className='rounded-lg hover:scale-105 transition-transform h-[200px]' 
        src={img} 
        alt={title} />

        <div className='text-accent font-medium'>
       <span>{date} /</span>
        <span>{comment} Comments</span>
        </div>
        <h3 className='text-xl font-bold'>{title}</h3>
    </div>
   
  )
}

export default BlogCard