import React from "react";
import "./Events.css";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/navbar";

const Rupesh = () => {
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
              src={require("./f12.png")}
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
            IEEE is a society where like-minded individuals work together for
            the betterment of technology and its spreading around the world. The
            advancement of sectors of banking and investment and its correlated
            exponential growth with IT sectors has led the topic for a
            deliberate discussion. <br />
            We at IEEE SB bring to you{" "}
            <b>
              <i>IT Career in Investment Banking</i>
            </b>
            , a webinar which throws light on the same aspects.Tune in with us
            on 31st October at 6 pm as{" "}
            <b>
              <i>Rupesh Saxena</i>
            </b>
            , our esteemed speaker,{" "}
            <b>
              <i>Executive Director at Morgan Stanley</i>
            </b>{" "}
            and a seasoned professional with 16 years of experience in the
            delivery and management of IT projects having diverse experience of
            working in banking divisions, throws light on on the same with a
            fruitful conversation. <br /> CONCEPTO brings to you many such
            opportunities where you take insights on aspects varying in every
            field of tech, marketing, and knowledge. So don't miss out on this
            chance of learning and register now!
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

export default Rupesh;
