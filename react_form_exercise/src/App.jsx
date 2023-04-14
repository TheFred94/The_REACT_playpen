import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Form />
      <List />
    </div>
  );
}

function Form() {
  return (
    <>
      <input></input>
      <Button />
    </>
  );
}

function List() {
  return (
    <>
      <article>Some list</article>
      <ListItem />
    </>
  );
}

function ListItem() {
  return (
    <>
      <article>sometask</article>
      <section>
        <Button />
      </section>
    </>
  );
}

function Button() {
  return <button>Complete</button>;
}

export default App;
