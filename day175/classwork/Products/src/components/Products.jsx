import { useMemo, useState } from "react"
import { memo } from "react"
import Category from "../utils/type"
const Products = memo(() =>{
    const [category,setCategory] = useState("")
    
    const setCat = (e) =>{
        setCategory(e.target.textContent)
    }
    useMemo(()=>{
        console.log(category)
    },[category])
    
   
    return(

        <>
            <h1>Products Page</h1>

            <h2>Categories</h2>
            <button onClick={setCat}>Vegetables</button>
            <button onClick={setCat}>Fruits</button>


            {
                category.toLowerCase() === "fruits"?(
                    <Category type={category} />
                ):category.toLowerCase() === "vegetables"?(
                    <Category type={category} />
                ):(<p></p>)
            }
        </>
    )



})

export default Products