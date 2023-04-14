import React from "react";
import styles from "../CSS/Subhero.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faRoad } from "@fortawesome/free-solid-svg-icons";

import { faCarBurst } from "@fortawesome/free-solid-svg-icons";
import { faInfinity } from "@fortawesome/free-solid-svg-icons";
import { faHammer } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { faChargingStation } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Subhero = () => {
  return (
    <>
      <div className="container mx-auto pt-10 px-4 text-center">
        <h1 className="text-3xl font-bold	">
          Discover the ultimate driving experience with our hassle-free car
          subscriptions.
        </h1>
        <div className="flex flex-col items-center sm:items-center md:flex-row md:justify-around mt-10 pt-5">
          
          <div className={`flex-initial w-64 sm:h-10 ${styles.itemSpacing}`}>
            <h1 class="text-xl font-semibold">1. Choose your favourite vehicle</h1>
            <FontAwesomeIcon
              icon={faCar}
              style={{ color: "#ff000d" }}
              size="7x"
            />
            <p>
              Choose from a wide range vehicles, from SUVs to Sports car we have it
              available!
            </p>
          </div>

          <div className={`flex-initial w-64 ${styles.itemSpacing}`}>
            <h1 class="text-xl font-semibold">2. Set your preferred terms</h1>
            <FontAwesomeIcon
              icon={faCalendarDays}
              style={{ color: "#ff000d" }}
              size="7x"
            />
            <p>Customize your subscription to meet every your needs.</p>
          </div>

          <div className={`flex-initial w-64 ${styles.itemSpacing}`}>
            <h1 class="text-xl font-semibold">
              3. Hit the road - it's that simple!
            </h1>
            <FontAwesomeIcon
              icon={faRoad}
              style={{ color: "#ff000d" }}
              size="7x"
            />
            <p>
              We’ll get you approved within the hour and offer same day delivery
              and collection
            </p>
          </div>
        </div>
        <button className="mt-20 px-6 py-2 bg-red-500 hover:bg-green-600 text-white font-semibold rounded">
          Let's Drive!
        </button>
      </div>


      <div className="container mx-auto mt-20 px-4 mt-10 text-center border-top pb-20">
        <h1 className=" text-3xl font-bold">
          With our flexible car subscription service, you get:
        </h1>
        <div className="mt-10 grid grid-cols-2 gap-10">
          <div>
            <FontAwesomeIcon
              icon={faCarBurst}
              style={{ color: "#ff000d" }}
              size="4x"
            />
            <p className="font-normal">Comprehensive Insurance cover for two drivers</p>
          </div>

          <div>
            <FontAwesomeIcon
              icon={faInfinity}
              style={{ color: "#ff000d" }}
              size="4x"
            />
            <p>Unlimited mileage</p>
          </div>

          <div>
            <FontAwesomeIcon
              icon={faHammer}
              style={{ color: "#ff000d" }}
              size="4x"
            />
            <p>Maintence and servicing fees covered</p>
          </div>

          <div>
            <FontAwesomeIcon
              icon={faHeadset}
              style={{ color: "#ff000d" }}
              size="4x"
            />
            <p>24/7 Help and Roadside assistance</p>
          </div>

          <div>
            <FontAwesomeIcon
              icon={faTruck}
              style={{ color: "#ff000d" }}
              size="4x"
            />
            <p>Same Day Collection & Delivery service</p>
          </div>

          <div>
            <FontAwesomeIcon
              icon={faBan}
              style={{ color: "#ff000d" }}
              size="4x"
            />
            <p>Congestion Charge covered by us</p>
          </div>

          <div>
            <FontAwesomeIcon
              icon={faChargingStation}
              style={{ color: "#ff000d" }}
              size="4x"
            />
            <p>Free Home Charging for EVs</p>
          </div>

          <div>
            <FontAwesomeIcon
              icon={faXmark}
              style={{ color: "#ff000d" }}
              size="4x"
            />
            <p>Cancel Anytime</p>
          </div>
        </div>
        <h1 className="text-center pt-20 font-bold text-lg">We also offer many other benefits including free road tax, car washes, discounts on fuel and much more! </h1>
      </div>
      
      {/* <div class="flex flex-col items-center sm:items-center md:flex-row md:justify-around mt-10 pt-5"> */}


      <div className="container mx-auto mt-6 mb-8 px-5 flex flex-col md:flex-row items-center">
      <div className = "flex flex-col text-center items-center">
      <h1 className="w-full text-3xl mx-auto items-center"> <span class="text-red-500 font-semibold">Unlock the Road:</span> Download Our App and
      Experience Car Subscriptions Today!</h1>
      <div className="flex mt-5">
      <button
        className="px-6 py-2 text-white font-semibold rounded mr-4 h-20 w-60"
        style={{
          backgroundImage: "url('../assets/iosBtn.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      </button>
      <button
        className="px-6 py-2 text-white font-semibold rounded h-20 w-60"
        style={{
          backgroundImage: "url('../assets/androidBtn.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      </button>
    </div>
      </div>
      <div className="h-[600px] w-[50%] bg-contain bg-no-repeat bg-center flex items-center" style={{ backgroundImage: "url('./assets/mobileApp.png')" }}>
      </div>
      </div>
    </>
  );
};

export default Subhero;
