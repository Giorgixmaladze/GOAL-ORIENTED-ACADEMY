import { useState } from 'react'
import Books from './components/Books';
import { Routes,Route } from 'react-router-dom';
import Library from './components/Library';

function App(){
  return (

    <>
      <Routes>
        <Route path='/' element= {<Books />} />
        <Route path='/library' element = {<Library />} />
        <Route path='*' element = {<h1>Page not found</h1>}/>
      </Routes>
    </>
  
  )
}

export default App;