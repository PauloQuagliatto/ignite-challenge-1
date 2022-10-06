import { useState } from "react";
import { v4 as uuid } from "uuid";

import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";

import styles from "./App.module.css";

interface ITodo {
  id: string;
  name: string;
  done: boolean;
};

function App() {
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  function addTodo(name: string) {
    setTodoList(prevState => [...prevState, {
      id: uuid(),
      name,
      done: false
    }])
  }

  function checkOrUncheckTodo(id: string) {
    setTodoList(prevState => prevState.map((todo) => todo.id === id ?
      { ...todo, done: !todo.done } :
      todo
    ))
  }

  function deleteTodo(id: string) {
    setTodoList(prevState => prevState.filter((todo) => todo.id !== id))
  }

  return (
    <div className={styles.container}>
      <Header addTodo={addTodo} />
      <TodoList todoList={todoList} checkOrUncheckTodo={checkOrUncheckTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export { App };
