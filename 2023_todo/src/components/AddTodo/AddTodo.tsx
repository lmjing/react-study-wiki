import { ChangeEvent, FormEvent, useState } from "react";
import style from "./AddTodo.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

interface TodoInputProps {
  onAdd: (value: string) => void;
}

export default function TodoInput({ onAdd }: TodoInputProps) {
  const [value, setValue] = useState<string>("");

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim().length === 0) {
      alert("TODO 값을 입력하세요.");
      return;
    }

    onAdd(value);
    setValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} id="todoForm" className={cx("form")}>
        <input
          type="text"
          placeholder="Add Todo"
          value={value}
          onChange={handleChange}
          className={cx("input")}
        />
        <button type="submit" form="todoForm" className={cx("button")}>
          Add
        </button>
      </form>
    </div>
  );
}
