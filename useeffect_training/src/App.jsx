import { useState, useEffect } from "react";
import "./App.css";
function App() {
  //  Creates state and set it to []
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetch("https://kea-alt-del.dk/t7/api/products?start=" + page * 10)
      .then((res) => res.json())
      .then((data) => {
        // set state which triggers the render again
        setArticles(data);
      });
  }, [page]);

  return (
    <>
      <ProductList articles={articles} />
      <button onClick={() => setPage((oldPage) => oldPage + 1)}>Load 10 more products({page})</button>
    </>
  );
}

function ProductList(props) {
  return (
    <ul>
      <p>List of products</p>
      {props.articles.map((article) => (
        <Product {...article} />
      ))}
    </ul>
  );
}

function Product(props) {
  return (
    <li>
      <article>
        <p>{props.productdisplayname}</p>
        <button>Buy Product</button>
      </article>
    </li>
  );
}

export default App;
