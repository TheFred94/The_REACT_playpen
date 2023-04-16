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
      });
    // Runs this useEffect when the page is loaded and whenever it changes
  }, [page]);

  return (
    <>
      {/* When the page is refreshed it shows "Loading..." before showing the content of articles. */}
      {articles.length === 0 ? (
        <p>LOADING...</p>
      ) : (
        <ul>
          {articles.map((art) => (
            <li>
              <article>{art.productdisplayname}</article>
              {/* Conditional rendering (Short curcuit evaluation) - If the product has a discount it shows "On sale now!"  */}
              {art.discount && <p>On sale now!</p>}
              <button>Buy product</button>
            </li>
          ))}
        </ul>
      )}
      {/* Whenever we click it updates the pagecounter and sends a new request because we told the useEffect Hook to look out for changes in page  */}
      <button onClick={() => setPage((oldPage) => oldPage + 1)}>Load 10 more products({page})</button>
    </>
  );
}

export default App;
