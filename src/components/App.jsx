// Core Deliverables: Import React, components, and PlantProvider
import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import { PlantProvider } from "./PlantContext"; // Import the context provider

// Core Deliverables: Wrap the app with PlantProvider to give access to context
function App() {
  return (
    <PlantProvider> {/* Core Deliverables */}
      <div className="app">
        <Header /> {/* Core Deliverables */}
        <PlantPage /> {/* Core Deliverables */}
      </div>
    </PlantProvider>
  );
}

export default App;