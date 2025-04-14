import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Blog from './components/Blog'


function App() {


  return (
    <>
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/about' element = {<About />} />
      <Route path='/projects' element = {<Projects />} />
      <Route path='/contact' element = {<Contact />}/>
      <Route path='/blog' element = {<Blog />} />
    </Routes>
      
    </>
  )
}

export default App
