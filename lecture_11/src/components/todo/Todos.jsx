import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  selectAllTodos,
  deleteTodo,
  deleteAllTodos,
  toggleTodo,
  addTodo,
  updateTodo,
  fetchTodos,
} from "../../redux/todoSlice";

import Todo from "./Todo";

const Todos = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const dispatch = useDispatch();
  const { todos } = useSelector(selectAllTodos);

  const handlSubmit = () => {
    dispatch(addTodo(todoTitle));
  };

  const update = (id, title) => {
    dispatch(updateTodo({ id, title }));
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <>
      <h1>Todos</h1>

      <input
        type="text"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <br />
      <button onClick={handlSubmit}>add todo</button>
      <br />
      <br />
      {todos &&
        todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            deleteTodo={() => dispatch(deleteTodo(todo.id))}
            toggleTodo={() => dispatch(toggleTodo(todo.id))}
            update={update}
          />
        ))}

      <br />
      <br />
      <br />

      {todos.length === 0 ? (
        "no more todos"
      ) : (
        <button onClick={() => dispatch(deleteAllTodos())}>
          delete all todos
        </button>
      )}
    </>
  );
};

export default Todos;
