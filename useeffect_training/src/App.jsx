import { useState, useEffect } from "react";
import "./App.css";
function App() {
  //  Creates state and set it to []
  const [articles, setArticles] = useState([]);
  const [basket, setBasket] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetch("https://kea-alt-del.dk/t7/api/products?start=" + page * 10)
      .then((res) => res.json())
      .then((data) => {
        // set state which triggers the render again
        setArticles(data);
      });
  }, [page]);

  function buyProduct(product, id) {
    setBasket((oldBasket) => oldBasket.concat(product));
    console.log("basket", basket);
    console.log(product);
    console.log(id);
  }

  return (
    <>
      <main>
        <section className="Product_List">
          <ProductList buyProduct={buyProduct} articles={articles} />
        </section>
        <section className="Basket">
          <Basket basket={basket} />
        </section>
        <button className="load_more_products" onClick={() => setPage((oldPage) => oldPage + 1)}>
          Load 10 more products({page})
        </button>
      </main>
    </>
  );
}

function ProductList(props) {
  return (
    <ul>
      <p>List of products</p>
      {props.articles.map((article) => (
        <Product buyProduct={props.buyProduct} article={{ ...article }} />
      ))}
    </ul>
  );
}

function Product(props) {
  return (
    <li>
      <article>
        <p>{props.article.productdisplayname}</p>
        <button onClick={() => props.buyProduct(props.article, props.id)}>Buy Product</button>
      </article>
    </li>
  );
}

function Basket(props) {
  return (
    <>
      <ul>
        <p>Basket</p>
        {props.basket.map((product) => (
          <BasketProduct product={{ ...product }} />
        ))}
      </ul>
    </>
  );
}

function BasketProduct(props) {
  return (
    <li>
      <p>{props.product.productdisplayname}</p>
      <button>Remove product</button>
    </li>
  );
}

export default App;
