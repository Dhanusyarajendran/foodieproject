import React, { useState } from 'react'
import { useCart } from '../CartContext/CartContext';
import { dummyMenuData } from '../../assets/Data';
const categories = ['Breakfast', 'Lunch', 'Dinner', 'Mexican', 'Italian', 'Desserts', 'Drinks'];

const OurHomeMenu = () => {
  
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const { cartItems, addToCart, removeFromCart } = useCart();

    const getQuantity = id => (cartItems.find(i => i.id === id) ?.quantity || 0)

    const displayItems = (dummyMenuData[activeCategory] || []).slice(0, 4); //for category select
    

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#1a120b] via-[#2a1e14] to-[#3e2b1d] 
    py-16 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-12
                bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 text-transparent bg-clip-text text-center '>
                  <span className='font-dancingscript block text-4xl md:text-6xl sm:text-5xl mb-2'>
                    Our Exquisite Menu</span>
            
                <span className='block text-xl sm:text-2xl md:text-3xl font-cinzel mt-4 
                text-amber-100/80'>
                    <p>A Symphony of Flavours</p>
                </span>
                 </h2>
            </div>


            <div className='flex flex-wrap gap-4 items-center justify-center'>
               {categories.map((cat, index) =>(
                <button key ={index} onClick={() => setActiveCategory(cat)} 
                className={`py-2 px-4 sm:px-6 text-amber-100 border-2 transition-all duration-300 transform
                font-cinzel text-sm sm:text-lg tracking-widest backdrop-blur-sm rounded-4xl 
                ${activeCategory === cat ? 
                'rounded-2xl bg-gradient-to-r from-amber-900/80 to-amber-700/80 border-amber-800 scale-105 shadow-2xl'
                :'bg-amber-900/20 border-2 border-amber-800/30 text-amber-100/80 hover:bg-amber-800/40 hover:scale-95 rounded-2xl'}`}>
                    {cat}
                </button>
               ))}
            </div>


            <div>
                {displayItems.map((item ,i) =>{
                    const quantity = getQuantity(item.id);
                    return(
                        <div key={item.i} className='flex flex-row '>
                            <img src={item.image} className='rounded-lg' />

                        </div>
                    )
                }
                    
                )}
            </div>
        </div>
  
  )
}

export default OurHomeMenu
