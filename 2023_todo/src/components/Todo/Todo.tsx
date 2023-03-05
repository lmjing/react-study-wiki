import classNames from "classnames/bind";
import style from "./Todo.module.scss";
import { CiTrash } from "react-icons/ci";
import { TodoType } from "../../types/types";

const cx = classNames.bind(style);

interface TodoProps {
  todo: TodoType;
  handleUpdate: (updated: TodoType) => void;
  handleDeleted: (index: number) => void;
}

export default function Todo({ todo, handleUpdate, handleDeleted }: TodoProps) {
  const handleChange = () => {
    const updated = { ...todo, completed: !todo.completed };
    handleUpdate(updated);
  };

  return (
    <li className={cx("todo")}>
      <input
        type="checkbox"
        className={cx("checkbox")}
        id="todo"
        checked={todo.completed}
        onChange={handleChange}
      />
      <label htmlFor="todo" className={cx("text")}>
        {todo.text}
      </label>
      <button onClick={() => handleDeleted(todo.id)} className={cx("button")}>
        <CiTrash className={cx("icon")} />
      </button>
    </li>
  );
}
