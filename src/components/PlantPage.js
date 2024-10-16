// Core Deliverables: Import React and components
import React, { useContext, useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { PlantContext } from "./PlantContext"; // Import context

function PlantPage() {
  const { plants, addPlant, updatePlantPrice, deletePlant } = useContext(PlantContext);

  // Core Deliverables: Manage search term locally within this component
  const [searchTerm, setSearchTerm] = useState(""); 

  // Core Deliverables: Filter plants based on search term
  const displayedPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Core Deliverables: Ensure search input updates correctly without triggering disappearance
  const handleSearch = (e) => setSearchTerm(e.target.value);

  return (
    <main>
      <NewPlantForm onAddPlant={addPlant} /> {/* Core Deliverables */}
      <Search onSearch={handleSearch} /> {/* Core Deliverables */}
      <PlantList
        plants={displayedPlants} 
        onUpdatePrice={updatePlantPrice} // Advanced Deliverables
        onDeletePlant={deletePlant} // Advanced Deliverables
      />
    </main>
  );
}

export default PlantPage;





