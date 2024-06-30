import { useState } from "react";
function TasksList() {
  const [tasks, setTasks] = useState([]);
  const [inputvalue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleClick = () => {
    setTasks([...tasks, inputvalue]);
    setInputValue("");
  };
  const deleteTask = (index) => {
    let updatedTasks = tasks.filter((value, i) => i !== index);
    setTasks(updatedTasks);
  };
  const editTask = (index) => {
    setInputValue(tasks[index]); // Set input value to the task being edited
    setEditIndex(index); // Set the edit index
  };
  return (
    <>
      <h1>To-Do-List</h1>
      <input type="text" onChange={handleChange} value={inputvalue} />
      <button onClick={handleClick}>Add Tasks</button>
      {tasks.map((tasks, index) => {
        return <h4 key={index}>{tasks}</h4>;
      })}
      {tasks.map((data, index) => (
        <div key={index}>
          <button onClick={() => editTask(index)}>Edit</button>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </div>
      ))}
    </>
  );
}
export default TasksList;
