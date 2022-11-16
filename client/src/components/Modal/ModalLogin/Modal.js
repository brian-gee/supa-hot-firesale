import React, { useState } from "react";
import Home from "../../../pages/Home";
import Login from "../../../pages/Login";
import { useStoreContext } from "../../../utils/GlobalState";
import { TOGGLE_MODAL } from "../../../utils/actions";
import "./Modal.css";

export default function ModalLogin({ modalIsOn }) {
    // document.body.classList.add('active-modal')
    const [state, dispatch] = useStoreContext()

    function toggleModal() {
      dispatch({ type: TOGGLE_MODAL });
      document.body.classList.add('active-modal')
    }
  
  return (
      <Home />
      {state.modalOpen ? (
        <div className="modal">
          <div  className="overlay"></div>
          <div className="modal-content">
            <Login />
            <button className="close-modal" >
              CLOSE
            </button>
          </div>
        </div>
      ) : (null) }
  );
