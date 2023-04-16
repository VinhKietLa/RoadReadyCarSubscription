import React, { useState } from "react";
import carData from "../cars.json";

function ModalFilter() {
  // State and function for opening/closing modal

  const [isOpen, setIsOpen] = useState(true);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // State and function for Make dropdown

  const [makeOpen, setMakeOpen] = useState(false);

  //State for selected make

  const [selectedMake, setSelectedMake] = useState(null);

  return (
    <>
      {/* Button to open the modal */}
      <button
        onClick={openModal}
        className="bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Show filters +
      </button>

      {/* Modal container */}
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="min-h-screen px-4 text-center">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75"
              aria-hidden="true"
            ></div>

            {/* Modal content */}
            <div className="inline-block align-middle bg-white rounded p-8 my-8 text-left w-1/2 shadow-xl transform transition-all">
              <h2 className="text-2xl font-bold mb-4">Filter by</h2>

              <div className="relative inline-block">
                {/* Button to toggle the dropdown */}
                <div className="makeSelectBtn relative">
                  <p>Make</p>
                  <button
                    onClick={() => setMakeOpen(!makeOpen)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                  >
                    <span>Select</span>
                    <svg
                      className="w-4 h-4 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 12a2 2 0 100-4 2 2 0 000 4zm-7-2a7 7 0 1114 0 7 7 0 01-14 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {/* Dropdown menu */}
                  {makeOpen && (
                    <div className="absolute mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
                      <div className="py-1">
                        <button
                          onClick={() => setSelectedMake("Audi")}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                          Audi
                        </button>
                        <button
                          onClick={() => setSelectedMake("BMW")}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                          BMW
                        </button>
                        <button
                          onClick={() => setSelectedMake("Honda")}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                          Honda
                        </button>
                        <button
                          onClick={() => setSelectedMake("Mercedes")}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                          Mercedes
                        </button>
                        <button
                          onClick={() => setSelectedMake("Tesla")}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                          Tesla
                        </button>
                      </div>
                    </div>
                  )}
                  {/* Car cards component */}
                  <div className="mx-auto mt-5 flex flex-wrap justify-center mb-10">
                    {carData
                      .filter(
                        (car) =>
                          !selectedMake ||
                          car.name === selectedMake ||
                          car.model === selectedMake
                      )
                      .map((car) => {
                        return(
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
                            <h2 className="text-3xl font-semibold mb-2">
                              {car.name}
                            </h2>
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
                          <div className="p-4 flex justify-evenly items-center">
                            <h1 className="text-black text-2xl">
                              Price: £{car.Price}/ per month
                            </h1>

                            <button className="bg-red-500 text-black px-4 py-2 rounded-lg">
                              View Car
                            </button>
                          </div>
                        </div>
                        );
                      })}
                  </div>
                </div>
              </div>
              {/* Close button */}
              <button
                onClick={closeModal}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Close Filter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalFilter;
