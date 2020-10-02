import React from "react";
import "./Events.css";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/navbar";

const Arun = () => {
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
              src={require("./f11.png")}
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
            The post COVID situation is going to be a game-changer for many
            fields of technology, marketing, development, and innovation. We at
            IEEE SB, realise it to the best and hence we bring to you an
            opportunity, to share and seek insights on the same by the webinar,
            <b>
              <i> 'The Art of Innovation and post-COVID Entrepreneurship'</i>
            </b>
            . <br /> Join our esteemed speaker{" "}
            <b>
              <i>
                Dr. Arun Surendran, the Founder Director of Adcy.io and
                Principal and Director of Trinity College of Engineering
              </i>
            </b>{" "}
            on 31st Oct at 4 pm, with his years of experience in{" "}
            <b>
              <i>Business Operations, Strategic Development & Planning</i>
            </b>
            , as the conversation comes to life with his insights on Post COVID
            opportunities and platforms for young, budding businesses and
            innovations. <br /> In the spirit of Innovation, we present our
            event CONCEPTO, defined by the spreading of knowledge beyond the
            horizons for bright minds. Here your skills are going to be shaped
            into future creations.So what are you waiting for? Hurry and
            register now!
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center mb-5">
          <a
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAASycIa9UNFYxREkzQkxQSlpUOEtNRTFTSVY0QzE5TC4u"
            className="pass"
            target="_blank"
          >
            Register Now @ ₹49
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Arun;
