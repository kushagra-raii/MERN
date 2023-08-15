import React, { useContext } from 'react'
import {AppContext} from "./../Context/AppContext"
// import Card from './Card'
import Spinner from './Spinner'
const Blogs = () => {
  const {loading, posts} = useContext(AppContext)
  return (
    <div className='w-11/12 max-w-[670px] h-4/5 py-8 flex flex-col gap-y-7 mt-[50px] mb-[40px]  justify-center items-center'>
      {
        loading ? (<Spinner />) : (
          posts.length === 0 ? (<div>
            <p>No post found</p>
          </div>) : (
            posts.map((post)=>(
              <div key={post.id}>
                <p className=' font-bold text-lg' >{post.title}</p>
                <p className='text-sm mt-[4px]'>By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span></p>
                <p className='text-sm mt-[4px]'>Posted on {post.date}</p>
                <p className='text-md mt-[14px]'>{post.content}</p>
                <div className='flex gap-x-3'>
                  {
                    post.tags.map((tag,index)=>{
                      return <span key={index} className="text-blue-700 underline font-bold text-xs mt-[5px]">{`#${tag}`}</span>
                    })
                  }
                </div>
              </div>
            ))
          )
        ) 
      }
    </div>
  )
}

export default Blogs