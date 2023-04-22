import carData from "../cars.json";
import Footer from "./Footer.js";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function CarCard({ selectedMake, minPrice, maxPrice }) {

  return (
    <>
      <div className="mx-auto mt-5 flex flex-wrap justify-center mb-10">
        {carData
          .filter(
            (car) =>
              (!selectedMake ||
                car.name === selectedMake ||
                car.model === selectedMake) &&
              (!minPrice || car.Price >= minPrice) &&
              (!maxPrice || car.Price <= maxPrice)
          )
          .map((car) => {
            return (
              <div
                className="max-w-sm bg-neutral-300 shadow-lg rounded-lg overflow-hidden mx-2 mx-auto w-full"
                key={car.id}
              >
                <img
                  className="w-full h-64 object-cover mt-1"
                  src={car.image}
                  alt="Car"
                />
                <div className="p-4">
                  <div className="flex flex-col h-20 justify-between">
                    <h2 className="text-3xl font-semibold mb-2">{car.name}</h2>
                    <h3>{car.model}</h3>
                  </div>
                  <div className="flex flex-col h-16 justify-between">
                    <ul className="flex justify-evenly pt-4 text-center">
                      <li className="border-red-500 border-2 rounded px-3">
                        {car.Year}
                      </li>
                      <li className="border-red-500 border-2 rounded px-3">
                        {car.transmission}
                      </li>
                      <li className="border-red-500 border-2 rounded px-3">
                        {car.color}
                      </li>
                      <li className="border-red-500 border-2 rounded px-3">
                        {car.Year}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="p-2">
                  <div className="flex flex-col h-16 justify-between">
                    <h1 className="text-black text-xl">
                      Price: £{car.Price}/month
                    </h1>
                    <button
                      className="bg-red-500 hover:bg-green-600 text-black px-4 py-2 rounded-lg"
                    >
                      <NavLink
                        to={`/car-details/${car.id}`}
                        className="details-link"
                        target="_blank"
                      >
                        View Details
                      </NavLink>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <Footer />
    </>
  );
}

export default CarCard;
