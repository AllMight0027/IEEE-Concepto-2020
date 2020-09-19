import React from "react";
import "./Home.css";
import Timer from "../timer/Timer";
import Speakers from "../Speakers/Speakers";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/navbar";


const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container hero">
        <div className="timerr">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <img src="./concepto.png" className="d-none d-lg-block" alt="" />
            </div>
            <div className="col-12 d-flex justify-content-center my-5">
              <Timer />
            </div>
            <div className="col-12 d-flex justify-content-center">
              <a href="" class="pass">Get your passes</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container about text-center px-4 mb-5">
        <h1 className="mb-5">About Concepto</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
      <div className="container speaker text-center px-4">
        <h1 className="mb-5">Speakers</h1>
        <div className="speakers-grid row py-5">
          <div className="col-12 col-lg-4 mb-5 speaker">
            <div className="speakers">
              <div className="speaker-img">
                <img src="./speaker-demo.png" />
              </div>
              <div className="speaker-details">
                <div className="speaker-name">
                  <h4>Harsh Gour</h4>
                </div>
                <div className="speaker-desg">
                  <h6>Web developer @ IEEE</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 mb-5 speaker">
            <div className="speakers">
              <div className="speaker-img">
                <img src="./speaker-demo.png" />
              </div>
              <div className="speaker-details">
                <div className="speaker-name">
                  <h4>Harsh Gour</h4>
                </div>
                <div className="speaker-desg">
                  <h6>Web developer @ IEEE</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 mb-5 speaker">
            <div className="speakers">
              <div className="speaker-img">
                <img src="./speaker-demo.png" />
              </div>
              <div className="speaker-details">
                <div className="speaker-name">
                  <h4>Harsh Gour</h4>
                </div>
                <div className="speaker-desg">
                  <h6>Web developer @ IEEE</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 mb-5 speaker">
            <div className="speakers">
              <div className="speaker-img">
                <img src="./speaker-demo.png" />
              </div>
              <div className="speaker-details">
                <div className="speaker-name">
                  <h4>Harsh Gour</h4>
                </div>
                <div className="speaker-desg">
                  <h6>Web developer @ IEEE</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 mb-5 speaker">
            <div className="speakers">
              <div className="speaker-img">
                <img src="./speaker-demo.png" />
              </div>
              <div className="speaker-details">
                <div className="speaker-name">
                  <h4>Harsh Gour</h4>
                </div>
                <div className="speaker-desg">
                  <h6>Web developer @ IEEE</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 mb-5 speaker">
            <div className="speakers">
              <div className="speaker-img">
                <img src="./speaker-demo.png" />
              </div>
              <div className="speaker-details">
                <div className="speaker-name">
                  <h4>Harsh Gour</h4>
                </div>
                <div className="speaker-desg">
                  <h6>Web developer @ IEEE</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default Home;
