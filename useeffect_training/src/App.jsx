import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://kea-alt-del.dk/t7/api/products")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  return (
    <ul>
      {articles.map((art) => (
        <li>{art.productdisplayname}</li>
      ))}
    </ul>
  );
}

export default App;
