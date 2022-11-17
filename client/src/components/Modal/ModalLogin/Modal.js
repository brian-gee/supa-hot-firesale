import React from "react";
import Home from "../../../pages/Home";
import Login from "../../../pages/Login";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../../utils/GlobalState";
import { TOGGLE_MODAL } from "../../../utils/actions";
import "./ModalLogin.css";

export default function ModalLogin() {
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
                <button className="close-login-modal" onClick={toggleModal}>
                  <Link to="/" onClick={toggleModal}>
                    CLOSE
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
