import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import guest from "./guest.png"
import Nav from "./nav";
import Sidebar from "./sidebar";


// https://www.googleapis.com/books/v1/volumes?q={searchTerm}


function Books({lib,readedBooks}) {
    const [books,setBooks] = lib
    const [bookData, setBookData] = useState([])
    const [searchQuery, setSearchQuery] = useState('');
    // const [library,setLibrary] = useState([])

    const navigate = useNavigate()


    
    useEffect(() => {
        const books = JSON.parse(localStorage.getItem("books"))

        if (books) {
            setBookData(books)
        }

    }, [])

    useEffect(() => {
        if (bookData.length > 0) {
            localStorage.setItem("books", JSON.stringify(bookData))
        }

    }, [bookData])


    useEffect(() => {
        if (!searchQuery) return;

        async function fetchData() {
            const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`);
            const data = await res.json();

            



            data.items.forEach(item => {
                setBookData(prev => [
                    ...prev,
                    {
                        title: item.volumeInfo.title,
                        author: item.volumeInfo.authors || "Unknown author",
                        image: item.volumeInfo.imageLinks.thumbnail,
                        subtitle: item.volumeInfo.subtitle || "",
                        id: item.id
                    },
                ]);
            });



        }
        setBookData([])
        fetchData();





    }, [searchQuery]);




    function handleSearch(e) {
        e.preventDefault()
        setSearchQuery(e.target.book.value)
        e.target.reset()
    }


    function toLibrary(item){
        // setLibrary(prev=>{
        //     localStorage.setItem("Library",JSON.stringify([...prev,book]))
        //     return [...prev,book]
            
        // })

        for(const i of [...books,...readedBooks]){
            if(i.id === item.id){
                return;
            }
        }


        setBooks(prev => [...prev,item])
        // let updated = [...library]
        // const book = bookData[index]

        // if(library.some(item => item.title ===book.title)){
        //     updated = updated.filter((__,i)=>i !== index)
        // }else{
        //     setLibrary(updated)
        //     updated.push(book)

        // }
        
        


        // setLibrary(updated)
        // localStorage.setItem("Library",JSON.stringify(updated))
        
    }
    
    return (

        <main>
            <Sidebar />

            <div id="content">
                <div id="content-header">
                    <form onSubmit={handleSearch}>
                        <input type="text" placeholder="Search book" required name="book" />
                    </form>
                    <div id="account">
                        <h3>Xmaladzee</h3>
                        <img src={guest}/>

                    </div>
                </div>

                <div id="books">
                    {
                        bookData.map((item, index) => {
                            return (
                                <div className = "book" key={index}>
                                    <img src={item.image} alt="" />
                                    <div className="info">
                                        <h3>{item.title}</h3>
                                        <p>{item.subtitle}</p>
                                        <button onClick={() => toLibrary(item)}>Add To Library</button>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </main>
    )
}


export default Books;