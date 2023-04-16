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

  // We create a variable that contain everything
  let filteredAnimals = [...animals];
  // if there is a state we override filteredAnimals and pull out only the ones that matches the filter.
  if (filter) {
    filteredAnimals = filteredAnimals.filter((ani) => ani.type === filter);
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
            <td>Name</td>
            <td>Trait</td>
            <td>Type</td>
            <td>Age</td>
          </tr>
        </thead>
        {/* The table is filled with the data from the json file trough the variables name, trait, type and age trough the animal. variable*/}
        <tbody>
          {/* Here we map through the copy of the animals array instead of the original */}
          {filteredAnimals.map((animal) => (
            <tr>
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
