import { FormEvent, useState } from "react";
import { ReactComponent as RocketIcon } from "../../assets/icons/rocket.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus-icon.svg";
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
      <div className={styles.title}>
        <RocketIcon /> <h1>todo</h1>
      </div>
      <form className={styles.addtodo} onSubmit={onSubmit}>
        <input placeholder="Adicionar uma nova tarefa" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">
          Criar
          <PlusIcon />
        </button>
      </form>
    </div>
  );
};

export { Header };
