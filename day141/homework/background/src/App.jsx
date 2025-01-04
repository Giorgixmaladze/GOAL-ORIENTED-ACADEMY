import { useState } from 'react'
import './App.css'
function App(){
  const [color,setColor] = useState("white")

  const bgColor ={
    height:'100vh',
    width:'100%',
    dislpay:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:color
  }

  function handleChange(newColor) {
    setColor(newColor)
  }

  return(

    <div style={bgColor}>
      <button onClick={() => handleChange("Blue")} >Blue</button>
      <button onClick={() => handleChange("Red")}>Red</button>
      <button onClick={() => handleChange("Blueviolet")}>Blueviolet</button>
    </div>
  )
}

export default App