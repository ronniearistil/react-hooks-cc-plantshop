// Core Deliverables: Import React and PlantCard component
import React from "react";
import PlantCard from "./PlantCard";

// Core Deliverables: Display a list of plants
function PlantList({ plants, onUpdatePrice, onDeletePlant }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard 
          key={plant.id} 
          plant={plant} 
          onUpdatePrice={onUpdatePrice} // Advanced Deliverables
          onDeletePlant={onDeletePlant} // Advanced Deliverables
        />
      ))}
    </ul>
  );
}

export default PlantList;




