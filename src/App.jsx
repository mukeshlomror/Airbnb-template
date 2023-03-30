import React,{ useState } from 'react'
import Card from './components/Card'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default App
