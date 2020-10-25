import React from "react";
import "./Events.css";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/navbar";

const Steven = () => {
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
              src={require("./f1.png")}
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
            It’s a privilege for us to have{" "}
            <b>
              <i> Steven Inouye, Software engineer at Google, California</i>
            </b>
            . He’s going to be one of the many successful people who’ll be
            joining us as a speaker to tell us about the walks of learning and
            experience for an engineer. To put it in his own words,{" "}
            <b>
              <i>
                {" "}
                “All my life I have been observant on how to make the world
                around me simpler or more productive.”
              </i>
            </b>
            {"  "}
            &nbsp;Being proficient in many aspects such as React, Redux, Node,
            Express, SQL, NoSQL & Ruby on Rails, we are lucky to have him engage
            with us.👨🏻‍💻 <br /> Register now to learn, innovate and apply all your
            knowledge into such brilliant streams in these unprecedented
            times.💫
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

export default Steven;
