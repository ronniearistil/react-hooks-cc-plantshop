// Core Deliverables: Import React and useState
import React, { useState } from "react";

function PlantCard({ plant, onUpdatePrice, onDeletePlant }) {
  const [soldOut, setSoldOut] = useState(false); // Core Deliverables: Track sold-out state
  const [price, setPrice] = useState(plant.price); // Advanced Deliverables: Track price input

  // Core Deliverables: Toggle sold-out state
  const toggleSoldOut = () => setSoldOut((prevState) => !prevState);

  // Advanced Deliverables: Handle price input change
  const handlePriceChange = (e) => setPrice(e.target.value);

  // Advanced Deliverables: Update plant price
  const updatePrice = () => onUpdatePrice(plant.id, parseFloat(price));

  // Advanced Deliverables: Delete plant
  const deletePlant = () => onDeletePlant(plant.id);

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${price}</p>

      {/* Advanced Deliverables: Price input */}
      <input
        type="number"
        step="0.01"
        value={price}
        onChange={handlePriceChange}
      />
      <button className="primary" onClick={updatePrice}>
        Update Price
      </button>

      {/* Core Deliverables: Toggle sold-out button */}
      <button 
        className={soldOut ? "out-of-stock" : "primary"} 
        onClick={toggleSoldOut}
      >
        {soldOut ? "Out of Stock" : "In Stock"}
      </button>

      {/* Advanced Deliverables: Delete button */}
      <button className="delete" onClick={deletePlant}>
        Delete Plant
      </button>
    </li>
  );
}

export default PlantCard;

