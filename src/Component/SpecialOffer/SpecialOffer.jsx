import React, { useState } from 'react';
import{cardData, additionalData} from '../../assets/Data'
import { useCart } from '../CartContext/CartContext';
import { FaFire, FaHeart, FaStar } from 'react-icons/fa';
import { HiMinus, HiPlus } from "react-icons/hi";
import FloatingParticle from '../FloatingParticle/FloatingParticle';


const SpecialOffer = () => {
    const[showAll, setShowAll] = useState(false);
    const initialData = [...cardData, ...additionalData];
    const {addToCart, updateQuantity,  removeFromCart, cartItems } = useCart();

  return (
    <div className='bg-gradient-to-b from-[#1a1212] to-[#2a1e1e] text-white py-14 px-4 font-[poppins]'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-14'>
            <h1 className='text-5xl font-bold mb-4 transform transition-all bg-gradient-to-r from-amber-400 to-red-500
             bg-clip-text text-transparent font-[playfair_Display] italic '>
                Today's <span className='text-stroke-gold'>Special </span> Offers
            </h1>
            <p className='text-lg text-gray-300 max-w-3xl mx-auto tracking-wide leading-relaxed'>savor the extraordinary with out culinary masterpieces crafted to perfection</p>
        </div>



        {/* Product card */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
         {(showAll ? initialData: initialData.slice(0,4)).map((item, index) =>{
            const cartItem = cartItems.find(ci=> ci.id === item.id);
            const quantity = cartItem ? cartItem.quantity: 0;

           return(
           <div key={`${item.id}-${index}`} className='relative group bg-[#4b3b3b] rounded-3xl overflow-hidden shadow-2xl 
           transform hover:-translate-y-4 transition-all duration-500 hover:shadow-red-900/40 border-2 border-transparent
            hover:border-amber-500/20 before:absolute before:inset-0 hover:before:opacity-20' >

            <div className='relative h-72 overflow-hidden'>
             <img src={item.image} alt={item.title} className='w-full object-cover h-full brightness-90 group-hover:brightness-110
             transition-all duration-500'/>
                <div className='absolute bottom-4 left-4 right-4 flex justify-between items-center bg-black/40 
                backdrop-blur-sm px-4 py-2 rounded-full'>
                    <span className='flex items-center gap-2 text-amber-400'>
                        <FaStar className='text-xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]'/>
                        <span className='font-bold'>{item.rating}</span>
                    </span>
                    <span className='flex items-center gap-2 text-red-600'>
                        <FaHeart className='text-xl animate-heartbeat'/>
                        <span>{item.hearts}</span>
                    </span>
                </div>     
           
            </div>

            <div className='py-5 px-3 relative z-10'>
              <h3 className='text-xl font-bold mb-2 bg-gradient-to-br from-amber-300 to-amber-500 bg-clip-text 
              text-transparent font-[playfair_Display] italic '>{item.title}</h3>
              <p className='text-sm text-gray-300 leading-relaxed tracking-wide mb-4 truncate'>{item.description}</p>

              <div className='flex items-center justify-between'>
                <span className='text-amber-400 font-bold text-xl'>
                  {item.price != null ? `₹${item.price}` : 'Price unavailable'}
                </span>
              

                { cartItem ? (
                 <div className='flex gap-5'>
                   <button onClick={() =>{
                     quantity > 1 ? updateQuantity (item.id, quantity-1): removeFromCart(item.id) 
                    }} className='relative bg-amber-700 hover:bg-amber-600 transition-all duration-300 text-amber-100 
                    rounded-3xl border-0 border-transparent p-1 active:scale-95'>
                    <HiMinus />
                   </button>
                   <span>{quantity}</span>
                   <button onClick={() =>{
                    updateQuantity(item.id, quantity+1)
                   }} className='relative bg-amber-700  hover:bg-amber-600 transition-all duration-300 text-amber-100 
                   rounded-3xl border-0 border-transparent p-1 active:scale-95'>

                    <HiPlus />
                   </button>
                 </div>
                ):(
                    <button
                      onClick={() => addToCart({ ...item, name: item.title }, 1)}
                      disabled={typeof item.price !== 'number'}
                      className='flex items-center justify-center gap-2 rounded-lg 
                      bg-gradient-to-br from-red-500 to-amber-600 hover:from-red-400 to-amber-600 px-4 py-2 
                      font-bold text-amber-100 transition-colors disabled:cursor-not-allowed
                       disabled:bg-gray-500'
                    >
                    <HiPlus />
                    <span>Add</span>
                    </button>
                )}
                
            </div>
 </div>

            <div>
                <div>
                    <FloatingParticle />
                </div>

            </div>
           </div>
          
   )

         }) }
        </div>

    {/* for show more options */}
    <div className='relative mt-8 flex items-center justify-center'>
        <button onClick={() => setShowAll(!showAll)}>
        <div className='relative flex items-center bg-gradient-to-r from-red-500 to-amber-600 hover:from-red-400 to-amber-600
        py-2 px-5 border-0 border-transparent cursor-pointer rounded-lg shadow gap-2 font-bold text-lg inset-0 hover:scale-[1.05] duration-300'>
            <FaFire />
            <span>{showAll ? 'Show Less' : 'Show More'}</span>
        </div>
        
        </button>
    </div>

      </div>
    </div>
  )
}

export default SpecialOffer