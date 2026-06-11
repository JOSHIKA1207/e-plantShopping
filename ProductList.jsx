```jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 15,
    category: "Indoor Plants",
    description: "Low-maintenance indoor plant.",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32f0cfd"
  },
  {
    id: 2,
    name: "Aloe Vera",
    price: 10,
    category: "Indoor Plants",
    description: "Medicinal succulent plant.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  },
  {
    id: 3,
    name: "Rose",
    price: 20,
    category: "Flowering Plants",
    description: "Beautiful flowering plant.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176"
  },
  {
    id: 4,
    name: "Jasmine",
    price: 18,
    category: "Flowering Plants",
    description: "Fragrant flowering plant.",
    image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551"
  },
  {
    id: 5,
    name: "Cactus",
    price: 12,
    category: "Succulents",
    description: "Drought-resistant succulent.",
    image: "https://images.unsplash.com/photo-1459156212016-c812468e2115"
  },
  {
    id: 6,
    name: "Echeveria",
    price: 14,
    category: "Succulents",
    description: "Decorative rosette succulent.",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a"
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState({});

  const categories = [...new Set(plants.map((p) => p.category))];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));

    setAddedItems({
      ...addedItems,
      [plant.id]: true
    });
  };

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
                  <img
                    src={plant.image}
                    alt={plant.name}
                  />

                  <h3>{plant.name}</h3>

                  <p>{plant.description}</p>

                  <p>Price: ${plant.price}</p>

                  <button
                    disabled={addedItems[plant.id]}
                    onClick={() =>
                      handleAddToCart(plant)
                    }
                  >
                    {addedItems[plant.id]
                      ? "Added"
                      : "Add to Cart"}
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
```
