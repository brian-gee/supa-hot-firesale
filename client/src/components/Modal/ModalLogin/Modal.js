import React from "react";
import Home from "../../../pages/Home";
import Login from "../../../pages/Login";
import { Link } from "react-router-dom";
<<<<<<< HEAD
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
=======
import { useStoreContext } from "../../../utils/GlobalState";
import { TOGGLE_MODAL } from "../../../utils/actions";
import "./ModalLogin.css";

export default function ModalLogin() {
  // document.body.classList.add('active-modal')
  const [state, dispatch] = useStoreContext();

  function toggleModal() {
    dispatch({ type: TOGGLE_MODAL });
  }

  return (
    <div>
      <Home />
      {state.modalOpen ? null : (
        <div>
          <div className="modal">
            <div className="overlay">
              <div className="modal-content">
                <Login />
                <button className="close-modal" onClick={toggleModal}>
                  <Link to="/" onClick={toggleModal}>CLOSE</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
>>>>>>> 234133f039bda8ebbb094bc3fd9dc4bb8e6365be
  );
}
