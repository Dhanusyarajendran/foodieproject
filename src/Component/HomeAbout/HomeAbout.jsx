import React from 'react'
import { aboutfeature } from '../../assets/Data'
import { FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import aboutinhome from '../../assets/aboutinhome.png'

const HomeAbout = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-[#0f0a0a] via-[#1a1212] to-[#2a1e1e] text-white px-4 py-10 sm:px-8 sm:py-20
    relative overflow-hidden'>
   <div className='absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none'>
     <div className='absolute top-1/4 left-20 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl mix-blend-soft-light'/>
     <div className='absolute bottom-0 right-0 w-80 h-80 bg-orange-600/15 rounded-full blur-3xl mix-blend-soft-light'/>
   </div>

    
    <div className='max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:gap-8 xl:gap-16 relative'>
      <div className='w-full min-w-0 order-1 lg:order-2 lg:flex-1 space-y-8 sm:space-y-12 relative'>
       <div className='space-y-4 sm:space-y-8'>
         <h2 className='text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-tight'>
          <span className='bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent font-bold'>
             Epicurean Elegance
          </span>
          <br />
          <span className='inline-block mt-2 sm:mt-4 text-xl sm:text-3xl md:text-3xl '>
            Where Flavors Dance &amp; Memories Bloom
          </span>
         </h2>
         <p className='max-w-3xl border-l-4 border-white bg-amber-500/60 bg-gradient-to-r from-white/10 to-transparent
         py-2 pl-4 font-serif text-base italic leading-relaxed text-white sm:pl-6 sm:text-xl md:text-xl'>
           "In our kitchen, passion meets precision. we craft not just meals, but culinary journeys that linger on the palate and
            in the heart".

         </p>
       </div>

        
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4 px-4 sm:px-0'>
          {aboutfeature.map((item, i) =>(
            <div key={i} className='flex flex-col items-center justify-center gap-3 sm:gap-4 transition-transform
            duration-300 p-4 sm:p-5 hover:translate-x-2'>
              <div className={`p-3 sm:p-4 rounded-full bg-gradient-to-br ${item.color}
              transition-transform duration-300 group-hover:scale-110`}>
                <item.icon className='text-white text-2xl sm:text-3xl' />
              </div>
              
              <div className='text-center'>
                <h3 className='text-xl sm:text-2xl font-bold font-cursive'>{item.title}</h3>
                <p className='opacity-80 text-sm text-base'>{item.text}</p>
              </div>
              </div>
          ))}
        </div>

      
      <div className='flex flex-wrap gap-4 items-center mt-6 sm:mt-8 px-4 sm:px-0 '>
      <Link to = '/about' className='px-4 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-amber-500 
      to-orange-600 rounded-xl font-bold hover:scale-[1.02] transition-transform duration-300 
      flex items-center gap-2 sm:gap-3 shadow-xl hover:shadow-amber-500/20 group relative overflow-hidden'>
        <span />
        <FaInfoCircle />
        <span className='font-cursive text-lg sm:text-xl'>Unveil Our Legacy</span>
      </Link>
      </div>
    </div>


    <div className='w-full min-w-0 order-2 lg:order-1 md:max-w-md lg:max-w-none lg:flex-1 mt-12 mb-10 lg:mb-0 
    relative transform hover:scale-[1.01] transition-all duration-500'>
      <div className='relative rounded-[4rem] overflow-hidden border-4 border-amber-900/30 hover:border-amber-600/60
      duration-500 shadow-2xl shadow-black/50'>
        <div className='relative inset-0 bg-gradient-to-br from-amber-400/15 via-transparent 
        to-amber-600/10'/>
                <img src={aboutinhome} alt='Restaurant' className='w-full h-auto object-cover aspect-[3/4]
                transfrom-rotate-1 hover:rotate-0 transition-all duration-500 bg-transparent'/>
    </div>
  

</div>
</div>
    </div>
  )
}

export default HomeAbout;