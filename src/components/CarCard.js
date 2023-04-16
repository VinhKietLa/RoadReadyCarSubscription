import carData from "../cars.json";
import Footer from "./Footer.js";

function CarCard({ selectedMake , minPrice, maxPrice }) {

  return (
    <>
      <div className="mx-auto mt-5 flex flex-wrap justify-center mb-10">
      {carData
                      .filter(
                        (car) =>
                          (!selectedMake ||
                          car.name === selectedMake ||
                          car.model === selectedMake ) &&
                          (!minPrice || car.Price >= minPrice) &&
                          (!maxPrice || car.Price <= maxPrice)
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
      <Footer />
    </>
  );
}

export default CarCard;
