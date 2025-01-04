import {useState,useEffect} from "react"

function App() {
  const [width,setWidth] = useState(window.innerWidth)
  const [height,setHeight] = useState(window.innerHeight)

  useState(() =>{
    window.addEventListener("resize", ()=>{
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    })


    return()=>{
      console.log("Clean terminal")
      window.addEventListener("resize",()=>{
        setHeight(0)
        setWidth(0)
      })
    }
  },[])

  return(
    <>
    <div>
      <p>width{width}</p>
      <p>height{height}</p>
    </div>
    </>

  )
}

export default App