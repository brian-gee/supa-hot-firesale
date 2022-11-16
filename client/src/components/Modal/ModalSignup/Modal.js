import React from "react";
import Home from "../../../pages/Home";
import Signup from "../../../pages/Signup";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../../utils/GlobalState";
import { TOGGLE_MODAL } from "../../../utils/actions";
import "./ModalSignup.css";

export default function ModalSignup() {
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
                <Signup />
                <button className="close-signupmodal" onClick={toggleModal}>
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
