import React, { useState } from 'react';
// 1) შექმენით online მაღაზიის მსგავსი საიტი, პირველ გვერდზე გექნებათ ფორმა რომელშიც უნდა შეგვეძლოს პროდუქტების დამატება (როგორც moderators), ახალი პროდუქტი სიაში დამატებისთანავე მყისიერად ემატება გვერდზე, ინფორმაცია რომელიც უნდა შეიტანოს არის: სახელი, გამოშვების ვადა, ფასი. ფორმის დადასტურებისთანავე ინფორმაციის შესაბამისი ობიექტი უნდა შექიმნას, პროექტი შეასრულეთ vite-ის (react) გამოყენებით, პროდუქტის დიზანი უნდა იყოს ლამაზი



function App(){
  const [products,setProduct] = useState([])

function handleSubmit(e){
  e.preventDefault()
  let product = { 
    name: e.target.productName.value,
    date: e.target.date.value,
    price: e.target.price.value
  }
  setProduct([product,...products])
  console.log(products)
}



  return(
    <main>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Enter the product name' name='productName' />
      <input type="text" placeholder='Enter the release date' name = "date"/>
      <input type="text" placeholder='Enter the price' name='price'/>
      <button>Submit</button>
    </form>


    <ul>
      {
       products.map((product,index) =>{
        return(
          <li key={index}>{product.name}, {product.date} , {product.price}</li>
        )
       })
      }
    </ul>
    </main>

    
  )

}

export default App

