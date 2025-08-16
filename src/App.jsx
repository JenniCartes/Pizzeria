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
import { CartProvider } from './context/CartContext'
import { PizzaProvider } from './context/PizzaContext'
import { UserProvider } from './context/UserContext'
import ProtectedRoute from './Components/ProtectedRoute'

function App() {
  
  return (

    <UserProvider>

    <CartProvider>
      <PizzaProvider>

    <Navbar/>
    {/*RENDERIZAR*/}
    <Routes>
      <Route path='/' element={<Home/>}/>
      {/* Evitar login/register si ya está logueado */}
      <Route path='/login' element={ <ProtectedRoute requiereAuth={false}>
       <Login/>
      </ProtectedRoute>
}
/>
      <Route path='/register' element={
        <ProtectedRoute requiereAuth={false}>
          <Register/>
          </ProtectedRoute>
          }/>

      <Route path='/cart' element={<Cart/>}/>
      <Route path='/pizza/:id' element={<Pizza/>}/>
      

      {/*Proteger profile*/}
      <Route path='/profile' element={<ProtectedRoute requiereAuth={true}>
        <Profile/>
        </ProtectedRoute>
    }/>

      <Route path='/404' element={<NotFound/>}/>

    </Routes>    
    <Footer/>
      </PizzaProvider>
      </CartProvider>
    </UserProvider>
      )
}

export default App
