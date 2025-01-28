import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./style.css"

function App() {
  
  const [library,setLibrary] = useState([])
  const [bookData,setBookData] = useState([])
  const [searchItem, setSearchItem] = useState("")
  
  useEffect(()=>{
    const books = JSON.parse(localStorage.getItem("books"))
    if(books){
       setBookData(books)
    }
   
  },[])


  useEffect(() =>{
    if(bookData.length > 0){
      localStorage.setItem("books",JSON.stringify(bookData))
    }
    
  },[bookData])


  useEffect(() =>{ 
    if (!searchItem) return;

    const books = async () =>{
      const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchItem}`)
      const data = await res.json()

     
      data.items.forEach(item=> {
        setBookData(prev => [
          ...prev,
          {
            title:item.volumeInfo.title,
            author: item.volumeInfo.authors || "Unknown author",
            image: item.volumeInfo.imageLinks.thumbnail,
            description:item.volumeInfo.description,
          },

        ])
      });


    }


    books()
    setBookData([])
  },[searchItem])

console.log(bookData)

  const handleSearch = (e) =>{
    e.preventDefault()
    setSearchItem(e.target.search.value)
    e.target.reset()
  }



  const toLib = (item) =>{



    setLibrary(prev => [...prev,item])
    

  }

  

  return(

    <>
      <form onSubmit={handleSearch}>
        <input type="text" name="search" placeholder='Enter book name' required />
        <button>Submit</button>
      </form>
      <div id='books'>
        {bookData.map((item,index) =>{
          return(
            <div key={index}>
              <img src={item.image} alt="" />
              <h3>Title{item.title}</h3>
              <h4>Author:{item.author}</h4>
              <p>Description: {item.description}</p>
              <button onClick={() => toLib(item)}>add to library</button>
            </div>
          )
        })}
      </div>


      <div id="library">
        {library.map(item =>{

          return(
            <div>
              <h2>Library</h2>
              <img src={item.image} alt="" />
              <h3>Title{item.title}</h3>
              <h4>Author:{item.author}</h4>
              <p>Description: {item.description}</p>
            </div>
          )
        })
        
        
        
        }

      </div>
    </>

  )

}

export default App
