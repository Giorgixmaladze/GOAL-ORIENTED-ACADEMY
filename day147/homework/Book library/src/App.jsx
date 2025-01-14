import { useState } from 'react'
import Books from './components/Books';
import { Routes,Route } from 'react-router-dom';
import Library from './components/Library';
import Readed from './components/Readed';

function App(){
  return (

    <>
      <Routes>
        <Route path='/' element= {<Books />} />
        <Route path='/library' element = {<Library />} />
        <Route path='/readed' element = {<Readed />} />
      </Routes>
    </>
  
  )
}

export default App;