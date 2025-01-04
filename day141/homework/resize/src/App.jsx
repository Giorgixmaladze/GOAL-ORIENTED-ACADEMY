import { useState,useEffect } from "react";

function App() {
  const [height,setHeight] = useState(window.innerHeight)
  const [width,setWidth] = useState(window.innerWidth)

  useEffect(() =>{
    window.addEventListener("resize",()=>{
      console.log("resize")
      setHeight(window.innerHeight)
      setWidth(window.innerWidth)
    })
    return () =>{
      console.log("clean terminal")
      window.removeEventListener("resize",() =>{
        setHeight(0)
        setWidth(0)
      })
    }
  },[])

  return(
    <>
      <div>
        <p>Width: {width}</p>
        <p>Height: {height}</p>
      </div>
    
    </>
  )
}


export default App;