// Core Deliverables: Import React and useState
import React, { useState } from "react";

function PlantCard({ plant, onUpdatePrice, onDeletePlant }) {
  const [soldOut, setSoldOut] = useState(false); // Core Deliverables: Track sold-out status
  const [price, setPrice] = useState(plant.price); // Advanced Deliverables: Track price changes

  // Core Deliverables: Toggle sold-out status
  const toggleSoldOut = () => {
    setSoldOut((prevStatus) => !prevStatus); // Toggle the state
  };

  // Advanced Deliverables: Handle price input changes
  const handlePriceChange = (e) => {
    setPrice(e.target.value); // Update the price input value
  };

  // Advanced Deliverables: Trigger price update via onClick
  const updatePrice = () => {
    if (onUpdatePrice) {
      onUpdatePrice(plant.id, parseFloat(price)); // Call the function from props
    }
  };

  // Advanced Deliverables: Trigger plant deletion via onClick
  const deletePlant = () => {
    if (onDeletePlant) {
      onDeletePlant(plant.id); // Call the function from props
    }
  };

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${price}</p>

      {/* Advanced Deliverables: Input to change price */}
      <input
        type="number"
        step="0.01"
        value={price}
        onChange={handlePriceChange}
      />
      <button className="primary" onClick={updatePrice}>
        Update Price
      </button>

      {/* Core Deliverables: Button to toggle sold-out status */}
      <button
        onClick={toggleSoldOut}
        className={soldOut ? "out-of-stock" : "primary"}
      >
        {soldOut ? "Out of Stock" : "In Stock"}
      </button>

      {/* Advanced Deliverables: Button to delete the plant */}
      <button className="delete" onClick={deletePlant}>
        Delete Plant
      </button>
    </li>
  );
}

export default PlantCard;



