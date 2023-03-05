import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import { FilterType } from "./types/types";
import NavBar from "./components/Header/Header";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  const [filter, setFilter] = useState<FilterType>("All");

  return (
    <DarkModeProvider>
      <NavBar handleNavClick={setFilter} selected={filter} />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;
