import React from "react";
import "./Events.css";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/navbar";

const Ananya = () => {
  return (
    <div>
      <Navbar />
      <div className="container mb-5" style={{ marginTop: "40px" }}>
        <div
          className="row"
          style={{
            marginTop: "120px",
          }}
        >
          <div className="col-12">
            <a
              href="/event"
              className="text-white font-weight-bold"
              style={{ textDecoration: "none" }}
            >
              ⟨ All Events
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-10 offset-1 text-center">
            <img
              src={require("./f7.png")}
              style={{
                width: "100%",
                marginTop: "30px",
                maxHeight: "500px",
                maxWidth: "500px",
                boxShadow: "0px 0px 5px 7px rgba(255, 255, 255, 0.15)",
              }}
            />
          </div>
          <div className="col-12 mt-5 text-center">
            IEEE has been the epitome of promoting ideas and supporting new
            ventures. ✨With this in mind, we are taking our vision one notch
            higher and presenting to you the{" "}
            <b>
              <i>Secrets of Entrepreneurial success.</i>
            </b>{" "}
            💯
            <br /> As a{" "}
            <b>
              <i>
                Stanford University Graduate, Ananya Chandra is the Founder and
                CEO of Women Prosperity Lab.
              </i>
            </b>{" "}
            👩 Having lived and worked in 8 different countries, she is nowhere
            with us at CONCEPTO, IEEE SRM SB to provide us with a guide on how
            we can climb the ladder of success in the world of Business with her
            talk on{" "}
            <b>
              <i>Secrets to Entrepreneurial Success</i>
            </b>
            . <br />
            Register now to learn from the best!🏃📑🖊️
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center mb-5">
          <a
            href="https://www.youtube.com/channel/UC8SMIA_C_SqXBxaO0KrkIbA"
            className="pass"
            target="_blank"
          >
            Watch Youtube Stream
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ananya;
