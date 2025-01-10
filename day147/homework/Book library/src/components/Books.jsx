import { useState, useEffect } from "react";
import "./style.css";
import guest from "./guest.png"
import Nav from "./nav";

// https://www.googleapis.com/books/v1/volumes?q={searchTerm}


function Books() {
    const [bookData, setBookData] = useState([])
    const [searchQuery, setSearchQuery] = useState('');
    const [library,setLibrary] = useState([])

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
                        subtitle: item.volumeInfo.subtitle || ""
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

    function toLibrary(book){
        setLibrary(prev=>{
            const newLib = [...prev,book]
            localStorage.setItem("Library",JSON.stringify(newLib))
            return newLib
        })
        console.log(library)
    }
    
    return (

        <main>
            <div id="sidebar">
                <div id="sidebar-header">
                    <h3>MyBooks.com</h3>
                </div>
            </div>

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
                                <div key={index}>
                                    <img src={item.image} alt="" />
                                    <h3>{item.title}</h3>
                                    <p>{item.subtitle}</p>
                                    <button onClick={() => toLibrary(item)}>Add To Library</button>
                                  
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