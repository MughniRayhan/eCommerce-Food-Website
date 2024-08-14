import React from 'react'
import Navbar from './Components/Navbar'
import MobNavbar from './Components/MobNavbar'
import Hero from './Components/Hero'
import Category from './Components/Category'
import FeatureSectionFruits from './Components/FeatureSectionFruits'
import FeatureSectionFastfood from './Components/FeatureSectionFastfood'
import Banner from './Components/Banner'
import BlogSection from './Components/BlogSection'
import NewsLetter from './Components/NewsLetter'

function App() {
  return (
    <main>
      <Navbar/>
      <MobNavbar/>
      <Hero/>
      <Category/>
      <FeatureSectionFruits/>
      <FeatureSectionFastfood/>
      <Banner/>
      <BlogSection/>
      <NewsLetter/>
    </main>
  )
}

export default App