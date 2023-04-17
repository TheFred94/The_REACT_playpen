import { useState, useEffect } from "react";

import "./App.css";

function App() {
  //  Creates state and set it to []
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0);
  //  Uses an arrow function for the callback
  useEffect(() => {
    fetch("https://kea-alt-del.dk/t7/api/products?start=" + page * 10)
      .then((res) => res.json())
      .then((data) => {
        // set state which triggers the render again
        setArticles(data);
        console.log(data);
      });
    // Runs this useEffect when the page is loaded and whenever it changes
  }, [page]);

  return (
    <>
      {/* Creating the component Product with functions and passing it down to the Product component */}
      {articles.map((article) => (
        <Product key={article.id} product={article} buyProduct={buyProduct} />
      ))}

      {/* Whenever we click it updates the pagecounter and sends a new request because we told the useEffect Hook to look out for changes in page  */}
      <button onClick={() => setPage((oldPage) => oldPage + 1)}>Load 10 more products({page})</button>
    </>
  );
}
function buyProduct() {
  console.log("Product clicked");
}

function Product({ product, buyProduct }) {
  return (
    <li key={product.id}>
      <article>
        <h2>{product.productdisplayname}</h2>
        <button onClick={buyProduct}>Buy product</button>
      </article>
      {/* Conditional rendering (Short curcuit evaluation) - If the product has a discount it shows "On sale now!"  */}
      {product.discount && <p>On sale now!</p>}
    </li>
  );
}

export default App;
