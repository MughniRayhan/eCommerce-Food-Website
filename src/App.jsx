import React from 'react'
import Navbar from './Components/Navbar'
import MobNavbar from './Components/MobNavbar'
import Hero from './Components/Hero'
import Category from './Components/Category'
import FeatureSectionFruits from './Components/FeatureSectionFruits'

function App() {
  return (
    <main>
      <Navbar/>
      <MobNavbar/>
      <Hero/>
      <Category/>
      <FeatureSectionFruits/>
    </main>
  )
}

export default App