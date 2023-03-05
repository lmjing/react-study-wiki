import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { FilterType, TodoType } from "../../types/types";
import TodoInput from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import style from "./TodoList.module.scss";
const { v4: uuidv4 } = require("uuid");

const cx = classNames.bind(style);

interface TodoListProps {
  filter: FilterType;
}

const filterList = (todoList: Array<TodoType>, filter: FilterType) => {
  switch (filter) {
    case "Active":
      return todoList.filter((item) => !item.completed);
    case "Complete":
      return todoList.filter((item) => item.completed);
    default:
      return todoList;
  }
};

export default function TodoList({ filter }: TodoListProps) {
  const getTodoListFromLocalStorage = () => {
    const savedList = localStorage.todoList;
    return savedList ? JSON.parse(savedList) : [];
  };

  const [todoList, setTodoList] = useState<Array<TodoType>>(
    getTodoListFromLocalStorage
  );

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

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const filteredList = filterList(todoList, filter);

  return (
    <section className={cx("container")}>
      <ul className={cx("list")}>
        {filteredList.map((todo, i) => (
          <Todo
            key={i}
            todo={todo}
            handleUpdate={handleUpdate}
            handleDeleted={handleDeleted}
          />
        ))}
      </ul>
      <TodoInput onAdd={handleAdd} />
    </section>
  );
}
