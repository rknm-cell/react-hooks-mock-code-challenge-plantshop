import React, { useState } from "react";

function Search() {

  const [searchValue, setSearchValue] = useState("")

  function handleChange(e) {
    setSearchValue({value: e.target.value});
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default Search;
