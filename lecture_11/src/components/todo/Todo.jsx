import { useState } from "react";

const Todo = ({ id, title, deleteTodo, completed, toggleTodo, update }) => {
  const [toggle, setToggle] = useState(false);
  const [updateTitle, setUpdateTitle] = useState(title);

  const handleUpdate = () => {
    update(id, updateTitle);
    setToggle(false);
  };

  return (
    <>
      {toggle ? (
        <>
          <br />

          <input
            type="text"
            value={updateTitle}
            onChange={(e) => setUpdateTitle(e.target.value)}
          />

          <br />
          <button onClick={handleUpdate}>update todo</button>
          <br />
        </>
      ) : (
        <>
          <br />

          <h4
            style={
              completed
                ? { backgroundColor: "red" }
                : { backgroundColor: "grey" }
            }
          >
            {title}
          </h4>
          <br />
          <br />
          <button onClick={deleteTodo}>delete single todo</button>
          <button onClick={toggleTodo}>toggle</button>
          <button onClick={() => setToggle(true)}>toggle title</button>
        </>
      )}
    </>
  );
};

export default Todo;
