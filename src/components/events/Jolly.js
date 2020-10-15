import React from "react";
import "./Events.css";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/navbar";

const Jolly = () => {
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
              src={require("./f6.png")}
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
            We at IEEE SRM SB bring to you a{" "}
            <b>
              <i> Crash Course on UI/UX </i>
            </b>{" "}
            and how you can use that, as a ladder for your success. <br />
            <b>
              <i>
                Paramjit Jolly, a BITS Pilani graduate, is currently working at
                Guavus-a Thales Company, as a Director Engineer.
              </i>
            </b>{" "}
            With over 19 years of experience, he has carefully climbed the
            ladder of success. With experience in several domains like{" "}
            <b>
              <i> Big Data, Network security, and UI/UX </i>
            </b>
            , he's worked with all the biggies in the Telecommunication
            industry. He's an active speaker in the Design and Development
            industry.
            <br /> Register now to learn, innovate, and apply all your
            creativity into brilliant streams, while learning from the best!
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center mb-5">
          <a
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAASycIa9UMjA1NE04NVVSM1lEMk5CU1JDMk0wSVdTUy4u"
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

export default Jolly;
