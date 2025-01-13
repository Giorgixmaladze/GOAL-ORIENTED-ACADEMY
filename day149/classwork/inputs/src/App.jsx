import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

function App() {
  const [data,setData] = useState({})


  function handleChange({target}){
    const {name,value} = target
    setData(prev => ({
      ...prev,
      [name]: value
    }))
  }


  
  return(
    <>
      <form>
        <input type="text" onChange={handleChange} name='firstname' required placeholder='Enter your firstname' />
        <input type="text" onChange={handleChange}name='lastname' required placeholder='Enter your lastname' />
        <input type="email" onChange={handleChange} name='email' required placeholder='Enter your email' />
        <input type="password" onChange={handleChange} name='pass' required placeholder='Enter your password' />
      </form>


      <p>Firstname: {data.firstname} </p>
      <p>Lastname: {data.lastname} </p>
      <p>Email: {data.email} </p>
      <p>Password: {data.pass} </p>
    </>
  )
}

export default App
