import carData from "../cars.json";
import Footer from "./Footer.js";
import React, { useState } from "react";

function CarCard({ selectedMake, minPrice, maxPrice }) {
  const [selectedCar, setSelectedCar] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleViewCar = (car) => {
    setSelectedCar(car);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

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
                className="max-w-sm bg-neutral-300	shadow-lg rounded-lg overflow-hidden mx-2 mx-auto w-full"
                key={car.id}
              >
                <img
                  className="w-full h-64 object-cover mt-1"
                  src={car.image}
                  alt="Car"
                />
                <div className="p-4">
                  <h2 className="text-3xl font-semibold mb-2">{car.name}</h2>
                  <h3>{car.model}</h3>
                  <ul className="flex justify-evenly pt-5 text-center">
                    <li className="rounded-full border-rose-500 border-solid border-2 p-2">
                      {car.Year}
                    </li>
                    <li className="rounded-full border-rose-500 border-solid border-2 p-2">
                      {car.transmission}
                    </li>
                    <li className="rounded-full border-rose-500 border-solid border-2 p-2">
                      {car.fuel}
                    </li>
                    <li className="rounded-full border-rose-500 border-solid border-2 p-2">
                      {car.color}
                    </li>
                  </ul>
                </div>
                <div className="p-2 flex justify-evenly items-center">
                  <h1 className="text-black text-xl">
                    Price: £{car.Price}/month
                  </h1>
                  <button
                    className="bg-red-500 text-black px-4 py-2 rounded-lg"
                    onClick={() => handleViewCar(car)}
                  >
                    View Car
                  </button>
                </div>
              </div>
            );
          })}
      </div>
      {showModal && selectedCar && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
            </div>
            <div
              className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all w-1/2 mx-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div class="grid grid-cols-2 grid-rows-2 gap-4 ">
                <div class="bg-gray-500 col-span-3 row-span-3">
                  {" "}
                  <img
                    className="w-full h-full object-contain mt-1"
                    src={selectedCar.image}
                    alt="Car"
                  />
                </div>
                <div class="bg-red-500">
                  {" "}
                  <img
                    className="w-full object-contain mt-1"
                    src={selectedCar.image2}
                    alt="Car"
                  />
                </div>
                <div class="bg-blue-500">
                  {" "}
                  <img
                    className="w-full object-contain mt-1"
                    src={selectedCar.image3}
                    alt="Car"
                  />
                </div>
              </div>

              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex justify-between">
                <div className="text-left">
                  <h2 className="text-xl font-black">
                    {selectedCar.name} {selectedCar.model}
                  </h2>
                  <p className="font-black">{selectedCar.Year}</p>
                  <p className="font-black">{selectedCar.mileage} miles</p>
                  <p className="font-black">{selectedCar.fuel}</p>
                  <p className="font-black">{selectedCar.transmission}</p>
                </div>

                <div className="md:mr-12 self-center">
                  <p className="text-2xl font-black">
                    £{selectedCar.Price} <span className="text-lg">/month</span>
                  </p>

                  <button
                    type="button"
                    className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4"
                    onClick={closeModal}
                  >
                    Buy Now
                  </button>
                </div>

                {/* <h3>{selectedCar.model}</h3>
                <p>Color: {selectedCar.color}</p>
                <p>Doors: {selectedCar.Year}</p>
                <p>Seats: {selectedCar.mileage}</p>
                <h4 className="text-xl text-bold">Features:</h4>
                <ul>
                  {selectedCar.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul> */}
              </div>
              <h2 className="font-bold text-xl text-left px-4">
                Your car overview
              </h2>

              <div className="flex justify-between mt-6 px-4">
                <div className="mechanical">
                  <h1 className="text-xl font-black">Mechanical</h1>
                  <p>Transmission: {selectedCar.transmission}</p>
                  <p>Mileage: {selectedCar.mileage}</p>
                  <p>Engine: {selectedCar.engine}</p>
                  <p>Fuel: {selectedCar.fuel}</p>
                  <p>Drive type: {selectedCar.drivetype}</p>
                </div>

                <div className="trim">
                  <h1 className="text-xl font-black">Trim</h1>
                  <p>Body: {selectedCar.body}</p>
                  <p>Color: {selectedCar.color}</p>
                  <p>Doors: {selectedCar.doors}</p>
                  <p>Seats: {selectedCar.seats}</p>
                </div>

                <div className="features">
                  <h1 className="text-xl font-black">Key features include</h1>
                  <ul>
                    {selectedCar.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default CarCard;
