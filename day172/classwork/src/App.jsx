import { useEffect, useState } from 'react'
import Register from './components/Register'
import { Routes,Route, useNavigate } from 'react-router-dom'
import Login from './components/Login'
import { getLocal } from './utils/localstorage'


function App() {
  const signed = getLocal("signed") ||  false
  const navigate = useNavigate()
  useEffect(() =>{
    if(!signed){
      navigate("/signup")
    }else{
      navigate("/")
    }
  },[])
  return (
    <>
      <Routes>
        <Route path='/signup' element = {<Register />} />
        <Route path='/' element = {<Login />} />
      </Routes>
      
    </>
  )
}

export default App
