import React, { useState, useEffect } from "react";

function NewPlantForm() {
  const [newPlantName, setNewPlantName] = useState("");
  const [newPlantImage, setNewPlantImage] = useState("");
  const [newPlantPrice, setNewPlantPrice] = useState("");
  const [newPlantId, setNewPlantId] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          name: newPlantName,
          image: newPlantImage,
          price: newPlantPrice,
          
         }),
      };
      fetch("http://localhost:6001/plants", requestOptions)
        .then((response) => response.json())
        .then((data) => setNewPlantId(data.id));
    }
    
  
  

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input
          onChange={(e) => setNewPlantName(e.target.value)}
          type="text"
          name="name"
          placeholder="Plant name"
        />
        <input
          onChange={(e) => setNewPlantImage(e.target.value)}
          type="text"
          name="image"
          placeholder="Image URL"
        />
        <input
          onChange={(e) => setNewPlantPrice(e.target.value)}
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
        />
        <button onSubmit={handleSubmit} type="submit">
          Add Plant
        </button>
      </form>
    </div>
  );
}

export default NewPlantForm;
