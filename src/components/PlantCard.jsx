// Core Deliverables: Import React and useState
import React, { useState } from "react";

function PlantCard({ plant, onUpdatePrice, onDeletePlant }) {
  // Core Deliverables: Track sold-out state
  const [soldOut, setSoldOut] = useState(false);

  // Advanced Deliverables: Track the price input value
  const [price, setPrice] = useState(plant.price);

  // Core Deliverables: Toggle sold-out state when the button is clicked
  const toggleSoldOut = () => setSoldOut((prev) => !prev);

  // Advanced Deliverables: Update price input as user types
  const handlePriceChange = (e) => setPrice(e.target.value);

  // Advanced Deliverables: Trigger price update from the parent component
  const updatePrice = () => {
    if (onUpdatePrice) {
      onUpdatePrice(plant.id, parseFloat(price));
    }
  };

  // Advanced Deliverables: Trigger plant deletion from the parent component
  const deletePlant = () => {
    if (onDeletePlant) {
      onDeletePlant(plant.id);
    }
  };

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${price}</p>

      {/* Advanced Deliverables: Price input to allow users to modify the plant's price */}
      <input
        type="number"
        step="0.01"
        value={price}
        onChange={handlePriceChange}
      />
      <button className="primary" onClick={updatePrice}>
        Update Price
      </button>

      {/* Core Deliverables: Toggle sold-out state */}
      <button
        className={soldOut ? "out-of-stock" : "primary"}
        onClick={toggleSoldOut}
      >
        {soldOut ? "Out of Stock" : "In Stock"}
      </button>

      {/* Advanced Deliverables: Delete the plant */}
      <button className="delete" onClick={deletePlant}>
        Delete Plant
      </button>
    </li>
  );
}

export default PlantCard;


