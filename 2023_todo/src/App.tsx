import React, { ChangeEvent, FormEvent, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import { TodoType } from "./types/TodoType";

function App() {
  const [todoList, setTodoList] = useState<Array<TodoType>>([
    {
      text: "테스트",
      completed: false,
    },
  ]);

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

  return (
    <div className="App">
      <header className="App-header">
        <TodoList
          data={todoList}
          handleChecked={handleChecked}
          handleDeleted={handleDeleted}
        />
        <TodoInput handleAdd={handleAdd} />
      </header>
    </div>
  );
}

export default App;
