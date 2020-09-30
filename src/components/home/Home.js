import React, { useState } from "react";

import "./Home.css";
import Timer from "../timer/Timer";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container hero" id="home">
          <div className="timerr">
            <div className="row">
              <div className="col-12 d-flex justify-content-center">
                <img
                  src="./concepto.png"
                  className="d-none d-lg-block"
                  alt=""
                />
              </div>
              <div className="col-12 d-flex justify-content-center my-5">
                <Timer />
              </div>
              <div className="col-12 d-flex justify-content-center">
                <a href="#get-passes" className="pass">
                  Get your passes
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container about text-center px-4 mb-5" id="about">
          <h1 className="mb-5 font-weight-bold">About Concepto</h1>
          <p>
            Innovation is the change that unlocks new value. The crusade for
            innovation however is one that cannot be traversed alone. Sharing
            knowledge with the world is one of the cornerstones of innovation
            and this principle is realized with CONCEPTO. Learn from twelve
            speakers hailing from various industries such as General Electric,
            Amazon, Google, and Morgan Stanley, to name just a few. These
            speakers are some of the most experienced professionals in their
            field, a diverse panel of individuals indeed because knowledge
            shared should not be kept exclusive to a field and its people, but
            instead be within reach of all those who wish to pursue it.
          </p>
        </div>
        <div className="container speaker text-center px-4" id="speaker">
          <h1 className="mb-5 font-weight-bold">Speakers</h1>
          <div className="speakers-grid row py-5">
            <div className="col-12 col-lg-4 mb-5 speaker">
              <div className="speakers">
                <div className="speaker-img">
                  <img src={require("./without bg/Steven Inouye.png")} />
                </div>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/steveninouye/"
                >
                  <div className="speaker-details">
                    <div className="speaker-name">
                      <h4>Steven Inouye</h4>
                    </div>
                    <div className="speaker-desg">
                      <h6>SDE, Google California</h6>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-5 speaker">
              <div className="speakers">
                <div className="speaker-img">
                  <img src={require("./without bg/Deepesh Nanda.png")} />
                </div>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/kdeepeshnanda/"
                >
                  <div className="speaker-details">
                    <div className="speaker-name">
                      <h4>Deepesh Nanda</h4>
                    </div>
                    <div className="speaker-desg">
                      <h6>CEO, GE Gas Power</h6>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-5 speaker">
              <div className="speakers">
                <div className="speaker-img">
                  <img src={require("./without bg/Pradeep Kumar.png")} />
                </div>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/pradeep-kumar-7b136312/"
                >
                  <div className="speaker-details">
                    <div className="speaker-name">
                      <h4>Pradeep Kumar</h4>
                    </div>
                    <div className="speaker-desg">
                      <h6>IFS Officer</h6>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-5 speaker">
              <div className="speakers">
                <div className="speaker-img">
                  <img src={require("./without bg/dain walker.png")} />
                </div>
                <a
                  target="_blank"
                  href="https://instagram.com/dainwalker?igshid=2i4075xc8pz"
                >
                  <div className="speaker-details">
                    <div className="speaker-name">
                      <h4>Dain Walker</h4>
                    </div>
                    <div className="speaker-desg">
                      <h6>Founder, Victory Front</h6>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-5 speaker">
              <div className="speakers">
                <div className="speaker-img">
                  <img src={require("./without bg/Rohit Ghosh.png")} />
                </div>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/ghoshrohit"
                >
                  <div className="speaker-details">
                    <div className="speaker-name">
                      <h4>Rohit Ghosh</h4>
                    </div>
                    <div className="speaker-desg">
                      <h6>Founder, Qure.ai</h6>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-5 speaker">
              <div className="speakers">
                <div className="speaker-img">
                  <img src={require("./without bg/Paramjit Jolly.png")} />
                </div>
                <a target="_blank" href="https://www.linkedin.com/in/jolly">
                  <div className="speaker-details">
                    <div className="speaker-name">
                      <h4>Paramjit Jolly</h4>
                    </div>
                    <div className="speaker-desg">
                      <h6>Director Engineering, Guavus</h6>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-5 speaker">
              <div className="speakers">
                <div className="speaker-img">
                  <img src={require("./without bg/Ananya Chandra.png")} />
                </div>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/-ananyachandra"
                >
                  <div className="speaker-details">
                    <div className="speaker-name">
                      <h4>Ananya Chandra</h4>
                    </div>
                    <div className="speaker-desg">
                      <h6>CEO, Women Prosperity Lab</h6>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-5 speaker">
              <div className="speakers">
                <div className="speaker-img">
                  <img src={require("./without bg/Shashi Bhushan Kumar.png")} />
                </div>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/shashi-bhushan-coder"
                >
                  <div className="speaker-details">
                    <div className="speaker-name">
                      <h4>Shashi Bhushan </h4>
                    </div>
                    <div className="speaker-desg">
                      <h6>Tech Lead, GeeksForGeeks</h6>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-5 speaker">
              <div className="speakers">
                <div className="speaker-img">
                  <img src={require("./without bg/Rashmi Phanishyaee.png")} />
                </div>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/rashmiphanishyaee/"
                >
                  <div className="speaker-details">
                    <div
                      className="speaker-name"
                      style={{ marginBottom: "-8px" }}
                    >
                      <h4>Rashmi Phanishyaee</h4>
                    </div>
                    <div className="speaker-desg">
                      <h6>Sr. Business Intelligence Associate, LinkedIn</h6>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-5 speaker">
              <div className="speakers">
                <div className="speaker-img">
                  <img src={require("./without bg/Anudeep Ayyagiri.png")} />
                </div>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/anudeep108/"
                >
                  <div className="speaker-details">
                    <div className="speaker-name">
                      <h4>Anudeep Ayyagari</h4>
                    </div>
                    <div className="speaker-desg">
                      <h6>UX Designer, Amazon</h6>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-12 col-lg-4 mb-5 speaker">
              <div className="speakers">
                <div className="speaker-img">
                  <img src={require("./without bg/Dr. Arun Surendran.png")} />
                </div>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/arun-surendran-64510911 "
                >
                  <div className="speaker-details">
                    <div className="speaker-name">
                      <h4>Dr. Arun Surendran</h4>
                    </div>
                    <div className="speaker-desg">
                      <h6>Founder Director, Adcy.io</h6>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-5 speaker">
              <div className="speakers">
                <div className="speaker-img">
                  <img src={require("./without bg/Rupesh Saxena.png")} />
                </div>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/rupesh-saxena-860a1854/"
                >
                  <div className="speaker-details">
                    <div
                      className="speaker-name"
                      style={{ marginBottom: "-5px" }}
                    >
                      <h4>Rupesh Saxena</h4>
                    </div>
                    <div className="speaker-desg">
                      <h6>Executive Director, Morgan Stanley</h6>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container get-passes text-center px-4" id="get-passes">
          <h1 className="mb-5 font-weight-bold">Get your passes</h1>
          <div className="row">
            <div className="col-md text-center text-md-left">
              Innovation, Ideation and Creation, they are the three pillars of
              advancement. The quest for knowledge is crucial to actualizing
              these three pillars. To do this, knowledge should be shared. With
              the world, with anyone and everyone who might be on the same path
              as yourself. To make this ideology a reality, IEEE SRM SB
              introduce to you our flagship event CONCEPTO. <br />
              Learn from twelve brilliant speakers belonging to a diverse range
              of fields and industries such as Google and Morgan Stanley, to
              name just a few. Amass the knowledge that these Titans of
              experience and wisdom have to offer in their field, expand your
              horizons with a diverse panel of individuals. Embrace Erudition.{" "}
              <br />
              Pre-Book your seat at our event for free now and ensure that you
              do not miss out on this amazing opportunity, availing goodies from
              our sponsors in the process!
            </div>
            <div className="col-md get-passes-right">
              <div>
                <a
                  href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAASycIa9UNjJON0w0N0NaTldWVDlQUE5EMFlORzJIMi4u"
                  className="pass"
                  target="_blank"
                >
                  Pre book your passes
                </a>
              </div>
              <div>Pre book now for early bird perks!</div>
            </div>
          </div>
        </div>
        <div className="container sponsor text-center px-4">
          <div className="row">
            <div className="col-12">
              <h1 className="mb-5 font-weight-bold">Sponsors</h1>
            </div>

            <div className="col-12 mb-5">
              <a
                href="https://www.dennetworks.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img src={require("./DEN Logo.png")} className="sponsor-logo" />
              </a>
              <a
                href="http://www.custprint.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("./logo-home.png")}
                  className="sponsor-logo"
                />
              </a>
              <a
                href="https://iventorsinitiatives.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("./IVentors-Logo.png")}
                  className="sponsor-lg-logo"
                />
              </a>
            </div>
          </div>

          <button className="pass">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeRGp6GhgJdspfvYZVDLqUqyyK4kfdRVdCNTeGGVhdkGr0RwQ/viewform"
              target="_blank"
            >
              Become a Sponsor
            </a>
          </button>
        </div>
        <div className="container faq text-center px-4" id="faq">
          <h1 className="mb-5 font-weight-bold">FAQs</h1>
          <div class="accordion" id="accordionFaq">
            <div class="card">
              <div class="card-header" id="questionOne">
                <h2 class="mb-0">
                  <button
                    class="btn btn-block text-left"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    📅 When is the last day of registration?
                  </button>
                </h2>
              </div>

              <div
                id="collapseOne"
                class="collapse"
                aria-labelledby="questionOne"
                data-parent="#accordionFaq"
              >
                <div class="card-body text-left">
                  Applications close October 25th, 12:59 P.M. IST!
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="questionTwo">
                <h2 class="mb-0">
                  <button
                    class="btn btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    😵 Who is eligible to participate in CONCEPTO?
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="questionTwo"
                data-parent="#accordionFaq"
              >
                <div class="card-body text-left">
                  Any high school student, undergraduate student, graduate
                  student or a professional across India (and beyond) can
                  participate.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="questionThree">
                <h2 class="mb-0">
                  <button
                    class="btn btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    ⏳ When and where is CONCEPTO?
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="questionThree"
                data-parent="#accordionFaq"
              >
                <div class="card-body text-left">
                  CONCEPTO will be completely virtual - but don't worry, we have
                  a LOT of fun surprises planned! The event will be held from
                  October 26-31. Stay tuned for the schedule and speakers, to be
                  gradually revealed. 👀
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="questionFour">
                <h2 class="mb-0">
                  <button
                    class="btn btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    😎 Will there be anything for participants?
                  </button>
                </h2>
              </div>
              <div
                id="collapseFour"
                class="collapse"
                aria-labelledby="questionFour"
                data-parent="#accordionFaq"
              >
                <div class="card-body text-left">
                  Yes. Yes. Yes!!! EXPERIENCE. Since the event shall be held
                  virtual, we shall try our best to shoot the coupon codes from
                  our sponsors to your mail IDs.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="questionFive">
                <h2 class="mb-0">
                  <button
                    class="btn btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    😕 Why should I come to CONCEPTO?
                  </button>
                </h2>
              </div>
              <div
                id="collapseFive"
                class="collapse"
                aria-labelledby="questionFive"
                data-parent="#accordionFaq"
              >
                <div class="card-body text-left">
                  CONCEPTO has been crafted by a team of experienced people in
                  their own field. We aim to bring you the best possible
                  interactive session experience.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="questionSix">
                <h2 class="mb-0">
                  <button
                    class="btn btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    📋 Why is there an application?
                  </button>
                </h2>
              </div>
              <div
                id="collapseSix"
                class="collapse"
                aria-labelledby="questionSix"
                data-parent="#accordionFaq"
              >
                <div class="card-body text-left">
                  The application is short and crisp, we promise! We want to
                  streamline the flow for our team. Hence, pushing out invites
                  and coupons will be easy for us. Furthermore, it will help us
                  to avoid ROBOTS.
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header" id="questionSeven">
                <h2 class="mb-0">
                  <button
                    class="btn btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    🤑 I am interested in sponsoring CONCEPTO, who can I reach
                    out to?
                  </button>
                </h2>
              </div>
              <div
                id="collapseSeven"
                class="collapse"
                aria-labelledby="questionSeven"
                data-parent="#accordionFaq"
              >
                <div class="card-body text-left">
                  We're so excited to hear you're interested! Please click on
                  "Become a Sponsor" and fill out the small form. We'll get back
                  to you ASAP.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="questionEight">
                <h2 class="mb-0">
                  <button
                    class="btn btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseEight"
                    aria-expanded="false"
                    aria-controls="collapseEight"
                  >
                    📩 I have a question that's not here in the FAQ, what do I
                    do?
                  </button>
                </h2>
              </div>
              <div
                id="collapseEight"
                class="collapse"
                aria-labelledby="questionEight"
                data-parent="#accordionFaq"
              >
                <div class="card-body text-left">
                  Please email us at{" "}
                  <a href="mailto:ieee@srmist.edu.in">ieee@srmist.edu.in</a> and
                  we'll get back to you ASAP!
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default Home;
