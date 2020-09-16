import React from "react";
import "./Home.css";
import logo from "./Concepto_White.svg";
import Timer from "../timer/Timer";
import Speakers from "../Speakers/Speakers";

const Home = () => {
    return (
        <div className="text-center">
            <img src={logo} className="logo" alt="Concepto Logo" />
            <br />
            <div className="timer">
                <Timer />
            </div>
            <button className="btn btn-outline-light">GET YOUR PASSES</button>
            <div className="speakers">
                <h1>Our Speakers</h1>
                <Speakers />
            </div>
        </div>
    );
};

export default Home;
