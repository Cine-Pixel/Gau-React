import React from "react";
import { useContext } from "react";
import { FilmContext } from "../context/FilmContext";

const Film = () => {
  const films = useContext(FilmContext);

  return (
    <>
      {films.map((film, idx) => (
        <div key={idx}>
          <h1>{film.filmName}</h1>
          <p>{film.releaseYear}</p>
          <p>{film.money}</p>
        </div>
      ))}
    </>
  );
};

export default Film;
