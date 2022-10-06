import { FormEvent, useState } from "react";
import styles from "./Header.module.css";

interface IProps {
  addTodo: (name: string) => void;
}

function Header({ addTodo }: IProps) {
  const [input, setInput] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    addTodo(input);
    setInput("");
  }

  return (
    <div className={styles.header}>
      <h1>
        Todo
      </h1>
      <form className={styles.addtodo} onSubmit={onSubmit}>
        <input placeholder="Adicionar uma nova tarefa" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export { Header };
