import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({searchValue}) {
  const [plants, setPlants] = useState([]);
  

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPlants(data);
      });
  }, []);

  // const filteredPlants = plants.filter((searchValue) => {
  //   //if no input the return the original
  //   if (plants === "") {
  //     return ;
  //   } else {
  //     return plants.toLowerCase().includes(searchValue);
  //   }
  // });
  return (
    <main>
      <NewPlantForm />
      <Search  />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
