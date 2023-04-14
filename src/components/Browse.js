import React, { useState, useEffect } from "react";

import "../index.css";

function Browse() {
  return (
    <>
      <div
        className="container h-96 mt-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('./assets/browseAudi.png')" }}
      >
        <div className="text-center text-5xl text-white pt-16">
        <h1>Browse Our Car Range</h1>
        </div>
        <h2 className=" w-1/3 text-white mt-8 ml-6">
          Choose from our range of vehicles from hatchbacks to convertibles we
          have you covered! Don’t see a car you want? Pop us an email on
          <span className="text-red-500">hello@roadready.com</span>
        </h2>
      </div>
    </>
  );
}

export default Browse;
