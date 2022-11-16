import React, { useState} from "react";
import Home from "../../../pages/Home";

import Login from "../../../pages/Login";
import Signup from "../../../pages/Signup";
import "./Modal.css";

export default function ModalSignUp() {
  document.body.classList.add('active-modal')

  return (
    <>
      <Home />
      {true && (
        <div className="modal">
          <div  className="overlay"></div>
          <div className="modal-content">
            <Signup />
            <button className="close-modal" >
              CLOSE
            </button>
          </div>
        </div>
      )}
     
    </>
  );
}