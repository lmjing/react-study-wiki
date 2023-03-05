import { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import TodoInput from "./components/AddTodo/AddTodo";
import { FilterType, TodoType } from "./types/types";
import NavBar from "./components/Header/Header";
import { randomUUID } from "crypto";
import { DarkModeProvider } from "./context/DarkModeContext";
const { v4: uuidv4 } = require("uuid");

function App() {
  const KEY = "todoList";
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<FilterType>("All");
  const [todoList, setTodoList] = useState<Array<TodoType>>([]);
  const [showList, setShowList] = useState<Array<TodoType>>([]);

  const handleUpdate = (updated: TodoType) => {
    setTodoList((prev) =>
      prev.map((item) => (item.id === updated.id ? updated : item))
    );
  };

  const handleDeleted = (id: number) => {
    setTodoList((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const handleAdd = (value: string) => {
    const id = uuidv4();
    setTodoList((prev) => [...prev, { id, text: value, completed: false }]);
  };

  const filterList = () => {
    switch (filter) {
      case "Active":
        return todoList.filter((item: TodoType) => !item.completed);
      case "Complete":
        return todoList.filter((item: TodoType) => item.completed);
      default:
        return todoList;
    }
  };

  useEffect(() => {
    const savedItems = localStorage.getItem(KEY);
    setTodoList(savedItems ? JSON.parse(savedItems) : []);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(KEY, JSON.stringify(todoList));
      setShowList(filterList());
    }
  }, [todoList, filter]);

  return (
    <DarkModeProvider>
      <NavBar handleNavClick={setFilter} selected={filter} />
      <TodoList
        todoList={showList}
        handleUpdate={handleUpdate}
        handleDeleted={handleDeleted}
      />
      <TodoInput handleAdd={handleAdd} />
    </DarkModeProvider>
  );
}

export default App;
