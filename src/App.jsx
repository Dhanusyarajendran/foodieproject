import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Menu from './Pages/Menu/Menu.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Cart from './Pages/Cart/Cart.jsx';
import SignUp from './Component/Sign Up/SignUp.jsx'
import Footer from './Component/Footer/Footer.jsx';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute.jsx';


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
              <Route path='/cart' element={
                <PrivateRoute>
                <Cart />
                </PrivateRoute>
                } />
      </Routes>
      <Footer />
    </>
  )
}
export default App