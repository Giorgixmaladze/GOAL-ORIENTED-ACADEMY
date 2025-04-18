import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/context"
import "./style.css"

const Main = () =>{
    const{fetchData,info,removeProduct} = useContext(AuthContext)
    useEffect(()=>{
        fetchData()
    },[])

    

    return(
        <>
            <h1>Main Page</h1>

            <div id="main">
                {
                    info.map((item,index) =>{
                        return(
                            <div >
                                <img src={item.image} alt="" />
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                                <p>{item.price}$</p>
                                <button onClick={() => removeProduct(index)}>Remove</button>
                            </div>
                        )
                    })
                }        
            </div>
        </>
    )
}

export default Main