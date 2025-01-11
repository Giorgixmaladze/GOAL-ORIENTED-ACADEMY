import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import guest from "./guest.png"
import Nav from "./nav";
import Sidebar from "./sidebar";


// https://www.googleapis.com/books/v1/volumes?q={searchTerm}


function Books() {

    const [bookData, setBookData] = useState([])
    const [searchQuery, setSearchQuery] = useState('');
    const [library,setLibrary] = useState([])
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
                        subtitle: item.volumeInfo.subtitle || ""
                    },
                ]);
            });



        }
        setBookData([])
        fetchData();





    }, [searchQuery]);


    useEffect(() => {
        const lib = JSON.parse(localStorage.getItem("Library"))

        if (lib) {
            setLibrary(lib)
        }

    }, [])

    function handleSearch(e) {
        e.preventDefault()
        setSearchQuery(e.target.book.value)
        e.target.reset()
    }


    function toLibrary(book){
        setLibrary(prev=>{
            localStorage.setItem("Library",JSON.stringify([...prev,book]))
            return [...prev,book]
            
        })
        
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