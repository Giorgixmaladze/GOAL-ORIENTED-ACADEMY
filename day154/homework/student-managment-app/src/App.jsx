import { useState, useEffect } from 'react'
import Register from './components/RegistrationPage'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Login from './components/loginPage'
import { use } from 'react'
import Managment from './components/managment'



function App() {

  return(

        <Routes>
          <Route path='/' element={<Register/>} />
          <Route path='/management' element={<Managment/>}/>
          <Route path='/login' element={<Login />} />
        </Routes>
 
  )


}

export default App
