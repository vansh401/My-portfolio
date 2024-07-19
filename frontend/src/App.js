import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Journey from './pages/Journey';
import Contact from './pages/Contact';
import Project from './pages/Project';


const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      <Skills/>
      <Journey/>
      <Contact/>
      
    </>
  )
}

export default App