import { useSelector, useDispatch } from "react-redux";
import {
  selectFavourites,
  deleteOne,
  update,
  addFavourite,
} from "../redux/slices/jokesSlice";

import Joke from "./Joke";

const FavouritesList = () => {
  const dispatch = useDispatch();
  const jokes = useSelector(selectFavourites);

  const handleUpdate = (id, joke) => {
    dispatch(update({ id, joke }));
  };

  const favourite = (id) => {
    dispatch(addFavourite(id));
  };

  return (
    <>
      <h1>Jokes</h1>

      {jokes &&
        jokes.map((joke) => (
          <Joke
            key={joke.id}
            id={joke.id}
            joke={joke.joke}
            deleteTodo={() => dispatch(deleteOne(joke.id))}
            favourite={favourite}
            update={handleUpdate}
          />
        ))}
    </>
  );
};

export default FavouritesList;
