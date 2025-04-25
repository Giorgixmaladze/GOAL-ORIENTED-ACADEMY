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
    </>
  )
}

export default App
