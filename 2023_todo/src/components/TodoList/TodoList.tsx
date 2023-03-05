import classNames from "classnames/bind";
import { TodoType } from "../../types/types";
import Todo from "../Todo/Todo";
import style from "./TodoList.module.scss";

const cx = classNames.bind(style);

interface TodoListProps {
  todoList: Array<TodoType>;
  handleUpdate: (updated: TodoType) => void;
  handleDeleted: (index: number) => void;
}

export default function TodoList({
  todoList,
  handleUpdate,
  handleDeleted,
}: TodoListProps) {
  return (
    <section className={cx("container")}>
      <ul className={cx("list")}>
        {todoList.map((todo, i) => (
          <Todo
            key={i}
            todo={todo}
            handleUpdate={handleUpdate}
            handleDeleted={handleDeleted}
          />
        ))}
      </ul>
    </section>
  );
}
