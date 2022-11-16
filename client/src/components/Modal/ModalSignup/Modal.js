import React, { useState } from "react";
import Home from "../../../pages/Home";
import { Link } from "react-router-dom";
import Signup from "../../../pages/Signup";
import "./Modal.css";

export default function ModalSignUp() {
  document.body.classList.add("active-modal");

  return (
    <>
      <Home />
      {true && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <Signup />
          </div>
          <button className="close-modal">
                <Link to="/">Close</Link>
              </button>
        </div>
      )}
    </>
  );
}
