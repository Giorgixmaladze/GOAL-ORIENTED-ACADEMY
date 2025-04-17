import { useEffect, useState } from 'react'
import Register from './components/Register'
import { Routes,Route, useNavigate } from 'react-router-dom'
import Login from './components/Login'
import { getLocal } from './utils/localstorage'
import AdminPanel from './components/AdminPanel'


function App() {
  const signed = getLocal("signed") ||  false
  const logged = getLocal("logged") || false
  const navigate = useNavigate()
  useEffect(() =>{
    if(logged && signed){
      navigate("/")
    }
    else if(!signed){
      navigate("/signup")
    }else{
      navigate("/login")
    }
  },[])
  return (
    <>
      <Routes>
        <Route path='/signup' element = {<Register />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/' element={<AdminPanel />}/>
      </Routes>
      
    </>
  )
}

export default App
