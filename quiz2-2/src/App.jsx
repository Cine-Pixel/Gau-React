import React from "react";
import JokesList from "./components/JokesList";
import FavouritesList from "./components/FavouritesList";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/">jokes</Link>
            <Link to="/favourites">favourites</Link>
          </nav>
          <Routes>
            <Route path="/favourites" element={<FavouritesList />} />
            <Route path="/" element={<JokesList />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
