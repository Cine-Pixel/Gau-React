import { useState } from "react";

const Joke = ({ id, joke, isFavourite, deleteJoke, update, favourite }) => {
  const [toggle, setToggle] = useState(false);
  const [updateJoke, setUpdateJoke] = useState(joke);

  const handleUpdate = () => {
    update(id, updateJoke);
    setToggle(false);
  };

  const handleFavourite = () => {
    favourite(id);
  };

  return (
    <>
      {toggle ? (
        <>
          <br />

          <input
            type="text"
            value={updateJoke}
            onChange={(e) => setUpdateJoke(e.target.value)}
          />

          <br />
          <button onClick={handleUpdate}>update todo</button>
          <br />
        </>
      ) : (
        <>
          <br />

          <h4>{joke}</h4>
          <br />
          <br />
          <button onClick={deleteJoke}>delete single joke</button>
          {isFavourite === undefined && (
            <button onClick={handleFavourite}>Favourite</button>
          )}
          <button onClick={() => setToggle(true)}>toggle</button>
        </>
      )}
    </>
  );
};

export default Joke;
