
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage/HomePage'
import LoginPage from './Pages/LoginPage/LoginPage'
import AboutPage from './Pages/AboutPage/AboutPage'
import ContactPage from './Pages/ContactPage/ContactPage'
import ElectronicsPage from './Pages/ElectronicsPage/ElectronicsPage'


const App=()=> {
  

  return (
    <>
    <BrowserRouter basename="/Electronics">
       <Routes>
           <Route path='/' element={<HomePage/>}/>
           <Route path='/login' element={<LoginPage/>}/>
           <Route path='/electronics' element={<ElectronicsPage/>}/>
           <Route path='/about' element={<AboutPage/>}/>
           <Route path='/contact' element={<ContactPage/>}/>
         
         </Routes>
    </BrowserRouter>
    
    
    </>
  )
}

export default App
