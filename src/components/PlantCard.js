import React, { useState } from "react";

function PlantCard({ name, image, price }) {
  const [inStock, setInStock] = useState(true);

  const handleClickStock = () => {
    setInStock(!inStock);
  };
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      {inStock ? (
        <button onClick={handleClickStock} className="primary">
          In Stock
        </button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
