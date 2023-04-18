import { useState, useEffect } from "react";
import "./App.css";

// API: https://kea-alt-del.dk/t7/api/#parameters

function App() {
  //  Creates state and set it to [] (an empty array)
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

  // Takes the state of the oldBasket and concats it with the product that corresponds to that of the "Buy Product" button
  function buyProduct(product) {
    setBasket((oldBasket) => oldBasket.concat(product));
    console.log("basket", basket);
    console.log(product);
  }

  // Removes the the product which is NOT equal to the id we recive from the function
  function removeProduct(id) {
    setBasket((oldBasket) => oldBasket.filter((product) => product.id !== id));
  }

  // Empties the array and removes all the products from the basket
  function emptyBasket() {
    setBasket((oldBasket) => (oldBasket = []));
  }

  return (
    <>
      <main>
        <section className="Product_List">
          <ProductList buyProduct={buyProduct} articles={articles} />
        </section>
        <section className="Basket">
          <Basket emptyBasket={emptyBasket} removeProduct={removeProduct} basket={basket} />
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
      <h2>List of products</h2>
      {props.articles.map((article) => (
        <Product buyProduct={props.buyProduct} article={{ ...article }} />
      ))}
    </ul>
  );
}

function Product(props) {
  const productid = props.article.id;
  const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${productid}.webp`;
  return (
    <li>
      <article className="product">
        <p>{props.article.productdisplayname}</p>
        <p>Price: {props.article.price} kr.</p>
        <p>{props.article.discount && <p>On Sale!</p>} </p>
        <img src={imagePath} />
        <button onClick={() => props.buyProduct(props.article)}>Buy Product</button>
      </article>
    </li>
  );
}

function Basket(props) {
  return (
    <>
      <ul>
        <h2>Basket</h2>
        <button onClick={() => props.emptyBasket(props.product)}>Remove all items</button>
        {props.basket.map((product) => (
          <BasketProduct removeProduct={props.removeProduct} product={{ ...product }} />
        ))}
      </ul>
    </>
  );
}

function BasketProduct(props) {
  const productid = props.product.id;
  const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${productid}.webp`;
  return (
    <li>
      <article className="product">
        <p>{props.product.productdisplayname}</p>
        <p>Price: {props.product.price}</p>
        <img src={imagePath} />
        <button onClick={() => props.removeProduct(props.product.id)}>Remove product</button>
      </article>
    </li>
  );
}

export default App;
