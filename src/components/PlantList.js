import React from "react";
import PlantCard from "./PlantCard";

// Core Deliverables: Map over plants array and render PlantCard components
function PlantList({ plants, onUpdatePrice, onDeletePlant }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onUpdatePrice={onUpdatePrice} // Advanced: Pass down update function
          onDeletePlant={onDeletePlant} // Advanced: Pass down delete function
        />
      ))}
    </ul>
  );
}

export default PlantList;


