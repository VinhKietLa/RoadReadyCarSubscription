import carData from "../cars.json";
import React, { useState, useEffect } from "react";

function CarCard() {
  const [cars, setCars] = useState(carData);

  return (
    <div className="container mt-5">
    <div className="max-w-sm mx-auto bg-neutral-300	 shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-64 object-cover mt-1"
        src="/assets/cars/audi/A1/audiA1-1.jpg"
        alt="Card image"
      />
      <div className="p-4">
        <h2 className="text-3xl font-semibold mb-2">Audi</h2>
        <h3>A1 35 TFSI Black Edition 5DR S Tronic</h3>
        <ul className="flex justify-evenly pt-5">
          <li className="rounded-full border-rose-500 border-solid border-2 p-2">2021</li>
          <li className="rounded-full border-rose-500 border-solid border-2 p-2">Automatic</li>
          <li className="rounded-full border-rose-500 border-solid border-2 p-2">Petrol</li>
          <li className="rounded-full border-rose-500 border-solid border-2 p-2">Blue</li>
        </ul>
      </div>
      <div className="p-4 flex justify-evenly items-center">
        <h1 className="text-black text-2xl">Price: £399/ per month</h1>

        <button className="bg-red-500 text-black px-4 py-2 rounded-lg">
          View Car
        </button>
      </div>
    </div>
    </div>
  );
}

export default CarCard;
