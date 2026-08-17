
// [[[[[[[[[ + - reset ]]]]]]]]]

import { useState } from "react";

function App(){

  const [tasks, setTasks] = useState([
    "Learn React",
    "Learn JS"
  ]);

  const [newTask, SetNewTask] = useState("")

  return(
    <>
      {tasks.map((task) => (
      <p key={task}> {task} </p>
      ))}

      <input onChange={(event)=> SetNewTask(event.target.value)} />   
      {/*When the input changes, take whatever the user typed and save it in newTask*/}

      <button onClick={()=> setTasks([...tasks, newTask])}>
        Add Task
      </button>
    </>
  );

} export default App;