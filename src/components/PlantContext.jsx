import React, { createContext, useState, useEffect } from 'react';

//  This creates the context
const PlantContext = createContext();

// This creates the provider component
function PlantProvider({ children }) {
  const [plants, setPlants] = useState([]); //State to hold plants
  const [searchTerm, setSearchTerm] = useState(""); //State for search term

  // Core Deliverables
  // Fetch the plants from the server
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  // Core Deliverables
  // Function to add a new plant
  const addPlant = (newPlant) => {
    setPlants([...plants, newPlant]);
  };

  // Advanced Deliverables
  // Function to update a plant's price
  const updatePlantPrice = (id, newPrice) => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: newPrice }),
    })
      .then((res) => res.json())
      .then((updatedPlant) => {
        const updatedPlants = plants.map((plant) =>
          plant.id === id ? updatedPlant : plant
        );
        setPlants(updatedPlants);
      });
  };

  // Advanced Deliverables
  // Function to delete a plant
  const deletePlant = (id) => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    }).then(() => {
      const updatedPlants = plants.filter((plant) => plant.id !== id);
      setPlants(updatedPlants);
    });
  };

  // Provide the state and functions to children components
  return (
    <PlantContext.Provider
      value={{
        plants,
        addPlant, // Core Deliverables
        updatePlantPrice, // Advanced Deliverables
        deletePlant, // Advanced Deliverables
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </PlantContext.Provider>
  );
}

export { PlantContext, PlantProvider };
