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
        <h1 class="text-3xl">
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
      <div className="container mx-auto mt-20 px-4 mt-10 text-center border-top pb-20">
        <h1 class=" text-3xl">
          With our flexible car subscription service, you get:
        </h1>
        <div class="mt-10 grid grid-cols-2 gap-10">
          <div>
            <FontAwesomeIcon
              icon={faCarBurst}
              style={{ color: "#ff000d" }}
              size="2xl"
            />
            <p>Comprehensive Insurance cover for two drivers</p>
          </div>

          <div>
            <FontAwesomeIcon
              icon={faInfinity}
              style={{ color: "#ff000d" }}
              size="2xl"
            />
            <p>Unlimited mileage</p>
          </div>

          <div>
            <FontAwesomeIcon
              icon={faHammer}
              style={{ color: "#ff000d" }}
              size="2xl"
            />
            <p>Maintence and servicing fees covered</p>
          </div>

          <div>
            <FontAwesomeIcon
              icon={faHeadset}
              style={{ color: "#ff000d" }}
              size="2xl"
            />
            <p>24/7 Help and Roadside assistance</p>
          </div>

          <div>
            <FontAwesomeIcon
              icon={faTruck}
              style={{ color: "#ff000d" }}
              size="2xl"
            />
            <p>Same Day Collection & Delivery service</p>
          </div>

          <div>
            <FontAwesomeIcon
              icon={faBan}
              style={{ color: "#ff000d" }}
              size="2xl"
            />
            <p>Congestion Charge covered by us</p>
          </div>

          <div>
            <FontAwesomeIcon
              icon={faChargingStation}
              style={{ color: "#ff000d" }}
              size="2xl"
            />
            <p>Free Home Charging for EVs</p>
          </div>

          <div>
            <FontAwesomeIcon
              icon={faXmark}
              style={{ color: "#ff000d" }}
              size="2xl"
            />
            <p>Cancel Anytime</p>
          </div>
        </div>
      </div>
      <div className="container bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('./assets/mobileapp.svg')" }}>

      </div>
    </>
  );
};

export default Subhero;
