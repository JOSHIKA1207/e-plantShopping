import React, { useState } from "react";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  const handleContinueShopping = () => {
    setShowProducts(true);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <h2>e-PlantShopping 🌱</h2>
      </nav>

      {!showProducts ? (
        <AboutUs onContinueShopping={handleContinueShopping} />
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
