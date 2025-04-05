import { useState } from 'react'
import Register from './components/Register'
import AuthProvider, { AuthContext } from './context/Context'
import { Route, Routes } from 'react-router-dom'
import SignIn from './components/SignIn'
import { useNavigate } from 'react-router-dom'
import { getLocal } from './utils/localStorage'
import AdminPanel from './components/AdminPanel'
import { useEffect } from 'react'
function App() {

  const navigate = useNavigate()
  const signedUp = getLocal("signed")
  const logged = getLocal("logged")
  useEffect(() => {
    if (signedUp && logged) {
      navigate('/')
    }else if(signedUp){
      navigate("/login")
    }else{
      navigate("/signup")
    }
  }, [])



  return (

    <AuthProvider>
      <Routes>
        <Route path='/signup' element={<Register />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/' element = {<AdminPanel />} />
      </Routes>
    </AuthProvider>
  )

}

export default App
