import React, { useState } from "react";
import ProductList from "./ProductList";
import "./App.css";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStarted = () => {
    setShowProducts(true);
  };

  return (
    <div>
      {!showProducts ? (
        <div className="background-image">
          <div className="landing-content">
            <h1>Welcome to Paradise Nursery</h1>

            <p>
              Paradise Nursery offers a wide variety of beautiful indoor and
              outdoor plants to brighten your home and workspace.
            </p>

            <button
              className="get-started-btn"
              onClick={handleGetStarted}
            >
              Get Started
            </button>
          </div>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
