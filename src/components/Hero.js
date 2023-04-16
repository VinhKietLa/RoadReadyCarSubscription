import React from 'react';
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-60 h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('./assets/heroTest.jpeg')" }}>
      <div className="container mx-auto h-full flex flex-col justify-between">
        <div className="text-center">
          <h1 className="text-5xl font-bold sm:text-white"><span className="text-red-500">Drive Your Dream:</span> Flexible Car Subscriptions for the Modern Motorist</h1>
        </div>
        <div className="mb-80 w-full flex justify-center">
          <button className="px-6 py-2 bg-red-500 hover:bg-green-600 text-white font-semibold rounded mr-4"><NavLink
              to="/browse"
              activeClassName="text-gray-200"
              className="hover:text-gray-200"
            >
              Browse Cars
            </NavLink></button>
          <button className="px-6 py-2 bg-red-500 hover:bg-green-600 text-white font-semibold rounded">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
