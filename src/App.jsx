import "./App.css";
import Counter from "./Components/Counter/Counter";
import TasksList from "./Components/TasksList/TasksList";
const App = () => {
  return (
    <div>
      <h1>React Home Practice</h1>
      <Counter />
      <TasksList />
    </div>
  );
};

export default App;
