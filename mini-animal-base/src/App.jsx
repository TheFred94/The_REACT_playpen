import { useState } from "react";
import data from "./animals.json";
console.log(data);
function cleanUpData() {
  // We create an object using destructuring which creates 3 variables based on the "fullname" string in the animal object in the json file
  return data.map((animal) => {
    const [name, , trait, type] = animal.fullname.split(" ");
    return {
      // When the key and the property have the same name you can just declare it e.g. name. trait: trait, = trait.
      name,
      trait,
      type,
      age: animal.age,
    };
  });
}

import "./App.css";

function App() {
  const animals = cleanUpData();
  // We create a state with a function that is called filter which runs setFilter when the state changes
  const [filter, setFilter] = useState("");
  // State that looks after whether there have been sorted or not
  const [sortKey, setSortKey] = useState("");
  // This state controls the sorting direction
  const [sortDirection, setSortDirection] = useState("DESC");

  // We create a variable that contain everything
  let filteredAnimals = [...animals];
  // if there is a state we override filteredAnimals and pull out only the ones that matches the filter.
  if (filter) {
    filteredAnimals = filteredAnimals.filter((ani) => ani.type === filter);
  }

  // We use the sortKey variable to sort on the different properties of the animals in the array
  if (sortKey) {
    filteredAnimals.sort((a, b) => {
      if (a[sortKey] < b[sortKey]) {
        return sortDirection === "ASC" ? -1 : 1;
      }
      if (a[sortKey] > b[sortKey]) {
        return sortDirection === "ASC" ? 1 : -1;
      }

      // names must be equal
      return 0;
    });
  }

  // Here we call our setSortKey option and parse in whatever key we are getting from that.
  function setSorting(key) {
    // If the key that we are recieving has the same value as out state sortKey, that means we have clicked it twice
    if (key === sortKey) {
      // if the oldState is ASC return DESC else return ASC.
      setSortDirection((oldState) => (oldState === "ASC" ? "DESC" : "ASC"));
    } else {
      setSortDirection("ASC");
    }
    setSortKey(key);
  }
  return (
    <div className="App">
      <h1>Mini animal base</h1>
      {/* onClick runs the setFilter function which determines what the user filters on */}
      <button onClick={() => setFilter("cat")}>Only cats</button>
      <button onClick={() => setFilter("dog")}>Only dogs</button>
      <button onClick={() => setFilter("")}>All</button>

      <table>
        <thead>
          <tr>
            {/* Buttons have onClick events which triggers a statechange setSortKey */}
            <td>
              <button onClick={() => setSorting("name")}>Name</button>
            </td>
            <td>
              <button onClick={() => setSorting("trait")}>Trait</button>
            </td>
            <td>
              <button onClick={() => setSorting("type")}>Type</button>
            </td>
            <td>
              <button onClick={() => setSorting("age")}>Age</button>
            </td>
          </tr>
        </thead>
        {/* The table is filled with the data from the json file trough the variables name, trait, type and age trough the animal. variable*/}
        <tbody>
          {/* Here we map through the copy of the animals array instead of the original */}
          {filteredAnimals.map((animal) => (
            // We give each animal a unique key on the name. This is so React knows wether or not that element have been added to the DOM or not. This is for optimized performance.
            <tr key={animal.name}>
              <td>{animal.name}</td>
              <td>{animal.trait}</td>
              <td>{animal.type}</td>
              <td>{animal.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
