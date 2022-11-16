import React, { useState } from "react";
import Home from "../../../pages/Home";
import Login from "../../../pages/Login";
import { Link } from "react-router-dom";
import "./Modal.css";

export default function ModalLogin() {
  document.body.classList.add("active-modal");

  return (
    <>
      <Home />
      {true && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <Login />
            <button className="close-modal-login">
              <Link to="/">Close</Link>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
