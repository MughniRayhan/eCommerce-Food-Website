import React from 'react'
import BlogCard from './BlogCard'

function BlogSection() {
    const data = [
        {
            id: 0,
            img: "/images/post_1.png",
            title: "Healthy Food Healthy Life",
            date: "Aug 14, 2024",
            comment: 8,
        },
        {
            id: 2,
            img: "/images/post_2.png",
            title: "Healthy Food Healthy Life",
            date: "Aug 15, 2024",
            comment: 1,
        },
        {
            id: 3,
            img: "/images/post_3.png",
            title: "Healthy Food Healthy Life",
            date: "Aug 16, 2024",
            comment: 9,
        },
    ]
  return (
    <div className='container pt-16'>
        <h2 className='font-bold text-2xl'>Latest News</h2>
        <p className="text-gray-500">Present Post in a best way to hilight interesting moments of your blog</p>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8'>
            {data.map((post)=>
            <BlogCard 
            key={post.id}
            img={post.img}
            title={post.title}
            date={post.date}
            comment={post.comment}
            />)}
        </div>
    </div>
  )
}

export default BlogSection