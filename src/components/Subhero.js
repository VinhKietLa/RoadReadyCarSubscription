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
      <div class="container mx-auto px-4 mt-10 text-center divide-x divide-solid divide-red-500">
        <h1 class="text-red-500 text-3xl">
          Discover the ultimate driving experience with our hassle-free car
          subscriptions.
        </h1>
        <div class="flex justify-around mt-10 pt-5">
          <div className={`flex-initial w-64 ${styles.itemSpacing}`}>
            <h1 class="text-xl font-bold">1. Choose your favourite vehicle</h1>
            <FontAwesomeIcon
              icon={faCar}
              style={{ color: "#ff000d" }}
              size="2xl"
            />
            <p>
              Choose from a wide range vehicles, from SUVs to Sports car we it
              available!
            </p>
          </div>
          <div className={`flex-initial w-64 ${styles.itemSpacing}`}>
            <h1 class="text-xl font-bold">2. Set your preferred terms</h1>
            <FontAwesomeIcon
              icon={faCalendarDays}
              style={{ color: "#ff000d" }}
              size="2xl"
            />
            <p>Customize your subscription to meet your needs.</p>
          </div>
          <div className={`flex-initial w-64 ${styles.itemSpacing}`}>
            <h1 class="text-xl font-bold">
              3. Hit the road - it's that simple!
            </h1>
            <FontAwesomeIcon
              icon={faRoad}
              style={{ color: "#ff000d" }}
              size="2xl"
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
      <div class="container mx-auto mt-20 px-4 mt-10 text-center border-top pb-20">
        <h1 class=" text-3xl">
          With our flexible car subscription service, you get:
        </h1>
        <div class="flex justify-around mt-10 pt-5 flew-row">

          <div className={`flex w-64 flew-row`}>
            <FontAwesomeIcon icon={faCarBurst} />
            <p>Comprehensive Insurance cover for two drivers</p>
          </div>

          <div className={`flex w-64 flew-row`}>
            <FontAwesomeIcon icon={faInfinity} /> 
            <p>Unlimited mileage</p>
          </div>

          <div className={`flex w-64 flew-row`}>
          <FontAwesomeIcon icon={faHammer} />          
          <p>Maintence and servicing fees covered</p>
          </div>

          <div className={`flex w-64 flew-row`}>
          <FontAwesomeIcon icon={faHeadset} />          
          <p>24/7 Help and Roadside assistance</p>
          </div>

          <div className={`flex w-64 flew-row`}>
          <FontAwesomeIcon icon={faTruck} />         
          <p>Same Day Collection & Delivery service</p>
          </div>

          <div className={`flex w-64 flew-row`}>
          <FontAwesomeIcon icon={faBan} />         
          <p>Congestion Charge covered by us</p>
          </div>

          <div className={`flex w-64 flew-row`}>
          <FontAwesomeIcon icon={faChargingStation} />         
          <p>Free Home Charging for EVs</p>
          </div>

          <div className={`flex w-64 flew-row`}>
          <FontAwesomeIcon icon={faXmark} />        
          <p>Cancel Anytime</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subhero;
