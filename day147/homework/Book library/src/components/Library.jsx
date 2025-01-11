import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";
import guest from './guest.png';

function Library() {
    const [books,setBooks] = useState([])
    
    useEffect(()=>{
        const lib = JSON.parse(localStorage.getItem("Library"))

        if (lib) {
            lib.map(item => {
                setBooks(prev => [...prev,item])
            });
            
        }
    },[])


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
                                    <div key={index}>
                                        <img src={item.image} alt="" />
                                        <h3>{item.title}</h3>
                                        <p>{item.subtitle}</p>
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