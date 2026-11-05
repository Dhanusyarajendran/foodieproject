import React, { useState } from 'react'
import { useCart } from '../CartContext/CartContext';
import { dummyMenuData } from '../../assets/Data';
import { FaRupeeSign } from 'react-icons/fa';
import { HiMinus, HiPlus } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './ourHomeMenu.css';


const categories =[
    'Breakfast', 
    'Lunch', 
    'Dinner', 
    'Mexican',
     'Italian',
      'Desserts', 
      'Drinks'
    ];

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
                  <span className='font-dancingscript font-cursive block text-4xl md:text-6xl sm:text-5xl mb-2'>
                    Our Exquisite Menu</span>
            
                <span className='block text-xl sm:text-2xl md:text-3xl font-cinzel mt-4 
                text-amber-100/80'>
                    <p>A Symphony of Flavours</p>
                </span>
                 </h2>
            </div>


            <div className='flex flex-wrap gap-4 items-center justify-center mb-10'>
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


            <div className='mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4'>
                {displayItems.map((item) =>{
                    const quantity = getQuantity(item.id);
                    return(
                        <div key={item.id} className='relative rounded-2xl bg-amber-900/20 overflow-hidden 
                        border-amber-800/30 backdrop-blur-sm flex flex-col transition-all duration-500' >
                            <div className='relative h-48 sm:h-56 md:h-60 flex items-center justify-center
                            bg-black/10'>
                            <img
                                src={item.image}
                                alt={item.name}
                                className='h-full w-full object-cover transition-transform duration-300 opacity-80 hover:opacity-95'
                            />
                          </div>

                          <div className='px-4 mt-4 text-amber-100 py-5'>
                           <div className='relative mb-5'>
                                  <h3 className='text-2xl mb-2 font-cursive'>{item.name}</h3>
                                  <p className='text-sm mb-2'>{item.description}</p>
                            </div>

                            <div className='flex justify-between'>
                            <div className='inline-flex items-center gap-1 bg-amber-100/10 rounded-2xl backdrop-blur-sm px-3 py-1 shadow-lg text-amber-400 font-bold'>
                                  <FaRupeeSign aria-hidden='true' />
                                  <span>{item.price}</span>
                           </div>


                           <div className='flex items-center'>
                            { quantity > 0 ? (
                                <div className='flex items-center gap-5'>
                                    <button
                                        type='button'
                                        aria-label={`Remove one ${item.name}`}
                                        onClick={() => quantity > 1
                                            ? addToCart(item, quantity - 1)
                                            : removeFromCart(item.id)}
                                        className='rounded-3xl bg-amber-700 p-1 text-amber-100 transition-all duration-300 hover:bg-amber-600 active:scale-95'
                                    >
                                        <HiMinus />
                                    </button>
                                    <span className='font-semibold text-amber-100'>{quantity}</span>
                                    <button
                                        type='button'
                                        aria-label={`Add one ${item.name}`}
                                        onClick={() => addToCart(item, quantity + 1)}
                                        className='rounded-3xl bg-amber-700 p-1 text-amber-100 transition-all duration-300 hover:bg-amber-600 active:scale-95'
                                    >
                                        <HiPlus />
                                    </button>
                                </div>
                            ) : (
                                <button onClick = {() =>addToCart(item, 1)}className='flex items-center gap-2 border-0 border-transparent bg-amber-600/40 
                                rounded-4xl px-3 py-2 text-sm text-bl font-cinzel transition-transform duration-300 hover:scale-110 
                                hover:shadow-lg '>
                                    <span className='text-xs text-black font-bold'>ADD TO CART</span>
                                    </button>
                               
                            ) } 

                           </div>
                           </div>
                      </div>
                      </div> 

                    )
                }
                    
                )}


            </div>

            <div className='mx-auto mt-8 flex w-full max-w-7xl justify-center px-4'>
                    <Link to='/menu' className='bg-amber-600/40 py-3 px-5 rounded-xl uppercase 
                    text-sm font-bold hover:scale-105 duration-300 transform 
                    transform-all border-2 border-amber-800/30 text-amber-100 hover:text-amber-50 hover:bg-amber-800/40
                    hover:shadow-amber-900/20 font-cinzel'>
                    Explore More Menu
                    </Link>
            </div>

            
        </div>
  
  )
} 
export default OurHomeMenu; 