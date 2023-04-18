import React, { useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  console.log({ plants });
  const renderPlantList = plants.map((plant) => {
    return (
      <PlantCard
        key={plant.id}
        name={plant.name}
        image={plant.image}
        price={plant.price}
      />
    );
  });

  return <ul className="cards">{renderPlantList}</ul>;
}

export default PlantList;
