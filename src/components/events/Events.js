import React, { useState } from "react";
import "./Events.css";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/navbar";

const Events = () => {
  return (
    <div>
      <Navbar />
      <div className="container event d-flex flex-column justify-content-center">
        <div className="col-12 d-flex justify-content-center">
          <h1>Events</h1>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <img className="event-image" src="./speaker-ques.png" />
        </div>
        <div className="col-12 d-flex justify-content-center">
          <h3 className="subtext">To be declared soon...</h3>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <a href="" className="pass">
            Get your passes
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
