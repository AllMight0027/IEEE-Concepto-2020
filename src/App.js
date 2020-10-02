import React, { useState, useEffect } from "react";

import "./App.css";
import Home from "./components/home/Home";
import Events from "./components/events/Events";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Steven from "./components/events/Steven";
import Nanda from "./components/events/Nanda";
import Pradeep from "./components/events/Pradeep";
import Dain from "./components/events/Dain";
import Rohit from "./components/events/Rohit";
import Jolly from "./components/events/Jolly";
import Ananya from "./components/events/Ananya";
import Shashi from "./components/events/Shashi";
import Rashmi from "./components/events/Rashmi";
import Anudeep from "./components/events/Anudeep";
import Arun from "./components/events/Arun";
import Rupesh from "./components/events/Rupesh";

function App() {
  const [modalShowing, setModalShowing] = useState("hide");
  const [modalDisplayCSS, setModalDisplayCSS] = useState("none");

  useEffect(() => {
    const visited = localStorage.getItem("visited");
    if (!visited) {
      localStorage.setItem("visited", true);
      setModalDisplayCSS("block");
      setTimeout(() => {
        setModalShowing("show");
      }, 500);
    }
  }, []);

  const handleModalClose = () => {
    setModalShowing("hide");
    setTimeout(() => {
      setModalDisplayCSS("none");
    }, 200);
  };

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/event" exact>
          <Events />
        </Route>
        <Route path="/Steven-Inouye" exact>
          <Steven />
        </Route>
        <Route path="/Deepesh-Nanda" exact>
          <Nanda />
        </Route>
        <Route path="/Pradeep-Kumar" exact>
          <Pradeep />
        </Route>
        <Route path="/Dain-Walker" exact>
          <Dain />
        </Route>
        <Route path="/Rohit-Ghosh" exact>
          <Rohit />
        </Route>
        <Route path="/Paramjit-Jolly" exact>
          <Jolly />
        </Route>
        <Route path="/Ananya-Chandra" exact>
          <Ananya />
        </Route>
        <Route path="/Shashi-Bhushan" exact>
          <Shashi />
        </Route>
        <Route path="/Rashmi-Phanishyaee" exact>
          <Rashmi />
        </Route>
        <Route path="/Anudeep-Ayyagari" exact>
          <Anudeep />
        </Route>
        <Route path="/Arun-Surendran" exact>
          <Arun />
        </Route>
        <Route path="/Rupesh-Saxena" exact>
          <Rupesh />
        </Route>
      </Switch>
      <div
        className={`modal fade ${modalShowing}`}
        tabindex="-1"
        style={{ display: modalDisplayCSS }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Get in touch!</h5>
              <button
                type="button"
                className="close"
                onClick={handleModalClose}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Join our Telegram channel to get the latest updates
            </div>
            <div className="modal-footer">
              <a
                type="button"
                className="btn btn-telegram"
                onClick={handleModalClose}
                href="http://t.me/concepto2020"
                target="_blank"
              >
                Join Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
