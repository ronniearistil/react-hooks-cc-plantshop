import React, { useState, useContext } from "react";
import { PlantContext } from "./PlantContext"; // Import the context

// Core Deliverables: Form to add new plants
function NewPlantForm() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  });

  const { addPlant } = useContext(PlantContext); // Core Deliverables: Access addPlant from context

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Core Deliverables: POST request to add new plant
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newPlant) => {
        addPlant(newPlant); // Core Deliverables: Call addPlant from context
        setFormData({ name: "", image: "", price: "" }); // Clear form after submit
      });
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;


