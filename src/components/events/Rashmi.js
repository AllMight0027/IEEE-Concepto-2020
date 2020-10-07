import React from "react";
import "./Events.css";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/navbar";

const Rashmi = () => {
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
              src={require("./f9.png")}
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
            Joining us as a speaker,{" "}
            <b>
              <i>
                Rashmi Phanishyaee, a Senior Business Intelligence Associate at
                LinkedIn.
              </i>
            </b>{" "}
            Someone who started out as a Business Engineer is here to relate to
            us her experiences & hurdles and how she overcame them to become the
            woman she is today. Rashmi is a dynamic professional with over 4
            years of experience as a{" "}
            <b>
              <i> BI Engineer, Database Administrator, and Business Analyst</i>
            </b>{" "}
            and she will be talking with us on the growing trend of{" "}
            <b>
              <i>Business Intelligence.</i>
            </b>
            <br />
            Register now to learn, innovate, and apply all your knowledge into
            such brilliant streams in these unprecedented times.
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

export default Rashmi;
