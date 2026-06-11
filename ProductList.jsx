import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 15,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32f0cfd"
  },
  {
    id: 2,
    name: "Aloe Vera",
    price: 10,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  },
  {
    id: 3,
    name: "Rose",
    price: 20,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176"
  },
  {
    id: 4,
    name: "Jasmine",
    price: 18,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551"
  },
  {
    id: 5,
    name: "Cactus",
    price: 12,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1459156212016-c812468e2115"
  },
  {
    id: 6,
    name: "Echeveria",
    price: 14,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a"
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div className="product-container">
      <h1>Our Plants</h1>

      {categories.map((category) => (
        <div key={category}>
          <h2 className="category-title">{category}</h2>

          <div className="product-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div className="product-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />

                  <h3>{plant.name}</h3>

                  <p>${plant.price}</p>

                  <button
                    onClick={() => dispatch(addItem(plant))}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
