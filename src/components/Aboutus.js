import Footer from "./Footer.js";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Aboutus() {
  return (
    <>
      <div className="mt-28 mb-24 text-center px-4">
        <div>
          <h1 className="text-4xl font-black">About us</h1>
          <p>
            At Road Ready, we're revolutionizing the car subscription landscape
            throughout the United Kingdom.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center mt-16">
          <div
            className="w-full pt-60 bg-contain md:bg-cover lg:bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url('./assets/rr.png')" }}
          >        
          </div>

          <div className="px-16 md:w-2/3">
            <div className="mt-16">
              <h1 className="text-2xl font-black">The Road Ready Story</h1>
              <p className="mt-6">
                At Road Ready, we revolutionize the automotive experience by
                offering seamless, hassle-free car subscriptions to fit your
                ever-evolving lifestyle. We understand that the traditional
                model of car ownership doesn't always align with the dynamic
                needs of today's drivers. That's why we've created a platform
                that allows you to access a diverse range of vehicles at your
                fingertips, with the flexibility to switch, upgrade, or cancel
                anytime. Our commitment to customer satisfaction, transparency,
                and innovation sets us apart, as we strive to deliver the
                ultimate driving experience tailored to your unique preferences.
                Discover the freedom of Road Ready and redefine your journey on
                the road ahead.
              </p>
            </div>

            <div className="mt-12">
              <h1 className="text-2xl font-black">Our values</h1>
              <p className="mt-6">
                In our pursuit to deliver an unparalleled car purchasing
                experience for our clients, we adhere to our core principles. We
                embody:
              </p>

              <ul className="list-disc text-left mt-6">
                <li>
                  <span className="text-xl font-black">Customer obsessed</span>-
                  We prioritize our customers above all else, striving for
                  excellence in every interaction. Our goal is to become
                  renowned for providing exceptional experiences and
                  consistently exceeding customer expectations.
                </li>
                <li>
                  <span className="text-xl font-black">Flexibility</span>
                  -Catering to diverse needs by offering customizable
                  subscription plans, allowing customers to modify, upgrade, or
                  cancel without hassle.
                </li>
                <li>
                  <span className="text-xl font-black">Safety</span>-Ensuring
                  all vehicles in our fleet are thoroughly inspected and
                  maintained, prioritizing the safety and well-being of our
                  customers.
                </li>
                <li>
                  <span className="text-xl font-black">Affordability</span>
                  -Offering competitive pricing and value-added services to
                  ensure our customers receive the best possible value for their
                  investment.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20">
            <h1 className="text-4xl font-black mb-16">Our investors</h1>
            
            <div className="flex flex-row justify-center">
                <img src="./assets/autotrader.jpg" className="w-2/12 h-36"></img>
                <img src="./assets/ecp.png" className="w-2/12 h-36"></img>
                <img src="./assets/michellin.png" className="w-2/12 h-36"></img>
                <img src="./assets/bp.png" className="w-2/12 h-36"></img>
                <img src="./assets/rolex.png" className="w-2/12 h-36"></img>

            </div>


        </div>

      </div>

      <Footer />
    </>
  );
}

export default Aboutus;
