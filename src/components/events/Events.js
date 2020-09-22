import React, { useState } from "react";
import "./Events.css";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/navbar";

const Events = () => {
  const [speaker, setSpeakers] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <div>
      <Navbar />
      <div className="container hero d-flex flex-column justify-content-center">
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

      <div className="container sponsor text-center px-4">
        <button className="pass">Become a Sponsor</button>
      </div>
      <Footer />
    </div>
    // <div className="text-center">
    //   {/* <img src={logo} className="logo" alt="Concepto Logo" /> */}
    //   <video src={logo} width="300px" className="logo" autoPlay="true"></video>
    //   <br />
    //   <div className="timer">
    //     <Timer />
    //   </div>
    //   <button
    //     className="btn btn-outline-light text-center"
    //     href="www.google.com"
    //   >
    //     GET YOUR PASSES
    //   </button>
    //   <div className="speakers">
    //     <h1>Our Speakers</h1>
    //     <Speakers />
    //   </div>
    //   <Footer />
    // </div>
  );
};

export default Events;
