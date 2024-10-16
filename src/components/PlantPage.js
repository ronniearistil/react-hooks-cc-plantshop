// Core Deliverables: Import React and necessary components
import React, { useContext } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { PlantContext } from "./PlantContext"; // Import the context

function PlantPage() {
  // Core Deliverables: Access all functions and state from context
  const {
    plants, 
    addPlant, 
    searchTerm, 
    setSearchTerm, 
    updatePlantPrice, // Advanced Deliverables: Price update function
    deletePlant, // Advanced Deliverables: Delete plant function
  } = useContext(PlantContext);

  // Core Deliverables: Filter the plants based on the search term
  const displayedPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={addPlant} /> {/* Core Deliverables */}
      <Search onSearch={setSearchTerm} /> {/* Core Deliverables */}
      <PlantList
        plants={displayedPlants} 
        onUpdatePrice={updatePlantPrice} // Advanced Deliverables
        onDeletePlant={deletePlant} // Advanced Deliverables
      />
    </main>
  );
}

export default PlantPage;




