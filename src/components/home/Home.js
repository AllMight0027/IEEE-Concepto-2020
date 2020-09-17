import React from "react";
import "./Home.css";
import logo from "./logo.webm";
import Timer from "../timer/Timer";
import Speakers from "../Speakers/Speakers";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="text-center">
      {/* <img src={logo} className="logo" alt="Concepto Logo" /> */}
      <video src={logo} width="300px" className="logo" autoPlay="true"></video>
      <br />
      <div className="timer">
        <Timer />
      </div>
      <button
        className="btn btn-outline-light text-center"
        href="www.google.com"
      >
        GET YOUR PASSES
      </button>
      <div className="speakers">
        <h1>Our Speakers</h1>
        <Speakers />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
