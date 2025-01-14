import { useState, useEffect } from "react";

export default function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      {products !== null ? (
        <ul>
          {products.map((item) => {
            return (
              <li key={item.id}>
                {item.title} - ${item.price}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>... loading</p>
      )}
    </div>
  );
}
