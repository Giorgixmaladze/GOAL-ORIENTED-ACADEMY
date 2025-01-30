import { useState, useEffect } from 'react'
import Register from './components/RegistrationPage'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Login from './components/loginPage'
import { use } from 'react'
import Managment from './components/managment'



function App() {
  const users = JSON.parse(localStorage.getItem("users"))
  const curUser = JSON.parse(localStorage.getItem("CurrentUser"))
  const [user,setUser] = useState(users === undefined? users: [])
  const [curUs,setCurUs] = useState(curUser === undefined? curUser: [])

  useEffect(() =>{
    localStorage.setItem("Library", JSON.stringify(users))
  },[user])
  return(

        <Routes>
          <Route path='/' element={<Register us={[user,setUser]} curUs={[curUs,setCurUs]}/>} />
          <Route path='/management' element={<Managment/>}/>
          <Route path='/login' element={<Login curUs={[curUs,setCurUs]} />} />
        </Routes>
 
  )


}

export default App
