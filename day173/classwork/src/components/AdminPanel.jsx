import { useContext } from "react"
import { AuthContext } from "../context/context"

const AdminPanel = () =>{
    const {products,addProduct,deleteProduct} = useContext(AuthContext)
    return(
        <>
            <h1>Admin Panel</h1>
            <form onSubmit={addProduct}>
                <input type="text" name="product"  placeholder="Enter the product" required/>
                <button>Add Product</button>
            </form>


            <table border={1}>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((item,index) => {
                            return (
                                <tr>
                                    <td>{item}</td>
                                    <td><button onClick={() => deleteProduct(index)}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default AdminPanel