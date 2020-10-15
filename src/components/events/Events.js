import React, { useState } from "react";
import "./Events.css";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/navbar";

const Events = () => {
  return (
    <div>
      <Navbar />
      <div className="container ">
        <div className="row">
          <div className="col-12 text-center" style={{ marginTop: "130px" }}>
            <h1 className="font-weight-bold">Events</h1>
          </div>
        </div>

        <a href="/Steven-Inouye" style={{ textDecoration: "none" }}>
          <div className="row mt-5">
            <div
              className="col-10 offset-1 border border-light daily"
              style={{ borderRadius: "8px" }}
            >
              <div className="row">
                <div className="col-md-2 text-center">
                  <img
                    src={require("./Steven.png")}
                    className="round-speaker ml-lg-5"
                  />
                </div>
                <div className="col-md-10 pl-md-5 text-center">
                  <h3 className="pt-md-3 mt-2 mt-md-0 font-weight-bold">
                    Learning How To Learn
                  </h3>
                  <h4>-Steven Inouye</h4>
                  <h6>SDE, Google California</h6>
                  {
                    <div className="row">
                      <div className="col-12 text-right">
                        <p style={{ marginRight: "-25px" }}>
                          Date- 26th October
                        </p>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/Deepesh-Nanda" style={{ textDecoration: "none" }}>
          <div className="row mt-5">
            <div
              className="col-10 offset-1 border border-light daily"
              style={{ borderRadius: "8px" }}
            >
              <div className="row">
                <div className="col-md-2 text-center">
                  <img
                    src={require("./circle-cropped.png")}
                    className="round-speaker ml-lg-5"
                  />
                </div>
                <div className="col-md-10 pl-md-5 pl-md-5 text-center">
                  <h3 className="pt-md-3 mt-2 mt-md-0 font-weight-bold">
                    Application Of Digital Technology For Thermal Power Plants
                  </h3>
                  <h4>-Deepesh Nanda</h4>
                  <h6>CEO, GE Gas Power</h6>
                  {
                    <div className="row">
                      <div className="col-12 text-right">
                        <p style={{ marginRight: "-25px" }}>
                          Date- 26th October
                        </p>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/Pradeep-Kumar" style={{ textDecoration: "none" }}>
          <div className="row mt-5">
            <div
              className="col-10 offset-1 border border-light daily"
              style={{ borderRadius: "8px" }}
            >
              <div className="row">
                <div className="col-md-2 text-center">
                  <img
                    src={require("./circle-cropped (1).png")}
                    className="round-speaker ml-lg-5"
                  />
                </div>
                <div className="col-md-10 pl-md-5 text-center">
                  <h3 className="pt-md-3 mt-2 mt-md-0 font-weight-bold">
                    Engineer To Civil Servant
                  </h3>
                  <h4>-Pradeep Kumar</h4>
                  <h6>IFS Officer</h6>
                  {
                    <div className="row">
                      <div className="col-12 text-right">
                        <p style={{ marginRight: "-25px" }}>
                          Date- 27th October
                        </p>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/Dain-Walker" style={{ textDecoration: "none" }}>
          <div className="row mt-5">
            <div
              className="col-10 offset-1 border border-light daily"
              style={{ borderRadius: "8px" }}
            >
              <div className="row">
                <div className="col-md-2 text-center">
                  <img
                    src={require("./circle-cropped (2).png")}
                    className="round-speaker ml-lg-5"
                  />
                </div>
                <div className="col-md-10 pl-md-5 text-center">
                  <h3 className="pt-md-3 mt-2 mt-md-0 font-weight-bold">
                    How To Brand Yourself
                  </h3>
                  <h4>-Dain Walker</h4>
                  <h6>Founder, Victory Front</h6>
                  {
                    <div className="row">
                      <div className="col-12 text-right">
                        <p style={{ marginRight: "-25px" }}>
                          Date- 27th October
                        </p>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/Rohit-Ghosh" style={{ textDecoration: "none" }}>
          <div className="row mt-5">
            <div
              className="col-10 offset-1 border border-light daily"
              style={{ borderRadius: "8px" }}
            >
              <div className="row">
                <div className="col-md-2 text-center">
                  <img
                    src={require("./circle-cropped (3).png")}
                    className="round-speaker ml-lg-5"
                  />
                </div>
                <div className="col-md-10 pl-md-5 text-center">
                  <h3 className="pt-md-3 mt-2 mt-md-0 font-weight-bold">
                    Application Of AI In Healthcare
                  </h3>
                  <h4>-Rohit Ghosh</h4>
                  <h6>Founder, Qure.ai</h6>
                  {
                    <div className="row">
                      <div className="col-12 text-right">
                        <p style={{ marginRight: "-25px" }}>
                          Date- 28th October
                        </p>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/Paramjit-Jolly" style={{ textDecoration: "none" }}>
          <div className="row mt-5">
            <div
              className="col-10 offset-1 border border-light daily"
              style={{ borderRadius: "8px" }}
            >
              <div className="row">
                <div className="col-md-2 text-center">
                  <img
                    src={require("./circle-cropped (4).png")}
                    className="round-speaker ml-lg-5"
                  />
                </div>
                <div className="col-md-10 pl-md-5 text-center">
                  <h3 className="pt-md-3 mt-2 mt-md-0 font-weight-bold">
                    Introduction To UX & UI Development For Big Data Analytics
                  </h3>
                  <h4>-Paramjit Jolly</h4>
                  <h6>Director Engineering, Guavus-a Thales Company</h6>
                  {
                    <div className="row">
                      <div className="col-12 text-right">
                        <p style={{ marginRight: "-25px" }}>
                          Date- 28th October
                        </p>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/Ananya-Chandra" style={{ textDecoration: "none" }}>
          <div className="row mt-5">
            <div
              className="col-10 offset-1 border border-light daily"
              style={{ borderRadius: "8px" }}
            >
              <div className="row">
                <div className="col-md-2 text-center">
                  <img
                    src={require("./circle-cropped (5).png")}
                    className="round-speaker ml-lg-5"
                  />
                </div>
                <div className="col-md-10 pl-md-5 text-center">
                  <h3 className="pt-md-3 mt-2 mt-md-0 font-weight-bold">
                    Secrets To Entrepreneurial Success
                  </h3>
                  <h4>-Ananya Chandra</h4>
                  <h6>CEO, Women Prosperity Lab</h6>
                  {
                    <div className="row">
                      <div className="col-12 text-right">
                        <p style={{ marginRight: "-25px" }}>
                          Date- 29th October
                        </p>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/Shashi-Bhushan" style={{ textDecoration: "none" }}>
          <div className="row mt-5">
            <div
              className="col-10 offset-1 border border-light daily"
              style={{ borderRadius: "8px" }}
            >
              <div className="row">
                <div className="col-md-2 text-center">
                  <img
                    src={require("./circle-cropped (6).png")}
                    className="round-speaker ml-lg-5"
                  />
                </div>
                <div className="col-md-10 pl-md-5 text-center">
                  <h3 className="pt-md-3 mt-2 mt-md-0 font-weight-bold">
                    DS and Algorithm, How To Crack Technical Interviews
                  </h3>
                  <h4>-Shashi Bhushan Kumar</h4>
                  <h6>Tech Lead, GeeksforGeeks</h6>
                  {
                    <div className="row">
                      <div className="col-12 text-right">
                        <p style={{ marginRight: "-25px" }}>
                          Date- 29th October
                        </p>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/Rashmi-Phanishyaee" style={{ textDecoration: "none" }}>
          <div className="row mt-5">
            <div
              className="col-10 offset-1 border border-light daily"
              style={{ borderRadius: "8px" }}
            >
              <div className="row">
                <div className="col-md-2 text-center">
                  <img
                    src={require("./circle-cropped (7).png")}
                    className="round-speaker ml-lg-5"
                  />
                </div>
                <div className="col-md-10 pl-md-5 text-center">
                  <h3 className="pt-md-3 mt-2 mt-md-0 font-weight-bold">
                    Business Intelligece
                  </h3>
                  <h4>-Rashmi Phanishyaee</h4>
                  <h6>Sr. Business Intelligence Associate, LinkedIn</h6>
                  {
                    <div className="row">
                      <div className="col-12 text-right">
                        <p style={{ marginRight: "-25px" }}>
                          Date- 30th October
                        </p>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/Anudeep-Ayyagari" style={{ textDecoration: "none" }}>
          <div className="row mt-5">
            <div
              className="col-10 offset-1 border border-light daily"
              style={{ borderRadius: "8px" }}
            >
              <div className="row">
                <div className="col-md-2 text-center">
                  <img
                    src={require("./circle-cropped (8).png")}
                    className="round-speaker ml-lg-5"
                  />
                </div>
                <div className="col-md-10 pl-md-5 text-center">
                  <h3 className="pt-md-3 mt-2 mt-md-0 font-weight-bold">
                    Careers in UX Design - Startups, Corporates and Freelancing
                  </h3>
                  <h4>-Anudeep Ayyagari</h4>
                  <h6>UX Designer, Amazon</h6>
                  {
                    <div className="row">
                      <div className="col-12 text-right">
                        <p style={{ marginRight: "-25px" }}>
                          Date- 30th October
                        </p>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/Arun-Surendran" style={{ textDecoration: "none" }}>
          <div className="row mt-5">
            <div
              className="col-10 offset-1 border border-light daily"
              style={{ borderRadius: "8px" }}
            >
              <div className="row">
                <div className="col-md-2 text-center">
                  <img
                    src={require("./circle-cropped (9).png")}
                    className="round-speaker ml-lg-5"
                  />
                </div>
                <div className="col-md-10 pl-md-5 text-center">
                  <h3 className="pt-md-3 mt-2 mt-md-0 font-weight-bold">
                    The Art Of Innovation And Post COVID Entreprenuership
                  </h3>
                  <h4>-Dr. Arun Surendran</h4>
                  <h6>Founder Director, Adcy.io</h6>
                  {
                    <div className="row">
                      <div className="col-12 text-right">
                        <p style={{ marginRight: "-25px" }}>
                          Date- 31st October
                        </p>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/Rupesh-Saxena" style={{ textDecoration: "none" }}>
          <div className="row mt-5">
            <div
              className="col-10 offset-1 border border-light daily"
              style={{ borderRadius: "8px" }}
            >
              <div className="row">
                <div className="col-md-2 text-center">
                  <img
                    src={require("./circle-cropped (10).png")}
                    className="round-speaker ml-lg-5"
                  />
                </div>
                <div className="col-md-10 pl-md-5 text-center">
                  <h3 className="pt-md-3 mt-2 mt-md-0 font-weight-bold">
                    IT Career In Investment Banking
                  </h3>
                  <h4>-Rupesh Saxena</h4>
                  <h6>Executive Director, Morgan Stanley</h6>
                  {
                    <div className="row">
                      <div className="col-12 text-right">
                        <p style={{ marginRight: "-25px" }}>
                          Date- 31st October
                        </p>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </a>

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

export default Events;
