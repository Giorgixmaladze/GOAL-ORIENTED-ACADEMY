import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Registration from './components/Registration'
import Login from './components/Login'
import Verification from './components/Verification'
import Main from './components/Main'
import { getLocal } from './utils/localStorage'


function App() {
  const curUser = getLocal("curUser") ||[]
  const logged = getLocal("logged") || false
  const signed = getLocal("signed") || false
  const navigate = useNavigate()
  useEffect(() =>{
    if(curUser.isVerified && logged && signed){
      navigate("/")
    }else if(signed){
      navigate(`/verification/${curUser[0].email}`)
    }else if(signed && curUser.isVerified){
      navigate("/login")
    }else{
      navigate("/signup")
    }
  },[])
  return (
    <>
      <Routes>
        <Route path='/signup' element = {<Registration />}/>
        <Route path='/login' element = {<Login />} />
        <Route path ="/verification/:email" element = {<Verification />} />
        <Route path='/' element = {<Main />} />
      </Routes>
    </>
  )
}

export default App
