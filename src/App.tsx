import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { NewTodo } from "./components/NewTodo";
import { TodoList } from "./components/TodoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center container overflow-hidden">
      <h1 className="font-semibold text-4xl">Zustand & Framer-Motion</h1>
      <NewTodo />
      <TodoList />
    </div>
  );
}

export default App;
