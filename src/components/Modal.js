import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function ModalFilter({
  selectedMake,
  setSelectedMake,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}) {
  // State and function for opening/closing modal

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  //Function for handling the Make dropdown, sets the make as the dropdown text

  const handleMakeClick = (value) => {
    setSelectedMake(value);
    setMakeOpen(false);
  };

  // State and function for Make dropdown

  const [makeOpen, setMakeOpen] = useState(false);


  //Function for handling the Make dropdown, sets the min as the dropdown text

  const handleMinClick = (value) => {
    setMinPrice(value);
    setminPriceOpen(false);
  };

  // State and function for Min dropdown

  const [minPriceOpen, setminPriceOpen] = useState(false);

   //Function for handling the Max dropdown, sets the Max as the dropdown text

   const handleMaxClick = (value) => {
    setMaxPrice(value);
    setmaxPriceOpen(false);
  };

  // State and function for Max dropdown

  const [maxPriceOpen, setmaxPriceOpen] = useState(false);

  return (
    <>
      {/* Button to open the modal */}
      <button
        onClick={openModal}
        className="bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 ml-6 rounded"
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
            <div className="flex flex-col bg-white rounded p-6 md:p-8  my-8 mx-auto w-1/2 shadow-xl transform transition-all">
              <h2 className="text-2xl font-bold mb-4">
                Filter by {/* Close button */}
                <button
                  onClick={closeModal}
                  className="mt-4 bg-blue-500 hover:bg-red-500 text-white rounded w-full md:w-1/12"
                >
                  <FontAwesomeIcon icon={faX} />
                </button>
              </h2>

              <div className="makeSelectBtn relative">
                {/* Button to toggle the dropdown */}
                <div>
                  <p>Make</p>
                  <button
                    onClick={() => setMakeOpen(!makeOpen)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center w-full"
                  >
                    <span>{selectedMake === null ? "Select" : selectedMake}</span>
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

                  {/* Dropdown Make menu */}
                  {makeOpen && (
                    <div className="mt-2 w-full bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
                      <div className="py-1">
                        <button
                          onClick={() => handleMakeClick("Audi")}
                          className="block px-4 py-2 text-gray-800 hover:bg-red-300 w-full"
                        >
                          Audi
                        </button>
                        <button
                          onClick={() => handleMakeClick("BMW")}
                          className="block px-4 py-2 text-gray-800 hover:bg-red-300 w-full"
                        >
                          BMW
                        </button>
                        <button
                          onClick={() => handleMakeClick("Honda")}
                          className="block px-4 py-2 text-gray-800 hover:bg-red-300 w-full"
                        >
                          Honda
                        </button>
                        <button
                          onClick={() => handleMakeClick("Mercedes")}
                          className="block px-4 py-2 text-gray-800 hover:bg-red-300 w-full"
                        >
                          Mercedes
                        </button>
                        <button
                          onClick={() => handleMakeClick("Tesla")}
                          className="block px-4 py-2 text-gray-800 hover:bg-red-300 w-full"
                        >
                          Tesla
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Car cards component */}
                  {/* <div className="mx-auto mt-5 flex flex-wrap justify-center mb-10">
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
                  </div> */}
                </div>
              </div>

              <div className="minPriceBtn relative">
                {/* Button to toggle the dropdown */}
                <div>
                  <p>Monthly Price</p>
                  <button
                    onClick={() => setminPriceOpen(!minPriceOpen)}
                    className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                  >
                    <span>{minPrice === null ? "Min" : "£" +minPrice}</span>
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

                  {/* Dropdown Make menu */}
                  {minPriceOpen && (
                    <div className="mt-2 w-full bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
                      <div className="py-1">
                        <button
                          onClick={() => handleMinClick(200)}
                          className="block px-4 py-2 text-gray-800 hover:bg-red-300 w-full"
                        >
                          £200
                        </button>
                        <button
                          onClick={() => handleMinClick(400)}
                          className="block px-4 py-2 text-gray-800 hover:bg-red-300 w-full"
                        >
                          £400
                        </button>
                        <button
                          onClick={() => handleMinClick(600)}
                          className="block px-4 py-2 text-gray-800 hover:bg-red-300 w-full"
                        >
                          £600
                        </button>
                        <button
                          onClick={() => handleMinClick(800)}
                          className="block px-4 py-2 text-gray-800 hover:bg-red-300 w-full"
                        >
                          £800
                        </button>
                        <button
                          onClick={() => handleMinClick(1000)}
                          className="block px-4 py-2 text-gray-800 hover:bg-red-300 w-full"
                        >
                          £1000
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="maxSelectBtn relative">
                {/* Button to toggle the dropdown */}
                <div class="relative">
                  <p>Monthly Price</p>
                  <button
                    onClick={() => setmaxPriceOpen(!maxPriceOpen)}
                    className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                  >
                    <span>{maxPrice === null ? "Max": "£" +maxPrice}</span>
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

                  {/* Dropdown Make menu */}
                  {maxPriceOpen && (
                    <div className="mt-2 w-full bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
                      <div className="py-1">
                        <button
                          onClick={() => handleMaxClick(400)}
                          className="block px-4 py-2 text-gray-800 hover:bg-red-300 w-full"
                        >
                          £400
                        </button>
                        <button
                          onClick={() => handleMaxClick(600)}
                          className="block px-4 py-2 text-gray-800 hover:bg-red-300 w-full"
                        >
                          £600
                        </button>
                        <button
                          onClick={() => handleMaxClick(800)}
                          className="block px-4 py-2 text-gray-800 hover:bg-red-300 w-full"
                        >
                          £800
                        </button>
                        <button
                          onClick={() => handleMaxClick(1000)}
                          className="block px-4 py-2 text-gray-800 hover:bg-red-300 w-full"
                        >
                          £1000
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <button
                className="mt-8 px-6 py-2 bg-red-500 hover:bg-green-600 text-white font-semibold rounded m-auto md:w-1/4"
                onClick={closeModal}
              >
                View Cars
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalFilter;
