import React from 'react';
import About from './pages/About';
import Project from './pages/Project';
import Skill from './pages/Skills';
import Contact from './pages/Contact';
import Journey from './pages/Journey';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Activities from './pages/Activities';

const App = () => {
  return (
    <>
      <Navbar />
      <section id='Home'></section><Home />
      <section id='Projects' className='headline'></section><Project />
      <section id='Skills' className='headline'></section><Skill />
      <section id='Journey' className='headline'></section><Journey />
      <section id='Activities' className='headline'></section><Activities />
      <section id='Contact' className='headline'></section><Contact />
    </>
  );
}

export default App;