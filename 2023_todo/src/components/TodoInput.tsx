import { ChangeEvent, FormEvent, useState } from "react";

interface TodoInputProps {
  handleAdd: (value: string) => void;
}

export default function TodoInput({ handleAdd }: TodoInputProps) {
  const [value, setValue] = useState<string>("");

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) {
      alert("TODO 값을 입력하세요.");
      return;
    }

    handleAdd(value);
    setValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo"
          value={value}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
