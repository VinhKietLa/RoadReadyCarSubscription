import Footer from "./Footer.js";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <>
      <div className="mt-24 mb-24">
        <h1 className="text-4xl text-center">Contact Us</h1>

        <div className="flex justify-center mt-24 text-center">
          <div className="phone md:w-1/3">
            <FontAwesomeIcon
              icon={faHeadset}
              size="2xl"
              style={{ color: "#ef4444" }}
            />
            <h1 className="font-black pt-2 pb-2">BY PHONE</h1>
            <p className="pb-2">24/7 Helpline</p>
            <p className="pb-6">037493723294</p>
            <button className="bg-red-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg ">
              Call Now
            </button>
          </div>

          <div className="Message md:w-1/3">
            <FontAwesomeIcon
              icon={faMessage}
              size="2xl"
              style={{ color: "#ef4444" }}
            />
            <h1 className="font-black pt-2 pb-2">Send a message</h1>
            <p className="pb-6 pt-2">Drop us a message and we'll be back in touch.</p>
            <button className="bg-red-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mt-6">
              Start Here
            </button>
          </div>

          <div className="Livechat md:w-1/3">
            <FontAwesomeIcon
              icon={faComments}
              size="2xl"
              style={{ color: "#ef4444" }}
            />
            <h1 className="pt-2 pb-2">Live Chat</h1>
            <p className="pb-6 pt-2">Chat directly with a member of our team</p>
            <button className="bg-red-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mt-6">
              Start Chat
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
