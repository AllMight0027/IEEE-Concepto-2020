import React from "react";
import "./Events.css";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/navbar";

const Nanda = () => {
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
              src={require("./f2.png")}
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
            <b>CONCEPTO</b>, our very own tech event is going to broaden our
            vision even more where we shall let bright minds to put on their
            running hats and strive to be better than yesterday. <br />
            We’ll be assisted by{" "}
            <b>
              <i>Deepesh Nanda</i>
            </b>{" "}
            , who is the{" "}
            <b>
              <i>Chief Executive Officer for GE Gas Power in South Asia</i>
            </b>{" "}
            , responsible for GE’s business in countries such as India,
            Bangladesh, Sri Lanka, Mauritius, and Nepal. He’ll be one of the
            speakers to join us and shed light on the{" "}
            <b>
              <i>Application of Digital Technology for Thermal Power Plants</i>
            </b>{" "}
            . He holds a bachelor’s degree, with distinction, in Mechanical &
            Production Engineering from Annamalai University, Chidambaram,
            India, and an M.B.A from the OUBS, Milton Keynes, UK.
            <br /> Register now to learn, innovate, and apply all your knowledge
            into such brilliant streams in these unprecedented times.
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

export default Nanda;
