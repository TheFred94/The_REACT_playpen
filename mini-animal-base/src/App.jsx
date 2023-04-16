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
  console.log(animals);
  return (
    <div className="App">
      <h1>Mini animal base</h1>
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
          {animals.map((animal) => (
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
