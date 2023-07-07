import React from 'react'
import "./Loading.css"

const Loading = () => {
  return (
    <div className='flex flex-col items-center space-y-2'>
        <div className='spinner'></div>
        <p className='text-[#18181b] text-lg font-semibold'>Loading....</p>
    </div>
  )
}

export default Loading