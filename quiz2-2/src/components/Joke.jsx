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
          <button onClick={handleUpdate}>Update</button>
          <br />
        </>
      ) : (
        <>
          <br />

          <h1>{joke}</h1>
          <button onClick={deleteJoke}>Delete</button>
          {isFavourite === undefined ? (
            <button onClick={handleFavourite}>Add To Favourites</button>
          ): <button onClick={handleFavourite}>Remove from Favourites</button>}
          <button onClick={() => setToggle(true)}>Change</button>
        </>
      )}
    </>
  );
};

export default Joke;
