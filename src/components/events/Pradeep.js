import React from "react";
import "./Events.css";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/navbar";

const Pradeep = () => {
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
              src={require("./f3.png")}
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
            {/* Mr. Pradeep Kumar, an IIT - BHU Varanasi graduate, is currently holding the fort of Deputy Director General at Unique Identification Authority of India and is an IFS officer in the Department of Forests, Environment and Wildlife Management, Government of Sikkim. Completing professional courses from across the globe to working for the government since 1996, he has a lot of feathers in his cap of experience.
Register now to find your passion and ignite that spark to accomplish all that you've ever dreamt of. */}
            <b>
              <i>Mr. Pradeep Kumar</i>
            </b>{" "}
            , an IIT - BHU Varanasi graduate, is{" "}
            <b>
              <i>
                currently holding the fort of Deputy Director General at Unique
                Identification Authority of India and is an IFS officer in the
                Department of Forests, Environment and Wildlife Management,
                Government of Sikkim.
              </i>
            </b>{" "}
            <br />
            Completing professional courses from across the globe to working for
            the government since 1996, he has a lot of feathers in his cap of
            experience.
            <br />
            Register now to find your passion and ignite that spark to
            accomplish all that you've ever dreamt of.
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

export default Pradeep;
