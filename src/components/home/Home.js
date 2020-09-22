import React,{useState} from "react";
import "./Home.css";
import Timer from "../timer/Timer";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/navbar";


const Home = () => {
  const [speaker, setSpeakers] = useState([1,2,3,4,5,6]);
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
              <a href="" className="pass">Get your passes</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container about text-center px-4 mb-5">
        <h1 className="mb-5">About Concepto</h1>
        <p>
        Innovation is the change that unlocks new value. The crusade for innovation however is one that cannot be traversed alone. Sharing knowledge with the world is one of the cornerstones of innovation and this principle is realized with CONCEPTO. Learn from twelve speakers hailing from various industries such as General Electric, Amazon, Google, and Morgan Stanley, to name just a few. These speakers are some of the most experienced veterans in their field, a diverse panel of individuals indeed because knowledge shared should not be kept exclusive to a field and its people, instead of being within reach of all those that wish to pursue it.
        </p>
      </div>
      <div className="container speaker text-center px-4">
        <h1 className="mb-5">Speakers</h1>
        <div className="speakers-grid row py-5">
          {speaker.map((item) => {
            return (
              <div className="col-12 col-lg-4 mb-5 speaker">
                <div className="speakers">
                  <div className="speaker-img">
                    <img src="./speaker-ques.png" />
                  </div>
                  <div className="speaker-details">
                    <div className="speaker-name">
                      <h4>Yet to be revealed</h4>
                    </div>
                    <div className="speaker-desg">
                      <h6></h6>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container sponsor text-center px-4">
        <h1 className="mb-5">Sponsors</h1>
        <button className="pass" onClick={e => {
          setSpeakers([...speaker, speaker[speaker.length-1]+1])
        }}>Become a Sponsor</button>
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
