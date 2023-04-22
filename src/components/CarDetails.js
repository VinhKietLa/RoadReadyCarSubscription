import React, { useState, useEffect } from "react";
import carData from "../cars.json";
import { useParams } from "react-router-dom";
import Footer from "./Footer.js";

function CarDetails() {
  // initialises state variable called selectedCar with setSelectedCar function to update it//
  const [selectedCar, setSelectedCar] = useState(null);

  // Uses useParams Hook from React-Router-Dom to get the 'id' of the car from the URL, it is deconstructed to extract the 'id' {}
  const { id } = useParams();

  //  Hook is used to perform side effects (such as fetching data) in functional components. The function passed to useEffect will be called whenever any of the variables listed in the dependency array (in this case, [id]) change. In this case, it will be called once when the component mounts, and the id in the URL changes.
  useEffect(() => {
    // This code searches for a car in the carData with an id that matches the id from the URL, parseInt is used as the id will be a string when deconstructed from the URL.
    const car = carData.find((car) => car.id === parseInt(id));
    // the selectedCar variable is updated with the new car id.
    setSelectedCar(car);
  }, [id]);

  // if there is no matching Ids an error message will appear.
  if (!selectedCar) {
    return <div>Sorry we ran into an issue ERROR 404</div>;
  }

  return (
    <>
      <div className="container mx-auto mt-20">
        <div className="grid grid-cols-3 grid-rows-2 gap-2">
          <div className="bg-gray-500 col-span-2 row-span-2">
            <img
              className="w-full object-contain mt-1"
              src={selectedCar.image}
              alt="Car"
            />
          </div>
          <div className="bg-red-500 col-span-1 row-span-1">
            <img
              className="w-full object-contain mt-1"
              src={selectedCar.image2}
              alt="Car"
            />
          </div>
          <div className="bg-blue-500 col-span-1 row-span-1">
            <img
              className="w-full object-contain mt-1"
              src={selectedCar.image3}
              alt="Car"
            />
          </div>
        </div>

        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex flex-col md:flex-row justify-between">
          <div className="text-left ">
            <h2 className="text-3xl font-black">
              {selectedCar.name} {selectedCar.model}
            </h2>
            <p className="font-black">{selectedCar.Year}</p>
            <p className="font-black">{selectedCar.mileage} miles</p>
            <p className="font-black">{selectedCar.fuel}</p>
            <p className="font-black">{selectedCar.transmission}</p>
          </div>

          <div className="md:mr-12 self-center mt-4 w-1/2">
            <p className="text-4xl font-black">
              £{selectedCar.Price} <span className="text-lg">/month</span>
            </p>

            <button
              type="button"
              className="bg-red-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mt-4 w-1/2 h-16"
            >
              Buy Now
            </button>
          </div>
        </div>
        <h2 className="font-bold text-2xl text-left px-4">Your car overview</h2>

        <div className="flex justify-between mt-6 px-4 flex flex-col md:flex-row">
          <div className="flex justify-between mt-6 px-4 flex flex-col md:flex-row">
            <div className="mechanical">
              <h1 className="text-xl font-black mt-4 mb-4 border-red-500 border-x-2">
                Mechanical
              </h1>
              <p>Transmission: {selectedCar.transmission}</p>
              <p>Mileage: {selectedCar.mileage}</p>
              <p>Engine: {selectedCar.engine}</p>
            </div>

            <div className="trim">
              <h1 className="text-xl font-black mt-4 mb-4 border-red-500 border-x-2">
                Trim
              </h1>
              <p>Body: {selectedCar.body}</p>
              <p>Color: {selectedCar.color}</p>
              <p>Doors: {selectedCar.doors}</p>
              <p>Seats: {selectedCar.seats}</p>
            </div>

            <div className="features">
              <h1 className="text-xl font-black mt-4 mb-4 border-red-500 border-x-2 px-4">
                Key features include
              </h1>
              <ul>
                {selectedCar.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CarDetails;
