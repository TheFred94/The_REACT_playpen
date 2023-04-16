import { useState } from "react";

import "./App.css";

function App() {
  // Create an array with tasks that contains an object for each task. This is the initial state that is passed down to <List />
  const [tasks, setTasks] = useState([
    {
      task: "First task",
      completed: false,
      id: 1,
    },
    {
      task: "Second task",
      completed: false,
      id: 2,
    },
    {
      task: "Third task",
      completed: false,
      id: 3,
    },
  ]);
  const handler = () => {
    console.log("handler called");
  };
  return (
    <div className="App">
      <Form clickHandler={handler} />
      {/* List gets the initial state from the const [tasks, setTasks]*/}
      <List tasks={tasks} />
    </div>
  );
}

function Form() {
  return (
    <>
      <input></input>
      <button>Add Task</button>
    </>
  );
}

// For list to pick up the state tasks we pass in props
function List(props) {
  return (
    // We use map to map through the tasks array and create a ListItem for each of the tasks with their respective properties
    <ul>
      <p>Some List</p>
      {props.tasks.map((task) => (
        // To show each task in as their own element we use the ... spread operator to devide the array into meaningfull tasks
        <ListItem {...task} />
      ))}
    </ul>
  );
}

// ListItem is passed in props since we have used the spread operator ...task in on the <ListItem /> in the <List /> component
function ListItem(props) {
  return (
    <li>
      <article>
        {/* Using the {props.task} then gets each individual task from the ListItem because we used the spreap operator ...task on the ListItem.   */}
        <p>{props.task}</p>
        <button>Complete</button>
      </article>
    </li>
  );
}

function Button() {
  return <button>Complete</button>;
}

export default App;
