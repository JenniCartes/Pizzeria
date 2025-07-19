import './App.css'
import Cart from './pages/Cart'
import Footer from './Components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './Components/Navbar'
import Pizza from './pages/Pizza'
import Register from './pages/Register'
import { Route, Routes } from 'react-router-dom'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'

function App() {
  
  return (
    <>
    <Navbar/>
    {/*RENDERIZAR*/}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/pizza/p001' element={<Pizza/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/404' element={<NotFound/>}/>

    </Routes>
    
    
    
    
    
    <Footer/>
      </>
      )
}

export default App
