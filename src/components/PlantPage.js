import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

// Core Deliverables: Pass props to the child components
function PlantPage({ plants, onAddPlant, onSearch, onUpdatePrice, onDeletePlant }) {
  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search onSearch={onSearch} />
      <PlantList
        plants={plants}
        onUpdatePrice={onUpdatePrice} // Advanced: Pass to PlantList
        onDeletePlant={onDeletePlant} // Advanced: Pass to PlantList
      />
    </main>
  );
}

export default PlantPage;


