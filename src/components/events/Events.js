import React, { useState } from "react";
import "./Events.css";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/navbar";

const Events = () => {
  return (
    <div>
      <Navbar />
      <div className="container event d-flex flex-column justify-content-center">
        <div className="col-12 d-flex justify-content-center mt-5">
          <h1 className="font-weight-bold">Events</h1>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <img className="event-image" src="./speaker-ques.png" />
        </div>
        <div className="col-12 d-flex justify-content-center">
          <h3 className="subtext">To be declared soon...</h3>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <a
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAASycIa9UNFYxREkzQkxQSlpUOEtNRTFTSVY0QzE5TC4u"
            className="pass"
            target="_blank"
          >
            Get your passes
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
