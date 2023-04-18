import React, { useState } from "react";
import CarCard from "./CarCard";
import "../index.css";
import ModalFilter from "./Modal";

function Browse() {
  const [selectedMake, setSelectedMake] = useState("Select");
  const [minPrice, setMinPrice] = useState("Min");
  const [maxPrice, setMaxPrice] = useState("Max");

  return (
    <>
      <div
        className=" m-auto h-96 mt-20 bg-cover w-full bg-center bg-no-repeat mb-0"
        style={{ backgroundImage: "url('./assets/browseAudi.png')" }}
      >
        <div className="text-center text-5xl text-white pt-16">
          <h1>Browse Our Car Range</h1>
        </div>
        <h2 className=" w-1/3 text-white mt-8 ml-6">
          Choose from our range of vehicles from hatchbacks to convertibles we
          have you covered! Don’t see a car you want? Pop us an email on
          <span className="text-red-500"> hello@roadready.com</span>
        </h2>
      </div>

      <ModalFilter
        selectedMake={selectedMake}
        setSelectedMake={setSelectedMake}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />
      <CarCard selectedMake={selectedMake} minPrice={minPrice} maxPrice={maxPrice}/>
    </>
  );
}

export default Browse;
