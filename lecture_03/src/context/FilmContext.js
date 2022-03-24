import { createContext } from "react";

export const FilmContext = createContext();

export const FilmProvider = ({ children }) => {
    const films = [
        { filmName: "Batman", releaseYear: 2022, money: 1000000 },
        { filmName: "Spider Man", releaseYear: 2022, money: 6000000 },
        { filmName: "MR. Nobody", releaseYear: 2007, money: 6000000 },
    ];

    return (
        <FilmContext.Provider value={films}>
            {children}
        </FilmContext.Provider>
    )
}