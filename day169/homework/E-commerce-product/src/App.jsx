import { useState } from 'react'
import ProductsList from './components/ProductsList'
import AuthProvider from './context/Context'


function App() {


  return (
    <>
    <AuthProvider>
      <ProductsList/>
    </AuthProvider>
    
    </>
  )
}

export default App
