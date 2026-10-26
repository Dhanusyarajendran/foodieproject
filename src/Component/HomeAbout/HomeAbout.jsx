import React from 'react'

const HomeAbout = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-[#0f0a0a] via-[#1a1212] to-[#2a1e1e] text-white py-10 sm:py-20
    relative overflow-hidden'>
   <div className='absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none'>
     <div />
     <div />
   </div>

    
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:gap-8 xl:gap-16 relative'>
      <div className='w-full order-1 lg:order-2 space-y-8 sm:space-y-12 relative'>
       <div className='space-y-4 sm:space-y-8 px-4 sm:px-0'>
         <h2 className='text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight'>
          <span className='font-cursive   bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text
         text-transparent'>

          </span>
         </h2>
       </div>
      </div>
    </div>

    </div>
  )
}

export default HomeAbout;