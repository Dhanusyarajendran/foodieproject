import React, { useState } from 'react'
import { motion, scale } from 'framer-motion';
import { features, stats, teamMembers } from '../../assets/Data';

const OurAbout = () => {

    const [hoveredStat, setHoveredStat] = useState(null);

  return (

    <div className='min-h-screen bg-gradient-to-br from-[#1a120b] via-[#3c2a21] to-[#1a120b] text-amber-50 overflow-hidden
    relative'>
        <div>
          <motion.section initial={{opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} 
          className='py-16 px-4 text-center relative'>
            <div className='max-w-4xl mx-auto'>
                <motion.h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 font-serif text-amber-50
                bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-600'>
                    Culinary Express
                </motion.h1>
                <motion.p initial={{opacity: 0 }} animate={{ opacity: 1 }}>
                    Grafting unforgettable dining experiences delivered to your doorstep.
                </motion.p>
            </div>
            </motion.section>

           
           <section className='relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
                 {features.map((feat, index)=>{
                    const Icon = feat.icon; // Get the icon component from the feature object
                    return(
                  
                   <motion.div key={feat.id} initial={{opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{once:true, margin:"0px 0px -100px 0px"}} transition={{ duration: 0.5, delay: index * 0.2 }}
                    className='flex flex-col items-center text-center bg-[#3c2a21] rounded-3xl shadow-lg hover:shadow-amber-500/30 transition-all duration-300'>    
                    <div className='relative bg-[#3c2a21] backdrop-blur-lg w-full rounded-3xl overflow-hidden shadow-lg
                     border border-amber-600/30 hover:border-amber-500 transition-all duration-300'>
                        <div className='relative h-74 overflow-hidden'>
                        <motion.img src={feat.img} alt={feat.title} initial={{scale:1}}
                        whileHover={{scale:1.05}} transition={{duration:0.4}} className='block h-80 w-full object-cover object-center'/>
                        <div className='absolute inset-0 bg-gradient-to-t from-[#1a120b] to-transparent opacity-70' />
                       </div>
                       
                       <div className='p-6'>
                          <motion.div className='text-amber-500 i inline-block' whileHover={{rotate:15}}>
                           <Icon className='text-amber-500 w-12 h-12 inline-block'/>
                          </motion.div>
                         
                        <h3 className='text-xl font-semibold mt-4'>{feat.title}</h3>
                        <p className='mt-2 text-sm text-amber-100'>{feat.text}</p>
                       </div>
                    </div>
                   </motion.div> 

                    )
        })}
            </div>
           </section>


        </div>
    </div>
  )
}

export default OurAbout