import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavCompo from './components/navComponent'
import 'fontawesome-free-v6/css/all.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Hero from './components/Hero'
import CardContainer from './components/CardContainer'
import PopularCardContainer from './components/PopularCardContainer'
import Partnership from './components/Partnership'
import Feedback from './components/Feedback'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'

function App() {
  return (
    <>
    {/* rafce */}
      <NavCompo/>
      <CardContainer/>
      <PopularCardContainer/>
      <Partnership/>
      <Feedback/>
      <AboutUs/>
      <Footer/>
    </>
  )
}

export default App
