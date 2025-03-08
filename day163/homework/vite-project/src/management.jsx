import { useEffect, useState } from "react"

const Management = () => {

    const [products,setProducts] = useState([])


    useEffect(() =>{
        localStorage.setItem("Products",JSON.stringify(products))
    },[products])

    const addProduct = (e) =>{
        e.preventDefault()
        const enteredProduct={
            productName : e.target.product.value,
            price:(e.target.product.value).length * 1.5
        }

        if(products.some(product => product.productName === enteredProduct.productName)){
            alert("This product is already in the cart")
        }else{
            setProducts(prev => [...prev,enteredProduct])
        }
    }

    const removeProduct = (item) =>{
        setProducts(products.filter(product => product.productName !== item.productName))
    }

    return(
        <> 
            <form onSubmit={addProduct}>
                <input type="text" placeholder="Enter the product" name="product" required />
                <button>Add product</button>
            </form>
            

            <table border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(item =>(
                            <tr>
                                <td>{item.productName}</td>
                                <td>{item.price}</td>
                                <button onClick={() => removeProduct(item)}>Delete</button>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        
        </>
    )
}

export default Management