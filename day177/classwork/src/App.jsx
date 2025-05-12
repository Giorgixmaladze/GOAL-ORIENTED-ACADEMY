import { useState } from 'react'


function App() {
  const [date, setDate] = useState("")

  const handleMoment = async () => {
    const moment = await import("moment")
    const now = moment.default().format('YYYY-MM-DD HH:mm:ss ');
    setDate(now)
  }

  return (
    <>

      <button onClick={handleMoment}>Get Moment</button>
      <h1>{date}</h1>
    </>


  )
}

export default App
