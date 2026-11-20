import { color } from 'framer-motion'
import React, { useState } from 'react'
import toast,{Toaster} from 'react-hot-toast'
import { FaMapPin } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'
import { FiGlobe } from 'react-icons/fi'


const Contactpage = () => {
    const [formData, setFormData] = useState({
        name:'',
        phone:'',
        email:'',
        address:'',
        dish:'',
        query:''
    })

    const handleChange = (event) => {
      const { name, value } = event.target
      setFormData((previousData) => ({
        ...previousData,
        [name]: value
      }))
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      console.log("form submited", formData)
      toast.success('your query has been submitted successfully!',{
        style: {
            border: '2px solid #f59e0b', padding:'16px', color:'#fff',
            background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)'
        },
        iconTheme: {primary:'#f59e0b', secondary:'#fff'}
      })
      setFormData({ name: '', phone: '', email: '', address: '', dish: '', query: ''})
    }


  return (
      <>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    <div className='min-h-screen bg-gradient-to-r from-orange-900 via-amber-900 to-gray-900 pb-12'>
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
                <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-300/90 bg-gradient-to-br from-amber-300/30 to-orange-700/40 text-xl text-amber-200 shadow-lg shadow-amber-950/40'>
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
            <div className='min-w-0 rounded-2xl border-2 border-amber-600/70 bg-gradient-to-r from-amber-500/10 to-transparent p-6'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
              <div>
                 <label htmlFor='name' className='text-amber-100'>Name:</label>
                 <input id='name' name='name' type='text' placeholder='enter the name' value={formData.name} className='w-full rounded-lg border border-amber-300/40 bg-gray-950/60 px-3 py-2 text-amber-50 placeholder:text-amber-200/50 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40'
                 onChange={handleChange} required />
               </div>
                <div>
                 <label htmlFor='phone' className='text-amber-100'>Phone:</label>
                 <input id='phone' name='phone' type='tel' placeholder='enter the phone number' value={formData.phone} className='w-full rounded-lg border border-amber-300/40 bg-gray-950/60 px-3 py-2 text-amber-50 placeholder:text-amber-200/50 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40'
                 onChange={handleChange} required/>
               </div>
                <div>
                 <label htmlFor='email' className='text-amber-100'>Email:</label>
                 <input id='email' name='email' type='email' placeholder='enter the email' value={formData.email} className='w-full rounded-lg border border-amber-300/40 bg-gray-950/60 px-3 py-2 text-amber-50 placeholder:text-amber-200/50 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40'
                 onChange={handleChange} required/>
               </div>
                <div>
                 <label htmlFor='address' className='text-amber-100'>Address:</label>
                 <input id='address' name='address' type='text' placeholder='enter the address' value={formData.address} className='w-full rounded-lg border border-amber-300/40 bg-gray-950/60 px-3 py-2 text-amber-50 placeholder:text-amber-200/50 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40'
                 onChange={handleChange} required/>
               </div>
                <div>
                 <label htmlFor='dish' className='text-amber-100'>Dish Name:</label>
                 <input id='dish' name='dish' type='text' placeholder='enter the dish name' value={formData.dish} className='w-full rounded-lg border border-amber-300/40 bg-gray-950/60 px-3 py-2 text-amber-50 placeholder:text-amber-200/50 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40'
                 onChange={handleChange} required/>
               </div>
                <div>
                 <label htmlFor='query' className='text-amber-100'>Your Query:</label>
                 <textarea id='query' name='query' placeholder='enter your query' value={formData.query} rows={4} className='w-full rounded-lg border border-amber-300/40 bg-gray-950/60 px-3 py-2 text-amber-50 placeholder:text-amber-200/50 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40'
                 onChange={handleChange} required/>
               </div>
               <button type='submit' className='rounded-lg bg-amber-700 px-5 py-2 text-amber-50 hover:bg-amber-600'>
                 Submit
               </button>
           </form>

            </div>
   </div>              
    </div>
    </div>
    </>
    
  )
}

export default Contactpage