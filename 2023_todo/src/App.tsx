import { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import { FilterType, TodoType } from "./types/types";
import NavBar from "./components/NavBar";

function App() {
  const KEY = "todoList";
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<FilterType>("All");
  const [todoList, setTodoList] = useState<Array<TodoType>>([]);
  const [showList, setShowList] = useState<Array<TodoType>>([]);

  const handleChecked = (index: number, checked: boolean) => {
    setTodoList((prev) => {
      const newList = [...prev];
      newList[index].completed = checked;
      return newList;
    });
  };

  const handleDeleted = (index: number) => {
    setTodoList((prev) => {
      const newList = [...prev];
      newList.splice(index, 1);
      return newList;
    });
  };

  const handleAdd = (value: string) => {
    setTodoList((prev) => [...prev, { text: value, completed: false }]);
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
    <div className="App">
      <header className="App-header">
        <NavBar handleNavClick={setFilter} />
        <TodoList
          data={showList}
          handleChecked={handleChecked}
          handleDeleted={handleDeleted}
        />
        <TodoInput handleAdd={handleAdd} />
      </header>
    </div>
  );
}

export default App;
