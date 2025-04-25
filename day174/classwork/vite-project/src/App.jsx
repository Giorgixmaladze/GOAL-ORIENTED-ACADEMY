<<<<<<< HEAD
import { useEffect, useMemo, useState } from 'react'

function App() {
  const [info, setInfo] = useState([])



  const data = useMemo(() => {
    return async () => {
      const res = await fetch('https://fakestoreapi.com/products')
      const dt = await res.json()
      return dt
    }
  }, [])



  useEffect(() => {
    data().then(x => setInfo(x))
  }, [data])
  return (
    <>
      {



        info.map(item => {
          return(
          <div>
            <img src={item.image} alt="" />
            <h1>{item.title}</h1>
          </div>)
        })



      }
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
>>>>>>> adb6718ee2287519cc5084c371bdc179e499f06e
    </>
  )
}

export default App
