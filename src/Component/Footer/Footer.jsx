import React from 'react';
import { useState } from 'react';
import { BiChevronRight } from "react-icons/bi";
import { FaRegEnvelope } from "react-icons/fa6";
import { socialIcons } from '../../assets/Data';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
]

const Footer = () => {
    const[email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email submitted:', email);
        setEmail('');
    }
    

  return (
    <div className='mx-auto px-6 bg-gradient-to-br from-[#1a120b] via-[#2a1e14] to-[#3e2b1d]
    py-16 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
        <div className = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8'>
            {/* left column */}
            <div className='mx-auto px-4 space-y-6'>
                <h1 className='text-amber-400 font-bold text-4xl sm:text-5xl md:text-5xl mb-4 animate-pulse'>Foodie-Frenzy</h1>
                 <p className='text-amber-200/90 text-sm font-sacramento italic'>When culinary artistry meets doorstep convenience.<br />
                    savar hadarafted perfection.delivered with care
                 </p>
                 <div className='flex items-center gap-2 text-amber-400 text-sm mb-2'>
                    <FaRegEnvelope />
                    <span className='text-amber-400 font-bold'>Get Exclusive Offers</span>
                 </div>

                 <form className='w-full sm:w-[110%]' onSubmit={handleSubmit}>
                    <div className='relative flex items-center m-0 group'>
                    <input type='email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Enter your email...' className='bg-amber-900/10 text-amber-200 placeholder:text-amber-100/30 border border-amber-900/80 focus:outline-none focus:ring-2 focus:ring-amber-600 py-2 pl-4 pr-36 w-full rounded-xl'/>
                    <button type='submit' className='absolute right-1 top-1/2 -translate-y-1/2 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 hover:bg-amber-600 text-white font-bold py-1.5 px-4 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                        <span className='font-bold text-sm tracking-wide transition-transform duration-300 group-hover:translate-x-1'>Join Now</span>
                        <BiChevronRight className='text-xl transition-transform duration-300 group-hover:animate-spin flex-shrink-0 '/>
                        </button>
                       
                 </div> 
                 </form>
                
            </div>

            {/* middle column */}
            <div className='relative flex justify-center'>
                <div classame='space-y-4'>
                    <h3 className='text-amber-300 font-semibold border-l-4 border-amber-400 text-xl mb-4 pl-3 font-merriwether italic'>Navigation</h3>
            
                <ul>
                    {navLinks.map( (link, index) =>(
                        <li key={index}>
                            <a href={link.path} className='text-amber-200/80 hover:text-amber-400 transition-all duration-300 flex items-center hover:translate-x-1 mb-3'>
                            <BiChevronRight className='mr-2 text-amber-400 group-hover:animate-bounce' />
                            <span> {link.name}</span>
                            </a>
                        </li>   
                    ))}
 
                </ul>

               </div>
            </div>


            {/* right column */}
            <div className='relative flex justify-center'>
                <div className='space-y-4'>
                    <h3 className = 'text-amber-300 font-semibold border-l-4 border-amber-400 text-xl mb-4 pl-3 font-merriwether italic'>Social Connect</h3>
                    <div className='flex items-center gap-3'>
                        {socialIcons.map(({icon: Icon, link, label}, idx) =>(
                            <a key={idx} href={link} target='_blank' rel='noopener noreferrer' aria-label={label} title={label} className='flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/40 text-amber-300 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-400 hover:text-[#1a120b] hover:shadow-lg'>
                                <Icon aria-hidden='true' className='text-lg' />
                            </a>
                        ))}
                    </div>

                </div>
            </div>
        </div>
 

    </div>

    <div className='mx-auto mt-10 w-full max-w-7xl border-t border-amber-800 pt-8 text-center'>
        <p className='text-amber-400 text-sm'>&copy; 2026 Foodie-Frency.All rights reserved</p>
    </div>
    </div>
  )
}

export default Footer
