import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Library from './components/Library.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>

      <Route path='/' element= {<App />} />
      <Route path='/library' element = {<Library />} />
    </Routes>
  </BrowserRouter>
)
