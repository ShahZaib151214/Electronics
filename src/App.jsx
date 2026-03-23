
import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Lazy loaded pages
const HomePage = lazy(() => import('./Pages/HomePage/HomePage'))
const LoginPage = lazy(() => import('./Pages/LoginPage/LoginPage'))
const AboutPage = lazy(() => import('./Pages/AboutPage/AboutPage'))
const ContactPage = lazy(() => import('./Pages/ContactPage/ContactPage'))
const ElectronicsPage = lazy(() => import('./Pages/ElectronicsPage/ElectronicsPage'))

const App = () => {
  return (
    <BrowserRouter basename="/Electronics">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            </div>
          }>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/electronics' element={<ElectronicsPage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/contact' element={<ContactPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
