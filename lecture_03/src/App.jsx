import { useEffect } from "react";
import Counter from "./components/Counter";
import Film from "./components/Film";

import { FilmProvider } from "./context/FilmContext";

const App = () => {
  useEffect(() => {
    console.log("hello world");
  }, []);

  return (
    <div>
      <FilmProvider>
        <Counter />
        <Film />

        {/* {films.map((film, idx) => (
          <Film
            filmName={film.filmName}
            releaseYear={film.releaseYear}
            money={film.money}
            key={idx}
          />
        ))} */}
      </FilmProvider>
    </div>
  );
};

export default App;
