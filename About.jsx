import React from "react";
import "./App.css";

function AboutUs({ onContinueShopping }) {
  return (
    <div className="about-container">
      <h1>Welcome to e-PlantShopping 🌱</h1>

      <p>
        At e-PlantShopping, we believe that plants bring life, beauty, and
        freshness to every home and workspace. Our mission is to make plant
        shopping simple, enjoyable, and accessible for everyone.
      </p>

      <p>
        We offer a wide variety of indoor and outdoor plants, including
        flowering plants, succulents, air-purifying plants, and decorative
        greenery. Each plant is carefully selected to ensure quality and
        customer satisfaction.
      </p>

      <p>
        Whether you are a beginner or an experienced plant enthusiast,
        e-PlantShopping has something for you. Explore our collection and find
        the perfect plants to brighten your surroundings.
      </p>

      <button
        className="continue-btn"
        onClick={onContinueShopping}
      >
        Get Started
      </button>
    </div>
  );
}

export default AboutUs;
