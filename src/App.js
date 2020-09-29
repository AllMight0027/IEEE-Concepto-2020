import React, { useState, useEffect } from "react";

import "./App.css";
import Home from "./components/home/Home";
import Events from "./components/events/Events";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
              Join our Discord server to get the latest updates
            </div>
            <div className="modal-footer">
              <a
                type="button"
                className="btn btn-telegram"
                onClick={handleModalClose}
                href="http://t.me/concepto2020"
                target="_blank"
              >
                Join Telegram Group
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
