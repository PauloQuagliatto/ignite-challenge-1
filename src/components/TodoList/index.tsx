import { TodoItem } from "../TodoItem";

import styles from "./TodoList.module.css"

interface IProps {
  todoList: {
    id: string;
    name: string;
    done: boolean;
  }[]
  checkOrUncheckTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

function TodoList({ todoList, checkOrUncheckTodo, deleteTodo }: IProps) {
  let doneTodos = 0;

  todoList.forEach((todo) => todo.done && doneTodos++);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h4>Tarefas criadas <span>{todoList.length}</span></h4>
        <h4>Tarefas concluídas <span>{doneTodos} de {todoList.length}</span></h4>
      </div>
      {todoList.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          checkOrUncheckTodo={checkOrUncheckTodo}
          deleteTodo={deleteTodo}
        />)
      )}
    </div>
  );
};

export { TodoList };
