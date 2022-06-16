import React from "react";
import ProductList from "./components/ProductList";
import Checkout from "./components/Checkout";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/checkout">Checkout</Link>
          </nav>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
