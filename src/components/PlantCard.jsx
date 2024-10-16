import React, { useState } from "react";

function PlantCard({ plant, onUpdatePrice, onDeletePlant }) {
  const [soldOut, setSoldOut] = useState(false);
  const [price, setPrice] = useState(plant.price);

  function toggleSoldOut() {
    setSoldOut(!soldOut); // Toggle the sold-out state
  }

  function handlePriceChange(e) {
    setPrice(e.target.value);
  }

  function updatePrice() {
    onUpdatePrice(plant.id, parseFloat(price)); // Update the price
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${price}</p>

      <input
        type="number"
        step="0.01"
        value={price}
        onChange={handlePriceChange}
      />
      <button onClick={updatePrice} className="primary">Update Price</button>

      <button onClick={toggleSoldOut} className={soldOut ? "out-of-stock" : "primary"}>
        {soldOut ? "Out of Stock" : "In Stock"}
      </button>

      <button className="delete" onClick={() => onDeletePlant(plant.id)}>
        Delete Plant
      </button>
    </li>
  );
}

export default PlantCard;


