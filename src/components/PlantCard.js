import React, { useState } from "react";

// Core Deliverables: Render plant details and stock status
function PlantCard({ plant, onUpdatePrice, onDeletePlant }) {
  const [soldOut, setSoldOut] = useState(false);
  const [newPrice, setNewPrice] = useState(plant.price); // Advanced: State for price update

  // Core Deliverables: Toggle sold out status
  const handleSoldOutClick = () => {
    setSoldOut(!soldOut);
  };

  // Advanced: Handle price change
  const handlePriceChange = (e) => {
    setNewPrice(e.target.value);
  };

  // Advanced: Submit new price
  const handlePriceSubmit = () => {
    onUpdatePrice(plant.id, newPrice);
  };

  // Advanced: Handle delete click
  const handleDeleteClick = () => {
    onDeletePlant(plant.id);
  };

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      <input
        type="number"
        value={newPrice}
        onChange={handlePriceChange}
        step="0.01"
        className="price-input"
      />
      <button onClick={handlePriceSubmit} className="primary">Update Price</button> {/* Advanced: Update price */}
      {soldOut ? (
        <button className="out-of-stock" onClick={handleSoldOutClick}>Out of Stock</button>
      ) : (
        <button className="primary" onClick={handleSoldOutClick}>In Stock</button>
      )}
      <button onClick={handleDeleteClick}>Delete Plant</button> {/* Advanced: Delete plant */}
    </li>
  );
}

export default PlantCard;

