import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFavJokes,
  deleteJoke,
  deleteAllJokes,
  addJoke,
  updateJoke,
  fetchJokes,
  makeFavourite,
} from "../features/jokes/jokesSlice";

import Joke from "./Joke";

const FavouritesList = () => {
  const [joke, setTodoTitle] = useState("");
  const dispatch = useDispatch();
  const jokes = useSelector(selectFavJokes);

  const handlSubmit = () => {
    dispatch(addJoke(joke));
  };

  const update = (id, joke) => {
    dispatch(updateJoke({ id, joke }));
  };

  const favourite = (id) => {
    dispatch(makeFavourite(id));
  };

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
            deleteTodo={() => dispatch(deleteJoke(joke.id))}
            favourite={favourite}
            update={update}
          />
        ))}

      <br />
      <br />
      <br />

      {jokes.length === 0 ? (
        "no more jokes"
      ) : (
        <button onClick={() => dispatch(deleteAllJokes())}>
          delete all jokes
        </button>
      )}
    </>
  );
};

export default FavouritesList;
