import React from "react";
import "./Events.css";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/navbar";

const Shashi = () => {
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
              src={require("./f8.png")}
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
            IEEE SRM SB introduces a talk on{" "}
            <b>
              <i>Data Structures and Algorithms.</i>
            </b>
            Learn the basic building blocks of code and{" "}
            <b>
              <i>How To Ace Technical Interviews</i>
            </b>{" "}
            from one of the best in the industry💻. <br />
            <b>
              <i>
                Shashi Bhushan Kumar is Tech Lead & Instructor at GeeksforGeeks.
              </i>
            </b>{" "}
            He has worked with the Adobe Sign Integration team as a full stack
            developer. His various skills lie in diverse fields including
            technologies like Java, Hibernate, Spring, Spring Boot, Jersey,
            JAX-RS, and many more. Sashi is enthusiastic about developing java
            based micro-services using spring boot and has a deep passion for
            solving challenging problems and participating in competitive
            programming. <br />
            Register for our event CONCEPTO and begin your journey as a
            confident coder👣.
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

export default Shashi;
