import { useState,useEffect } from 'react'


function App() {
  
  useEffect(()=>{
    const timer = setInterval(()=>{
      console.log("...loading")
    },1000)

    return () =>{
      clearInterval(timer)
      console.log("timer is stopped")
    }
  },[])
  return(

    <>
    
      <p>is running ..</p>
        
    </>
  )

  

}


export default App