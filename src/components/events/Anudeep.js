import React from "react";
import "./Events.css";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/navbar";

const Anudeep = () => {
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
              src={require("./f10.png")}
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
            To spark the light of creation 🔥, IEEE SRM SB brings to you an
            amazing talk on how to begin your journey in the world of{" "}
            <b>
              <i>UX Design</i>
            </b>
            in our flagship event CONCEPTO. <br />{" "}
            <b>
              <i>Anudeep Ayyagari is an experienced UX Designer at Amazon</i>
            </b>
            , proficient at Problem-solving, Design Strategy, Storyboarding,
            Project Management, and Leadership, putting these skills to the test
            in the fields of Interaction Design, Information Architecture &
            Wireframing, User Testing, Visual Design, User Stories and Flows.
            Apart from his impressive arsenal of skills, Anudeep also has a
            deep-rooted interest in Photography and Film Making. <br /> Register
            for our event CONCEPTO and tend to the fire of innovation that burns
            within you👨‍💻.
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

export default Anudeep;
