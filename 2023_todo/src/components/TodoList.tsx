import { TodoType } from "../types/types";
import { CiTrash } from "react-icons/ci";

interface TodoListProps {
  data: Array<TodoType>;
  handleChecked: (index: number, checked: boolean) => void;
  handleDeleted: (index: number) => void;
}

export default function TodoList({
  data,
  handleChecked,
  handleDeleted,
}: TodoListProps) {
  return (
    <ul>
      {data.map((todo, i) => (
        <li key={i}>
          <input
            type="checkbox"
            data-index={i}
            id="todo"
            checked={todo.completed}
            onChange={(e) => handleChecked(i, e.target.checked)}
          />
          <label htmlFor="todo">{todo.text}</label>
          <button onClick={() => handleDeleted(i)}>
            <CiTrash />
          </button>
        </li>
      ))}
    </ul>
  );
}
