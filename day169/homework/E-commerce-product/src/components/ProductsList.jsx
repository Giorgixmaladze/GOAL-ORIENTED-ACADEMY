import { useContext, useEffect } from "react"
import AuthProvider, { AuthContext } from "../context/Context"
import "./list.css"
import { Link } from "react-router-dom"

const ProductsList = () => {

    const { fetchData, products,handleCart,addProduct } = useContext(AuthContext)



    useEffect(() => {
        fetchData()

    }, [])



    return (
        <div id="container">
            <h1>Products List</h1>
            <Link to='cart'>Cart</Link>
            {
                products.map((product) => {
                    return (

                        <div className="product">
                            <img src={product.image} alt="" />
                            <h2>{product.title}</h2>
                            <h3>{product.category}</h3>
                            <p>{product.description}</p>
                            <p>Price : {product.price}$</p>
                            <button onClick={()=> handleCart(product,addProduct)}>add to cart</button>
                        </div>
                    )

                })
            }
        </div>
          


    
    )


}


export default ProductsList