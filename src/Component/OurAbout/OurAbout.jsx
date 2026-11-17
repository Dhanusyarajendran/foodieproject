import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { features, stats, teamMembers } from '../../assets/Data';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const socialIcons = {
    twitter: FaTwitter,
    instagram: FaInstagram,
    facebook: FaFacebook,
    linkedin: FaLinkedin,
};

const OurAbout = () => {

    const [hoveredStat, setHoveredStat] = useState(null);

  return (

    <div className='min-h-screen bg-gradient-to-br from-[#1a120b] via-[#3c2a21] to-[#1a120b] text-amber-50 overflow-hidden
    relative'>
        <div>
          <motion.section initial={{opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} 
          className='relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8'>
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


           
           <section className='relative mx-auto mb-20 max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='mx-auto grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3'>
                 {features.map((feat, index)=>{
                    const Icon = feat.icon; // Get the icon component from the feature object
                    return(
                  
                   <motion.div key={feat.id} initial={{opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{once:true, margin:"0px 0px -100px 0px"}} transition={{ duration: 0.5, delay: index * 0.2 }}
                    className='flex flex-col items-center text-center bg-[#3c2a21] rounded-2xl shadow-xl shadow-black/30 hover:shadow-amber-500/30 transition-all duration-300'>    
                    <div className='relative bg-[#3c2a21] backdrop-blur-lg w-full rounded-2xl overflow-hidden shadow-lg
                     border border-amber-600/30 hover:border-amber-500 transition-all duration-300'>
                        <div className='relative h-54 overflow-hidden'>
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

                            <div className='h-full p-6 rounded-2xl border border-amber-600/30 bg-[#3c2a21]/60 
                            shadow-xl shadow-black/30 transition-all duration-300 group-hover:border-amber-500/70 group-hover:shadow-amber-500/20' />
                        <motion.div className='absolute inset-0 rounded-xl'
                        animate={{
                            background: [
                                'linear-gradient(45deg, #3c2a21 0%, #1a120b 50%, #3c2a21 100%)',
                                'linear-gradient(45deg, #3c2a21 0%, #1a120b 80%, #3c2a21 100%)',
                                'linear-gradient(45deg, #3c2a21 0%, #1a120b 50%, #3c2a21 100%)'
                            ]
                        }} transition={{
                            duration: 6,
                            repeat: Infinity,
                        }}>
                            <div className='absolute inset-0 rounded-xl shadow-lg shadow-amber-900/20'/>


                            <div className='absolute inset-0 z-10 flex flex-col items-center justify-center text-center'>
                                <motion.div className='p-3 mb-4 rounded-full bg-amber-900/30 border border-amber-50/20'
                                whileHover={{ scale: 1.1, rotate: 10 }}>
                                <Icon className='h-9 w-9 text-amber-400' aria-hidden='true' />
                                </motion.div>

                                <div className='text-2xl font-bold mb-1 bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400 text-transparent'>
                                    {stat.number}
                                </div>

                                <motion.div className ='text-sm uppercase tracking-widest font-medium text-amber-100/80'
                                animate = {{
                                    letterSpacing : hoveredStat === index ? '0.15em' : '0.1em',
                                    textShadow : hoveredStat === index ? '0 0 8px rgba(245, 158, 11, 0.4)' : 'none',
                                    color : hoveredStat === index ? '#facc15' : '#fbbf24',
                                }}
                                >
                                    {stat.label}

                                </motion.div>
                                 
                            </div>

                        </motion.div>
                        
                        </motion.div>
                    </motion.div>
                  )
                }
                )}
                </div>
            </section>


             <section className='relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
                <div className='text-center'>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} 
                     className='text-4xl font-serif sm:text-5xl md:text-6xl font-bold text-center
                      mb-12 text-amber-100'>
                        Meet Our <span className='text-amber-500'>Culinary Artists</span>
                    </motion.h2>

                    <div className = 'grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
                        {teamMembers.map((team, index) =>(
                            <motion.div key={team.name} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "0px 0px -100px 0px" }} transition={{ delay:team.delay}}
                            className='relative group'>
                            <div className='relative h-full overflow-hidden rounded-2xl border-2 border-amber-500/70 bg-[#3c2a21] backdrop-blur-lg shadow-lg transition-all duration-300 hover:shadow-amber-500/30'>
                             {/*for image */}
                              <div className='relative h-64 sm:h-72 md:h-96 overflow-hidden'>
                                <motion.img src={team.teamimage} alt={team.name} className='block h-auto w-full object-contain'
                                initial={{scale: 1}} whileHover={{scale: 1.1}} transition={{duration: 0.5}} />
                             </div>

                             <div className='px-2 py-4 flex flex-col'>
                                <h3 className='text-amber-100 font-bold text-2xl'>{team.name}</h3>
                                <p className='text-amber-500 font-cursive'>{team.role}</p>
                                 <div className='py-4'>
                                <p className='font-cursive text-sm text-amber-100/60'>{team.bio}</p>
                             </div>
                             <motion.div className='flex gap-4 text-amber-500 justify-center' 
                             initial={{scale: 0}} whileInView={{scale: 1}}>
                                {Object.entries(team.social).map(([icons, url]) => {
                                    const Icon = socialIcons[icons];

                                    return (
                                        <a
                                            key={icons}
                                            href={url}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            aria-label={`${team.name} on ${icons}`}
                                            className='transition-colors hover:text-amber-300 text-center'
                                        >
                                            <Icon aria-hidden='true' className='text-xl' />
                                        </a>
                                    );
                                })}
                             </motion.div>
                             </div>
                            
                       
                            </div>
                            
                            </motion.div>
                            
                        ))}

                    </div>
                </div>
             </section>
        </div>
    </div>
  )
} 

export default OurAbout