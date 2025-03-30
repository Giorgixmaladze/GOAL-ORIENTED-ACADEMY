import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './components/Child'
export const AuthContext = createContext()
function App() {

  const info ={
    email:"xmaladzegiorgi2022@gmail.com",
    pass: "123"
  }
  return (
    <>
      <AuthContext.Provider value={info}>
        <Child />
      </AuthContext.Provider>
    </>
  )
}

export default App
