// Core Deliverables: Import React
import React from "react";

// Core Deliverables: Search component for filtering plants
function Search({ onSearch }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={onSearch} // Core Deliverables: Call onSearch when input changes
      />
    </div>
  );
}

export default Search;


