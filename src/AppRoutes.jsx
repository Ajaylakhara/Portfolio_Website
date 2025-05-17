import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Home from './pages/Home'
import FAQs from './pages/FaQs'

const AppRoutes = ({isDark=(false)}) => {
  return (
    <div>
      <Routes>
      <Route path="/home" element={<Home isDark={isDark} />} />
        <Route path="/about" element={<About isDark={isDark} />} />
        <Route path="/projects" element={<Projects isDark={isDark} />} />
        <Route path="/contact" element={<Contact isDark={isDark} />} />
        <Route path='/FaQs' element={<FAQs isDark={isDark}/>}/>
        {/* <Route path="*" element={<NotFound isDark={isDark} />} /> */}
      </Routes>
    </div>
  )
}

export default AppRoutes

