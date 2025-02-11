import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/LogIn'
import Management from './components/Management'



function App() {
    const user = JSON.parse(localStorage.getItem("users")) || []
    const [data, setData] = useState([])

    return (
        <BrowserRouter >
            <Routes>
                <Route path='/signup' element ={<Signup />}/>
                <Route path='/login' element={<Login users ={user}/>} />
                <Route path ='/' element={<Management />} />
            </Routes>
            

        </BrowserRouter>
            
    
    )
}

export default App
