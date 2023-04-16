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
  // Here we update the state. We take the oldState where we have filtered out the task that is NOT equal to whatever id that we receive from the function.
  function completeTask(id) {
    setTasks((oldState) => oldState.filter((task) => task.id !== id));
  }

  const handler = () => {
    console.log("handler called");
  };
  return (
    <div className="App">
      <Form clickHandler={handler} />
      {/* List gets the initial state from the const [tasks, setTasks]*/}
      {/* List also retrieves a function called completeTask which points to the actual function completeTask*/}
      <List tasks={tasks} completeTask={completeTask} />
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
        // completeTasks is passed down to ListItem coming from the parent component List. We use props because it's passed down from it's parent component.
        <ListItem completeTask={props.completeTask} {...task} />
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
        {/* We use an anonomys function in the onClick event to not call it immidiatly after it's clicked. We parse in props.id to send the id back to the parent component so the correct task is removed */}
        <button onClick={() => props.completeTask(props.id)}> Complete</button>
      </article>
    </li>
  );
}

function Button() {
  return <button>Complete</button>;
}

export default App;
