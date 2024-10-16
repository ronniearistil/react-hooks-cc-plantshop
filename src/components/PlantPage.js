import React, { useContext } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { PlantContext } from "./PlantContext"; // Import the context

function PlantPage() {
  // Core Deliverables: Access plants and addPlant from context
  const { plants, addPlant, searchTerm, setSearchTerm, updatePlantPrice, deletePlant } = useContext(PlantContext);

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


