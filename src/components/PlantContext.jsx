// Core Deliverables: Import React, createContext, and hooks
import React, { createContext, useState, useEffect } from "react";

const PlantContext = createContext(); // Core Deliverables: Create context

function PlantProvider({ children }) {
  const [plants, setPlants] = useState([]); // Core Deliverables: Manage plant state
  const [searchTerm, setSearchTerm] = useState(""); // Core Deliverables: Manage search term

  // Core Deliverables: Fetch plants when app loads
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  const addPlant = (newPlant) => setPlants([...plants, newPlant]); // Core Deliverables: Add new plant

  // Advanced Deliverables: Update plant price
  const updatePlantPrice = (id, newPrice) => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: newPrice }),
    })
      .then((res) => res.json())
      .then((updatedPlant) => {
        setPlants(plants.map((plant) => (plant.id === id ? updatedPlant : plant)));
      });
  };

  // Advanced Deliverables: Delete a plant
  const deletePlant = (id) => {
    fetch(`http://localhost:6001/plants/${id}`, { method: "DELETE" }).then(() => {
      setPlants(plants.filter((plant) => plant.id !== id));
    });
  };

  return (
    <PlantContext.Provider
      value={{ plants, addPlant, updatePlantPrice, deletePlant, searchTerm, setSearchTerm }}
    >
      {children}
    </PlantContext.Provider>
  );
}

export { PlantContext, PlantProvider };

