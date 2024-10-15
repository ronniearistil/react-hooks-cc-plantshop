import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

// Core Deliverables: App component to handle state and fetch plants
function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Core Deliverables: Fetch plant data from the backend
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  // Core Deliverables: Add new plant to the state
  const addPlant = (newPlant) => {
    setPlants([...plants, newPlant]);
  };

  // Core Deliverables: Handle search input and filter plants
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Advanced: Update the plant price
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

  // Advanced: Delete a plant
  const deletePlant = (id) => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    }).then(() => {
      const updatedPlants = plants.filter((plant) => plant.id !== id);
      setPlants(updatedPlants);
    });
  };

  // Core Deliverables: Filter plants by search term
  const displayedPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <PlantPage
        plants={displayedPlants}
        onAddPlant={addPlant}
        onSearch={handleSearch}
        onUpdatePrice={updatePlantPrice} // Advanced: Pass down the update price function
        onDeletePlant={deletePlant} // Advanced: Pass down the delete plant function
      />
    </div>
  );
}

export default App;
