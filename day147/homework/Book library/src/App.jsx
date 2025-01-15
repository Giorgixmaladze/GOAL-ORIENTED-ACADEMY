import { useState, useEffect } from 'react'
import Books from './components/Books';
import { Routes, Route } from 'react-router-dom';
import Library from './components/Library';
import Readed from './components/Readed';



function App() {

  const library = JSON.parse(localStorage.getItem("Library"))

  const read = JSON.parse(localStorage.getItem("Readed")) 

  const [books, setBooks] = useState(library === undefined? library : [])
  const [readed, setReaded] = useState(read === undefined? read : [])


  useEffect(() => {

    localStorage.setItem("Library", JSON.stringify(books))

    localStorage.setItem("Readed",JSON.stringify(readed))

  }, [books, readed])

  return (

    <>
      <Routes>
        <Route path='/' element={<Books lib={[books, setBooks]} readedBooks={readed} />} />
        <Route path='/library' element={<Library lib={[books, setBooks]} readedBooks={[readed, setReaded]} />} />
        <Route path='/readed' element={<Readed readedBook={[readed,setReaded]} />} />
      </Routes>
    </>

  )
}

export default App;