import React from "react";
import "./Events.css";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/navbar";

const Rohit = () => {
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
              src={require("./f5.png")}
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
            IEEE SRM SB brings to you a unique opportunity to understand how we
            can apply two completely opposite subjects into the same field and
            create wonders. <br />
            <b>
              <i>
                Rohit Ghosh, an IIT Bombay graduate, is the founder of Qure.ai
              </i>
            </b>{" "}
            , a startup that focuses on using{" "}
            <b>
              <i> Artificial Intelligence in the Medical Stream</i>
            </b>{" "}
            especially during a pandemic. He's also a Google developer expert, a
            mentor in the field of Machine Learning.
            <br /> Register now to learn, innovate, and apply all your knowledge
            into such brilliant streams in these unprecedented times.
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center mb-5">
          <a
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAASycIa9UNFYxREkzQkxQSlpUOEtNRTFTSVY0QzE5TC4u"
            className="pass"
            target="_blank"
          >
            Register Now For Free
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Rohit;
