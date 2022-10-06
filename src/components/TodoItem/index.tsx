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
      <div className={`${styles.checkball}  ${todo.done && styles.checked}`} onClick={() => checkOrUncheckTodo(todo.id)}>
        <div></div>
      </div>
      <div className={styles.todocontainer}>
        <p>{todo.name}</p>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>
        exclude
      </button>
    </div>
  )
};

export { TodoItem };
