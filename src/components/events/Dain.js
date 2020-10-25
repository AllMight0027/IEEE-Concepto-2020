import React from "react";
import "./Events.css";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/navbar";

const Dain = () => {
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
              src={require("./f4.png")}
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
            <b>
              <i>Dain Walker</i>
            </b>{" "}
            is a{" "}
            <b>
              <i>Branding Strategist and the founder of Victory Front</i>
            </b>{" "}
            , an organisation that builds strategies and solutions to level up
            your business. Having built a 7 figure agency in 11 months, and has
            over a hundred thousand followers, he has become the talk of the
            business town. Want some inspiration? Check out{" "}
            <a
              href="https://www.instagram.com/dainwalker/"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <u> @dainwalker</u>
            </a>
            <br />
            Register now to get your marketing wheels moving and gain tips from
            a man who has much to offer.
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

export default Dain;
