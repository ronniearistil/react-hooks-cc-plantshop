import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import { PlantProvider } from "./PlantContext"; // Import the provider

// Core Deliverables
// Wrap the app with PlantProvider
function App() {
  return (
    <PlantProvider> {/* Core Deliverables */}
      <div className="app">
        <Header />
        <PlantPage />
      </div>
    </PlantProvider>
  );
}

export default App;
