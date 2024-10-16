import React, { useState, useContext } from "react";
import { PlantContext } from "./PlantContext"; // Core Deliverables: Import context

function NewPlantForm() {
  // Core Deliverables: State for form data and context
  const [formData, setFormData] = useState({ name: "", image: "", price: "" });

  // Advanced Deliverables: State for error handling and form status
  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState("");

  const { addPlant } = useContext(PlantContext); // Core Deliverables: Use context

  // Advanced Deliverables: Function to validate URLs
  const isValidUrl = (url) => /^https?:\/\//.test(url);

  // Advanced Deliverables: Validation logic before form submission
  const validate = () => {
    const newErrors = {};

    // Validate plant name
    if (!formData.name) newErrors.name = "Plant name is required.";
    else if (formData.name.length > 30) newErrors.name = "Max 30 characters.";

    // Validate image URL
    if (!formData.image) newErrors.image = "Image URL is required.";
    else if (!isValidUrl(formData.image)) newErrors.image = "Invalid URL format.";

    // Validate price
    if (!formData.price || formData.price <= 0)
      newErrors.price = "Positive price required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Core Deliverables: Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormStatus(""); // Clear form-level status on change
  };

  // Core Deliverables: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return setFormStatus("Please fix the errors below."); // Stop if errors

    // Core Deliverables: Submit data to the server
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newPlant) => {
        addPlant(newPlant); // Core Deliverables: Add plant to context
        setFormData({ name: "", image: "", price: "" }); // Clear form
        setErrors({}); // Clear errors
        setFormStatus("Plant successfully added!"); // Success message
      })
      .catch(() => setFormStatus("Error adding plant. Please try again.")); // Error message
  };

  return (
    <div className="new-plant-form">
      <h2>Add a New Plant</h2>

      {/* Core Deliverables: Form for adding new plant */}
      <form onSubmit={handleSubmit}>
        {/* Core Deliverables: Plant name input */}
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>} {/* Error Message */}

        {/* Core Deliverables: Image URL input */}
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        {errors.image && <p className="error">{errors.image}</p>} {/* Error Message */}

        {/* Core Deliverables: Price input */}
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        {errors.price && <p className="error">{errors.price}</p>} {/* Error Message */}

        <button type="submit">Add Plant</button> {/* Submit Button */}
      </form>

      {/* Advanced Deliverables: Form-level status messages */}
      {formStatus && <p className="form-status">{formStatus}</p>}
    </div>
  );
}

export default NewPlantForm;

