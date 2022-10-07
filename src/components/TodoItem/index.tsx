import { ReactComponent as CheckIcon } from "../../assets/icons/check-icon.svg";
import { ReactComponent as TrashIcon } from "../../assets/icons/trash-icon.svg";
import styles from "./TodoItem.module.css";

interface IProps {
  todo: {
    id: string;
    name: string;
    done: boolean;
  }
  checkOrUncheckTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

function TodoItem({ todo, checkOrUncheckTodo, deleteTodo }: IProps) {
  return (
    <div className={styles.container}>
      <div className={`${styles.checkball}  ${todo.done ? styles.checked : ''}`} onClick={() => checkOrUncheckTodo(todo.id)}>
        <div>{todo.done && <CheckIcon />}</div>
      </div>
      <div className={styles.todocontainer}>
        <p className={todo.done ? styles.concluded : ''}>{todo.name}</p>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>
        <TrashIcon />
      </button>
    </div>
  )
};

export { TodoItem };
