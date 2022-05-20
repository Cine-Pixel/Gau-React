import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAll,
  deleteOne,
  deleteAll,
  add,
  update,
  getJokes,
  addFavourite,
} from "../redux/slices/jokesSlice";

import Joke from "./Joke";

const JokesList = () => {
  const [joke, setTodoTitle] = useState("");
  const dispatch = useDispatch();
  const jokes = useSelector(selectAll);

  const handlSubmit = () => {
    dispatch(add(joke));
  };

  const handleUpdate = (id, joke) => {
    dispatch(update({ id, joke }));
  };

  const favourite = (id) => {
    dispatch(addFavourite(id));
  };

  useEffect(() => {
    dispatch(getJokes());
  }, []);

  return (
    <>
      <h1>Jokes</h1>

      <input
        type="text"
        value={joke}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <br />
      <button onClick={handlSubmit}>add joke</button>
      <br />
      <br />
      {jokes &&
        jokes.map((joke) => (
          <Joke
            key={joke.id}
            id={joke.id}
            joke={joke.joke}
            isFavourite={joke.favourite}
            deleteJoke={() => dispatch(deleteOne(joke.id))}
            favourite={favourite}
            update={handleUpdate}
          />
        ))}

      <br />
      <br />
      <br />

      {jokes.length === 0 ? (
        "no more jokes"
      ) : (
        <button onClick={() => dispatch(deleteAll())}>
          Clear
        </button>
      )}
    </>
  );
};

export default JokesList;
