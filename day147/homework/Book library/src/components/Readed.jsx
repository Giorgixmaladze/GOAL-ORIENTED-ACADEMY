import { useState, useEffect } from "react";
import "./lib.css"
import Sidebar from "./sidebar";
import guest from './guest.png';

function Readed({readedBook}) {
    
    const [readed,setReaded] = readedBook


    function removeReaded(delId){
        const updatedReaded = readed.filter((item) => item.id !== delId); 
        setReaded(updatedReaded); 
        
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
                                            </div>
                                            <button onClick={() => removeReaded(item.id)}>Remove book</button>
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