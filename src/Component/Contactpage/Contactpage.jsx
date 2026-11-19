import React from 'react'
import { FaMapPin } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'
import { FiGlobe } from 'react-icons/fi'


const Contactpage = () => {
  return (
    <div className='min-h-screen bg-gradient-to-r from-orange-900 via-amber-900 to-gray-900 text-transparent'>
    <div className='max-w-7xl mx-auto '>
        <h2 className='bg-gradient-to-r from-amber-600 to-orange-300 bg-clip-text text-transparent text-5xl py-12 sm:py-16
        md:py-16 px-4 sm:px-6 lg:px-8 font[poppins] relative overflow-hidden text-center font-bold'>
            Connect With Us
            </h2>
   <div className='grid grid-cols-1 items-start gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8'>
    <div className='flex min-w-0 flex-col gap-4'>
        <div className='border-3 border-l-amber-600 p-6 bg-gradient-to-r from-amber-500/10 to-transparent
        rounded-2xl'>
          
            <div className='flex items-center mb-4 relative z-10 gap-4'>
                <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-300/40 bg-gradient-to-br from-amber-300/30 to-orange-700/40 text-xl text-amber-200 shadow-lg shadow-amber-950/40'>
                <FaMapPin aria-hidden='true' />
                </div>
                <h2 className='text-amber-100'>Our Headquator</h2>     
            </div>
          
            <div>
             <p className='text-amber-200 px-8'>Locknow, up</p>
            </div>
       </div>

       <div className='border-3 border-l-amber-600 p-6 bg-gradient-to-r from-amber-500/10 to-transparent
        rounded-2xl'>
          
            <div className='flex items-center mb-4 relative z-10 gap-4'>
                <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-300/40 bg-gradient-to-br from-green-300/30 to-green-700/40 text-xl text-amber-200 shadow-lg shadow-amber-950/40'>
                <FaPhone aria-hidden='true' />
                </div>
                <h2 className='text-amber-100'>Contact Number</h2>     
            </div>
          
            <div>
             <p className='text-amber-200 px-8'>+91 9098767874</p>
            </div>
       </div>


         <div className='border-3 border-l-amber-600 p-6 bg-gradient-to-r from-amber-500/10 to-transparent
        rounded-2xl'>
          
            <div className='flex items-center mb-4 relative z-10 gap-4'>
                <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-300/40 bg-gradient-to-br from-amber-300/30 to-orange-700/40 text-xl text-amber-200 shadow-lg shadow-amber-950/40'>
                <FiGlobe aria-hidden='true' />
                </div>
                <h2 className='text-amber-100'>Email Address</h2>     
            </div>
          
            <div>
             <p className='text-amber-200 px-8'>dhanu2000@gmail.com</p>
            </div>
       </div>
       </div>



            {/* //for another section */}
            <div className='min-w-0 rounded-2xl border-3 border-amber-600/70 bg-gradient-to-r from-amber-500/10 to-transparent p-6'>
            <form onSubmit={handleSubmit}>
              <div>
                 <label className='text-amber-100'>Name:</label>
                 <input type='text' placeholder='enter the name' className='w-full' />
               </div>
                <div>
                 <label className='text-amber-100'>Phone:</label>
                 <input type='text' placeholder='enter the name' className='w-full' />
               </div>
                <div>
                 <label className='text-amber-100'>Email:</label>
                 <input type='text' placeholder='enter the name' className='w-full' />
               </div>
                <div>
                 <label className='text-amber-100'>Address:</label>
                 <input type='text' placeholder='enter the name' className='w-full' />
               </div>
                <div>
                 <label className='text-amber-100'>Dish Name:</label>
                 <input type='text' placeholder='enter the name' className='w-full' />
               </div>
           </form>

            </div>
   </div>              
    </div>
    </div>
    
    
  )
}

export default Contactpage