import { useState, useEffect } from "react";
import "./lib.css"
import Sidebar from "./sidebar";
import guest from './guest.png';

function Readed() {
    const [readed, setReaded] = useState([])

    useEffect(() => {
        const read = JSON.parse(localStorage.getItem("Readed"))

        if(read){
            read.map(item =>{
                setReaded(prev => [...prev,item])
            })
        }
    },[])

    function removeReaded(index){
        const updatedReaded = readed.filter((_, i) => i !== index); // Remove the book at the specified index
        setReaded(updatedReaded); // Update state
        localStorage.setItem("Readed", JSON.stringify(updatedReaded)); // Persist to localStorage
    }


    return (
        <main>
            <Sidebar />
            <div id="content">
                <div id="content-header">

                    <div id="account">
                        <h3>Xmaladzee</h3>
                        <img src={guest} />

                    </div>
                </div>
                <div id="books">
                    {
                        readed.map((item, index) => {
                            return (
                                <div className="book" key={index}>
                                    <img src={item.image} alt="" />
                                    <div id="info">
                                        <h3>{item.title}</h3>
                                        <p>{item.subtitle}</p>
                                        <div id="readed">
                                            <div>
                                                <label htmlFor="Read">Readed</label>
                                                <input type="checkbox" name="check" checked={readed.some(read => read.title === item.title)} onChange={() => toReaded(index)} id="Read" />
                                            </div>
                                            <button onClick={() => removeReaded(index)}>Remove book</button>
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


export default Readed