import React, { useState } from "react";

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
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75" aria-hidden="true"></div>

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
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
           Audi
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            BMW
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Honda
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Mercedes
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Tesla
          </a>
        </div>
      </div>
      
    )}
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
