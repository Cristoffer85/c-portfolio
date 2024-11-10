import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Backend from './Pages/Backend/Backend'
import Frontend from './Pages/Frontend/Frontend'
import GraphDesign from './Pages/GraphDesign/GraphDesign'
import Fullstack from './Pages/Fullstack/Fullstack'
import GameDev from './Pages/GameDev/GameDev'
import Friend from './Pages/Friend/Friend'
import Portfolio from './Pages/Portfolio/Portfolio'
import Resume from './Pages/Resume/Resume'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar/>
            <Hero/>
            <About/>
            <Services/>
            <MyWork/>
            <Contact/>
            <Footer/>
          </>
        } />
        <Route path="/Pages/Backend/Backend" element={<Backend />} />
        <Route path="/Pages/Frontend/Frontend" element={<Frontend />} />
        <Route path="/Pages/Fullstack/Fullstack" element={<Fullstack />} />
        <Route path="/Pages/GraphDesign/GraphDesign" element={<GraphDesign />} />
        <Route path="/Pages/GameDev/GameDev" element={<GameDev />} />
        <Route path="/Pages/Friend/Friend" element={<Friend />} />
        <Route path="/Pages/Portfolio/Portfolio" element={<Portfolio />} />
        <Route path="/Pages/Resume/Resume" element={<Resume />} />
      </Routes>
    </Router>
  )
}

export default App