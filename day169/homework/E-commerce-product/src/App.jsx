import { useState } from 'react'
import ProductsList from './components/ProductsList'
import AuthProvider from './context/Context'
import { Routes,Route } from 'react-router-dom'
import Cart from './components/Cart'


function App() {


  return (
    <>
    <AuthProvider>
      <Routes>
        <Route path='/' element={<ProductsList/>}/>
        <Route path='/cart' element = {<Cart />} />

      </Routes>
      
    </AuthProvider>
    
    </>
  )
}

export default App
