import React from "react";
import "./App.css"
import ProductsList from "./ProductList";
function App(){
    const products = [
      {key:1,name: "Banana", price: 2.00, description: "This is very healthy"},
      {key:2,name: "Chips", price: 5.00, description: "This is bad for health"}
    ]

    return(
      <div className="app">
        <h1>Products list</h1>
        <ProductsList products={products} />
      </div>
    )
}

export default App;