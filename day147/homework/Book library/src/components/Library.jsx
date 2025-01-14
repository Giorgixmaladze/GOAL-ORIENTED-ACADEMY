import { useEffect, useState } from "react";
import { json, Link } from "react-router-dom";
import Sidebar from "./sidebar";
import guest from './guest.png';
import "./lib.css"



function Library() {
    const [books,setBooks] = useState([])
    const [readed,setReaded] = useState([])
    
    useEffect(()=>{
        const lib = JSON.parse(localStorage.getItem("Library"))

        if (lib) {
            lib.map(item => {
                setBooks(prev => [...prev,item])
            });
            
        }

        const readBooks = JSON.parse(localStorage.getItem("Readed")) || []
        setReaded(readBooks)
    },[])


    
    function removeBook(index) {
        
        const updatedBooks = books.filter((__, i) => i !== index);
        setBooks(updatedBooks);
    
        
        localStorage.setItem("Library", JSON.stringify(updatedBooks));
    }


    function toReaded(index){
        let updated = [...readed]
        let updatedBooks = [...books]
        const book = books[index]
        if(readed.some(read => read.title === book.title)){
            updated = updated.filter((item) => item.title !== book.title);
            
        }else{
            updatedBooks = updatedBooks.filter((_,i) => i !== index)
            setBooks(updatedBooks)
            updated.push(book)
        }
        console.log(updatedBooks)

        setReaded(updated)
        localStorage.setItem("Readed" ,JSON.stringify(updated))
        localStorage.setItem("Library",JSON.stringify(updatedBooks))
    }
    


    console.log(readed)


    return(
        <main>
            <Sidebar/>
            <div id="content">
                <div id="content-header">
                
                    <div id="account">
                            <h3>Xmaladzee</h3>
                            <img src={guest}/>
            
                    </div>
                </div>
                <div id="books">
                        {
                            books.map((item, index) => {
                                return (
                                    <div className="book" key={index}>
                                        <img src={item.image} alt="" />
                                        <div id="info">
                                            <h3>{item.title}</h3>
                                            <p>{item.subtitle}</p>
                                            <div id="readed">
                                                <div>
                                                    <label htmlFor="Read">Readed</label>
                                                    <input type="checkbox" name="check" checked = {readed.some(read => read.title === item.title)} onChange={() => toReaded(index)} id="Read" />
                                                </div>
                                                <button onClick={() => removeBook(index)}>Remove book</button>
                                            </div>
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


export default Library;