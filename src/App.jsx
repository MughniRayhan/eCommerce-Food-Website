import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import MobNavbar from './Components/MobNavbar'
import Hero from './Components/Hero'
import Category from './Components/Category'
import FeatureSectionFruits from './Components/FeatureSectionFruits'
import FeatureSectionFastfood from './Components/FeatureSectionFastfood'
import Banner from './Components/Banner'
import BlogSection from './Components/BlogSection'
import NewsLetter from './Components/NewsLetter'
import Features from './Components/Features'
import Footer from './Components/Footer'
import { CartContextProvider } from './context/CartContext'
import Cart from './Components/Cart'

function App() {
  const [showCart, setShowCart] = useState(false)
  return (

    <CartContextProvider>
      <main>
      <Navbar setShowCart={setShowCart}/>
      <MobNavbar setShowCart={setShowCart}/>
      <Hero/>
      <Category/>
      <FeatureSectionFruits/>
      <FeatureSectionFastfood/>
      <Banner/>
      <BlogSection/>
      <NewsLetter/>
      <Features/>
      <Footer/>
      {showCart && <Cart showCart={showCart} setShowCart={setShowCart}/>}
    </main>
      /</CartContextProvider>
  )
}

export default App