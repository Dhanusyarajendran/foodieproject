import React, { useState } from 'react'
import { useCart } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'
import { FaMinus, FaPlus, FaTimes, FaTrash } from 'react-icons/fa'
import './CartPage.css'

const CartPage = () => {
  const[selectedImage, setSelectedImage] = useState(null);
  const{cartItems, removeFromCart, cartTotal, updateQuantity} = useCart()
  
  return (
    <div className='min-h-screen px-4 sm:px-6 lg:px-8 py-16 overflow-hidden bg-gradient-to-br 
    from-[#1a120b] via-[#2a1e14] to-[#3e2b1d]'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 animate-fade-in-down'>
          <span className='font-cursive block text-5xl sm:text-6xl md:text-7xl mb-2 
          bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent'>Your Cart</span>
        </h1>
      </div>

      {cartItems.length === 0 ?(
         <div className='text-center animate-fade-in'>
           <p className='text-amber-100/80 text-xl mb-4'>
            Your Cart Is Empty
            </p> 
            <Link to='/menu' className='transition-all duration-300 text-amber-100 inline-flex 
            items-center gap-2 hover:gap-3 hover:bg-amber-800/50 bg-amber-900/40 px-6 py-2
            rounded-full font-cinzel text-sm uppercase'>
             Browser All Items
            </Link>
         </div>
         
      ):( 
        
        <div className='relative mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {cartItems.map((item)=>(
              <div key={item.id} className='group bg-amber-900/20 p-4 rounded-2xl border-4 border-dashed border-amber-500 backdrop-blur-sm flex flex-col items-center gap-4
              transition-all duration-300 hover:border-solid hover:shadow-xl hover:shadow-amber-900/10 transform hover:-translate-y-1 animate-fade-in'>
                <div className='rounded-full w-24 h-24 flex-shrink-0 cursor-pointer relative overflow-hidden
                transition-transform duration-300' onClick={()=>setSelectedImage(item.image)}>

                <img src={item.image} className='w-full h-full object-cover rounded-full'/>
                </div>
                <div className='flex flex-col items-center text-amber-50'>
                  <h3 className='font-cursive'>{item.name}</h3>
                  <p>₹{item.price}</p>
                </div>
              
                <div className='w-full text-amber-100 items-center flex flex-col'>
                    <div className='flex gap-4'>
                  <button onClick={()=>updateQuantity(item.id,item.quantity-1)} className='bg-amber-900/30 text-amber-50 p-2 rounded-2xl'>
                    <FaMinus />
                  </button>
                  {item.quantity}
                  <button onClick={()=>updateQuantity(item.id,item.quantity+1)} className='bg-amber-900/30 text-amber-50 p-2 rounded-2xl'>
                    <FaPlus />
                  </button>
                  </div>
                  
                  <div className='flex w-full items-center justify-around gap-12 mt-2 p-1'>
                    <button onClick={()=>removeFromCart(item.id)} className='flex shrink-0 items-center gap-2 rounded-3xl bg-amber-900/30 p-2 text-amber-200'>
                      <FaTrash />
                      remove
                    </button>
                    <div className='shrink-0 text-right text-amber-300'>
                    <p className='font-cursive'>₹{item.quantity * item.price}</p>
                    </div>
                  </div>
                  </div>
                  
                </div>
              
                
            ))}
          </div>
          
         

      )}



    <div className='border-t-2 border-amber-900/20 mt-10 mx-auto py-8 max-w-7xl'>
        <div className='flex justify-between'>
          
         <Link to='/menu' className='p-3 uppercase border border-amber-900/20 bg-amber-900/30 rounded-2xl text-amber-100 inline-flex
         hover:bg-amber-800/50 transition-all duration-500 gap-2 hover:gap-3 active:scale-95 pointer-cursor text-sm'>
          Continue Shoping
          </Link>
          
          <div className='flex items-center gap-5'>
            <p className='text-amber-100 font-cursive text-2xl'>Total:{cartTotal}</p>
         <Link to='/' className='p-3 uppercase border border-amber-900/20 bg-amber-900/30 rounded-2xl text-amber-100 inline-flex
         hover:bg-amber-800/50 transition-all duration-500 gap-2 hover:gap-3 active:scale-95 pointer-cursor text-sm'>
          Checkout Now
          </Link>
          </div>
          </div>
    </div>

   

    {selectedImage && (
      <div className='fixed inset-0 z-50 flex items-center justify-center bg-amber-900/40
      bg-opacity-75 backdrop-blur p-4 overflow-auto'
       onClick={()=>setSelectedImage(null)}>
      <div className='relative max-w-full max-h-full'>
      <img
        src={selectedImage}
        alt='Selected cart item'
        className='h-[min(30vw,20vh)] w-[min(40vw,30vh)] rounded-lg object-cover'
      />

      <button onClick={()=>setSelectedImage(null)} className='absolute top-1 right-1 bg-amber-900/80
      rounded-full p-2 text-black hover:bg-amber-600 duration-200 active:scale-90'> 
         <FaTimes className='w-6 h-6' />
      </button>
      </div>
      </div>
    )}

     </div>
  )
}

export default CartPage; 
