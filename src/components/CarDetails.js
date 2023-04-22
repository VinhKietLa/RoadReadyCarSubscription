import React, { useState, useEffect } from "react";
import carData from "../cars.json";
import { useParams } from "react-router-dom";
import Footer from "./Footer.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";

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

        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex flex-col justify-center md:flex-row mt-16 md:justify-evenly">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black">
              {selectedCar.name} {selectedCar.model}
            </h2>
            <p className="font-black text-xl">{selectedCar.Year}</p>
            <p className="font-black text-xl">{selectedCar.mileage} miles</p>
            <p className="font-black text-xl">{selectedCar.fuel}</p>
            <p className="font-black text-xl">{selectedCar.transmission}</p>
          </div>

          <div className="md:mr-12 self-center mt-4 text-center">
            <p className="text-3xl font-black">
              £{selectedCar.Price} <span className="text-lg">/month</span>
            </p>

            <button
              type="button"
              className="bg-red-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mt-4 w-34 h-16"
            >
              Buy Now
            </button>
          </div>

          <div className="md:mr-12 self-center mt-4 text-center">
            <p className="text-3xl font-black">Need help?</p>

            <button
              type="button"
              className="bg-red-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mt-4 w-34 h-16"
            >
              Call us
              <FontAwesomeIcon icon={faHeadset} size="xl" className="pl-4" />
            </button>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="font-bold text-2xl text-left px-4">
            Your car overview
          </h2>
        </div>

        <div className="flex justify-center flex-col mt-4 px-4 md:flex-row mb-16 md:justify-around">
          <div className="mechanical md:w-1/3 pr-8">
            <h1 className="text-xl font-black mt-4 mb-4">Mechanical</h1>
            <ul className="flex flex-col border-t-4 border-red-500">
              <li className="flex justify-between">
                <span>Transmission</span>
                <span>{selectedCar.transmission}</span>
              </li>
              <li className="flex justify-between">
                <span>Mileage</span>
                <span>{selectedCar.mileage}</span>
              </li>
              <li className="flex justify-between">
                <span>Engine</span>
                <span>{selectedCar.engine}</span>
              </li>
            </ul>
          </div>

          <div className="trim md:w-1/3 pr-8">
            <h1 className="text-xl font-black mt-4 mb-4">Trim</h1>

            <ul className="flex flex-col border-t-4 border-red-500">
              <li className="flex justify-between">
                <span>Body</span>
                <span>{selectedCar.body}</span>
              </li>
              <li className="flex justify-between">
                <span>Color</span>
                <span>{selectedCar.color}</span>
              </li>
              <li className="flex justify-between">
                <span>Doors</span>
                <span>{selectedCar.doors}</span>
              </li>
              <li className="flex justify-between">
                <span>Seats</span>
                <span>{selectedCar.seats}</span>
              </li>
            </ul>
          </div>

          <div className="features md:w-1/3 pr-8">
            <h1 className="text-xl font-black mt-4 mb-4 ">Key features</h1>
            <ul className="flex flex-col border-t-4 border-red-500 text-center">
              {selectedCar.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex max-w-8xl justify-center items-center">
          <div className="rounded px-8 md:w-1/2">
            <img
              className="object-contain mt-1 border-4 border-solid rounded-2xl"
              src="/assets/carddelivery.jpg"
              alt="Car"
            />
          </div>

          <div className="px-8">
            <h1 className="text-red-500 font-black text-2xl">
              Provided at no extra cost with each subscription
            </h1>
            <ul className="mt-6">
              <li className="pt-2">
                <FontAwesomeIcon
                  icon={faSquareCheck}
                  size="xl"
                  style={{ color: "#ef4444" }}
                />{" "}
                Free Home Delivery and Collection
              </li>
              <li className="pt-2">
                <FontAwesomeIcon
                  icon={faSquareCheck}
                  size="xl"
                  style={{ color: "#ef4444" }}
                />{" "}
                Free Home Charging for EVs
              </li>
              <li className="pt-2">
                <FontAwesomeIcon
                  icon={faSquareCheck}
                  size="xl"
                  style={{ color: "#ef4444" }}
                />{" "}
                Maintenance and servicing fees covered
              </li>
              <li className="pt-2">
                <FontAwesomeIcon
                  icon={faSquareCheck}
                  size="xl"
                  style={{ color: "#ef4444" }}
                />{" "}
                Unlimited mileage
              </li>
              <li className="pt-2">
                <FontAwesomeIcon
                  icon={faSquareCheck}
                  size="xl"
                  style={{ color: "#ef4444" }}
                />{" "}
                Comprehensive insurance cover for two drivers
              </li>
              <li className="pt-2">
                <FontAwesomeIcon
                  icon={faSquareCheck}
                  size="xl"
                  style={{ color: "#ef4444" }}
                />{" "}
                24/7 Help and Roadside assistance
              </li>
            </ul>
          </div>
        </div>

        <div className="flex max-w-8xl justify-center items-center mt-16 mb-20">
          <div className="px-8 md:w-1/2">
            <h1 className="text-red-500 font-black text-2xl">
              You can subscribe with peace of mind
            </h1>
            <p className=" font-black">
              Our seamless process from start to finish ensures that you find
              your dream car and have peace of mind."
            </p>
            <h1 className="text-red-500 font-black text-2xl mt-6 font-black">
              Our promise to quality
            </h1>
            <p className="">
              At our car subscription service, we take quality seriously. Each
              vehicle in our fleet undergoes a rigorous inspection process by
              our team of experienced technicians to ensure it meets our
              standards for safety, reliability, and overall quality. We take
              great care in reconditioning each car to ensure it's in top
              condition before it's delivered to you. We are transparent about
              any imperfections and provide clear information about the car's
              condition so you can make an informed decision. We are dedicated
              to delivering a high-quality car subscription service that you can
              depend on.
            </p>
          </div>

          <div className="rounded px-8">
            <img
              className="object-contain mt-1 border-4 border-solid rounded-2xl"
              src="/assets/carcare.jpeg"
              alt="Car"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CarDetails;
