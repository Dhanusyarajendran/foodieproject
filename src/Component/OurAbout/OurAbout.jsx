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

           
           <section className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='mx-auto grid max-w-6xl grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3'>
                 {features.map((feat, index)=>{
                    const Icon = feat.icon; // Get the icon component from the feature object
                    return(
                  
                   <motion.div key={feat.id} initial={{opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{once:true, margin:"0px 0px -100px 0px"}} transition={{ duration: 0.5, delay: index * 0.2 }}
                    className='flex flex-col items-center text-center bg-[#3c2a21] rounded-2xl shadow-xl shadow-black/30 hover:shadow-amber-500/30 transition-all duration-300'>    
                    <div className='relative bg-[#3c2a21] backdrop-blur-lg w-full rounded-2xl overflow-hidden shadow-lg
                     border border-amber-600/30 hover:border-amber-500 transition-all duration-300'>
                        <div className='relative h-60 overflow-hidden'>
                        <motion.img src={feat.img} alt={feat.title} initial={{scale:1}}
                        whileHover={{scale:1.05}} transition={{duration:0.4}} className='block h-80 w-full object-cover object-center'/>
                        <div className='absolute inset-0 bg-gradient-to-t from-[#1a120b] to-transparent opacity-70' />
                       </div>
                       
                       <div className='p-8 flex items-start flex-col text-center'>
                          <motion.div className='text-amber-500 i inline-block' whileHover={{rotate:15}}>
                           <Icon className='text-amber-500 w-12 h-12 inline-block'/>
                          </motion.div>
                         
                        <h3 className='text-xl font-semibold mt-4'>{feat.title}</h3>
                        <p className='mt-2 whitespace-nowrap text-sm text-amber-100'>{feat.text}</p>
                       </div>
                    </div>
                   </motion.div> 

                    )
        })}
            </div>
           </section>

            <section className='bg-gradient-to-br from-[#1a120b] to-[#3c2a21]/90 py-20'>
               <div className='mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8'>
                {stats.map((stat, index) => {
                  const Icon = stat.icon; // Get the icon component from the stat object
                  return(
                    <motion.div key={stat.label} initial={{opacity : 0, y : 50}}
                    className='relative group min-h-48'
                    whileInView={{opacity : 1, y : 0}} transition={{ delay : index * 0.2, type:'spring'}}
                    onHoverStart={() => setHoveredStat(index)}
                    onHoverEnd={() => setHoveredStat(null)}
                    animate ={{
                        scale : hoveredStat === index ? 1.05 : 1,
                        zIndex : hoveredStat === index ? 10 : 1,
                    }

                    }>
                        <motion.div className='absolute inset-0 rounded-2xl' 
                        animate={{
                            y : [0, -15, 0],
                            transition:{
                                duration: 4, repeat: Infinity, ease: "easeInOut",
                                delay : index * 0.3
                            }
                        }}>
                            <div className='h-full rounded-2xl border border-amber-600/30 bg-[#3c2a21]/60 shadow-xl shadow-black/30 transition-all duration-300 group-hover:border-amber-500/70 group-hover:shadow-amber-500/20' />
                        </motion.div>
                    </motion.div>
                  )
                }
                )}
                </div>
            </section>

        </div>
    </div>
  )
}

export default OurAbout