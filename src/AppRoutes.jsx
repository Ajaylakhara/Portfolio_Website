import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'

import Home from './pages/Home'

// Route-based code splitting for sub-pages
const Projects = React.lazy(() => import('./pages/Projects'))
// const CaseStudy = React.lazy(() => import('./pages/CaseStudy'))
const About = React.lazy(() => import('./pages/About'))
const Contact = React.lazy(() => import('./pages/Contact'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

// Simple lightweight spinner fallback
const Loading = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#FF6321]"></div>
  </div>
)

const AppRoutes = ({ isDark }) => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Layout isDark={isDark} />}>
          <Route index element={<Home isDark={isDark} />} />
          <Route path="projects" element={<Projects isDark={isDark} />} />
          {/* <Route path="projects/:id" element={<CaseStudy isDark={isDark} />} /> */}
          <Route path="about" element={<About isDark={isDark} />} />
          <Route path="contact" element={<Contact isDark={isDark} />} />
          <Route path="*" element={<NotFound isDark={isDark} />} />
        </Route>
      </Routes>
    </React.Suspense>
  )
}

export default AppRoutes


