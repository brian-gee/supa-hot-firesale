<<<<<<< HEAD
import React, { useState } from "react";
import Home from "../../../pages/Home";
import { Link } from "react-router-dom";
=======
import React from "react";
import Home from "../../../pages/Home";
>>>>>>> 234133f039bda8ebbb094bc3fd9dc4bb8e6365be
import Signup from "../../../pages/Signup";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../../utils/GlobalState";
import { TOGGLE_MODAL } from "../../../utils/actions";
import "./ModalSignup.css";

<<<<<<< HEAD
export default function ModalSignUp() {
  document.body.classList.add("active-modal");
=======
export default function ModalSignup() {
  const [state, dispatch] = useStoreContext();

  function toggleModal() {
    dispatch({ type: TOGGLE_MODAL });
  }
>>>>>>> 234133f039bda8ebbb094bc3fd9dc4bb8e6365be

  return (
    <div>
      <Home />
<<<<<<< HEAD
      {true && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <Signup />
=======
      {state.modalOpen ? null : (
        <div>
          <div className="modal">
            <div className="overlay">
              <div className="modal-content">
                <Signup />
                <button className="close-signupmodal" onClick={toggleModal}>
                  <Link to="/" onClick={toggleModal}>
                    CLOSE
                  </Link>
                </button>
              </div>
            </div>
>>>>>>> 234133f039bda8ebbb094bc3fd9dc4bb8e6365be
          </div>
          <button className="close-modal">
                <Link to="/">Close</Link>
              </button>
        </div>
      )}
<<<<<<< HEAD
    </>
=======
    </div>
>>>>>>> 234133f039bda8ebbb094bc3fd9dc4bb8e6365be
  );
}
